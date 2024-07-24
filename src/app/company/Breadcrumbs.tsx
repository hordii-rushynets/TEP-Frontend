"use client";

import { useParams, usePathname } from "next/navigation";
import { CompanyUrl, MainUrl } from "route-urls";

import { Breadcrumbs as BaseBreadcrumbs } from "common/ui";
import { technologies } from "components/Company/Technologies/Technologies";
import { useLocalization } from "contexts/LocalizationContext";

import { useEffect, useState } from "react";
import { Article } from "./blog/interfaces";
import { useArticles } from "contexts/ArticlesContext";
import { VacancyService } from "./vacancies/services";
import { Vacancy } from "./vacancies/interfaces";

export function Breadcrumbs() {
  const pathname = usePathname();
  const params = useParams();
  const slug = params.slug as string;

  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [filters, setFilters] = useState<{[key: string]: string}>({
    "city": "",
    "region": "",
    "scope_of_work": "",
    "type_of_work": "",
    "type_of_employment": "",
  });

  const vacancyService = new VacancyService();

  useEffect(() => {
    vacancyService.getVacancies(filters).then(data => setVacancies(data));
  }, [filters]);

  const { articles } = useArticles();
  const [loading, setLoading] = useState(true);
  const { localization } = useLocalization();

  useEffect(() => {
    articles ? setLoading(false) : setLoading(true);
  }, [articles]);
  

  const vacancyPosition = vacancies.find((v) => v.id.toString() === slug)!;
  const technology = technologies.find((t) => t.id === slug)!;

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  const article = articles.find((a) => a.id == slug)!;

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
