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
  image: StaticImageData | string;
  details: {
    img: StaticImageData | string;
    description: string;
  }[];
};

export const technologies = [
  {
    id: "1",
    title: "Змішування наповнювачів",
    image: BlanketsIMG,
    details: [
      {
        img: DetailsIMG1,
        description:
          "Змішування наповнювачів – це чудова технологія, яка дозволяє виробляти різноманітні продукти, які б відповідали запитам споживачів.",
      },
      {
        img: DetailsIMG2,
        description:
          "Традиційні наповнювачі – це популярний вибір, але іноді для того, щоб зробити найкраще, варто поєднати кілька видів волокон. Наприклад, наповнювач з екстрактом алое роблять з синтетичного волокна, але натуральний екстракт має ряд переваг та особливостей. Також часто поєднують волокна бавовни з поліефірним силіконізованим: синтетичні надають міцності та значно краще тримають форму, а бавовна додає об’єму.",
      },
    ],
  },
  {
    id: "2",
    title: "Технологія, яка реалізується завдяки унікальній лінії укладки волокон",
    image: PillowsIMG,
    details: [
      {
        img: DetailsIMG1,
        description:
          "Наша особливість в перехрестному укладанні волокон. В той час у інших виробників - пряме накладання. Така технологія не дозволяє наповнювачу збиватись та рівномірно розприділяє його по площі. Це дозволяє прати наші вироби.",
      },
      {
        img: DetailsIMG2,
        description:
          "Механізм працює так: необроблене волокно (натуральне, штучне чи змішане) механічно «розчісують», щоб воно стало м’яким та пухнастим, а тоді машина рівномірно розподіляє наповнювач в, так звані, листи. Вони можуть бути різної товщини. Інші виробники часто вистилають наповнювач непрочесаними шарами , тому ковдра з такого наповнювача швидше збивається, стає тоншою в окремих місцях.",
      },
    ],
  },
  {
    id: "3",
    title: "Виробництво нетканих матеріалів",
    image: UltrasonicIMG,
    details: [
      {
        img: DetailsIMG1,
        description:
          "Балакком – це єдине в Україні виробництво, яке виготовляє широкий спектр синтепону (нетканий синтетичний матеріал з поліефірних волокон). Його вага варіюється від 65г/м2 до 1кг/м2.",
      },
      {
        img: DetailsIMG2,
        description: 
          "Механізм працює так: в машину завантажують поліефірні волокна, їх прочісують, щоб надати м’якості та пухкості, а тоді під впливом високих температур рівномірно викладають в шар синтепону і “випікають”, щоб скріпити волокна між собою. Вони можуть мати різну товщину та вагу (щільність).",
      }
    ],
  },
  {
    id: "4",
    title: "Ультразвук",
    image: FibersIMG,
    details: [
      {
        img: DetailsIMG1,
        description:
          "Ультразвукова спайка – це ще одна з технологій нашого виробництва. Суть полягає в тому, що візерунки на тканині створюються без прошивки нитками, а механізмом, який точково нагріває тканину до такої температури, що «виплавлює» візерунки.",
      },
      {
        img: DetailsIMG2,
        description:
          "Такий спосіб виконує як естетичну функцію, так і практичну. Наприклад, у декоративних подушках з велюру, ця спайка скріплює тонкий шар синтепону, який забезпечує м’якість зовнішнього чохла подушки. Також це значно міцніше, ніж нитки і не створює додаткових проблем.",
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
