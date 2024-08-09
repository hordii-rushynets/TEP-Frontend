"use client"

import { Container, Section, Title } from "common/ui";

import { DeliveryForm } from "./DeliveryForm";
import { useLocalization } from "contexts/LocalizationContext";

export function Delivery() {
  const { staticData } = useLocalization();

  return (
    <Section>
      <Container>
        <div className={"mb-40 pt-6 lg:mb-64 lg:pt-12"}>
          <Title size={"2xl"} className={"mb-11"}>
            {staticData.purchase.deliveryTitle}
          </Title>
          <DeliveryForm />
        </div>
      </Container>
    </Section>
  );
}
