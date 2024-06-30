import Link from "next/link";
import { MainUrl, ServicesUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";

export function Confirmation() {
  return (
    <Section>
      <Container>
        <div className={"pb-40 pt-24 md:pb-64 md:pt-40"}>
          <div
            className={
              "mx-auto flex max-w-[500px] flex-col items-center text-center"
            }
          >
            <Title className={"mb-3.5 text-3xl"}>Замовлення оформлено</Title>
            <p
              className={
                "mb-7 text-sm leading-normal md:mb-12 lg:font-extralight"
              }
            >
              Ваше замовлення успішно оформлене! Очікуйте новин щодо доставки.
              Ви можете відсліткувати статус Вашого замовлення завдяки
              трекінг-номеру у розділі “Відтежити замовлення”
            </p>
            <div
              className={
                "flex flex-col justify-center gap-x-4 gap-y-6 self-stretch md:flex-row"
              }
            >
              <Link href={ServicesUrl.getTracking()}>
                <Button colorVariant={"black"} fullWidth size={"large"}>
                  Відстежити замовлення
                </Button>
              </Link>
              <Link href={MainUrl.getHome()}>
                <Button size={"large"} fullWidth>
                  На головну
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
