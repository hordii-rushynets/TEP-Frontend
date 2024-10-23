"use client"

import { StaticImageData } from "next/image";
import { CompanyUrl } from "route-urls";

import { SimpleCard } from "common/Cards/SimpleCard";
import { Container, Section, Title } from "common/ui";

import BlanketsIMG from "./static/blankets.jpg";
import DetailsIMG1 from "./static/details/point1.jpg";
import DetailsIMG2 from "./static/details/point2.jpg";
import FibersIMG from "./static/fibers.jpg";
import PillowsIMG from "./static/pillows.jpg";
import UltrasonicIMG from "./static/ultrasonic.jpg";
import ToppersIMG from "./static/toppers.jpg";
import LinensIMG from "./static/linens.jpg";
import { useLocalization } from "contexts/LocalizationContext";

export type Technology = {
  id: string;
  image: StaticImageData | string;
  details: {
    img: StaticImageData | string;
  }[];
};

export const technologies = [
  {
    id: "1",
    image: BlanketsIMG,
    details: [
      {
        img: DetailsIMG1,
      },
      {
        img: DetailsIMG2,
      },
    ],
  },
  {
    id: "2",
    image: PillowsIMG,
    details: [
      {
        img: DetailsIMG1,
      },
      {
        img: DetailsIMG2,
      },
    ],
  },
  {
    id: "3",
    image: UltrasonicIMG,
    details: [
      {
        img: DetailsIMG1,
      },
      {
        img: DetailsIMG2,
      }
    ],
  },
  {
    id: "4",
    image: FibersIMG,
    details: [
      {
        img: DetailsIMG1,
      },
      {
        img: DetailsIMG2,
      },
    ],
  },
  {
    id: "5",
    image: ToppersIMG,
    details: [
      {
        img: DetailsIMG1,
      },
      {
        img: DetailsIMG2,
      },
    ],
  },
  {
    id: "6",
    image: LinensIMG,
    details: [
      {
        img: DetailsIMG1,
      },
      {
        img: DetailsIMG2,
      },
    ],
  },
];

export function Technologies() {
  const { staticData } = useLocalization();

  return (
    <Section className={"mb-40 mt-12"}>
      <Container>
        <Title className={"mb-3.5 text-3xl"}>{staticData.company.technologies.technologies.text1}</Title>
        <p
          className={
            "mb-5 max-w-[704px] text-sm md:mb-7 lg:mb-12 lg:font-extralight"
          }
        >
          {staticData.company.technologies.technologies.text2}
        </p>
        <div
          className={
            "grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 md:gap-y-11 lg:grid-cols-3 lg:gap-y-14"
          }
        >
          {technologies.map((tech, indx) => (
            <SimpleCard
              key={tech.id}
              title={staticData.company.technologies.technologies.data[indx].title}
              description={staticData.company.technologies.technologies.data[indx].details[0]}
              source={tech.image}
              url={``}
              isIcon={false}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
