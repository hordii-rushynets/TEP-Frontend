import { Vacancy } from "app/company/vacancies/_data";

import { VacancyCard } from "./VacancyCard";

type VacanciesListProps = {
  vacancies: Vacancy[];
};

export function VacanciesList({ vacancies }: VacanciesListProps) {
  return (
    <div
      className={
        "grid grid-cols-1 gap-6 pb-24 pt-12 md:grid-cols-2 lg:grid-cols-4 lg:pb-40"
      }
    >
      {vacancies.map((vacancy) => (
        <VacancyCard key={vacancy.id} vacancy={vacancy} />
      ))}
    </div>
  );
}
