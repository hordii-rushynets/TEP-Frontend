import Link from "next/link";
import { InfoUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";
import { MainImageBlock } from "components/Company/MainImageBlock";
import ContactUsIMG from "components/Info/static/contact-us.jpg";

export default function Page() {
  return (
    <>
      <MainImageBlock image={ContactUsIMG} title={"Зв’яжись з нами"} />
      <Section className={"mb-40 mt-24 lg:mb-64"}>
        <Container>
          <div className={"max-w-[615px] lg:max-w-[685px]"}>
            <div className={"mb-20 lg:mb-24"}>
              <Title component={"h5"} size={"xl"} className={"mb-3.5"}>
                Телефон
              </Title>
              <div
                className={"flex flex-col gap-y-6 text-sm lg:font-extralight"}
              >
                <p>
                  Бажаєш почути голос на іншому кінці слухавки? Ми допоможемо
                  тобі у будь-якій справі.
                </p>
                <p className={"mb-6"}>
                  Телефонуй{" "}
                  <Link
                    href={"tel:+380443910000"}
                    target={"_blank"}
                    className={
                      "underline-offset-[3px] transition-all hover:text-tep_blue-500 hover:underline"
                    }
                  >
                    +38 (044) 391-00-00
                  </Link>
                </p>
                <p>Вартість дзвінків згідно з тарифами твого оператора</p>
                <p>
                  Понеділок – Неділя
                  <br />
                  10:00 - 18:00
                </p>
              </div>
            </div>
            <div className={"mb-12"}>
              <Title component={"h5"} size={"xl"} className={"mb-3.5"}>
                Електронна пошта
              </Title>
              <div
                className={"flex flex-col gap-y-6 text-sm lg:font-extralight"}
              >
                <p>
                  Якщо тобі знадобиться допомога, напиши нам електронного листа
                  у будь-яку пору доби, і ми відповімо за першої ж нагоди.
                </p>
                <p>
                  Або напиши нам листа на адресу{" "}
                  <Link
                    href={"mailto:help@tep.ua"}
                    target={"_blank"}
                    className={
                      "underline-offset-[3px] transition-all hover:text-tep_blue-500 hover:underline"
                    }
                  >
                    help@tep.ua
                  </Link>
                </p>
              </div>
            </div>
            <Link
              className={"sm:inline-block"}
              href={InfoUrl.getContactUsRequest()}
            >
              <Button
                size={"super-large"}
                fullWidth
                className={"sm:w-auto"}
                colorVariant={"black"}
              >
                Залишити заявку
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
