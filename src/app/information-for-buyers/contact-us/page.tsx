"use client"

import Link from "next/link";
import { InfoUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";
import { MainImageBlock } from "components/Company/MainImageBlock";
import ContactUsIMG from "components/Info/static/contact-us.jpg";
import { useLocalization } from "contexts/LocalizationContext";

export default function Page() {
  const { staticData } = useLocalization();

  return (
    <>
      <MainImageBlock image={ContactUsIMG} title={staticData.info_for_buyers.contactUsPage.text1} />
      <Section className={"mb-40 mt-24 lg:mb-64"}>
        <Container>
          <div className={"max-w-[615px] lg:max-w-[685px]"}>
            <div className={"mb-20 lg:mb-24"}>
              <Title component={"h5"} size={"xl"} className={"mb-3.5"}>
              {staticData.info_for_buyers.contactUsPage.text2}
              </Title>
              <div
                className={"flex flex-col gap-y-6 text-sm lg:font-extralight"}
              >
                <p>
                {staticData.info_for_buyers.contactUsPage.text3}
                </p>
                <p className={"mb-6"}>
                {staticData.info_for_buyers.contactUsPage.text4}{" "}
                  <Link
                    href={"tel:+380443910000"}
                    target={"_blank"}
                    className={
                      "underline-offset-[3px] transition-all hover:text-tep_blue-500 hover:underline"
                    }
                  >
                    {staticData.info_for_buyers.contactUsPage.text5}
                  </Link>
                </p>
                <p>{staticData.info_for_buyers.contactUsPage.text6}</p>
                <p>
                {staticData.info_for_buyers.contactUsPage.text7}
                  <br />
                  {staticData.info_for_buyers.contactUsPage.text8}
                </p>
              </div>
            </div>
            <div className={"mb-12"}>
              <Title component={"h5"} size={"xl"} className={"mb-3.5"}>
              {staticData.info_for_buyers.contactUsPage.text9}
              </Title>
              <div
                className={"flex flex-col gap-y-6 text-sm lg:font-extralight"}
              >
                <p>
                {staticData.info_for_buyers.contactUsPage.text10}
                </p>
                <p>
                {staticData.info_for_buyers.contactUsPage.text11}{" "}
                  <Link
                    href={"mailto:info@tep.ua"}
                    target={"_blank"}
                    className={
                      "underline-offset-[3px] transition-all hover:text-tep_blue-500 hover:underline"
                    }
                  >
                    {staticData.info_for_buyers.contactUsPage.text12}
                  </Link>
                </p>
              </div>
            </div>
            <Link
              className={"sm:inline-block"}
              href={InfoUrl.getContactUsRequest()}
            >
              <Button
                size={"super-large"}
                fullWidth
                className={"sm:w-auto"}
                colorVariant={"black"}
              >
                {staticData.info_for_buyers.contactUsPage.text13}
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
