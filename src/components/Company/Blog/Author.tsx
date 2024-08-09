"use client"

import { Container, Section, Title } from "common/ui";
import { Socials } from "components/Socials";
import { useLocalization } from "contexts/LocalizationContext";

type AuthorProps = {
  author: string;
  date: string;
  tags: string[];
  socialLinks?: Socials;
};

export function Author({ author, date, tags, socialLinks }: AuthorProps) {
  const { staticData } = useLocalization();

  return (
    <Section className={"bg-tep_gray-200"}>
      <Container>
        <div
          className={
            "flex flex-col gap-x-4 gap-y-8 py-20 md:grid md:grid-cols-2 lg:flex lg:flex-row"
          }
        >
          <div className={"lg:flex-1 lg:grow-[2]"}>
            <div className={"mb-4 lg:font-extralight"}>{staticData.company.blog.author.text1}</div>
            <Title component={"h5"} size={"2xl"}>
              {author}
            </Title>
          </div>

          <div className={"lg:flex-1 lg:grow-[2]"}>
            <div className={"mb-4 lg:font-extralight"}>{staticData.company.blog.author.text2}</div>
            <div className={"max-w-[288px] font-bold first-letter:uppercase"}>
              {tags?.join(", ")}
            </div>
          </div>

          <div className={"lg:flex-1"}>
            <div className={"mb-4 lg:font-extralight"}>{staticData.company.blog.author.text3}</div>
            <div className={"whitespace-nowrap font-bold"}>{date}</div>
          </div>

          <div className={"lg:flex-1"}>
            <div className={"mb-4 lg:font-extralight"}>{staticData.company.blog.author.text4}</div>
            <Socials links={socialLinks} className={""} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
