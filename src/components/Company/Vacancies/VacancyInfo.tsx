import { Vacancy } from "app/company/vacancies/_data";
import Link from "next/link";
import { FiClock, FiMapPin, FiTag } from "react-icons/fi";
import { CompanyUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";

type VacancyInfoProps = {
  vacancy: Vacancy;
};

export function VacancyInfo({ vacancy }: VacancyInfoProps) {
  const {
    id,
    city,
    country,
    occupation,
    position,
    requirements,
    created_at,
    description,
    about_company,
  } = vacancy;
  return (
    <Section>
      <Container>
        <div className={"max-w-[912px] pb-40 pt-6 md:pt-24 lg:pb-64"}>
          <div
            className={
              "mb-6 flex flex-col-reverse justify-between gap-y-12 md:flex-row"
            }
          >
            <Title component={"h4"} className={"mb-5 text-3xl"}>
              {position}
            </Title>
            <span className={"text-sm text-tep_gray-500 lg:font-extralight"}>
              {created_at}
            </span>
          </div>
          <div
            className={
              "mb-6 flex max-w-[230px] flex-col gap-y-4 text-sm font-light"
            }
          >
            <div className={"flex gap-x-2"}>
              <FiMapPin className={"size-4 shrink-0"} />
              <span>
                {city}, {country}
              </span>
            </div>
            <div className={"flex gap-x-2"}>
              <FiClock className={"size-4 shrink-0"} />
              <span>{occupation}</span>
            </div>
            <div className={"flex gap-x-2"}>
              <FiTag className={"size-4 shrink-0"} />
              <span>{requirements.join(", ")}</span>
            </div>
          </div>
          {description && (
            <div className={"mb-7 lg:mb-12"}>
              <Title size={"xl"} className={"mb-5"}>
                Опис
              </Title>
              <p className={"text-lg md:text-sm md:font-light"}>
                {description}
              </p>
            </div>
          )}
          {about_company && (
            <div className={"mb-10 md:mb-20 lg:mb-24"}>
              <Title size={"xl"} className={"mb-5"}>
                Про компанію
              </Title>
              <p className={"text-lg md:text-sm md:font-light"}>
                {about_company}
              </p>
            </div>
          )}
          <Link href={CompanyUrl.getVacanciesRequest(id)}>
            <Button
              fullWidth
              className={{ button: "sm:w-auto" }}
              colorVariant={"black"}
              size={"super-large"}
            >
              Залишити заявку
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
