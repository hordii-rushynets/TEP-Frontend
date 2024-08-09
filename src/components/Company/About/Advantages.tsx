"use client"

import { cn } from "utils/cn";

import { Container, Section, Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export default function Advantages() {
  const { staticData } = useLocalization();

  return (
    <Section className={"mb-10 md:mb-24"}>
      <Container>
        <div>
          <Title className={"mb-20 text-3xl md:mb-24"}>{staticData.company.about.advantages.text1}: </Title>
          <div className={"pl-3"}>
            {staticData.company.about.advantages.content.map((el: {text: string}, Idx: number, arr: []) => (
              <div
                key={Idx}
                className={cn("min-h-[100px] pl-8 md:pl-12", {
                  "border-tep_blue-400/20 border-l-2 pb-12":
                    Idx < arr.length - 1,
                })}
              >
                <div
                  className={cn(
                    "relative -translate-y-6 text-5xl font-bold before:absolute before:-left-[33px] before:top-6 before:h-4 before:w-4 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-tep_blue-500 md:before:-left-[49px]",
                    {
                      "before:-left-[31px] before:h-6 before:w-6 md:before:-left-[47px]":
                        Idx === arr.length - 1,
                    },
                  )}
                >
                </div>
                <p
                  className={
                    "max-w-[818px] text-lg md:text-sm lg:font-extralight"
                  }
                >
                  {el.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
