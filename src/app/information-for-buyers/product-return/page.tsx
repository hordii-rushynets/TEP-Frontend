import Link from "next/link";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import { MainUrl } from "route-urls";

import AnyQuestions from "common/AnyQuestions";
import { Disclosure } from "common/Disclosure";
import { Container, Section, Title } from "common/ui";
import { MainImageBlock } from "components/Company/MainImageBlock";
import ProductReturnMainIMG from "components/Info/static/product-return.jpg";

export default function ProductReturnPage() {
  return (
    <>
      <MainImageBlock
        image={ProductReturnMainIMG}
        title={"Повернення товару"}
      />
      <Section className={"mt-24"}>
        <Container>
          <div>
            <Title className={"mb-3.5 text-3xl"}>Повернення</Title>
            <p className={"mb-4 text-sm leading-normal lg:font-extralight"}>
              Іноді ти можеш змінити думку. У тебе є 20 днів, щоб повернути
              товар. Зберігай чек, який підтверджує покупку.
            </p>
            <Link
              href={MainUrl.getProductReturnPolicy()}
              className={
                "mb-10 inline-block text-sm font-semibold leading-normal underline-offset-2 hover:underline"
              }
            >
              Політика повернення товарів
            </Link>
            <Disclosure>
              <Link
                href={MainUrl.getProductReturnForm()}
                className={
                  "group flex items-center justify-between gap-x-4 py-6 pl-1 transition-colors duration-300 hover:text-tep_blue-400"
                }
              >
                <FiExternalLink className={"size-6"} />
                <Title size={"xl"} className={"flex-1"}>
                  Акт (заява) на повернення
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
