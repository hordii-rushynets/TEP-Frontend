import { Container, Section, Title } from "common/ui";

import { AddressForm } from "./AddressForm";

export function Address() {
  return (
    <Section>
      <Container>
        <div className={"mb-40 pt-6 lg:mb-64 lg:pt-12"}>
          <Title size={"2xl"} className={"mb-11"}>
            Адреса замовника
          </Title>
          <AddressForm />
        </div>
      </Container>
    </Section>
  );
}
