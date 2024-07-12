import Image from "next/image";

import { Tip } from "common/Tip";
import { Container, Section, Title } from "common/ui";

import DesignIMG from "./static/design.jpg";

export default function Design() {
  return (
    <Section className={"mb-24 lg:mb-40"}>
      <Container>
        <Title size={"2xl"} className={"mb-11 md:mb-12"}>
          Дизайни для будь-якого інтер’єру
        </Title>
        <div className={"relative h-[500px] overflow-hidden rounded-3xl"}>
          <Image
            src={DesignIMG}
            alt={"Image"}
            fill
            className={"object-cover"}
            sizes="100vw, 50vw, 33vw"
          />
          <Tip
            product={{
              id: "1",
              category_slug: "pillows",
              category_title: "Pillows",
              title: "Velure",
              price: 1299,
              image: "",
            }}
            className={"absolute right-[20%] top-[40%]"}
          />
          <Tip
            product={{
              id: "1",
              category_slug: "pillows",
              category_title: "Pillows",
              title: "Velure",
              price: 1299,
              image: "",
            }}
            className={"absolute bottom-[10%] left-[20%]"}
          />
          <Tip
            product={{
              id: "1",
              category_slug: "pillows",
              category_title: "Pillows",
              title: "Velure",
              price: 1299,
              image: "",
            }}
            className={"absolute left-[50%] top-[45%]"}
          />
        </div>
      </Container>
    </Section>
  );
}
