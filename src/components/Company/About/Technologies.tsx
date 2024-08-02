"use client"

import Link from "next/link";
import { CompanyUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export default function Technologies() {
  const { staticData } = useLocalization();
  
  return (
    <Section className={"mb-40"}>
      <Container>
        <div>
          <Title className={"mb-6 text-3xl"}>{staticData.company.about.technologies.text1}</Title>
          <p
            className={"mb-7 max-w-[517px] text-sm md:mb-8 lg:font-extralight"}
          >
            {staticData.company.about.technologies.text2}{" "}
          </p>
          <Link href={CompanyUrl.getTechnologies()}>
            <Button
              fullWidth
              className={{ button: "sm:w-auto" }}
              colorVariant={"black"}
              size={"super-large"}
            >
              {staticData.company.about.technologies.text3}
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
