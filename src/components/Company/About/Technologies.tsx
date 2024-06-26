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
            Balakkom використовує найсучасніші технології виробництва та забезпечує бренд ТЕП продуктами найвищої якості. До запатентованих технологій компанія відносить ефект мембрани в подушках та ковдрах, ультразвукова пайка для покривал, наповнювач Double Air для подушок та ковдр.{" "}
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
