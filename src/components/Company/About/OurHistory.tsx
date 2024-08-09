"use client"

import { cn } from "utils/cn";

import { Container, Section, Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

const content = [
  {
    year: "1996",
  },
  {
    year: "2000",
  },
  {
    year: "2002",
  },
  {
    year: "2007",
  },
  {
    year: "2009",
  },
  {
    year: "2010",
  },
  {
    year: "2017",
  },
  {
    year: "2018",
  },
  {
    year: "2022",
  }
];

export function OurHistory() {
  const { staticData } = useLocalization();

  return (
    <Section className={"mb-10 md:mb-24"}>
      <Container>
        <div>
          <Title className={"mb-20 text-3xl md:mb-24"}>{staticData.company.about.ourHistory.text1}</Title>
          <div className={"pl-3"}>
            {content.map((el, Idx, arr) => (
              <div
                key={el.year}
                className={cn("min-h-[180px] pl-8 md:pl-12", {
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
                  {el.year}
                </div>
                <p
                  className={
                    "max-w-[818px] text-lg md:text-sm lg:font-extralight"
                  }
                >
                  {staticData.company.about.ourHistory.content[Idx]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
