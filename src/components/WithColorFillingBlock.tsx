import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { CompanyUrl } from "route-urls";
import { cn } from "utils/cn";

import { Button, Section, Title } from "common/ui";
import AboutTepBrandIMG from "components/Home/static/about-img.jpg";

export type WithColorFillingBlockProps = {
  title?: string;
  description?: string;
  image?: StaticImageData | string;
  link?: string;
  bgColor?: string;
};

export function WithColorFillingBlock({
  description = "ТЕП - це компанія з багаторічною історією, яка розробляє якісні текстильні товари по всій Україні...",
  image = AboutTepBrandIMG,
  link = CompanyUrl.getAbout(),
  title = "Про бренд ТЕП",
  bgColor = "bg-tep_blue-500",
}: WithColorFillingBlockProps) {
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
          <Title className={"mb-3.5"}>{title}</Title>
          <p className={"mb-12 max-w-[324px] font-light"}>{description}</p>
          <Link href={link}>
            <Button colorVariant={"white"} size={"large"}>
              Переглянути
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
