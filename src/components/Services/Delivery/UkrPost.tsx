import Image from "next/image";
import Link from "next/link";
import { ServicesUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";

import NovaLogo from "./static/nova.png";
import UkrLogo from "./static/ukr.png";

export function UkrPost() {
  return (
    <Section className={"mb-24 lg:mb-40"}>
      <Container>
        <div>
          <div className={"mb-14 max-w-[435px] lg:mb-[72px]"}>
            <Image
              src={UkrLogo}
              alt={"Ukr post Logo"}
              className={" select-none"}
            />
          </div>
          <Title size={"2xl"} className={"mb-8"}>
            Вартість послуг доставки:
          </Title>
          <div
            className={
              "mb-16 grid grid-cols-1 gap-x-6 gap-y-8 md:gap-y-14 lg:grid-cols-3"
            }
          >
            <div
              className={
                "flex max-w-[392px] flex-col gap-y-5 text-sm leading-normal lg:font-extralight"
              }
            >
              <Title
                component={"h6"}
                className={"text-sm md:text-sm lg:font-normal"}
              >
                Доставка «Укрпошта Стандарт»:
              </Title>
              <p>- у відділення — від 25 грн.</p>
              <p>- адресна доставка кур'єром — від 50 грн.</p>
            </div>
            <div
              className={
                "flex max-w-[392px] flex-col gap-y-5 text-sm leading-normal lg:font-extralight"
              }
            >
              <Title
                component={"h6"}
                className={"text-sm md:text-sm lg:font-normal"}
              >
                Доставка «Укрпошта Експрес»:
              </Title>
              <p>-  у відділення - від 35 грн.              </p>
              <p>- адресна доставка курʼєром - від 65 грн.</p>
            </div>
          </div>
          <Link href={ServicesUrl.getTracking()} className={"sm:inline-block"}>
            <Button
              colorVariant={"black"}
              size={"super-large"}
              fullWidth
              className={{ button: "sm:w-auto" }}
            >
              Відстежити замовлення
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
