"use client"

import { Address, Tag, TypeOfEmployement, Vacancy } from "app/company/vacancies/interfaces";
import Link from "next/link";
import { FiClock, FiMapPin, FiTag } from "react-icons/fi";
import { CompanyUrl } from "route-urls";
import { getTimeToShow } from "utils/helpers";

import { Button, Container, Section, Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

type VacancyInfoProps = {
  vacancy: Vacancy;
};

export function VacancyInfo({ vacancy }: VacancyInfoProps) {
  const { localization, staticData } = useLocalization();

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
              {vacancy?.[`title_${localization}` as keyof Vacancy] as string}
            </Title>
            <span className={"text-sm text-tep_gray-500 lg:font-extralight"}>
              {getTimeToShow(vacancy?.creation_time)}
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
              {vacancy?.address[`city_${localization}` as keyof Address] as string}, {vacancy?.address[`region_${localization}` as keyof Address] as string}
              </span>
            </div>
            <div className={"flex gap-x-2"}>
              <FiClock className={"size-4 shrink-0"} />
              <span>{vacancy?.type_of_employment[0][`name_${localization}` as keyof TypeOfEmployement] as string}</span>
            </div>
            <div className={"flex gap-x-2"}>
              <FiTag className={"size-4 shrink-0"} />
              <span>{vacancy?.tag.map(tag => tag[`name_${localization}` as keyof Tag] as string).join(", ")}</span>
            </div>
          </div>
          {vacancy?.description && (
            <div className={"mb-7 lg:mb-12"}>
              <Title size={"xl"} className={"mb-5"}>
                {staticData.company.vacancies.vacancyInfo.text1}
              </Title>
              <p className={"text-lg md:text-sm md:font-light"}>
                <div dangerouslySetInnerHTML={{ __html:vacancy?.[`description_${localization}` as keyof Vacancy] as string}} />
              </p>
            </div>
          )}
          {vacancy?.about_company && (
            <div className={"mb-10 md:mb-20 lg:mb-24"}>
              <Title size={"xl"} className={"mb-5"}>
              {staticData.company.vacancies.vacancyInfo.text2}
              </Title>
              <p className={"text-lg md:text-sm md:font-light"}>
                <div dangerouslySetInnerHTML={{ __html: vacancy?.[`about_company_${localization}` as keyof Vacancy] as string}} />
              </p>
            </div>
          )}
          <Link href={CompanyUrl.getVacanciesRequest(vacancy?.id.toString())}>
            <Button
              fullWidth
              className={{ button: "sm:w-auto" }}
              colorVariant={"black"}
              size={"super-large"}
            >
               {staticData.company.vacancies.vacancyInfo.text3}
            </Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
