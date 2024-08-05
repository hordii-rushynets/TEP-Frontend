"use client"

import { MainUrl, ServicesUrl } from "route-urls";

import { Container, Section, Title } from "common/ui";

import InfoCard from "../InfoCard";

import IMG1 from "./static/img1.png";
import IMG2 from "./static/img2.jpg";
import IMG3 from "./static/img3.jpg";
import { useLocalization } from "contexts/LocalizationContext";

export function MoreOffers() {
  const { staticData } = useLocalization();
  return (
    <Section className={"mb-24"}>
      <Container>
        <div>
          <Title className={"mb-7"}>{staticData.home.moreOffers.title}</Title>
          <div
            className={"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"}
          >
            <InfoCard
              url={ServicesUrl.getGifts()}
              title={staticData.home.moreOffers.infoTitle1}
              description={
                staticData.home.moreOffers.infoDescription1
              }
              bg={IMG1}
            />
            <InfoCard
              url={MainUrl.getGoods()}
              title={staticData.home.moreOffers.infoTitle2}
              description={
                staticData.home.moreOffers.infoDescription2
              }
              bg={IMG2}
            />
            <InfoCard
              url={ServicesUrl.getDelivery()}
              title={staticData.home.moreOffers.infoTitle3}
              description={
                staticData.home.moreOffers.infoDescription3
              }
              bg={IMG3}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
