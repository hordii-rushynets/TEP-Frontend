import { MainImageBlock } from "components/Company/MainImageBlock";
import { MoreTechnologies } from "components/Company/Technologies/MoreTechnologies";
import ProcessSection from "components/Company/Technologies/ProcessSection";
import { technologies } from "components/Company/Technologies/Technologies";

export default function TechPage({ params }: { params: { slug: string } }) {
  const technology = technologies.find((tech) => tech.id === params.slug);
  const otherTechnologies = technologies.filter(
    (tech) => tech.id !== params.slug,
  );
  return (
    <>
      <MainImageBlock
        image={technology?.image ?? ""}
        title={technology?.title}
      />
      {technology &&
        technology.details &&
        technology.details.map((data, Idx) => (
          <ProcessSection
            key={Idx}
            index={Idx + 1}
            description={data.description}
            image={data.img}
          />
        ))}
      <MoreTechnologies data={otherTechnologies} />
    </>
  );
}
