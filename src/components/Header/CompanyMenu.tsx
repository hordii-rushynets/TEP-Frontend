"use client";

import Link from "next/link";
import { useState } from "react";
import { MainUrl } from "route-urls";

import { HoverMenuCard } from "./HoverMenuCard";
import { HoverMenuTip } from "./HoverMenuTip";

import MainCompanyIMG from "./static/Logo.svg";
import CompanyLinksIMG from "./static/goods.jpg";

const baseInfo = {
  id: "",
  name: "/",
  title: "ТЕП",
  image: MainCompanyIMG,
  description: "Раді вітати Вас у ТЕП",
};

export const companyLinks = [
  {
    id: "1",
    name: "about",
    title: "Про бренд ТЕП",
    image: CompanyLinksIMG,
    description:
      "Ми починали як невелика чернівецька компанія, що відправляє поштою замовлення через каталог ...",
  },
  {
    id: "2",
    name: "cooperation-and-partnership",
    title: "Співпраця та партнерство",

    image: CompanyLinksIMG,
    description:
      "Ми починали як невелика чернівецька компанія, що відправляє поштою замовлення через каталог ...",
  },
  {
    id: "3",
    name: "vacancies",
    title: "Робота в ТЕП",
    image: CompanyLinksIMG,
    description:
      "Ми починали як невелика чернівецька компанія, що відправляє поштою замовлення через каталог ...",
  },
  {
    id: "4",
    name: "technologies",
    title: "Технології",
    image: CompanyLinksIMG,
    description:
      "Ми починали як невелика чернівецька компанія, що відправляє поштою замовлення через каталог ...",
  },
  {
    id: "5",
    name: "blog",
    title: "Блог",
    image: CompanyLinksIMG,
    description:
      "Ми починали як невелика чернівецька компанія, що відправляє поштою замовлення через каталог ...",
  },
];
export function CompanyMenu() {
  const [cardInfo, setCardInfo] = useState(baseInfo);

  return (
    <HoverMenuTip
      onClose={() => setCardInfo(baseInfo)}
      label={"Компанія"}
      url={MainUrl.getCompany()}
    >
      <div className={"flex basis-[345px] flex-col gap-y-4"}>
        {companyLinks.map((link) => {
          return (
            <Link
              onMouseOver={() => setCardInfo(link)}
              key={link.id}
              href={`${MainUrl.getCompany()}/${link.name}`}
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
        <HoverMenuCard info={cardInfo} url={MainUrl.getCompany()} />
      </div>
    </HoverMenuTip>
  );
}
