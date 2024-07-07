"use client"

import { Container, Section, Title } from "common/ui";

import { CategoriesProvider } from 'contexts/CategoriesContext';

import CategoriesGrid from "./CategoriesGrid";

export function Categories() {

  return (
    <Section className={"mb-24 lg:mb-40"}>
      <CategoriesProvider>
        <Container>
          <div>
            <Title className={"mb-11 md:mb-9"}>Товари</Title>
          </div>
          <CategoriesGrid />
        </Container>
      </CategoriesProvider>
    </Section>
  );
}
