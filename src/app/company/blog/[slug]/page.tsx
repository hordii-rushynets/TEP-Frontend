import { Container, Section, Title } from "common/ui";
import { Author } from "components/Company/Blog/Author";
import { MoreArticles } from "components/Company/Blog/MoreArticles";
import { ImageBlock } from "components/Company/ImageBlock";
import { MainImageBlock } from "components/Company/MainImageBlock";

import { articles } from "../page";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((article) => article.id === params.slug)!;

  return (
    <>
      <MainImageBlock
        image={article.info.images.topicImg}
        title={article.topic}
        className={{ image: "object-top" }}
      />
      <Author
        author={article.author.name}
        date={article.author.created_at}
        tags={article.author.tags}
        socialLinks={article.author.socialLinks}
      />
      <Section>
        <Container>
          <div className={"py-20 md:py-24"}>
            <Title component={"h5"} className={"mb-3.5"}>
              {article.info.complexity?.title}
            </Title>
            <p className={"mb:text-sm text-lg lg:font-extralight"}>
              {article.info.complexity?.description}
            </p>
          </div>
        </Container>
      </Section>
      <ImageBlock image={article.info.images.complexityImg} />
      <Section>
        <Container>
          <div className={"pb-16 pt-20 md:pb-20 md:pt-24"}>
            <Title component={"h5"} className={"mb-3.5"}>
              {article.info.requirements?.title}
            </Title>
            <ol
              className={
                "mb:text-sm list-inside list-decimal text-lg lg:font-extralight"
              }
            >
              {article.info.requirements?.description.map((i, Idx) => (
                <li key={Idx}>{i}</li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>
      <ImageBlock
        image={article.info.images.for_childrenImg}
        description={article.info.for_children?.imageText}
      />
      <Section>
        <Container>
          <div className={"pb-16 pt-20 md:pb-20 md:pt-24"}>
            <p className={"mb:text-sm text-lg lg:font-extralight"}>
              {article.info.for_children?.description}
            </p>
          </div>
        </Container>
      </Section>
      <ImageBlock image={article.info.images.what_materials} />
      <Section>
        <Container>
          <div className={"py-20 md:py-24"}>
            <Title component={"h5"} className={"mb-3.5"}>
              {article.info.what_materials?.title}
            </Title>
            <ol className={"mb:text-sm text-lg lg:font-extralight"}>
              {article.info.what_materials?.description.map((i, Idx) => (
                <li key={Idx}>{i}</li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>
      <MoreArticles id={params.slug} className={"mb-40 lg:mb-64"} />
    </>
  );
}
