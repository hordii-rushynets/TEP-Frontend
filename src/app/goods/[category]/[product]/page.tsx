"use client";

import { Container, Section } from "common/ui";
import { InfoDisclosure } from "components/Goods/Product/InfoDisclosure";
import { InteriorLook } from "components/Goods/Product/InteriorLook";
import { PaymentDetails } from "components/Goods/Product/PaymentDetails";
import { SimilarGoods } from "components/Goods/Product/SimilarGoods";
import IMG1 from "components/Goods/Product/static/img1.jpg";
import IMG2 from "components/Goods/Product/static/img2.jpg";
import IMG3 from "components/Goods/Product/static/img3.jpg";
import IMG4 from "components/Goods/Product/static/img4.jpg";
import PinkIMG1 from "components/Goods/Product/static/pinkIMG1.jpg";
import PinkIMG2 from "components/Goods/Product/static/pinkIMG2.jpg";
import PinkIMG3 from "components/Goods/Product/static/pinkIMG3.jpg";
import { RecommendedGoods } from "components/Goods/RecommendedGoods";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useNotificationContext } from "contexts/NotificationContext";
import { ProductVariant, SearchParams, Color, ProductWithVariant, Size } from "../page";
import { VariantInfoDefault } from "../defaultValues"
import { useLocalization } from "contexts/LocalizationContext";
import { Category } from "contexts/CategoriesContext";
import { getProductInfo } from "daos/productDAO";
import { getUniqueColors, getUniqueSizes, findMatchingVariant, getUniqueFilters } from "services/productServices";
import { DynamicFilter, DynamicFilterField } from "components/Filters/ProductsFilters";
import { CartService } from "app/account/cart/services";
import { useAuth } from "contexts/AuthContext";
import { ProductService } from "../services";

export type Feedback = {
  title: string;
  description: string;
  rating: number;
};

const product = {
  id: "1",
  image: IMG1,
  article: "903.048.89",
  category: "pillows",
  colors: [
    {
      color: {
        label: "сірий",
        value: "gray",
        description:
          "Тому що сіре та біле підходить під все, а сердечок забагато не буває. Грайливий орнамент від лондонського дизайнера Ханни Вілкокс. Також є подушка і підковдра з таким же орнаментом.",
      },
      images: [IMG1, IMG2, IMG3, IMG4],
    },
    {
      color: {
        label: "рожевий",
        value: "pink",
        description:
          "Тому що сіре та біле підходить під все, а сердечок забагато не буває. Грайливий орнамент від лондонського дизайнера Ханни Вілкокс. Також є подушка і підковдра з таким же орнаментом.",
      },
      images: [PinkIMG1, PinkIMG2, PinkIMG3],
    },
  ],
  count: 1,
  price: 1099,
  title: "Подушка",
  sizes: ["50х50", "60х80", "80х120"],
  feedbacks: [
    {
      title: "Тарас Шевченко",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 5,
    },
    {
      title: "Тарас Шевченко",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 5,
    },
  ],
  isInStock: false,
  isFavourite: true,
  isInCart: true,
};

export default function ProductPage({searchParams, params}:{searchParams: SearchParams; params: { product: string }}) {
  const {
    article,
    category,
    feedbacks,
    id,
    price,
    title,
    isFavourite,
    isInCart,
  } = product;

  const cartService = new CartService();
  const authContext = useAuth();

  const router = useRouter();
  const { setText, setIsOpen } = useNotificationContext();
  const pathname = usePathname();
  const [productVariants, setProductVariants] = useState<ProductVariant[]>([]);
  const [productWithVariant, setProduct] = useState<ProductWithVariant>();
  const [currentVariant, setCurrentVariant] = useState<ProductVariant>();
  const [colors, setColors] = useState<Color[]>([{id: "", slug: "", title: "", title_en: "", title_uk: "", hex: ""} as Color]);
  const [sizes, setSizes] = useState<Size[]>([{id: "", slug: "", title: "", title_en: "", title_uk: ""} as Size]);
  const [filters, setFilters] = useState<DynamicFilter[]>([]);
  const { localization, staticData } = useLocalization();
  const [selectedColor, setSelectedColor] = useState<string>(""); 
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedFilters, setSelectedFilters] = useState<{[key: string]: string}>({});
  const [isCurrVariantFound, setIsCurrVariantFound] = useState(false); 
  const [count, setCount] = useState(1);

  useEffect(() => {
    const productService = new ProductService();
    
    getProductInfo(params.product)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
      return
    })
    .then(data => {
      setProductVariants(data.product_variants);
      setProduct(data);
      productService.viewProduct(data.id);
      if (!searchParams.article) {
        router.push(`${pathname}?article=${data.product_variants[0].sku}`);
      }
    });
  }, []);

  const setCurrVariant = () => {
    let currVar = findMatchingVariant(selectedColor, selectedSize, selectedFilters, productVariants, staticData, searchParams);
    if (currVar) {
      setCurrentVariant(currVar);
      setIsCurrVariantFound(true);
      router.push(`${pathname}?${new URLSearchParams({...searchParams, article: (currVar?.sku || "")}).toString()}`);
    }
    else {
      setIsCurrVariantFound(false);
    }
  }

  useEffect(setCurrVariant, [selectedColor, selectedSize, selectedFilters]);

  useEffect(() => {
    setCurrVariant();
    const uniqueColors = getUniqueColors(productVariants);
    uniqueColors.length !== 0 && setColors(uniqueColors);
    const uniqueSizes = getUniqueSizes(productVariants);
    uniqueSizes.length !== 0 && setSizes(uniqueSizes);
    const uniqueFilters = getUniqueFilters(productWithVariant?.category.filter || [], productVariants);
    uniqueFilters.length !== 0 && setFilters(uniqueFilters);

  }, [productVariants, searchParams.article]);

  const getFilterFieldIds = () => {
    const ids: number[] = [];

    filters.forEach(filter => {
      const selectedValue = selectedFilters[filter.id.toString()];
      if (selectedValue) {
        const matchingField = filter.filter_field.find(field => field[`value_${localization}` as keyof DynamicFilterField] === selectedValue);
        if (matchingField) {
          ids.push(matchingField.id);
        }
      }
    });

    return ids;
  };

  const isAllFiltersChoosen = (): boolean => {
    return filters.length === Object.keys(selectedFilters).length;
  }

  return (
    <>
      <Section>
        <Container>
          <div>
            <PaymentDetails
              id={productWithVariant?.id.toString() || ""}
              article={searchParams.article?.toString() || ""}
              category={productWithVariant?.category[(`title_${staticData.backendPostfix}` || "title") as keyof Category].toString() || ""}
              colors={colors}
              description={productWithVariant ? productWithVariant[(`description_${staticData.backendPostfix}` || "description") as keyof ProductWithVariant].toString() : ""}
              isInStock={currentVariant?.count && isCurrVariantFound ? true : false}
              price={currentVariant?.default_price || 0}
              sizes={sizes}
              title={currentVariant ? currentVariant[(`title_${staticData.backendPostfix}` || "title") as keyof ProductVariant].toString() : ""}
              count={count}
              setCount={setCount}
              images={[currentVariant?.main_image || ""].concat(currentVariant?.variant_images.map((image) => image.image) || [])}
              isInCart={isInCart}
              isFavourite={isFavourite}
              onCartClick={() => {
                if (!selectedColor || !selectedSize || !isAllFiltersChoosen()) {
                  setText("Виберіть характеристики продукту");
                  setIsOpen(true);
                  return
                }
                cartService.putItemInCart({
                  color_id: colors.find(color => color[`title_${localization}` as keyof Color] === selectedColor)?.id,
                  size_id: sizes.find(size => size[`title_${localization}` as keyof Size] === selectedSize)?.id,
                  material_id: currentVariant?.materials[0].id,
                  filter_field_ids: getFilterFieldIds(),
                  product_variants_id: currentVariant?.id,
                  quantity: count,
                }, authContext).then(response => {
                  if (response.status === 401) {
                    setText(staticData.auth.notifications.unautorized);
                    setIsOpen(true);
                    router.push('/sign-in');
                  }
                  if (response.ok) {
                    setText("Продукт додано до кошику!");
                    setIsOpen(true);
                  }
                });
              }}
              onFavouriteClick={() => {}}
              searchParams={searchParams}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              filters={filters}
              selectedFilters={selectedFilters || {}}
              setSelectedFilters={setSelectedFilters}
            />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className={"flex gap-x-6"}>
            <div className={"overflow-hidden md:grow-0 md:basis-[65%]"}>
              <InfoDisclosure
                info={currentVariant?.variant_info || VariantInfoDefault}
                feedbacks={feedbacks}
                description={productWithVariant ? productWithVariant[(`description_${staticData.backendPostfix}` || "description") as keyof ProductWithVariant].toString() : ""}
              />
              <SimilarGoods />
              <InteriorLook />
            </div>
            <div className={"hidden md:block"}></div>
          </div>
        </Container>
      </Section>
      <RecommendedGoods className={"mb-40 lg:mb-64"} />
    </>
  );
}
