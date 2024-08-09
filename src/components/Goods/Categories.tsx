"use client"

import { Container, Section, Title } from "common/ui";

import CategoriesGrid from "./CategoriesGrid";
import { useLocalization } from "contexts/LocalizationContext";

export function Categories() {

  const { staticData } = useLocalization();

  return (
    <Section className={"mb-24 lg:mb-40"}>
      <Container>
        <div>
          <Title className={"mb-11 md:mb-9"}>{staticData.goods.categories}</Title>
        </div>
        <CategoriesGrid />
      </Container>
    </Section>
  );
}
