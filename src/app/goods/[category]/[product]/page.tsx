"use client";

import { Container, Section } from "common/ui";
import { InfoDisclosure } from "components/Goods/Product/InfoDisclosure";
import { InteriorLook } from "components/Goods/Product/InteriorLook";
import { PaymentDetails } from "components/Goods/Product/PaymentDetails";
import { SimilarGoods } from "components/Goods/Product/SimilarGoods";
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
import { FavouriteService } from "app/account/favourite/services";
import { useFavouriteContext } from "contexts/FavouriteContext";
import { FeedbackService } from "app/information-for-buyers/feedbacks/services";
import { Feedback } from "app/information-for-buyers/feedbacks/interfaces";
import NotFound from "app/not-found";
import { useCartContext } from "contexts/CartContext";

export default function ProductPage({searchParams, params}:{searchParams: SearchParams; params: { product: string }}) {

  const cartService = new CartService();
  const favouriteService = new FavouriteService();
  const feedbackService = new FeedbackService();
  const authContext = useAuth();

  const router = useRouter();
  const { setText, setIsOpen } = useNotificationContext();
  const { setIsOpen: setIsOpenC, setTitle: setTitleC } = useCartContext();
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
  const [IsFavourite, setIsFavourite] = useState(false);
  const { setIsOpen: setIsOpenF, setTitle: setTitleF } = useFavouriteContext();
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [notFound, setNotFound] = useState(false);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const productService = new ProductService();
    
    getProductInfo(params.product, authContext)
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
      setNotFound(true);
    })
    .then(data => {
      if (data !== undefined) {
        setProductVariants(data.product_variants);
        setProduct(data);
        setIsFavourite(data.is_favorite);
        productService.viewProduct(data.id);
        if (!searchParams.article) {
          router.push(`${pathname}?article=${data.product_variants[0].sku}`);
        }
      }
    });
  }, [refresh]);

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

    feedbackService.getFeedbacks({"product": productWithVariant?.slug || ""}, authContext).then(feedbacks => setFeedbacks(feedbacks));
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

  return !notFound ? (
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
              price={currentVariant?.promotion ? currentVariant.promo_price : currentVariant?.default_price || 0}
              sizes={sizes}
              title={currentVariant ? currentVariant[(`title_${staticData.backendPostfix}` || "title") as keyof ProductVariant].toString() : ""}
              count={count}
              setCount={setCount}
              images={[currentVariant?.main_image || ""].concat(currentVariant?.variant_images.map((image) => image.image) || [])}
              isInCart={currentVariant?.in_cart || false}
              isFavourite={IsFavourite}
              onCartClick={() => {
                if (!selectedColor || !selectedSize || !isAllFiltersChoosen()) {
                  setText(staticData.goods.productPage.chooseOptionsError);
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
                    setTitleC(currentVariant?.[`title_${localization}` as keyof ProductVariant] as string);
                    setIsOpenC(true);
                    setRefresh(!refresh);
                  }
                  else {
                    setText(staticData.goods.productPage.error);
                    setIsOpen(true)
                  }
                });
              }}
              onFavouriteClick={() => {
                favouriteService.markFavourite(productWithVariant?.id.toString() || "", !IsFavourite, authContext, ()=>{
                  setText(staticData.auth.notifications.unautorized);
                  setIsOpen(true);
                  router.push('/sign-in');
                }).then(()=>{
                  !IsFavourite && setTitleF(productWithVariant?.[`title_${localization}` as keyof ProductWithVariant] as string);
                  !IsFavourite && setIsOpenF(true);
                  setIsFavourite(!IsFavourite);
                });
              }}
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
                feedbacks={feedbacks.reverse()}
                dimensionalGrid={productWithVariant?.dimensional_grid || []}
                description={productWithVariant ? productWithVariant[(`description_${staticData.backendPostfix}` || "description") as keyof ProductWithVariant].toString() : ""}
              />
              <SimilarGoods product={productWithVariant}/>
              {productWithVariant?.images.length !== 0 && <InteriorLook images={productWithVariant?.images || []}/>}
            </div>
            <div className={"hidden md:block"}></div>
          </div>
        </Container>
      </Section>
      {productWithVariant && <RecommendedGoods className={"mb-40 lg:mb-64"} product_slug={productWithVariant?.slug}/>}
    </>
  ) : <NotFound />;
}
