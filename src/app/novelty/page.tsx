"use client"

import { isStr } from "utils/js-types";

import { PopularGoods } from "components/Goods/PopularGoods";
import ProductHeader from "components/Goods/ProductHeader";
import { Images } from "components/Novelty/Images";
import { NewGoods } from "components/Novelty/NewGoods";

import { Breadcrumbs } from "./Breadcrumbs";
import { useLocalization } from "contexts/LocalizationContext";
import { useAuth } from "contexts/AuthContext";
import { ProductService } from "app/goods/[category]/services";
import { useEffect, useState } from "react";
import { ProductToShow, ProductWithVariant } from "app/goods/[category]/page";

type SearchParams = {
  [key: string]: string | string[] | undefined;
};

export default function NoveltyPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { page } = searchParams;

  let activePageNum = 1;
  if (isStr(page) && !isNaN(parseInt(page))) activePageNum = parseInt(page);

  const { staticData } = useLocalization();
  const authContext = useAuth();
  const productService = new ProductService();
  const [products, setProducts] = useState<ProductToShow[]>([]);
  const [productsWithVariant, setProductsWithVariant] = useState<ProductWithVariant[]>([]);
  const [category, setCategory] = useState<string>("");
  const [blanket, setBlanket] = useState<ProductToShow>({} as ProductToShow);
  const [towel, setTowel] = useState<ProductToShow>({} as ProductToShow);
  const [isImagesSet, setIsImagesSet] = useState(false);

  useEffect(() => {
    productService.getNewProducts(staticData, category, authContext).then(result => {
      setProducts(result.productsToShow);
      setProductsWithVariant(result.productsWithVariant);
    });
  }, [category, staticData]);

  useEffect(() => {
    if (!isImagesSet && products.length !== 0) {
      setBlanket(products?.filter(product => product.category_slug === "blankets")[0] || products?.[0]);
      setTowel(products?.filter(product => product.category_slug === "towels")[0] || products?.[0]);
      setIsImagesSet(true);
    }
  }, [products]);

  return (
    <>
      <Breadcrumbs />
      <ProductHeader
        title={staticData.novelty.noveltyPage.title}
        description={
          staticData.novelty.noveltyPage.description
        }
      />
      <Images blanket={blanket} towel={towel}/>
      <NewGoods products={products} productsWithVariant={productsWithVariant} activePage={activePageNum} setCategory={setCategory} />
      <PopularGoods />
    </>
  );
}
