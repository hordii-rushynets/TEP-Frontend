"use client"

import Image from "next/image";

import { Container, Section, Title } from "common/ui";

import MapIMG from "./static/ukraine.svg";
import { useLocalization } from "contexts/LocalizationContext";

export function Map() {
  const { staticData } = useLocalization();

  return (
    <Section>
      <Container>
        <div className={"py-12 md:pb-24"}>
          <Title className={"mb-6 text-3xl md:mb-3.5"}>{staticData.company.stores.map.text1}</Title>
          <p
            className={
              "mb-4 text-lg md:mb-7 md:text-sm lg:mb-12 lg:font-extralight"
            }
          >
            {staticData.company.stores.map.text2}
          </p>
          <div>
            <Image
              className={"mx-auto"}
              src={MapIMG}
              alt={"Map of Ukraine image"}
              sizes="100vw, 50vw, 33vw"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
