"use client"

import { isStr } from "utils/js-types";

import { PopularGoods } from "components/Goods/PopularGoods";
import ProductHeader from "components/Goods/ProductHeader";
import { Images } from "components/Novelty/Images";
import { NewGoods } from "components/Novelty/NewGoods";

import { Breadcrumbs } from "./Breadcrumbs";
import { useLocalization } from "contexts/LocalizationContext";

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

  return (
    <>
      <Breadcrumbs />
      <ProductHeader
        title={staticData.novelty.noveltyPage.title}
        description={
          staticData.novelty.noveltyPage.description
        }
      />
      <Images />
      <NewGoods activePage={activePageNum} />
      <PopularGoods />
    </>
  );
}
