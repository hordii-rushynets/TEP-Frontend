import Image from "next/image";
import Link from "next/link";
import { CompanyUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";

import MainIMG from "./static/main-bg.jpg";

export function Hero() {
  return (
    <Section className={"relative bg-black"}>
      <Image
        src={MainIMG}
        alt={"Main Background image"}
        fill
        className={"select-none object-cover opacity-85"}
        aria-hidden
      />
      <Container>
        <div
          className={
            "relative z-10 flex min-h-[80vh] flex-col items-center justify-center gap-y-7 md:min-h-[90vh]"
          }
        >
          <Title
            className={"text-center text-white"}
            component={"h1"}
            size={"5xl"}
          >
            Тепло твого дому із ТЕП
          </Title>
          <Link href={CompanyUrl.getAbout()}>
            <Button size={"large"} colorVariant={"white"}>
              Дізнайся більше
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
