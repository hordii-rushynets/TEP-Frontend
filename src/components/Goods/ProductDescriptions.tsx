"use client";

import { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { cn } from "utils/cn";

import { Container, IconButton, Section, Title } from "common/ui";

type ProductDescriptionsProps = {
  descriptions: {
    title: string;
    description: string;
  }[];
};

export default function ProductDescriptions({
  descriptions,
}: ProductDescriptionsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Section className={"mb-40 lg:mb-64"}>
      <Container>
        <div
          className={cn(
            "relative min-h-0 max-w-[805px] overflow-hidden transition-[height]",
            {
              "max-h-40": !isOpen,
            },
          )}
        >
          <div className={"flex max-w-[713px] flex-col gap-y-10"}>
            {descriptions.map((d) => (
              <div key={d.title}>
                <Title className={"mb-1.5"} size={"2xl"}>
                  {d.title}
                </Title>
                <p className={"text-sm font-extralight"}>{d.description}</p>
              </div>
            ))}
          </div>
          <IconButton
            colorVariant={"empty"}
            className={{
              button: cn("mt-4 lg:ml-auto lg:mt-0", {
                "absolute bottom-0 left-0 rotate-180  lg:right-0 lg:top-0":
                  !isOpen,
              }),
            }}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <FiChevronUp className={"size-6"} />
          </IconButton>
        </div>
      </Container>
    </Section>
  );
}
