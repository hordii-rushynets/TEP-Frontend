"use client"

import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { Disclosure, DisclosureItem } from "common/Disclosure";
import { Container, Section, Title } from "common/ui";

import { info_links, servicesLinks } from "./_data";
import { useId } from "react";
import { useLocalization } from "contexts/LocalizationContext";

export default function InformationForBuyersPage() {
  const id = useId();
  const { staticData } = useLocalization();

  return (
    <Section>
      <Container>
        <div className={"mb-40 mt-12"}>
          <Title className={"mb-3.5 text-3xl"}>{staticData.info_for_buyers.text1}</Title>
          <p
            className={
              "mb-[72px] max-w-[704px] text-sm md:mb-[52px] lg:font-extralight"
            }
          >
            {staticData.info_for_buyers.text2}
          </p>
          <Disclosure>
            <DisclosureItem
                key={id}
                trigger={
                  <Title component={"h4"} size={"xl"}>
                    {"Послуги"}
                  </Title>
                }
              >
                <ul className={"flex flex-col gap-y-[18px]"}>
                  {servicesLinks.map((i, indx) => 
                    <li key={indx}>
                      <Link href={i.url} className={
                        "underline-offset-[3px] transition-colors hover:text-tep_blue-500 hover:underline"
                      }>{staticData.info_for_buyers.servicesLinks[indx]}
                      </Link>
                    </li>
                  )}
                </ul>
              </DisclosureItem>
            {info_links.map((link, Idx) => (
              <Link
                href={link.url}
                key={link.url}
                className={
                  "group flex items-center justify-between gap-x-4 py-6 pl-1 transition-colors duration-300 hover:text-tep_blue-400"
                }
              >
                <Title size={"xl"}>{staticData.info_for_buyers.info_links[Idx]}</Title>
                <FiArrowRight
                  className={
                    "size-6 transform transition-transform group-hover:-translate-x-2"
                  }
                />
              </Link>
            ))}
          </Disclosure>
        </div>
      </Container>
    </Section>
  );
}
