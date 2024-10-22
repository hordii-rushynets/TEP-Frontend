"use client"

import { Suspense } from "react";

import { Container, Loader, Section, Title } from "common/ui";
import CategoriesFilter from "components/Filters/CategoriesFilter";
import ProductsList from "components/Goods/ProductsList";

import { useLocalization } from "contexts/LocalizationContext";
import { ProductToShow, ProductWithVariant } from "app/goods/[category]/page";

type NewGoodsProps = {
  products: ProductToShow[];
  productsWithVariant: ProductWithVariant[];
  activePage: number;
  totalPages: number;
  setCategory: (v: string) => void;
};

export const NewGoods = ({ products, productsWithVariant, activePage, totalPages, setCategory }: NewGoodsProps) => {
  const { staticData } = useLocalization();

  return (
    <Section className={"mb-24 lg:mb-40"}>
      <Container>
        <div>
          <Title className={"mb-9"}>{staticData.novelty.newGoodsTitle}</Title>
          <div className={"mb-12 md:mb-6"}>
            <Suspense fallback={<Loader />}>
              <CategoriesFilter setCategory={(category) => {setCategory(category)}}/>
            </Suspense>
          </div>
          <ProductsList
            activePage={activePage}
            totalPages={totalPages}
            products={products}
            productsWithVariants={productsWithVariant}
            showCompare={false}
          />
        </div>
      </Container>
    </Section>
  );
};
