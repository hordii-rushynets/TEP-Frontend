"use client";

import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { CompanyUrl } from "route-urls";

import { Disclosure, DisclosureItem } from "common/Disclosure";
import { Button, Container, Section, Title } from "common/ui";

export default function Conditions() {
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
                  <Title size={"base"}>Умови співпраці</Title>
                </div>
              }
            >
              <p>Умови співпраці</p>
            </DisclosureItem>
          </Disclosure>
          <div className={"mb-3.5 text-2xl font-bold"}>Зацікавились?</div>
          <p className={"mb-7 text-sm md:mb-12 lg:font-extralight"}>
            Якщо ви зацікавились в співпраці з ТЕП ви можете зв’язатись з нами з
            вашою пропозицією.
          </p>
          <Link href={CompanyUrl.getCooperationRequest()}>
            <Button
              fullWidth
              className={{ button: "sm:w-auto" }}
              colorVariant={"black"}
              size={"super-large"}
            >
              Залишити заявку
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
