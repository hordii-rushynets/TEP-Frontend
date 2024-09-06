import { Container, Section, Title } from "common/ui";

type ProductHeaderProps = {
  title: string;
  description: string;
};

export default function ProductHeader({
  description,
  title,
}: ProductHeaderProps) {
  return (
    <Section className={"mb-12 lg:mb-[72px]"}>
      <Container>
        <div className={"max-w-[704px]"}>
          <Title className={"mb-3.5"} size={"3xl"}>
            {title}
          </Title>
          <div dangerouslySetInnerHTML={{ __html: description }} className={"text-sm font-extralight"}/>
        </div>
      </Container>
    </Section>
  );
}
