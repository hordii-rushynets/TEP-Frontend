"use client"

import Link from "next/link";
import { MainUrl, ServicesUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export function Confirmation() {
  const { staticData } = useLocalization();

  return (
    <Section>
      <Container>
        <div className={"pb-40 pt-24 md:pb-64 md:pt-40"}>
          <div
            className={
              "mx-auto flex max-w-[500px] flex-col items-center text-center"
            }
          >
            <Title className={"mb-3.5 text-3xl"}>{staticData.purchase.confirmation.text1}</Title>
            <p
              className={
                "mb-7 text-sm leading-normal md:mb-12 lg:font-extralight"
              }
            >
              {staticData.purchase.confirmation.text2}
            </p>
            <div
              className={
                "flex flex-col justify-center gap-x-4 gap-y-6 self-stretch md:flex-row"
              }
            >
              <Link href={ServicesUrl.getTracking()}>
                <Button colorVariant={"black"} fullWidth size={"large"}>
                {staticData.purchase.confirmation.text3}
                </Button>
              </Link>
              <Link href={MainUrl.getHome()}>
                <Button size={"large"} fullWidth>
                {staticData.purchase.confirmation.text4}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
