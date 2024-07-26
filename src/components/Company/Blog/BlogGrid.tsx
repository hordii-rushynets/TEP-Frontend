import { Article } from "app/company/blog/interfaces";
import { CompanyUrl } from "route-urls";
import { useLocalization } from "contexts/LocalizationContext";

import { SimpleCard } from "common/Cards/SimpleCard";

export type BlogGridProps = {
  articles: Article[];
};

export default function BlogGrid({ articles = [] }: BlogGridProps) {
  const { localization } = useLocalization();

  return (
    <div
      className={
        "grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-16"
      }
    >
      {articles.map((article) => (
        <SimpleCard
          key={article.id}
          source={article.image}
          title={article[`title_${localization}` as keyof Article] as string}
          url={CompanyUrl.getArticle(article.slug)}
        />
      ))}
    </div>
  );
}
