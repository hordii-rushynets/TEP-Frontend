import Link from "next/link";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { MainUrl } from "route-urls";

import AnyQuestions from "common/AnyQuestions";
import { Disclosure } from "common/Disclosure";
import { Container, Section, Title } from "common/ui";
import { MainImageBlock } from "components/Company/MainImageBlock";
import CareMainIMG from "components/Info/static/care.jpg";

export default function CarePage() {
  return (
    <>
      <MainImageBlock image={CareMainIMG} title={"Догляд за продукцією"} />
      <Section className={"mt-24"}>
        <Container>
          <div>
            <Title className={"mb-3.5 text-3xl"}>Догляд</Title>
            <p
              className={
                "mb-5 max-w-[818px] text-sm leading-normal lg:mb-10 lg:font-extralight"
              }
            >
              Сон займає близько третини тривалості життя людини.
              Ваше ліжко – це храм домашнього спокою, і щоб цей
              храм був гармонійний, дарував якісний відпочинок та
              лише примножував здоров'я, а не відбавляв його, варто
              знати як правильно підтримувати гігієну домашнього
              текстилю.
              Оскільки різноманіття тканин та наповнювачів велике,
              можна легко заплутатись. Ми створили цей гайд, щоб
              допомогти вам зорієнтуватися в темі догляду та
              зрозуміти, що все не так складно, як може здаватись, на
              перший погляд!
            </p>
            <Disclosure>
              <Link
                href={"https://drive.google.com/uc?export=download&id=1QzmZjhzr28qjwSKMZygLjSlUMyGLYpkc"}
                className={
                  "group flex items-center justify-between gap-x-4 py-6 pl-1 transition-colors duration-300 hover:text-tep_blue-400"
                }
              >
                <FiExternalLink className={"size-6"} />
                <Title size={"xl"} className={"flex-1"}>
                  Правила догляду
                </Title>
                <FiArrowRight
                  className={
                    "size-6 transform transition-transform group-hover:-translate-x-2"
                  }
                />
              </Link>
            </Disclosure>
          </div>
        </Container>
      </Section>
      <AnyQuestions
        hasBorder={false}
        title={"З’явились запитання?"}
        buttonSize={"large"}
      />
    </>
  );
}
