import { Suspense } from "react";
import { CompanyUrl } from "route-urls";

import AnyQuestions from "common/AnyQuestions";
import { Container, Loader, Section, Title } from "common/ui";
import { VacanciesList } from "components/Company/Vacancies/VacanciesList";
import VacanciesFilters from "components/Filters/VacanciesFilters";

import { Vacancy, vacancies } from "./_data";

type SearchParams = {
  [key: string]: string | string[] | undefined;
};
export default function VacanciesPage({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  return (
    <>
      <Section className={"mt-12"}>
        <Container>
          <div>
            <Title className={"mb-6 md:mb-8"}>Вакансії</Title>
            <Suspense fallback={<Loader />}>
              <VacanciesFilters count={vacancies.length} />
            </Suspense>
            <Results vacancies={vacancies} />
          </div>
        </Container>
      </Section>
      <AnyQuestions
        title={"Зацікавились?"}
        description={
          "Якщо ви зацікавились в співпраці з ТЕП ви можете зв’язатись з нами з вашою пропозицією."
        }
        buttonText={"Залишити заявку"}
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
  if (!vacancies?.length) {
    return (
      <p className={"py-6 text-center text-lg"}>
        По даному запиту вакансій не знайдено
      </p>
    );
  }
  return <VacanciesList vacancies={vacancies} />;
}
