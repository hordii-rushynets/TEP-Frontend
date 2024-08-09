"use client"

import AnyQuestions from "common/AnyQuestions";
import { Container, Section, Title } from "common/ui";
import { MainImageBlock } from "components/Company/MainImageBlock";
import { NovaPost } from "components/Services/Delivery/NovaPost";
import DeliveryIMG from "components/Services/Delivery/static/delivery.jpg";
import { UkrPost } from "components/Services/Delivery/UkrPost";
import { useLocalization } from "contexts/LocalizationContext";

export default function Page() {
  const { staticData } = useLocalization();

  return (
    <>
      <MainImageBlock image={DeliveryIMG} title={staticData.services.deliveryPage.text1} />
      <Section>
        <Container>
          <div className={"pb-16 pt-24 md:pb-24"}>
            <Title className={"mb-6 text-3xl md:text-2xl"}>{staticData.services.deliveryPage.text2}</Title>
            <p
              className={
                "max-w-[613px] text-lg leading-normal md:text-sm lg:max-w-[812px] lg:font-extralight"
              }
            >
              {staticData.services.deliveryPage.text3}<br/>
              {staticData.services.deliveryPage.text4}<br/>
              {staticData.services.deliveryPage.text5}<br/>
              {staticData.services.deliveryPage.text6}<br/>
              {staticData.services.deliveryPage.text7}<br/>
            </p>
          </div>
        </Container>
      </Section>
      <NovaPost />
      <UkrPost />
      <AnyQuestions className={"lg:pb-40"} />
    </>
  );
}
