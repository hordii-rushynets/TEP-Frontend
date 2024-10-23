"use client"

import Image from "next/image";
import Link from "next/link";
import { ServicesUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";

import UkrLogo from "./static/ukr.png";
import UkrEnLogo from "./static/ukr_en.png";
import { useLocalization } from "contexts/LocalizationContext";

export function UkrPost() {
  const { staticData, localization } = useLocalization();

  return (
    <Section className={"mb-24 lg:mb-40"}>
      <Container>
        <div>
          <div className={"mb-14 max-w-[435px] lg:mb-[72px]"}>
            <Image
              src={localization === "en" ? UkrEnLogo : UkrLogo}
              alt={"Ukr post Logo"}
              className={" select-none"}
            />
          </div>
          <Title size={"2xl"} className={"mb-8"}>
            {staticData.services.ukrPost.text1}
          </Title>
          <div
            className={
              "mb-16 grid grid-cols-1 gap-x-6 gap-y-8 md:gap-y-14 lg:grid-cols-3"
            }
          >
            <div
              className={
                "flex max-w-[392px] flex-col gap-y-5 text-sm leading-normal lg:font-extralight"
              }
            >
              <Title
                component={"h6"}
                className={"text-sm md:text-sm lg:font-normal"}
              >
                {staticData.services.ukrPost.text2}
              </Title>
              <p>{staticData.services.ukrPost.text3}</p>
              <p>{staticData.services.ukrPost.text4}</p>
            </div>
            <div
              className={
                "flex max-w-[392px] flex-col gap-y-5 text-sm leading-normal lg:font-extralight"
              }
            >
              <Title
                component={"h6"}
                className={"text-sm md:text-sm lg:font-normal"}
              >
                {staticData.services.ukrPost.text5}
              </Title>
              <p>{staticData.services.ukrPost.text6}</p>
              <p>{staticData.services.ukrPost.text7}</p>
            </div>
          </div>
          <Link href={ServicesUrl.getTracking()} className={"sm:inline-block"}>
            <Button
              colorVariant={"black"}
              size={"super-large"}
              fullWidth
              className={{ button: "sm:w-auto" }}
            >
              {staticData.services.ukrPost.text8}
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
