"use client"

import Link from "next/link";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { MainUrl } from "route-urls";

import AnyQuestions from "common/AnyQuestions";
import { Disclosure } from "common/Disclosure";
import { Container, Section, Title } from "common/ui";
import { MainImageBlock } from "components/Company/MainImageBlock";
import CareMainIMG from "components/Info/static/care.jpg";
import { useLocalization } from "contexts/LocalizationContext";

export default function CarePage() {
  const { staticData } = useLocalization();

  return (
    <>
      <MainImageBlock image={CareMainIMG} title={staticData.info_for_buyers.carePage.text1} />
      <Section className={"mt-24"}>
        <Container>
          <div>
            <Title className={"mb-3.5 text-3xl"}>{staticData.info_for_buyers.carePage.text2}</Title>
            <p
              className={
                "mb-5 max-w-[818px] text-sm leading-normal lg:mb-10 lg:font-extralight"
              }
            >
              {staticData.info_for_buyers.carePage.text3}
            </p>
            <Disclosure>
              <Link
                href={MainUrl.getCareRools()}
                className={
                  "group flex items-center justify-between gap-x-4 py-6 pl-1 transition-colors duration-300 hover:text-tep_blue-400"
                }
              >
                <FiExternalLink className={"size-6"} />
                <Title size={"xl"} className={"flex-1"}>
                {staticData.info_for_buyers.carePage.text4}
                </Title>
                <FiArrowRight
                  className={
                    "size-6 transform transition-transform group-hover:-translate-x-2"
                  }
                />
              </Link>
            </Disclosure>
          </div>
        </Container>
      </Section>
      <AnyQuestions
        hasBorder={false}
        title={staticData.info_for_buyers.carePage.text5}
        buttonSize={"large"}
      />
    </>
  );
}
