import { Container, Section, Title } from "common/ui";

import { DeliveryForm } from "./DeliveryForm";

export function Delivery() {
  return (
    <Section>
      <Container>
        <div className={"mb-40 pt-6 lg:mb-64 lg:pt-12"}>
          <Title size={"2xl"} className={"mb-11"}>
            Доставка
          </Title>
          <DeliveryForm />
        </div>
      </Container>
    </Section>
  );
}
