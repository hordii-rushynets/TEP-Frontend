"use client"

import { Container, Section, Title } from "common/ui";
import { Author } from "components/Company/Blog/Author";
import { MoreArticles } from "components/Company/Blog/MoreArticles";
import { ImageBlock } from "components/Company/ImageBlock";
import { MainImageBlock } from "components/Company/MainImageBlock";
import { useEffect, useState } from "react";
import { Article, Tag } from "../interfaces";
import { useArticles } from "contexts/ArticlesContext";
import { useLocalization } from "contexts/LocalizationContext";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const { articles } = useArticles();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    articles ? setLoading(false) : setLoading(true);
  }, [articles]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  const article = articles.find((article) => article.id == params.slug)!;
  const { localization } = useLocalization();

  console.log('\n\n ', localization, '\n\n ',)

  return (
    <>
      <MainImageBlock
        image={article?.image}
        title={article?.[`title_${localization}` as keyof Article]?.toString()}
        className={{ image: "object-top" }}
      />
      <Author
        author={article?.author.name}
        date={article?.created_at}
        tags={article?.tags.map(tag => tag[`title_${localization}` as keyof Tag])}
        socialLinks={article?.author.social_networks}
      />
      <Section>
        <Container>
          <div className={"py-20 md:py-24"}>
            <Title component={"h5"} className={"mb-3.5"}>
              {article?.complexity?.[`title_${localization}` as keyof {}]}
            </Title>
            <p className={"mb:text-sm text-lg lg:font-extralight"}>
              {article?.complexity?.[`description_${localization}` as keyof {}]}
            </p>
          </div>
        </Container>
      </Section>
      <ImageBlock image={article?.complexity?.image || ""} />
      <Section>
        <Container>
          <div className={"pb-16 pt-20 md:pb-20 md:pt-24"}>
            <Title component={"h5"} className={"mb-3.5"}>
              {article?.requirements?.[`title_${localization}` as keyof {}]}
            </Title>
            <ol
              className={
                "mb:text-sm list-inside list-decimal text-lg lg:font-extralight"
              }
            >
              <li>
                {article?.requirements?.[`description_${localization}` as keyof {}]}
              </li>
            </ol>
          </div>
        </Container>
      </Section>
      <ImageBlock
        image={article?.for_children?.image || ""}
        description={article?.for_children?.[`additional_description_${localization}` as keyof {}]}
      />
      <Section>
        <Container>
          <div className={"pb-16 pt-20 md:pb-20 md:pt-24"}>
            <p className={"mb:text-sm text-lg lg:font-extralight"}>
              {article?.for_children?.[`description_${localization}` as keyof {}]}
            </p>
          </div>
        </Container>
      </Section>
      <ImageBlock image={article?.what_materials?.image || ""} />
      <Section>
        <Container>
          <div className={"py-20 md:py-24"}>
            <Title component={"h5"} className={"mb-3.5"}>
              {article?.what_materials?.[`title_${localization}` as keyof {}]}
            </Title>
            <ol className={"mb:text-sm text-lg lg:font-extralight"}>
              <li>
                  {article?.requirements?.[`description_${localization}` as keyof {}]}
              </li>
            </ol>
          </div>
        </Container>
      </Section>
      <MoreArticles id={params.slug} className={"mb-40 lg:mb-64"} />
    </>
  );
}
