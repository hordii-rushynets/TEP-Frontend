import { StaticImageData } from "next/image";
import { CompanyUrl } from "route-urls";

import { SimpleCard } from "common/Cards/SimpleCard";
import { Container, Section, Title } from "common/ui";

import BlanketsIMG from "./static/blankets.jpg";
import DetailsIMG1 from "./static/details/point1.jpg";
import DetailsIMG2 from "./static/details/point2.jpg";
import DetailsIMG3 from "./static/details/point3.jpg";
import DetailsIMG4 from "./static/details/point4.jpg";
import FibersIMG from "./static/fibers.jpg";
import LinensIMG from "./static/linens.jpg";
import PillowsIMG from "./static/pillows.jpg";
import ToppersIMG from "./static/toppers.jpg";
import UltrasonicIMG from "./static/ultrasonic.jpg";

export type Technology = {
  id: string;
  title: string;
  description: string;
  image: StaticImageData | string;
  details: {
    img: StaticImageData | string;
    description: string;
  }[];
};

export const technologies = [
  {
    id: "1",
    title: "Технологія пошиття ковдр Membrana Print",
    image: BlanketsIMG,
    details: [
      {
        img: DetailsIMG1,
        description:
          "В спеціальні великі бункери вантажаться волокна, і виставляється необхідна процентне співвідношення: в один бункер - поліефірні волокна, в іншій - натуральні (в колекції Nature все ковдри шиються в співвідношенні: 70% натуральних волокон і 30% поліефірних).",
      },
      {
        img: DetailsIMG2,
        description:
          "В спеціальні великі бункери вантажаться волокна, і виставляється необхідна процентне співвідношення: в один бункер - поліефірні волокна, в іншій - натуральні (в колекції Nature все ковдри шиються в співвідношенні: 70% натуральних волокон і 30% поліефірних).",
      },
      {
        img: DetailsIMG3,
        description:
          "Волокна тоненько розстеляють і відправляють в багатоголкові машину для простьобування.",
      },
      {
        img: DetailsIMG4,
        description:
          "Після простьобування, спеціальною машинкою підрівнюють ковдру, закріплюють кінчики і готують до упаковки.",
      },
    ],
  },
  {
    id: "2",
    title: "Технологія пошиття подушок Membrana Print",
    image: PillowsIMG,
    details: [
      {
        img: DetailsIMG1,
        description:
          "В спеціальні великі бункери вантажаться волокна, і виставляється необхідна процентне співвідношення: в один бункер - поліефірні волокна, в іншій - натуральні (в колекції Nature все ковдри шиються в співвідношенні: 70% натуральних волокон і 30% поліефірних).",
      },
      {
        img: DetailsIMG2,
        description:
          "В спеціальні великі бункери вантажаться волокна, і виставляється необхідна процентне співвідношення: в один бункер - поліефірні волокна, в іншій - натуральні (в колекції Nature все ковдри шиються в співвідношенні: 70% натуральних волокон і 30% поліефірних).",
      },
      {
        img: DetailsIMG3,
        description:
          "Волокна тоненько розстеляють і відправляють в багатоголкові машину для простьобування.",
      },
    ],
  },
  {
    id: "3",
    title: "Технологія Ultrasonic",
    image: UltrasonicIMG,
    details: [
      {
        img: DetailsIMG1,
        description:
          "В спеціальні великі бункери вантажаться волокна, і виставляється необхідна процентне співвідношення: в один бункер - поліефірні волокна, в іншій - натуральні (в колекції Nature все ковдри шиються в співвідношенні: 70% натуральних волокон і 30% поліефірних).",
      },
    ],
  },
  {
    id: "4",
    title: "Технологія волокна Double Air/Quadra Air.",
    image: FibersIMG,
    details: [
      {
        img: DetailsIMG1,
        description:
          "В спеціальні великі бункери вантажаться волокна, і виставляється необхідна процентне співвідношення: в один бункер - поліефірні волокна, в іншій - натуральні (в колекції Nature все ковдри шиються в співвідношенні: 70% натуральних волокон і 30% поліефірних).",
      },
      {
        img: DetailsIMG2,
        description:
          "В спеціальні великі бункери вантажаться волокна, і виставляється необхідна процентне співвідношення: в один бункер - поліефірні волокна, в іншій - натуральні (в колекції Nature все ковдри шиються в співвідношенні: 70% натуральних волокон і 30% поліефірних).",
      },
    ],
  },
  {
    id: "5",
    title: "Технологія пошиття наматрацників",
    image: ToppersIMG,
    details: [
      {
        img: DetailsIMG1,
        description:
          "В спеціальні великі бункери вантажаться волокна, і виставляється необхідна процентне співвідношення: в один бункер - поліефірні волокна, в іншій - натуральні (в колекції Nature все ковдри шиються в співвідношенні: 70% натуральних волокон і 30% поліефірних).",
      },
      {
        img: DetailsIMG2,
        description:
          "В спеціальні великі бункери вантажаться волокна, і виставляється необхідна процентне співвідношення: в один бункер - поліефірні волокна, в іншій - натуральні (в колекції Nature все ковдри шиються в співвідношенні: 70% натуральних волокон і 30% поліефірних).",
      },
      {
        img: DetailsIMG3,
        description:
          "Волокна тоненько розстеляють і відправляють в багатоголкові машину для простьобування.",
      },
      {
        img: DetailsIMG4,
        description:
          "Після простьобування, спеціальною машинкою підрівнюють ковдру, закріплюють кінчики і готують до упаковки.",
      },
    ],
  },
  {
    id: "6",
    title: "Технологія пошиття постільної білизни",
    image: LinensIMG,
    details: [
      {
        img: DetailsIMG1,
        description:
          "В спеціальні великі бункери вантажаться волокна, і виставляється необхідна процентне співвідношення: в один бункер - поліефірні волокна, в іншій - натуральні (в колекції Nature все ковдри шиються в співвідношенні: 70% натуральних волокон і 30% поліефірних).",
      },
      {
        img: DetailsIMG2,
        description:
          "В спеціальні великі бункери вантажаться волокна, і виставляється необхідна процентне співвідношення: в один бункер - поліефірні волокна, в іншій - натуральні (в колекції Nature все ковдри шиються в співвідношенні: 70% натуральних волокон і 30% поліефірних).",
      },
      {
        img: DetailsIMG3,
        description:
          "Волокна тоненько розстеляють і відправляють в багатоголкові машину для простьобування.",
      },
      {
        img: DetailsIMG4,
        description:
          "Після простьобування, спеціальною машинкою підрівнюють ковдру, закріплюють кінчики і готують до упаковки.",
      },
      {
        img: DetailsIMG1,
        description:
          "Після простьобування, спеціальною машинкою підрівнюють ковдру, закріплюють кінчики і готують до упаковки.",
      },
    ],
  },
];

export function Technologies() {
  return (
    <Section className={"mb-40 mt-12"}>
      <Container>
        <Title className={"mb-3.5 text-3xl"}>Технології</Title>
        <p
          className={
            "mb-5 max-w-[704px] text-sm md:mb-7 lg:mb-12 lg:font-extralight"
          }
        >
          Перш, ніж потрапити до вас у будинок, текстильна продукція Balak Home
          проходить тривалий шлях від вибору кращих матеріалів для пошиття до
          упаковки готових виробів.
        </p>
        <div
          className={
            "grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 md:gap-y-11 lg:grid-cols-3 lg:gap-y-14"
          }
        >
          {technologies.map((tech) => (
            <SimpleCard
              key={tech.id}
              title={tech.title}
              source={tech.image}
              url={`${CompanyUrl.getTechnologies()}/${tech.id}`}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
