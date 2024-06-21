import { MainUrl, ServicesUrl } from "route-urls";

import { Container, Section, Title } from "common/ui";

import InfoCard from "../InfoCard";

import IMG1 from "./static/img1.jpg";
import IMG2 from "./static/img2.jpg";
import IMG3 from "./static/img3.jpg";

export function MoreOffers() {
  return (
    <Section className={"mb-24"}>
      <Container>
        <div>
          <Title className={"mb-7"}>Більше пропозицій</Title>
          <div
            className={"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"}
          >
            <InfoCard
              url={ServicesUrl.getGifts()}
              title={"Подарункові карти"}
              description={
                "Ви можете придбати у нас подарункові карти, в якості подарунку на будь-яке..."
              }
              bg={IMG1}
            />
            <InfoCard
              url={MainUrl.getSales()}
              title={"Каталоги ТЕП"}
              description={
                "В нашому магазині можна придбати товари за акційною пропозицією..."
              }
              bg={IMG2}
            />
            <InfoCard
              url={ServicesUrl.getDelivery()}
              title={"Послуги доставки"}
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
