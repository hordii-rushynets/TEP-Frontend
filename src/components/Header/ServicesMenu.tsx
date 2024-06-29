"use client";

import Link from "next/link";
import { useState } from "react";
import { MainUrl } from "route-urls";

import { HoverMenuCard } from "./HoverMenuCard";
import { HoverMenuTip } from "./HoverMenuTip";

import MainCompanyIMG from "./static/Logo.svg";
import ServicesIMG from "./static/info.jpg";

const baseInfo = {
  slug: "/",
  title: "ТЕП",
  image: MainCompanyIMG,
  description: "Раді вітати Вас у ТЕП",
};
export const servicesLinks = [
  {
    slug: "gifts",
    title: "Подарункові картки",
    image: ServicesIMG,
    description:
      "Ви можете придбати у нас подарункові карти, в якості подарунку на будь-яке ... ",
  },
  {
    slug: "delivery",
    title: "Послуги доставки",

    image: ServicesIMG,
    description:
      "Ви можете придбати у нас подарункові карти, в якості подарунку на будь-яке ... ",
  },
  {
    slug: "tracking",
    title: "Відстежити замовлення",
    image: ServicesIMG,
    description:
      "Ви можете придбати у нас подарункові карти, в якості подарунку на будь-яке ... ",
  },
];

export function ServicesMenu() {
  const [cardInfo, setCardInfo] = useState(baseInfo);

  return (
    <HoverMenuTip
      onClose={() => setCardInfo(baseInfo)}
      label={"Послуги"}
      url={MainUrl.getServices()}
    >
      <div className={"flex basis-[345px] flex-col gap-y-4"}>
        {servicesLinks.map((link) => {
          return (
            <Link
              onMouseOver={() => setCardInfo(link)}
              key={link.slug}
              href={`${MainUrl.getServices()}/${link.slug}`}
              className={
                "text-lg font-semibold transition-colors duration-200 hover:font-bold hover:text-tep_blue-500"
              }
            >
              {link.title}
            </Link>
          );
        })}
      </div>
      <div>
        <HoverMenuCard info={cardInfo} url={MainUrl.getServices()} />
      </div>
    </HoverMenuTip>
  );
}
