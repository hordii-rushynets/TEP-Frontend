import Image from "next/image";
import Link from "next/link";
import { ServicesUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";

import NovaLogo from "./static/nova.png";

export function NovaPost() {
  return (
    <Section className={"mb-24 lg:mb-40"}>
      <Container>
        <div>
          <div className={"mb-14 max-w-[435px] lg:mb-[72px]"}>
            <Image
              src={NovaLogo}
              alt={"Nova post Logo"}
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
                Замовлення до 15 кг та певних розмірів*:
              </Title>
              <p>
                Доставка до дверей твого дому
                <br />
                Звичайний час доставки становить від 1 до 5 днів
                <br />З понеділка по суботу з 8:00 до 17:00
              </p>
              <p>Зона доставки №1 (Київ та Київська область) - 99 грн</p>
              <p>Зона доставки №2 - 149 грн</p>
              <p>Зона доставки №3 - 199 грн</p>
              <p>Зона доставки №4 - 299 грн</p>
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
                Замовлення від 15 до 30 кг та певних розмірів*:
              </Title>
              <p>
                Доставка до дверей твого дому
                <br />
                Звичайний час доставки становить від 1 до 5 днів
                <br />З понеділка по суботу з 8:00 до 17:00
              </p>
              <p>Зона доставки №1 (Київ та Київська область) - 149 грн</p>
              <p>Зона доставки №2 - 299 грн</p>
              <p>Зона доставки №3 - 399 грн</p>
              <p>Зона доставки №4 - 499 грн</p>
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
                Замовлення більше 30кг
              </Title>
              <p>
                Доставка до обраної кімнати**, вдома або на роботі
                <br />
                Дата та час доставки на твій вибір
                <br />
                Доставка здійснюється з понеділка по суботу з 8:00 до 17:00
              </p>
              <p>
                Ціна в межах міста Києва 699 грн
                <br />
                Ціна за межами Києва 1599 грн
                <br />
                Кожна додаткова тонна оплачується за ціною повної доставки
              </p>
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
