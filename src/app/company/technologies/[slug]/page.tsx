"use client"

import { MainImageBlock } from "components/Company/MainImageBlock";
import { MoreTechnologies } from "components/Company/Technologies/MoreTechnologies";
import ProcessSection from "components/Company/Technologies/ProcessSection";
import { technologies } from "components/Company/Technologies/Technologies";
import { useLocalization } from "contexts/LocalizationContext";

export default function TechPage({ params }: { params: { slug: string } }) {
  const technology = technologies.find((tech) => tech.id == params.slug);
  const otherTechnologies = technologies.filter(
    (tech) => tech.id !== params.slug,
  );

  const { staticData } = useLocalization();

  return (
    <>
      <MainImageBlock
        image={technology?.image ?? ""}
        title={staticData.company.technologies.technologies.data[Number(technology?.id) - 1].title}
      />
      {technology &&
        technology.details &&
        technology.details.map((data, Idx) => (
          <ProcessSection
            key={Idx}
            index={Idx + 1}
            description={staticData.company.technologies.technologies.data[Number(technology?.id) - 1].details[Idx]}
            image={data.img}
          />
        ))}
      <MoreTechnologies data={otherTechnologies} />
    </>
  );
}
