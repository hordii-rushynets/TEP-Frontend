"use client"

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CompanyUrl } from "route-urls";
import { cn } from "utils/cn";

import { Button, Section, Title } from "common/ui";
import AboutTepBrandIMG from "components/Home/static/about-img.jpg";
import { useLocalization } from "contexts/LocalizationContext";

export type WithColorFillingBlockProps = {
  title?: string;
  description?: string;
  image?: StaticImageData | string;
  link?: string;
  bgColor?: string;
};

export function WithColorFillingBlock({
  description = "",
  image = AboutTepBrandIMG,
  link = CompanyUrl.getAbout(),
  title = "",
  bgColor = "bg-tep_blue-500",
}: WithColorFillingBlockProps) {
  const { staticData } = useLocalization();

  return (
    <Section className={"flex flex-col lg:flex-row"}>
      <div className={"relative h-[500px] lg:h-auto lg:basis-[58%]"}>
        <Image
          fill
          src={image}
          alt={"Background image"}
          className={"object-cover"}
          sizes="100vw, 50vw, 33vw"
        />
      </div>
      <div
        className={cn(
          "flex-1 py-[88px] text-white lg:pb-32 lg:pl-[86px] lg:pt-36",
          bgColor,
        )}
      >
        <div
          className={
            "flex flex-col items-center text-center lg:items-start lg:text-left"
          }
        >
          <Title className={"mb-3.5"}>{title !== "" ? title : staticData.withColorFillingBlock.title}</Title>
          <p className={"mb-12 max-w-[324px] font-light"}>{description !== "" ? description : staticData.withColorFillingBlock.description}</p>
          <Link href={link}>
            <Button colorVariant={"white"} size={"large"}>
              {staticData.withColorFillingBlock.buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
