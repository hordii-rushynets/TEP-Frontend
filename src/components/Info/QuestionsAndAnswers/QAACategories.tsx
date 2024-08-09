"use client"

import { QAACategory } from "app/information-for-buyers/questions-and-answers/page";
import Link from "next/link";

import { Button, Container, Section, Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

type QAACategoriesProps = {
  categories: QAACategory[];
};

export function QAACategories({ categories }: QAACategoriesProps) {
  const { staticData } = useLocalization();

  return (
    <Section className={"mb-24 mt-12 lg:mb-40"}>
      <Container>
        <div>
          <Title className={"mb-7 text-3xl md:mb-[70px]"}>
            {staticData.info_for_buyers.qaaCategoriesTitle}
          </Title>
          <div
            className={"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"}
          >
            {categories.map((category, indx) => (
              <Card
                key={staticData.info_for_buyers.qaa_categories[indx].topic}
                title={staticData.info_for_buyers.qaa_categories[indx].topic}
                icon={category.icon}
                url={category.url}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

type CardProps = {
  title: string;
  icon: React.ReactNode;
  url: string;
};

function Card({ title, icon, url }: CardProps) {
  const { staticData } = useLocalization();

  return (
    <div
      className={
        "relative overflow-hidden rounded-3xl bg-tep_blue-400 pb-[100%] text-white transition-transform duration-300 hover:-translate-y-1.5 lg:bg-tep_blue-500"
      }
    >
      <div
        className={
          "absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center px-0"
        }
      >
        <div className={"mb-2 text-2xl"}>{icon}</div>
        <Title size={"xl"} className={"mb-[30px] text-center"}>
          {title}
        </Title>
        <Link href={url}>
          <Button size={"small"} colorVariant={"white"}>
            {staticData.info_for_buyers.qaaCardText}
          </Button>
        </Link>
      </div>
    </div>
  );
}
