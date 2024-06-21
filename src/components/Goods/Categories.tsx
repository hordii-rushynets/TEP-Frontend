import { MainUrl } from "route-urls";
import { translateCategory } from "utils/helpers";

import { SimpleCard } from "common/Cards/SimpleCard";
import { Container, Section, Title } from "common/ui";

import IMG1 from "./static/categories/cat1.jpg";
import IMG2 from "./static/categories/cat2.jpg";
import IMG3 from "./static/categories/cat3.jpg";
import IMG4 from "./static/categories/cat4.jpg";
import IMG5 from "./static/categories/cat5.jpg";
import IMG6 from "./static/categories/cat6.jpg";
import IMG7 from "./static/categories/cat7.jpg";

const categories = [
  { id: "1", name: "pillows", image: IMG1 },
  { id: "2", name: "blankets", image: IMG2 },
  { id: "3", name: "covered", image: IMG3 },
  { id: "4", name: "linens", image: IMG4 },
  { id: "5", name: "toppers", image: IMG5 },
  { id: "6", name: "sheets", image: IMG6 },
];

export function Categories() {
  return (
    <Section className={"mb-24 lg:mb-40"}>
      <Container>
        <div>
          <Title className={"mb-11 md:mb-9"}>Товари</Title>
        </div>
        <div
          className={
            "grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-4"
          }
        >
          {categories.map((category) => (
            <SimpleCard
              url={`${MainUrl.getGoods()}/${category.name}`}
              title={translateCategory(category.name)}
              source={category.image}
              isIcon={false}
              key={category.id}
            />
          ))}
          <SimpleCard
            url={MainUrl.getSales()}
            title={"Акції"}
            source={IMG7}
            isIcon={false}
          />
        </div>
      </Container>
    </Section>
  );
}
