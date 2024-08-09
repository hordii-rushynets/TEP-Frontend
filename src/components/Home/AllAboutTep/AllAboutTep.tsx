"use client"

import { CompanyUrl } from "route-urls";

import { Container, Section, Title } from "common/ui";

import InfoCard from "../InfoCard";

import IMG1 from "./static/img1.jpg";
import IMG2 from "./static/img2.jpg";
import IMG3 from "./static/img3.jpg";
import { useLocalization } from "contexts/LocalizationContext";

export function AllAboutTep() {
  const { staticData } = useLocalization();
  return (
    <Section className={"mb-24"}>
      <Container>
        <div>
          <Title className={"mb-7"}>{staticData.home.allAboutTep.title}</Title>
          <div
            className={"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"}
          >
            <InfoCard
              url={CompanyUrl.getBlog()}
              title={staticData.home.allAboutTep.infoTitle1}
              description={
                staticData.home.allAboutTep.infoDescription1
              }
              bg={IMG1}
            />
            <InfoCard
              url={CompanyUrl.getCooperation()}
              title={staticData.home.allAboutTep.infoTitle2}
              description={
                staticData.home.allAboutTep.infoDescription2
              }
              bg={IMG2}
            />
            <InfoCard
              url={CompanyUrl.getVacancies()}
              title={staticData.home.allAboutTep.infoTitle3}
              description={
                staticData.home.allAboutTep.infoDescription3
              }
              bg={IMG3}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
