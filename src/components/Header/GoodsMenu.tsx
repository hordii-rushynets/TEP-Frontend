"use client";

import Link from "next/link";
import { useState } from "react";
import { MainUrl } from "route-urls";

import { HoverMenuCard } from "./HoverMenuCard";
import { HoverMenuTip } from "./HoverMenuTip";
import { useCategories, Category } from 'contexts/CategoriesContext';

import MainCompanyIMG from "./static/Logo.svg";
import GoodsLinksIMG from "./static/goods.jpg";
import { StaticImageData } from "next/image";

type BaseInfo = {
  slug: string;
  title: string;
  image: StaticImageData | string;
  description: string;
};

const baseInfo: BaseInfo = {
  slug: "/",
  title: "Продукти",
  image: GoodsLinksIMG,
  description: "Раді вітати Вас у ТЕП",
};

export function GoodsMenu() {
  const [cardInfo, setCardInfo] = useState(baseInfo);

  const { categories } = useCategories();

  return (
    <HoverMenuTip
      onClose={() => setCardInfo(baseInfo)}
      label={"Товари"}
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
              title: "Акції",
              image: GoodsLinksIMG,
              description:
                "Квадратні, прямокутні або подушки циліндричної форми — всі вони забезпечують оптимальну підтримку вашого тіла.",
            })
          }
          href={MainUrl.getSales()}
          className={
            "text-lg font-semibold transition-colors duration-200 hover:font-bold hover:text-tep_blue-500"
          }
        >
          Акції
        </Link>
      </div>
      <div>
        <HoverMenuCard info={cardInfo} url={MainUrl.getGoods()} />
      </div>
    </HoverMenuTip>
  );
}
