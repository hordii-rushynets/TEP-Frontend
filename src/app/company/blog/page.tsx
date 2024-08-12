"use client"

import { CompanyUrl } from "route-urls";

import { Container, Pagination, Section } from "common/ui";
import { useEffect, useState } from "react";

import BlogGrid from "components/Company/Blog/BlogGrid";
import BlogHead from "components/Company/Blog/BlogHead";
import { WithColorFillingBlock } from "components/WithColorFillingBlock";
import { Article } from "./interfaces";
import { useArticles } from "contexts/ArticlesContext";
import { useSearchParams } from "next/navigation";
import { useLocalization } from "contexts/LocalizationContext";

export default function BlogPage() {
  const { articles, number_of_pages, refreshArticles } = useArticles();
  const [loading, setLoading] = useState(true);
  const [activePage, setActivePage] = useState(1);
  const { localization } = useLocalization();

  useEffect(() => {
    articles ? setLoading(false) : setLoading(true);
  }, [articles]);

  const searchParams = useSearchParams();

  useEffect(() => {
    const handlePageChange = (page: string) => {
      refreshArticles(page);
    };

    if (searchParams.get("page")) {
      handlePageChange(searchParams.get("page") as string);
      setActivePage(Number(searchParams.get("page")));
    }
  }, [searchParams]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <BlogHead articles={articles.slice(0, 6)} />
      {articles[6] && <WithColorFillingBlock
        image={articles[6]?.image || ""}
        title={articles[6]?.[`title_${localization}` as keyof Article] as string}
        description={""}
        link={CompanyUrl.getArticle(articles[6]?.slug)}
        bgColor={"bg-[#65A9A0]"}
      />}
      <Section>
        <Container>
          <div className={"my-24"}>
            <BlogGrid articles={articles.slice(7, 13)} />
          </div>
        </Container>
      </Section>
      {articles[14] && <WithColorFillingBlock
        image={articles[14]?.image || ""}
        title={articles[14]?.[`title_${localization}` as keyof Article] as string}
        link={CompanyUrl.getArticle(articles[14]?.slug)}
        description={""}
        bgColor={"bg-[#703F4D]"}
      />}
      <Section>
        <Container>
          <div className={"mb-24 mt-24 flex flex-col gap-y-[72px]"}>
            <BlogGrid articles={articles.slice(15)} />
            <Pagination total={number_of_pages} activePage={activePage} />
          </div>
        </Container>
      </Section>
    </>
  );
}
