"use client";

import Link from "next/link";
import { useState } from "react";
import { MainUrl } from "route-urls";

import { HoverMenuCard } from "./HoverMenuCard";
import { HoverMenuTip } from "./HoverMenuTip";

import MainCompanyIMG from "./static/Logo.svg";
import InfoIMG from "./static/info.jpg";

const baseInfo = {
  slug: "/",
  title: "ТЕП",
  image: MainCompanyIMG,
  description: "Раді вітати Вас у ТЕП",
};
export const infoLinks = [
  {
    slug: "questions-and-answers",
    title: "Питання та відповіді",
    image: InfoIMG,
    description:
      "Тут ви зможете знайти усі відповіді на запитання або ж задати своє персоналізоване запитання ... ",
  },
  {
    slug: "product-return",
    title: "Повернення товару",

    image: InfoIMG,
    description:
      "Тут ви зможете знайти усі відповіді на запитання або ж задати своє персоналізоване запитання ... ",
  },
  {
    slug: "contact-us",
    title: "Зв’язатись з нами",
    image: InfoIMG,
    description:
      "Тут ви зможете знайти усі відповіді на запитання або ж задати своє персоналізоване запитання ... ",
  },
  {
    slug: "feedbacks",
    title: "Ваші відгуки",
    image: InfoIMG,
    description:
      "Тут ви зможете знайти усі відповіді на запитання або ж задати своє персоналізоване запитання ... ",
  },
  {
    slug: "care",
    title: "Догляд",
    image: InfoIMG,
    description:
      "Тут ви зможете знайти усі відповіді на запитання або ж задати своє персоналізоване запитання ... ",
  },
];

export function InfoMenu() {
  const [cardInfo, setCardInfo] = useState(baseInfo);

  return (
    <HoverMenuTip
      onClose={() => setCardInfo(baseInfo)}
      label={"Інформація для покупців"}
      url={MainUrl.getInfoForBuyers()}
    >
      <div className={"flex basis-[345px] flex-col gap-y-4"}>
        {infoLinks.map((link) => {
          return (
            <Link
              onMouseOver={() => setCardInfo(link)}
              key={link.slug}
              href={`${MainUrl.getInfoForBuyers()}/${link.slug}`}
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
        <HoverMenuCard info={cardInfo} url={MainUrl.getInfoForBuyers()} />
      </div>
    </HoverMenuTip>
  );
}
