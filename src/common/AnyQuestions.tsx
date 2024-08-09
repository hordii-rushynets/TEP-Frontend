"use client"

import Link from "next/link";
import { HTMLAttributes } from "react";
import { InfoUrl } from "route-urls";
import { cn } from "utils/cn";

import { Button, Container, Section, Title } from "./ui";
import { useLocalization } from "contexts/LocalizationContext";

export type AnyQuestionsProps = {
  title?: string;
  description?: string;
  url?: string;
  buttonSize?: "large" | "super-large";
  buttonStyle?: "black" | "outlined";
  buttonText?: string;
  hasBorder?: boolean;
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export default function AnyQuestions({
  title = "",
  description = "",
  url = InfoUrl.getContactUs(),
  buttonStyle = "outlined",
  buttonSize = "super-large",
  buttonText = "",
  hasBorder = true,
  className,
}: AnyQuestionsProps) {
  const { staticData } = useLocalization();

  return (
    <Section>
      <Container>
        <div
          className={cn(
            "pb-40 pt-12 md:pb-40 md:pt-10 lg:pb-64",
            { "border-t border-tep_gray-200": hasBorder },
            className,
          )}
        >
          <Title size={"2xl"} className={"mb-3.5"}>
            {title !== "" ? title : staticData.common.anyQuestions.title}
          </Title>
          <p className={"mb-7 text-sm md:mb-12 lg:font-extralight"}>
            {description !== "" ? description : staticData.common.anyQuestions.description}
          </p>
          <Link href={url}>
            <Button
              fullWidth
              size={buttonSize}
              className={{ button: "sm:w-auto" }}
              colorVariant={buttonStyle}
            >
              {buttonText !== "" ? buttonText : staticData.common.anyQuestions.buttonText}
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
