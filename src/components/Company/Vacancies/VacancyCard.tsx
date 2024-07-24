import { Vacancy, Address, TypeOfEmployement, Tag } from "app/company/vacancies/interfaces";
import Link from "next/link";
import { FiClock, FiMapPin, FiTag } from "react-icons/fi";
import { CompanyUrl } from "route-urls";

import { Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

type VacancyCardProps = {
  vacancy: Vacancy;
};

export function VacancyCard({ vacancy }: VacancyCardProps) {
  const { localization } = useLocalization();

  return (
    <Link
      href={`${CompanyUrl.getVacancies()}/${vacancy.id}`}
      className={
        "overflow-hidden rounded-3xl border border-tep_gray-500/20 p-6 transition-shadow hover:shadow-[0_0_12px_rgba(29,29,29,0.05)]"
      }
    >
      <Title size={"xl"} component={"h4"} className={"mb-6"}>
        {vacancy[`title_${localization}` as keyof Vacancy] as string}
      </Title>
      <div className={"flex flex-col gap-y-4 text-sm font-light"}>
        <div className={"flex gap-x-2"}>
          <FiMapPin className={"size-4 shrink-0"} />
          <span>
            {vacancy.address[`city_${localization}` as keyof Address] as string}, {vacancy.address[`region_${localization}` as keyof Address] as string}
          </span>
        </div>
        <div className={"flex gap-x-2"}>
          <FiClock className={"size-4 shrink-0"} />
          <span>{vacancy.type_of_employment[0][`name_${localization}` as keyof TypeOfEmployement] as string}</span>
        </div>
        <div className={"flex gap-x-2"}>
          <FiTag className={"size-4 shrink-0"} />
          <span>{vacancy.tag.map(tag => tag[`name_${localization}` as keyof Tag] as string).join(", ")}</span>
        </div>
      </div>
    </Link>
  );
}
