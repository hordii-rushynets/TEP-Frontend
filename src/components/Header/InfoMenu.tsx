"use client";

import Link from "next/link";
import { useState } from "react";
import { MainUrl } from "route-urls";

import { HoverMenuCard } from "./HoverMenuCard";
import { HoverMenuTip } from "./HoverMenuTip";

import MainCompanyIMG from "./static/Logo.svg";
import InfoIMG from "./static/info.jpg";

const baseInfo = {
  id: "",
  name: "/",
  title: "ТЕП",
  image: MainCompanyIMG,
  description: "Раді вітати Вас у ТЕП",
};
export const infoLinks = [
  {
    id: "1",
    name: "questions-and-answers",
    title: "Питання та відповіді",
    image: InfoIMG,
    description:
      "Тут ви зможете знайти усі відповіді на запитання або ж задати своє персоналізоване запитання ... ",
  },
  {
    id: "2",
    name: "product-return",
    title: "Повернення товару",

    image: InfoIMG,
    description:
      "Тут ви зможете знайти усі відповіді на запитання або ж задати своє персоналізоване запитання ... ",
  },
  {
    id: "3",
    name: "contact-us",
    title: "Зв’язатись з нами",
    image: InfoIMG,
    description:
      "Тут ви зможете знайти усі відповіді на запитання або ж задати своє персоналізоване запитання ... ",
  },
  {
    id: "4",
    name: "feedbacks",
    title: "Ваші відгуки",
    image: InfoIMG,
    description:
      "Тут ви зможете знайти усі відповіді на запитання або ж задати своє персоналізоване запитання ... ",
  },
  {
    id: "5",
    name: "care",
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
              key={link.id}
              href={`${MainUrl.getInfoForBuyers()}/${link.name}`}
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
