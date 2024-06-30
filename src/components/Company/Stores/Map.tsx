import Image from "next/image";

import { Container, Section, Title } from "common/ui";

import MapIMG from "./static/ukraine.svg";

export function Map() {
  return (
    <Section>
      <Container>
        <div className={"py-12 md:pb-24"}>
          <Title className={"mb-6 text-3xl md:mb-3.5"}>Магазини ТЕП</Title>
          <p
            className={
              "mb-4 text-lg md:mb-7 md:text-sm lg:mb-12 lg:font-extralight"
            }
          >
            Ми починали як невелика чернівецька компанія, що відправляє поштою
            замовлення через каталог і стали одним із найбільш відомих в Україні
            брендів текстильних товарів. Сьогодні у різних країнах починають
            працювати магазини ТЕП, і ми плануємо збільшити цю кількість.
            Дізнайтесь більше про нашу захопливу історію – з самого початку до
            сьогодення.
          </p>
          <div>
            <Image
              className={"mx-auto"}
              src={MapIMG}
              alt={"Map of Ukraine image"}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
