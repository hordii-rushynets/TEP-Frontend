"use client";

import Link from "next/link";
import { useState } from "react";
import { MainUrl } from "route-urls";

import { HoverMenuCard } from "./HoverMenuCard";
import { HoverMenuTip } from "./HoverMenuTip";

import InfoIMG from "./static/info.jpg";
import { useLocalization } from "contexts/LocalizationContext";

const baseInfo = {
  slug: "/",
  image: InfoIMG,
};
export const infoLinks = [
  {
    slug: "questions-and-answers",
    image: InfoIMG,
  },
  {
    slug: "product-return",
    image: InfoIMG,
  },
  {
    slug: "contact-us",
    image: InfoIMG,
  },
  {
    slug: "feedbacks",
    image: InfoIMG,
  },
  {
    slug: "care",
    image: InfoIMG,
  },
];

export function InfoMenu() {
  const { staticData } = useLocalization();
  const [cardInfo, setCardInfo] = useState({
    slug: baseInfo.slug,
    image: baseInfo.image,
    title: staticData.header.infoBaseInfo.title,
    description: staticData.header.infoBaseInfo.description,
  });

  return (
    <HoverMenuTip
      onClose={() => setCardInfo({
        slug: baseInfo.slug,
        image: baseInfo.image,
        title: staticData.header.infoBaseInfo.title,
        description: staticData.header.infoBaseInfo.description,
      })}
      label={staticData.header.infoLabel}
      url={MainUrl.getInfoForBuyers()}
    >
      <div className={"flex basis-[345px] flex-col gap-y-4"}>
        {infoLinks.map((link, indx) => {
          return (
            <Link
              onMouseOver={() => setCardInfo({
                slug: link.slug,
                image: link.image,
                title: staticData.header.infoLinks[indx].title,
                description: staticData.header.infoLinks[indx].description
              })}
              key={link.slug}
              href={`${MainUrl.getInfoForBuyers()}/${link.slug}`}
              className={
                "text-lg font-semibold transition-colors duration-200 hover:font-bold hover:text-tep_blue-500"
              }
            >
              {staticData.header.infoLinks[indx].title}
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
