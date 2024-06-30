"use client";

import { Disclosure, DisclosureItem } from "common/Disclosure";
import { Container, Section, Title } from "common/ui";

const content = [
  {
    title: "Послуги",
    description: "Інформація про послуги",
  },
  {
    title: "Інформація для покупців",
    description: "Інформація для покупців",
  },
  {
    title: "Питання та відповіді",
    description: "Питання та відповіді",
  },
];

export function UsefullInfo() {
  return (
    <Section className={"mb-24"}>
      <Container>
        <div>
          <Title className={"mb-7"}>Корисна інформація</Title>
          <Disclosure>
            {content.map((item) => (
              <DisclosureItem
                key={item.title}
                trigger={
                  <Title component={"h4"} size={"xl"}>
                    {item.title}
                  </Title>
                }
              >
                <p>{item.description}</p>
              </DisclosureItem>
            ))}
          </Disclosure>
        </div>
      </Container>
    </Section>
  );
}
