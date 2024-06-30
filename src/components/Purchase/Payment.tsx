import { Container, Section, Title } from "common/ui";

import { PaymentForm } from "./PaymentForm";

export function Payment() {
  return (
    <Section>
      <Container>
        <div className={"mb-40 pt-6 lg:mb-64 lg:pt-12"}>
          <Title size={"2xl"} className={"mb-11"}>
            Оплата замовлення
          </Title>
          <PaymentForm />
        </div>
      </Container>
    </Section>
  );
}
