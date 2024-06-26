import { Suspense } from "react";

import { Container, Loader, Section, Title } from "common/ui";
import CategoriesFilter from "components/Filters/CategoriesFilter";
import ProductsList from "components/Goods/ProductsList";

import PillowIMG from "./static/pillow.jpg";

const pillows = [...Array(9)].map((_, Idx) => ({
  id: (Idx + 1).toString(),
  title: "Dream",
  category: "Подушка",
  image: PillowIMG,
  price: 1199,
}));

type NewGoodsProps = {
  pages: number;
  activePage: number;
};

export const NewGoods = ({ activePage, pages }: NewGoodsProps) => {
  return (
    <Section className={"mb-24 lg:mb-40"}>
      <Container>
        <div>
          <Title className={"mb-9"}>Нові товари</Title>
          <div className={"mb-12 md:mb-6"}>
            <Suspense fallback={<Loader />}>
              <CategoriesFilter />
            </Suspense>
          </div>
          <ProductsList
            activePage={activePage}
            pages={pages}
            products={pillows}
          />
        </div>
      </Container>
    </Section>
  );
};
