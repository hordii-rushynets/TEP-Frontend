"use client"

import { Suspense, useEffect, useState } from "react";
import { CompanyUrl } from "route-urls";

import AnyQuestions from "common/AnyQuestions";
import { Container, Loader, Section, Title } from "common/ui";
import { VacanciesList } from "components/Company/Vacancies/VacanciesList";
import VacanciesFilters from "components/Filters/VacanciesFilters";
import { Vacancy } from "./interfaces";
import { VacancyService } from "./services";
import { useLocalization } from "contexts/LocalizationContext";

type SearchParams = {
  [key: string]: string | string[] | undefined;
};
export default function VacanciesPage({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [filters, setFilters] = useState<{[key: string]: string}>({
    "title_uk": "",
    "title_en": "",
    "title_ru": "",
    "city": "",
    "region": "",
    "scope_of_work": "",
    "type_of_work": "",
    "type_of_employment": "",
  });

  const vacancyService = new VacancyService();

  const handleFilterChange = (key: string, value: string) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  }

  useEffect(() => {
    vacancyService.getVacancies(filters).then(data => setVacancies(data));
  }, [filters]);

  const { staticData } = useLocalization();

  return (
    <>
      <Section className={"mt-12"}>
        <Container>
          <div>
            <Title className={"mb-6 md:mb-8"}>{staticData.company.vacancies.text1}</Title>
            <Suspense fallback={<Loader />}>
              <VacanciesFilters count={vacancies.length} onFilterChange={handleFilterChange}/>
            </Suspense>
            <Results vacancies={vacancies} />
          </div>
        </Container>
      </Section>
      <AnyQuestions
        title={staticData.company.vacancies.text2}
        description={
          staticData.company.vacancies.text3
        }
        buttonText={staticData.company.vacancies.text4}
        buttonStyle={"black"}
        url={CompanyUrl.getCooperationRequest()}
      />
    </>
  );
}

type ResultsProps = {
  vacancies: Vacancy[];
};

function Results({ vacancies }: ResultsProps) {
  const { staticData } = useLocalization();

  if (!vacancies?.length) {
    return (
      <p className={"py-6 text-center text-lg"}>
        {staticData.company.vacancies.text5}
      </p>
    );
  }
  return <VacanciesList vacancies={vacancies} />;
}
