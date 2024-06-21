import Link from "next/link";
import { CompanyUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";

export default function Technologies() {
  return (
    <Section className={"mb-40"}>
      <Container>
        <div>
          <Title className={"mb-6 text-3xl"}>Технології</Title>
          <p
            className={"mb-7 max-w-[517px] text-sm md:mb-8 lg:font-extralight"}
          >
            Ми починали як невелика чернівецька компанія, що відправляє поштою
            замовлення через каталог і стали одним із найбільш відомих в Україні
            брендів текстильних товарів. Сьогодні у різних країнах починають
            працювати магазини ТЕП, і ми плануємо збільшити цю кількість.{" "}
          </p>
          <Link href={CompanyUrl.getTechnologies()}>
            <Button
              fullWidth
              className={{ button: "sm:w-auto" }}
              colorVariant={"black"}
              size={"super-large"}
            >
              Дізнатись більше
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
