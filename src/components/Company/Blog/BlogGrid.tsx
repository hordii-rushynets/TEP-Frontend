import { Article } from "app/company/blog/page";
import { CompanyUrl } from "route-urls";

import { SimpleCard } from "common/Cards/SimpleCard";

export type BlogGridProps = {
  articles: Article[];
};

export default function BlogGrid({ articles = [] }: BlogGridProps) {
  return (
    <div
      className={
        "grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16"
      }
    >
      {articles.map((article) => (
        <SimpleCard
          key={article.id}
          source={article.info.images.topicImg}
          title={article.topic}
          url={CompanyUrl.getArticle(article.id)}
        />
      ))}
    </div>
  );
}
