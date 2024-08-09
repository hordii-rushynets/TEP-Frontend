"use client"

import Image from "next/image";
import Link from "next/link";

import { Button, Container, Section, Title } from "common/ui";

import WhantToBuyIMG from "./static/want-to-buy.jpg";
import { useLocalization } from "contexts/LocalizationContext";

export function WantToBuy() {
  const { staticData } = useLocalization();

  return (
    <Section className={"relative mb-24 lg:mb-40"}>
      <Container>
        <div
          className={
            "flex flex-col items-center justify-center py-24 text-center md:pb-28 md:pt-32 lg:py-[120px]"
          }
        >
          <Title className={"mb-3.5 text-3xl lg:text-[40px]"}>
            {staticData.services.wantToBuy.title}
          </Title>
          <p
            className={
              "mb-8 max-w-[582px] leading-normal md:mb-16 lg:font-extralight"
            }
          >
            {staticData.services.wantToBuy.description}
          </p>
          <Link href={"#gift-cards"}>
            <Button
              fullWidth
              className={{ button: "sm:w-auto" }}
              colorVariant={"black"}
              size={"super-large"}
            >
              {staticData.services.wantToBuy.button}
            </Button>
          </Link>
        </div>
      </Container>
      <Image
        src={WhantToBuyIMG}
        fill
        className={"-z-10 select-none object-cover"}
        aria-hidden
        alt={"Image"}
        sizes="100vw, 50vw, 33vw"
      />
    </Section>
  );
}
