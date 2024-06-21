"use client";

import { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MainUrl } from "route-urls";

import { HoverMenuCard } from "./HoverMenuCard";
import { HoverMenuTip } from "./HoverMenuTip";

import MainCompanyIMG from "./static/Logo.svg";
import GoodsLinksIMG from "./static/goods.jpg";

const baseInfo = {
  id: "",
  name: "/",
  title: "ТЕП",
  image: MainCompanyIMG,
  description: "Раді вітати Вас у ТЕП",
};
export type Category = {
  id: string;
  name: string;
  title: string;
  image: StaticImageData | string;
  description: string;
};

export const categories = [
  {
    id: "1",
    name: "pillows",
    title: "Подушки",
    image: GoodsLinksIMG,
    description:
      "Квадратні, прямокутні або подушки циліндричної форми — всі вони забезпечують оптимальну підтримку вашого тіла.",
  },
  {
    id: "2",
    name: "blankets",
    title: "Ковдри",

    image: GoodsLinksIMG,
    description:
      "Квадратні, прямокутні або подушки циліндричної форми — всі вони забезпечують оптимальну підтримку вашого тіла.",
  },
  {
    id: "3",
    name: "covered",
    title: "Покривала",
    image: GoodsLinksIMG,
    description:
      "Квадратні, прямокутні або подушки циліндричної форми — всі вони забезпечують оптимальну підтримку вашого тіла.",
  },
  {
    id: "4",
    name: "linens",
    title: "Постільна білизна",
    image: GoodsLinksIMG,
    description:
      "Квадратні, прямокутні або подушки циліндричної форми — всі вони забезпечують оптимальну підтримку вашого тіла.",
  },
  {
    id: "5",
    name: "toppers",
    title: "Наматрасники",
    image: GoodsLinksIMG,
    description:
      "Квадратні, прямокутні або подушки циліндричної форми — всі вони забезпечують оптимальну підтримку вашого тіла.",
  },
  {
    id: "6",
    name: "sheets",
    title: "Простирадла",
    image: GoodsLinksIMG,
    description:
      "Квадратні, прямокутні або подушки циліндричної форми — всі вони забезпечують оптимальну підтримку вашого тіла.",
  },
];

export function GoodsMenu() {
  const [cardInfo, setCardInfo] = useState(baseInfo);

  return (
    <HoverMenuTip
      onClose={() => setCardInfo(baseInfo)}
      label={"Товари"}
      url={MainUrl.getGoods()}
    >
      <div className={"flex basis-[345px] flex-col gap-y-4"}>
        {categories.map((category) => {
          return (
            <Link
              onMouseOver={() => setCardInfo(category)}
              key={category.id}
              href={`${MainUrl.getGoods()}/${category.name}`}
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
              id: "7",
              name: "sales",
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
