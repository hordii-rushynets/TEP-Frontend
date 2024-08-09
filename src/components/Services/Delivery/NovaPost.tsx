"use client"

import Image from "next/image";
import Link from "next/link";
import { ServicesUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";

import NovaLogo from "./static/nova.png";
import { useLocalization } from "contexts/LocalizationContext";

export function NovaPost() {
  const { staticData } = useLocalization();

  return (
    <Section className={"mb-24 lg:mb-40"}>
      <Container>
        <div>
          <div className={"mb-14 max-w-[435px] lg:mb-[72px]"}>
            <Image
              src={NovaLogo}
              alt={"Nova post Logo"}
              className={" select-none"}
            />
          </div>
          <Title size={"2xl"} className={"mb-8"}>
            {staticData.services.novaPost.text1}
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
                {staticData.services.novaPost.text2}
              </Title>
              <p>
              {staticData.services.novaPost.text3}
                <br />
                {staticData.services.novaPost.text4}
                <br />{staticData.services.novaPost.text5}
              </p>
              <p>{staticData.services.novaPost.text6}</p>
              <p>{staticData.services.novaPost.text7}</p>
              <p>{staticData.services.novaPost.text8}</p>
              <p>{staticData.services.novaPost.text9}</p>
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
                {staticData.services.novaPost.text10}
              </Title>
              <p>
              {staticData.services.novaPost.text11}
                <br />
                {staticData.services.novaPost.text12}
                <br />{staticData.services.novaPost.text13}
              </p>
              <p>{staticData.services.novaPost.text14}</p>
              <p>{staticData.services.novaPost.text15}</p>
              <p>{staticData.services.novaPost.text16}</p>
              <p>{staticData.services.novaPost.text17}</p>
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
                {staticData.services.novaPost.text18}
              </Title>
              <p>
              {staticData.services.novaPost.text19}
                <br />
                {staticData.services.novaPost.text20}
                <br />
                {staticData.services.novaPost.text21}
              </p>
              <p>
              {staticData.services.novaPost.text22}
                <br />
                {staticData.services.novaPost.text23}
                <br />
                {staticData.services.novaPost.text24}
              </p>
            </div>
          </div>
          <Link href={ServicesUrl.getTracking()} className={"sm:inline-block"}>
            <Button
              colorVariant={"black"}
              size={"super-large"}
              fullWidth
              className={{ button: "sm:w-auto" }}
            >
              {staticData.services.novaPost.text25}
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
