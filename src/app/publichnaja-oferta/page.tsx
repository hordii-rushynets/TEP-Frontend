"use client"

import { Container, Section, Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export default function PrivacyPolicyPage() {
  const { staticData } = useLocalization();

  return (
    <Section size={"default"}>
      <Container>
        <Title size="3xl">{staticData.privacy_policy.title}</Title>
        {staticData.privacy_policy.data.map((section: {title: string, clauses: string[]}) => 
          <Section size="small" key={section.title}>
            <Title size="xl">{section.title}</Title>
            {section.clauses.map(clause => 
              <p className="py-4" key={clause}>{clause}</p>
            )}
          </Section>
        )}
      </Container>
    </Section>
  );
}
