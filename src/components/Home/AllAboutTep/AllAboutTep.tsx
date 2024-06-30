import { CompanyUrl } from "route-urls";

import { Container, Section, Title } from "common/ui";

import InfoCard from "../InfoCard";

import IMG1 from "./static/img1.jpg";
import IMG2 from "./static/img2.jpg";
import IMG3 from "./static/img3.jpg";

export function AllAboutTep() {
  return (
    <Section className={"mb-24"}>
      <Container>
        <div>
          <Title className={"mb-7"}>Все про ТЕП</Title>
          <div
            className={"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"}
          >
            <InfoCard
              url={CompanyUrl.getBlog()}
              title={"Блог"}
              description={
                "Тут в нас зібрані статті присвячені про роботу в ТЕП, наші товари і..."
              }
              bg={IMG1}
            />
            <InfoCard
              url={CompanyUrl.getCooperation()}
              title={"Співпраця з ТЕП"}
              description={
                "В нашому магазині можна придбати товари за акційною пропозицією..."
              }
              bg={IMG2}
            />
            <InfoCard
              url={CompanyUrl.getVacancies()}
              title={"Робота в ТЕП"}
              description={
                "Для будь-якого товару можна замовити доставку кур’єра..."
              }
              bg={IMG3}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
