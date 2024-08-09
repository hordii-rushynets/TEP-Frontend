"use client";

import Link from "next/link";
import { useState } from "react";
import { MainUrl } from "route-urls";

import { HoverMenuCard } from "./HoverMenuCard";
import { HoverMenuTip } from "./HoverMenuTip";
import { useCategories, Category } from 'contexts/CategoriesContext';

import GoodsLinksIMG from "./static/goods.jpg";
import { StaticImageData } from "next/image";
import { useLocalization } from "contexts/LocalizationContext";

type BaseInfo = {
  slug: string;
  image: StaticImageData | string;
};

const baseInfo = {
  slug: "/",
  image: GoodsLinksIMG,
};

export function GoodsMenu() {
  const { categories } = useCategories();
  const { staticData } = useLocalization();
  const [cardInfo, setCardInfo] = useState<{slug: string, image: string | StaticImageData; title: string; description: string}>({
    slug: baseInfo.slug,
    image: baseInfo.image,
    title: staticData.header.goodsBaseInfo.title,
    description: staticData.header.goodsBaseInfo.description,
  });

  return (
    <HoverMenuTip
      onClose={() => setCardInfo({
        slug: baseInfo.slug,
        image: baseInfo.image,
        title: staticData.header.goodsBaseInfo.title,
        description: staticData.header.goodsBaseInfo.description,
      })}
      label={staticData.header.goodsLabel}
      url={MainUrl.getGoods()}
    >
      <div className={"flex basis-[345px] flex-col gap-y-4"}>
        {categories.map((category: Category) => {
          return (
            <Link
              onMouseOver={() => setCardInfo({slug: category.slug, title: category.title, image: category.image, description: category.description})}
              key={category.slug}
              href={`${MainUrl.getGoods()}/${category.slug}`}
              className={
                "text-lg font-semibold transition-colors duration-200 hover:font-bold hover:text-tep_blue-500"
              }
            >
              {category.title}
            </Link>
          );
        })}
        <Link
          onMouseOver={() =>
            setCardInfo({
              slug: "sales",
              title: staticData.header.salesTitle,
              image: GoodsLinksIMG,
              description:
              staticData.header.salesDescription,
            })
          }
          href={MainUrl.getSales()}
          className={
            "text-lg font-semibold transition-colors duration-200 hover:font-bold hover:text-tep_blue-500"
          }
        >
          {staticData.header.salesTitle}
        </Link>
      </div>
      <div>
        <HoverMenuCard info={cardInfo} url={MainUrl.getGoods()} />
      </div>
    </HoverMenuTip>
  );
}
