"use client";

import { useParams, usePathname } from "next/navigation";
import { CompanyUrl, MainUrl } from "route-urls";

import { Breadcrumbs as BaseBreadcrumbs } from "common/ui";
import { technologies } from "components/Company/Technologies/Technologies";
import { useLocalization } from "contexts/LocalizationContext";

import { useEffect, useState } from "react";
import { Article, ArticleDefault } from "./blog/interfaces";
import { useArticles } from "contexts/ArticlesContext";
import { VacancyService } from "./vacancies/services";
import { Vacancy, VacancyDefault } from "./vacancies/interfaces";
import { ArticleService } from "./blog/services";

export function Breadcrumbs() {
  const pathname = usePathname();
  const params = useParams();
  const slug = params.slug as string;

  const vacancyService = new VacancyService();
  const articleService = new ArticleService();

  useEffect(() => {
    try {
      vacancyService.getVacancy(slug).then(vacancy => setVacancy(vacancy));
      articleService.getArticle(slug).then(article => setArticle(article));
    }
    catch {
      
    }
  }, [slug]);

  const [loading, setLoading] = useState(true);
  const { localization } = useLocalization();
  const [ article, setArticle] = useState<Article>(ArticleDefault);
  const [ vacancyPosition, setVacancy ] = useState<Vacancy>(VacancyDefault);

  useEffect(() => {
    article ? setLoading(false) : setLoading(true);
  }, [article]);
  
  const technology = technologies.find((t) => t.id === slug)!;

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  

  const items = (() => {
    const base = [
      {
        name: "Головна",
        href: MainUrl.getHome(),
      },
      {
        name: "Компанія",
        href: MainUrl.getCompany(),
      },
    ];

    switch (pathname) {
      case CompanyUrl.getAbout():
        return [
          ...base,
          {
            name: "Про бред ТЕП",
            href: CompanyUrl.getAbout(),
          },
        ];
      case CompanyUrl.getCooperation():
        return [
          ...base,
          {
            name: "Співпраця та партнерство",
            href: CompanyUrl.getCooperation(),
          },
        ];

      case CompanyUrl.getCooperationSuccess():
        return [
          ...base,
          {
            name: "Співпраця та партнерство",
            href: CompanyUrl.getCooperation(),
          },
          {
            name: "Залишити заявку",
            href: CompanyUrl.getCooperationRequest(),
          },
        ];

      case CompanyUrl.getVacancies():
        return [
          ...base,
          {
            name: "Робота в ТЕП",
            href: CompanyUrl.getVacancies(),
          },
        ];

      case `${CompanyUrl.getVacancies()}/${slug}`:
        return [
          ...base,
          {
            name: "Робота в ТЕП",
            href: CompanyUrl.getVacancies(),
          },
          {
            name: vacancyPosition?.[`title_${localization}` as keyof Vacancy] as string,
            href: `${CompanyUrl.getVacancies()}/${slug}`,
          },
        ];
      case CompanyUrl.getVacanciesRequest(slug):
        return [
          ...base,
          {
            name: "Робота в ТЕП",
            href: CompanyUrl.getVacancies(),
          },
          {
            name: vacancyPosition?.title,
            href: `${CompanyUrl.getVacancies()}/${slug}`,
          },
          {
            name: "Залишити заявку",
            href: CompanyUrl.getVacanciesRequest(slug),
          },
        ];
      case `${CompanyUrl.getVacanciesRequest(slug)}/success`:
        return [
          ...base,
          {
            name: "Робота в ТЕП",
            href: CompanyUrl.getVacancies(),
          },
          {
            name: vacancyPosition?.title,
            href: `${CompanyUrl.getVacancies()}/${slug}`,
          },
          {
            name: "Залишити заявку",
            href: CompanyUrl.getVacanciesRequest(slug),
          },
        ];
      case CompanyUrl.getTechnologies():
        return [
          ...base,
          {
            name: "Технології",
            href: CompanyUrl.getTechnologies(),
          },
        ];
      case CompanyUrl.getTechnology(slug):
        return [
          ...base,
          {
            name: "Технології",
            href: CompanyUrl.getTechnologies(),
          },
          {
            name: technology.title,
            href: CompanyUrl.getTechnology(slug),
          },
        ];
      case CompanyUrl.getBlog():
        return [
          ...base,
          {
            name: "Блог",
            href: CompanyUrl.getBlog(),
          },
        ];
      case CompanyUrl.getArticle(slug):
        return [
          ...base,
          {
            name: "Блог",
            href: CompanyUrl.getBlog(),
          },
          {
            name: article?.[`title_${localization}` as keyof Article] as string || "",
            href: CompanyUrl.getArticle(slug),
          },
        ];
      case CompanyUrl.getStores():
        return [
          ...base,
          {
            name: "Магазини ТЕП",
            href: CompanyUrl.getStores(),
          },
        ];
      default:
        return [...base];
    }
  })();

  return <BaseBreadcrumbs items={items} />;
}
