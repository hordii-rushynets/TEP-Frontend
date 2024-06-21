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

const pages = [
  {
    title: "Про бренд ТЕП",
    image: AboutIMG,
    url: CompanyUrl.getAbout(),
  },
  {
    title: "Співпрація та партнерство",
    image: CooperationIMG,
    url: CompanyUrl.getCooperation(),
  },
  {
    title: "Робота в ТЕП",
    image: VacanciesIMG,
    url: CompanyUrl.getVacancies(),
  },
  {
    title: "Магазини ТЕП",
    image: ShopsIMG,
    url: CompanyUrl.getStores(),
  },
  {
    title: "Технології",
    image: TechnologiesIMG,
    url: CompanyUrl.getTechnologies(),
  },
  {
    title: "Блог",
    image: BlogIMG,
    url: CompanyUrl.getBlog(),
  },
  {
    title: "Каталог ТЕП",
    image: CatalogIMG,
    url: MainUrl.getGoods(),
  },
];

export function Pages() {
  return (
    <Section size={"default"} className={"mb-24 pb-0 lg:mb-40"}>
      <Container>
        <div
          className={
            "grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3"
          }
        >
          {pages.map((page) => (
            <SimpleCard
              key={page.toString()}
              url={page.url}
              isIcon
              source={page.image}
              title={page.title}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
