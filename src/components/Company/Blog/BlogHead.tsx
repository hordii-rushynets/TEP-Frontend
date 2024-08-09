"use client"

import { Article } from "app/company/blog/interfaces";

import { Container, Section, Title } from "common/ui";

import BlogGrid from "./BlogGrid";
import { useLocalization } from "contexts/LocalizationContext";

export type TopicsHeaderProps = {
  articles: Article[];
};

export default function BlogHead({ articles = [] }: TopicsHeaderProps) {
  const { staticData } = useLocalization();

  return (
    <Section>
      <Container>
        <div className={"mb-24 mt-12"}>
          <Title className={"mb-3.5 text-3xl"}>{staticData.company.blog.blogHead.text1}</Title>
          <p className={"mb-7 text-sm lg:mb-12 lg:font-extralight"}>
            {staticData.company.blog.blogHead.text2}
          </p>
          <BlogGrid articles={articles} />
        </div>
      </Container>
    </Section>
  );
}
