"use client";

import Link from "next/link";
import { useState } from "react";
import { MainUrl } from "route-urls";

import { HoverMenuCard } from "./HoverMenuCard";
import { HoverMenuTip } from "./HoverMenuTip";

import MainCompanyIMG from "./static/Logo.svg";
import CompanyLinksIMG from "./static/goods.jpg";

const baseInfo = {
  slug: "/",
  title: "ТЕП",
  image: MainCompanyIMG,
  description: "Раді вітати Вас у ТЕП",
};

export const companyLinks = [
  {
    slug: "about",
    title: "Про бренд ТЕП",
    image: CompanyLinksIMG,
    description:
      "Ми починали як невелика чернівецька компанія, що відправляє поштою замовлення через каталог ...",
  },
  {
    slug: "cooperation-and-partnership",
    title: "Співпраця та партнерство",

    image: CompanyLinksIMG,
    description:
      "Ми починали як невелика чернівецька компанія, що відправляє поштою замовлення через каталог ...",
  },
  {
    slug: "vacancies",
    title: "Робота в ТЕП",
    image: CompanyLinksIMG,
    description:
      "Ми починали як невелика чернівецька компанія, що відправляє поштою замовлення через каталог ...",
  },
  {
    slug: "technologies",
    title: "Технології",
    image: CompanyLinksIMG,
    description:
      "Ми починали як невелика чернівецька компанія, що відправляє поштою замовлення через каталог ...",
  },
  {
    slug: "blog",
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
              key={link.slug}
              href={`${MainUrl.getCompany()}/${link.slug}`}
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
