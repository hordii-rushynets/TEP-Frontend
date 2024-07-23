"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import React, { useId, useState, useEffect, ChangeEvent } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FiPaperclip } from "react-icons/fi";
import { getDefaults } from "utils/zod";
import { z } from "zod";

const APIurl = process.env.NEXT_PUBLIC_API_URL;

import {
  Button,
  FormRatingSelect,
  FormSelectInput,
  FormTextInput,
  Title,
} from "common/ui";
import { RatingStar } from "common/ui/icons/RatingStar";
import { useCategories } from "contexts/CategoriesContext";
import { ProductWithVariant } from "app/goods/[category]/page";
import { useLocalization } from "contexts/LocalizationContext";
import { FeedbackService } from "app/information-for-buyers/feedbacks/services";
import { useAuth } from "contexts/AuthContext";
import { AuthUrl } from "route-urls";
import { useNotificationContext } from "contexts/NotificationContext";
import { ImageSquare } from "common/ImageSquare";

export const feedbackSchema = z.object({
  rating: z.number().min(1, "Оцініть товар від 1 до 5").default(0),
  category: z.string().min(1, "Оберіть категорію").default(""),
  product: z.string().min(1, "Оберіть товар").default(""),
  message: z.string().default(""),
});

type Form = z.infer<typeof feedbackSchema>;

export function FeedbackForm() {
  const router = useRouter();
  const pathname = usePathname();
  const id = useId();
  const [products, setProducts] = useState<ProductWithVariant[]>([]);
  const feedbackService = new FeedbackService();
  const authContext = useAuth();
  const {setText, setIsOpen} = useNotificationContext();
  const [selectedFiles, setSelectedFiles] = useState<Array<File>>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(Array.from(event.target.files || []));
  };

  const form = useForm<Form>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: getDefaults(feedbackSchema),
  });

  function onSubmit(data: Form) {
    const dataToSend = new FormData();
    dataToSend.append("product_id", data.product);
    dataToSend.append("text", data.message);
    dataToSend.append("evaluation", data.rating.toString());
    dataToSend.append("feedback_images", new Blob(selectedFiles));
    
    feedbackService.postFeedback(dataToSend, authContext).then(success => {
      if (success) {
        form.reset();
        router.push(`${pathname}/success`);
      }
      else {
        setText("Будь ласка, увійдіть");
        setIsOpen(true);
        router.push(AuthUrl.getSignIn());
      }
    });
  }

  useEffect(() => {
    form.watch().category && fetch(`${APIurl}/api/store/products/?category_slug=${form.getValues().category}`).then(response => {
      if (response.ok) {
        return response.json()
      }
    }).then(data => {
      setProducts(data);
    })
  }, [form.watch().category]);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={"max-w-[600px]"}>
        <Title className={"mb-[62px] text-3xl"}>Залишити відгук</Title>
        <div className={"mb-[72px] flex flex-col gap-y-6 md:mb-24"}>
          <FormRatingSelect
            fieldName={"rating"}
            label={"Оцінка"}
            transition={"zoom"}
            spaceInside={"small"}
            spaceBetween={"small"}
            itemStyles={{
              itemShapes: RatingStar,
              activeFillColor: "#1D1D1D",
              itemStrokeWidth: 1,
              inactiveStrokeColor: "#1D1D1D",
            }}
          />
          <CategoriesFormSelect />
          <ProductsFormSelect products={products}/>
          <FormTextInput<Form>
            multiline
            fieldName={"message"}
            label={"Повідомлення *"}
            placeholder={"Не обов’язково *"}
          />
          <div className={"flex flex-wrap gap-2"}>
            {selectedFiles.map((file, Idx) => 
              <div key={Idx} className={"w-[118px]"}>
              <ImageSquare
                classes={{ wrapper: "rounded-2xl" }}
                source={URL.createObjectURL(file)}
              />
          </div>
          )}
          </div>
          <div className={"self-end"}>
            <label
              htmlFor={id}
              className={
                "inline-flex items-center gap-x-2 rounded-full border border-black bg-white px-6 py-3 text-black outline-none transition-colors hover:border-tep_blue-500  hover:text-tep_blue-500"
              }
            >
              <FiPaperclip className={"size-4"} />
              <span className={"text-sm font-bold"}>Файли</span>
            </label>
            <input id={id} type={"file"} className={"hidden"} multiple onChange={handleFileChange} accept={"image/jpeg,image/png"}/>
          </div>
        </div>
        <Button
          type={"submit"}
          size={"super-large"}
          colorVariant={"black"}
          fullWidth
          className={{ button: "sm:w-auto" }}
        >
          Надіслати
        </Button>
      </form>
    </FormProvider>
  );
}


const CategoriesFormSelect : React.FC = () => {
  const { categories } = useCategories();

  return (
      <FormSelectInput
          fieldName={"category"}
          label={"Категорія"}
          display={"Обрати категорію"}
          options={categories.map((category) => ({
            value: category.slug,
            label: category.title,
          }))}
        />
  );
} 

type ProductsFormSelectProps = {
  products: ProductWithVariant[];
}

const ProductsFormSelect : React.FC<ProductsFormSelectProps> = ({products}: ProductsFormSelectProps) => {
  const { localization } = useLocalization();

  return (
      <FormSelectInput
          fieldName={"product"}
          label={"Товари"}
          display={"Оберіть товар"}
          options={products.map((product) => ({
            value: product.id.toString(),
            label: product[`title_${localization}` as keyof ProductWithVariant] as string,
          }))}
        />
  );
} 