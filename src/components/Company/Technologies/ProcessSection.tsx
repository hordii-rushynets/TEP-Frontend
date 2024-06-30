import { StaticImageData } from "next/image";

import { Container, Section } from "common/ui";

import { ImageBlock } from "../ImageBlock";

export type ProcessSectionProps = {
  index: number;
  description: string;
  image: StaticImageData | string;
};

export default function ProcessSection({
  description,
  index,
  image,
}: ProcessSectionProps) {
  const number = index < 10 ? `0${index}` : index;
  return (
    <>
      <Section>
        <Container>
          <div className={"py-24 md:py-36"}>
            <div className={"flex gap-x-3 md:gap-x-6"}>
              <span
                className={"text-6xl font-bold text-tep_blue-400 md:text-8xl"}
              >
                {number}
              </span>
              <p
                className={
                  "max-w-[490px] py-1 text-lg md:text-sm lg:font-extralight"
                }
              >
                {description}
              </p>
            </div>
          </div>
        </Container>
      </Section>
      <ImageBlock image={image} />
    </>
  );
}
