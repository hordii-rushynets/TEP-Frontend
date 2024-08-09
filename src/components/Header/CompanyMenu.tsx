"use client";

import Link from "next/link";
import { useState } from "react";
import { MainUrl } from "route-urls";

import { HoverMenuCard } from "./HoverMenuCard";
import { HoverMenuTip } from "./HoverMenuTip";

import CompanyLinksIMG from "./static/company.jpg";
import { StaticImageData } from "next/image";
import { useLocalization } from "contexts/LocalizationContext";

type BaseInfo = {
  slug: string;
  image: StaticImageData | string;
};

const baseInfo: BaseInfo = {
  slug: "/",
  image: CompanyLinksIMG,
};

export const companyLinks = [
  {
    slug: "about",
    image: CompanyLinksIMG,
  },
  {
    slug: "cooperation-and-partnership",
    image: CompanyLinksIMG,
  },
  {
    slug: "vacancies",
    image: CompanyLinksIMG,
  },
  {
    slug: "technologies",
    image: CompanyLinksIMG,
  },
  {
    slug: "blog",
    image: CompanyLinksIMG,
  },
];
export function CompanyMenu() {
  const { staticData } = useLocalization();
  const [cardInfo, setCardInfo] = useState({
    slug: baseInfo.slug,
    image: baseInfo.image,
    title: staticData.header.companyBaseInfo.title,
    description: staticData.header.companyBaseInfo.description,
  });

  return (
    <HoverMenuTip
      onClose={() => setCardInfo({
        slug: baseInfo.slug,
        image: baseInfo.image,
        title: staticData.header.companyBaseInfo.title,
        description: staticData.header.companyBaseInfo.description,
      })}
      label={staticData.header.companyLabel}
      url={MainUrl.getCompany()}
    >
      <div className={"flex basis-[345px] flex-col gap-y-4"}>
        {companyLinks.map((link, indx) => {
          return (
            <Link
              onMouseOver={() => setCardInfo({
                slug: link.slug,
                image: link.image,
                title: staticData.header.companyLinks[indx].title,
                description: staticData.header.companyLinks[indx].description
              })}
              key={link.slug}
              href={`${MainUrl.getCompany()}/${link.slug}`}
              className={
                "text-lg font-semibold transition-colors duration-200 hover:font-bold hover:text-tep_blue-500"
              }
            >
              {staticData.header.companyLinks[indx].title}
            </Link>
          );
        })}
      </div>
      <div>
        <HoverMenuCard info={{
          slug: baseInfo.slug,
          image: baseInfo.image,
          title: staticData.header.companyBaseInfo.title,
          description: staticData.header.companyBaseInfo.description,
        }} url={MainUrl.getCompany()} />
      </div>
    </HoverMenuTip>
  );
}
