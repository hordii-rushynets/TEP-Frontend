"use client";

import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { CompanyUrl } from "route-urls";

import { Disclosure, DisclosureItem } from "common/Disclosure";
import { Button, Container, Section, Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export default function Conditions() {
  const { staticData } = useLocalization();

  return (
    <Section>
      <Container>
        <div className={"pb-40 pt-24 lg:pb-64 lg:pt-40"}>
          <Disclosure className={"mb-10"}>
            <DisclosureItem
              className={{ triggerWrapper: "py-8" }}
              trigger={
                <div className={"flex items-center gap-x-4"}>
                  <FiExternalLink className={"size-6"} />
                  <Title size={"base"}>{staticData.company.cooperation.conditions.text1}</Title>
                </div>
              }
            >
              <p>{staticData.company.cooperation.conditions.text1}</p>
            </DisclosureItem>
          </Disclosure>
          <div className={"mb-3.5 text-2xl font-bold"}>{staticData.company.cooperation.conditions.text2}</div>
          <p className={"mb-7 text-sm md:mb-12 lg:font-extralight"}>
          {staticData.company.cooperation.conditions.text3}
          </p>
          <Link href={CompanyUrl.getCooperationRequest()}>
            <Button
              fullWidth
              className={{ button: "sm:w-auto" }}
              colorVariant={"black"}
              size={"super-large"}
            >
              {staticData.company.cooperation.conditions.text4}
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
