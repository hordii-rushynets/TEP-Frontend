"use client";

import Link from "next/link";
import { useState } from "react";
import { MainUrl } from "route-urls";

import { HoverMenuCard } from "./HoverMenuCard";
import { HoverMenuTip } from "./HoverMenuTip";

import MainCompanyIMG from "./static/Logo.svg";
import ServicesIMG from "./static/info.jpg";
import { useLocalization } from "contexts/LocalizationContext";

const baseInfo = {
  slug: "/",
  image: MainCompanyIMG,
};
export const servicesLinks = [
  {
    slug: "gifts",
    image: ServicesIMG,
  },
  {
    slug: "delivery",
    image: ServicesIMG,
  },
  {
    slug: "tracking",
    image: ServicesIMG,
  },
];

export function ServicesMenu() {
  const {staticData} = useLocalization();
  const [cardInfo, setCardInfo] = useState({
    slug: baseInfo.slug,
    image: baseInfo.image,
    title: staticData.header.serviceBaseInfo.title,
    description: staticData.header.serviceBaseInfo.description,
  });

  return (
    <HoverMenuTip
      onClose={() => setCardInfo({
        slug: baseInfo.slug,
        image: baseInfo.image,
        title: staticData.header.serviceBaseInfo.title,
        description: staticData.header.serviceBaseInfo.description,
      })}
      label={staticData.header.serviceLabel}
      url={MainUrl.getServices()}
    >
      <div className={"flex basis-[345px] flex-col gap-y-4"}>
        {servicesLinks.map((link, indx) => {
          return (
            <Link
              onMouseOver={() => setCardInfo({
                slug: link.slug,
                image: link.image,
                title: staticData.header.serviceLinks[indx].title,
                description: staticData.header.serviceLinks[indx].description
              })}
              key={link.slug}
              href={`${MainUrl.getServices()}/${link.slug}`}
              className={
                "text-lg font-semibold transition-colors duration-200 hover:font-bold hover:text-tep_blue-500"
              }
            >
              {staticData.header.serviceLinks[indx].title}
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
