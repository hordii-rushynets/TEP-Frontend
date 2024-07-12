import { MainImageBlock } from "components/Company/MainImageBlock";
import { VacancyInfo } from "components/Company/Vacancies/VacancyInfo";
import VacancyIMG from "components/Company/Vacancies/static/vacancy.jpg";

import { vacancies } from "../_data";

export default function VacancyPage({ params }: { params: { slug: string } }) {
  const vacancy = vacancies.find((v) => v.id == params.slug);
  if (!vacancy) return;

  return (
    <>
      <MainImageBlock image={VacancyIMG} title={vacancy.position} />
      <VacancyInfo vacancy={vacancy} />
    </>
  );
}
