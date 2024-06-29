"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import React, { useId } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FiPaperclip } from "react-icons/fi";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import {
  Button,
  FormRatingSelect,
  FormSelectInput,
  FormTextInput,
  Title,
} from "common/ui";
import { RatingStar } from "common/ui/icons/RatingStar";
import { CategoriesProvider, useCategories } from "contexts/CategoriesContext";

export const feedbackSchema = z.object({
  rating: z.number().min(1, "Оцініть товар від 1 до 5").default(0),
  fullname: z.string().default(""),
  email: z.string().email("Не коректна адреса електронної пошти").default(""),
  category: z.string().min(1, "Оберіть категорію").default(""),
  message: z.string().default(""),
});

type Form = z.infer<typeof feedbackSchema>;

export function FeedbackForm() {
  const router = useRouter();
  const pathname = usePathname();
  const id = useId();

  const form = useForm<Form>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: getDefaults(feedbackSchema),
  });
  function onSubmit(data: Form) {
    // TODO
    // ...
    data;

    form.reset();
    router.push(`${pathname}/success`);
  }

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
          <FormTextInput<Form>
            fieldName={"fullname"}
            label={"Ім’я"}
            placeholder={"Тарас Шевченко"}
          />
          <FormTextInput<Form>
            fieldName={"email"}
            label={"Пошта"}
            placeholder={"taras@gmail.com"}
          />
          <CategoriesProvider>
            <CategoriesFormSelect />
          </CategoriesProvider>
          <FormTextInput<Form>
            multiline
            fieldName={"message"}
            label={"Повідомлення *"}
            placeholder={"Не обов’язково *"}
          />
          {/* //TODO FileInput */}
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
            <input id={id} type={"file"} className={"hidden"} />
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
          label={"Товари"}
          display={"Обрати категорію"}
          options={categories.map((category) => ({
            value: category.slug,
            label: category.title_uk,
          }))}
        />
  );
} 