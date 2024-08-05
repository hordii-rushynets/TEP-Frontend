"use client"

import Link from "next/link";
import { MainUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export type SuccessProps = {
  title?: string;
  description?: string;
  buttonTitle?: string;
  url?: string;
};

export function Success({
  title = "",
  description = "",
  buttonTitle = "",
  url = MainUrl.getHome(),
}: SuccessProps) {
  const { staticData } = useLocalization();

  return (
    <Section>
      <Container>
        <div
          className={
            "mx-auto flex min-h-[90vh] max-w-[470px] flex-col items-center justify-center pb-[10vh] text-center"
          }
        >
          <Title component={"h3"} className={"mb-5 text-3xl md:mb-6"}>
            {title !== "" ? title : staticData.forms.success.title}
          </Title>
          <p className={"mb-12 text-sm md:mb-[72px] lg:font-extralight"}>
            {description !== "" ? description : staticData.forms.success.description}
          </p>
          <Link href={url} className={"w-full sm:w-auto"}>
            <Button
              fullWidth
              className={{ button: "sm:w-auto" }}
              size={"super-large"}
              colorVariant={"black"}
            >
              {buttonTitle !== "" ? buttonTitle : staticData.forms.success.buttonTitle}
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
