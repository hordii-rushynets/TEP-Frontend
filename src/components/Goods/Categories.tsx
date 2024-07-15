"use client"

import { Container, Section, Title } from "common/ui";

import CategoriesGrid from "./CategoriesGrid";

export function Categories() {

  return (
    <Section className={"mb-24 lg:mb-40"}>
      <Container>
        <div>
          <Title className={"mb-11 md:mb-9"}>Товари</Title>
        </div>
        <CategoriesGrid />
      </Container>
    </Section>
  );
}
