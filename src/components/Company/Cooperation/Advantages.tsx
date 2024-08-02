"use client"

import { Container, Section, Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export default function Advantages() {
  const { staticData } = useLocalization();

  return (
    <Section className={"pb-[68px] pt-24 md:py-24"}>
      <Container>
      <div className="flex flex-wrap gap-x-6 gap-y-10 md:gap-y-[72px] justify-center">
        {staticData.company.cooperation.advantages.map((advantage: {description: string}, Idx: number) => (
          <div key={Idx} className="flex flex-1 min-w-[calc(33%-24px)] max-w-[calc(33%-24px)] gap-x-6">
            <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-tep_blue-500 text-2xl font-bold text-white">
              {Idx + 1}
            </div>
            <div>
              <p className="max-w-72 text-lg md:text-sm lg:font-extralight">
                {advantage.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      </Container>
    </Section>
  );
}
