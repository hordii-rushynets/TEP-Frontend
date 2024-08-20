"use client"

import { Container, Section, Title } from "common/ui";
import { Author } from "components/Company/Blog/Author";
import { MoreArticles } from "components/Company/Blog/MoreArticles";
import { ImageBlock } from "components/Company/ImageBlock";
import { MainImageBlock } from "components/Company/MainImageBlock";
import { useEffect, useState } from "react";
import { Article, ArticleDefault, Complexity, Tag } from "../interfaces";
import { useLocalization } from "contexts/LocalizationContext";
import { ArticleService } from "../services";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [article, setArticle] = useState<Article>(ArticleDefault);
  const [loading, setLoading] = useState(true);
  const articleService = new ArticleService();

  useEffect(() => {
    article.id ? setLoading(false) : setLoading(true);
  }, [article]);

  useEffect(() => {
    articleService.getArticle(params.slug).then(article => setArticle(article));
  }, [])

  if (loading) {
    return <div>Loading...</div>;
  }

  const { localization } = useLocalization();

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
              {article?.complexity?.[0][`title_${localization}` as keyof {}]}
            </Title>
            <p className={"mb:text-sm text-lg lg:font-extralight"}>
              {article?.complexity?.[0][`description_${localization}` as keyof {}]}
            </p>
          </div>
        </Container>
      </Section>
      <ImageBlock image={article?.complexity?.[0].photo || ""} />
      <Section>
        <Container>
          <div className={"pb-16 pt-20 md:pb-20 md:pt-24"}>
            <Title component={"h5"} className={"mb-3.5"}>
              {article?.requirements?.[0][`title_${localization}` as keyof {}]}
            </Title>
            <ol
              className={
                "mb:text-sm list-inside list-decimal text-lg lg:font-extralight"
              }
            >
              <li>
                {article?.requirements?.[0][`description_${localization}` as keyof {}]}
              </li>
            </ol>
          </div>
        </Container>
      </Section>
      <ImageBlock
        image={article?.for_children?.[0].photo || ""}
        description={article?.for_children?.[0][`additional_description_${localization}` as keyof {}]}
      />
      <Section>
        <Container>
          <div className={"pb-16 pt-20 md:pb-20 md:pt-24"}>
            <p className={"mb:text-sm text-lg lg:font-extralight"}>
              {article?.for_children?.[0][`description_${localization}` as keyof {}]}
            </p>
          </div>
        </Container>
      </Section>
      <ImageBlock image={article?.what_materials?.[0].photo || ""} />
      <Section>
        <Container>
          <div className={"py-20 md:py-24"}>
            <Title component={"h5"} className={"mb-3.5"}>
              {article?.what_materials?.[0][`title_${localization}` as keyof {}]}
            </Title>
            <ol className={"mb:text-sm text-lg lg:font-extralight"}>
              <li>
                  {article?.requirements?.[0][`description_${localization}` as keyof {}]}
              </li>
            </ol>
          </div>
        </Container>
      </Section>
      <MoreArticles id={params.slug} className={"mb-40 lg:mb-64"} />
    </>
  );
}
