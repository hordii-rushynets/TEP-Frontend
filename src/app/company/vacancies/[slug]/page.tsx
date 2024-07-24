"use client"

import { MainImageBlock } from "components/Company/MainImageBlock";
import { VacancyInfo } from "components/Company/Vacancies/VacancyInfo";
import VacancyIMG from "components/Company/Vacancies/static/vacancy.jpg";
import { Vacancy } from "../interfaces";
import { useEffect, useState } from "react";
import { VacancyService } from "../services";
import { useLocalization } from "contexts/LocalizationContext";

export default function VacancyPage({ params }: { params: { slug: string } }) {
  const [vacancy, setVacancy] = useState<Vacancy>();
  const vacancyService = new VacancyService();
  const {localization} = useLocalization();

  useEffect(() => {
    vacancyService.getVacancy(params.slug).then(data => setVacancy(data));
  }, []);

  return (
    <>
      <MainImageBlock image={vacancy?.image || VacancyIMG} title={vacancy?.[`title_${localization}` as keyof Vacancy] as string} />
      <VacancyInfo vacancy={vacancy as Vacancy} />
    </>
  );
}
