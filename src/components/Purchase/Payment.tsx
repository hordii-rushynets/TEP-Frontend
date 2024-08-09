"use client"

import { Container, Section, Title } from "common/ui";

import { PaymentForm } from "./PaymentForm";
import { useLocalization } from "contexts/LocalizationContext";

export function Payment() {
  const { staticData } = useLocalization();

  return (
    <Section>
      <Container>
        <div className={"mb-40 pt-6 lg:mb-64 lg:pt-12"}>
          <Title size={"2xl"} className={"mb-11"}>
            {staticData.purchase.paymentTitle}
          </Title>
          <PaymentForm />
        </div>
      </Container>
    </Section>
  );
}
