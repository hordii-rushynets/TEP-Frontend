"use client"

import Link from "next/link";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { MainUrl } from "route-urls";

import AnyQuestions from "common/AnyQuestions";
import { Disclosure } from "common/Disclosure";
import { Container, Section, Title } from "common/ui";
import { MainImageBlock } from "components/Company/MainImageBlock";
import ProductReturnMainIMG from "components/Info/static/product-return.jpg";
import { useLocalization } from "contexts/LocalizationContext";

export default function ProductReturnPage() {
  const { staticData } = useLocalization();

  return (
    <>
      <MainImageBlock
        image={ProductReturnMainIMG}
        title={staticData.info_for_buyers.productReturnPage.text1}
      />
      <Section className={"mt-24"}>
        <Container>
          <div>
            <Title className={"mb-3.5 text-3xl"}>{staticData.info_for_buyers.productReturnPage.text2}</Title>
            <p className={"mb-4 text-sm leading-normal lg:font-extralight"}>
            {staticData.info_for_buyers.productReturnPage.text3}
            </p>
            <Link
              href={MainUrl.getPrivacyPolicy()}
              className={
                "mb-10 inline-block text-sm font-semibold leading-normal underline-offset-2 hover:underline"
              }
            >
              {staticData.info_for_buyers.productReturnPage.text4}
            </Link>
            <Disclosure>
              <a
                href={"/static/return_form.pdf"}
                download={"Акт_заява_на_повернення_товару_інтернет_магазин_теп_docx.pdf"}
                className={
                  "group flex items-center justify-between gap-x-4 py-6 pl-1 transition-colors duration-300 hover:text-tep_blue-400"
                }
              >
                <FiExternalLink className={"size-6"} />
                <Title size={"xl"} className={"flex-1"}>
                {staticData.info_for_buyers.productReturnPage.text5}
                </Title>
                <FiArrowRight
                  className={
                    "size-6 transform transition-transform group-hover:-translate-x-2"
                  }
                />
              </a>
            </Disclosure>
          </div>
        </Container>
      </Section>
      <AnyQuestions
        hasBorder={false}
        title={staticData.info_for_buyers.productReturnPage.text6}
        buttonSize={"large"}
      />
    </>
  );
}
