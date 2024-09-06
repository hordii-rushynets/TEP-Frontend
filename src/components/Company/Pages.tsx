"use client"

import { CompanyUrl, MainUrl } from "route-urls";

import { SimpleCard } from "common/Cards/SimpleCard";
import { Container, Section } from "common/ui";

import AboutIMG from "./static/about.jpg";
import BlogIMG from "./static/blog.jpg";
import CatalogIMG from "./static/catalog.jpg";
import CooperationIMG from "./static/coperation.jpg";
import ShopsIMG from "./static/shops.jpg";
import TechnologiesIMG from "./static/technologies.jpg";
import VacanciesIMG from "./static/vacancies.jpg";
import { useLocalization } from "contexts/LocalizationContext";

const pages = [
  {
    image: AboutIMG,
    url: CompanyUrl.getAbout(),
  },
  {
    image: CooperationIMG,
    url: CompanyUrl.getCooperation(),
  },
  {
    image: VacanciesIMG,
    url: CompanyUrl.getVacancies(),
  },
  {
    image: ShopsIMG,
    url: CompanyUrl.getStores(),
  },
  {
    image: TechnologiesIMG,
    url: CompanyUrl.getTechnologies(),
  },
  {
    image: BlogIMG,
    url: CompanyUrl.getBlog(),
  },
  {
    image: CatalogIMG,
    url: MainUrl.getGoods(),
  },
];

export function Pages() {
  const { staticData } = useLocalization();

  return (
    <Section size={"default"} className={"mb-24 pb-0 lg:mb-40"}>
      <Container>
        <div
          className={
            "grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
          }
        >
          {pages.map((page, indx) => (
            <SimpleCard
              key={indx}
              url={page.url}
              isIcon
              source={page.image}
              title={staticData.company.pages[indx]}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
