import { Vacancy } from "app/company/vacancies/_data";
import Link from "next/link";
import { FiClock, FiMapPin, FiTag } from "react-icons/fi";
import { CompanyUrl } from "route-urls";

import { Title } from "common/ui";

type VacancyCardProps = {
  vacancy: Vacancy;
};

export function VacancyCard({ vacancy }: VacancyCardProps) {
  const { id, city, country, occupation, position, requirements } = vacancy;
  return (
    <Link
      href={`${CompanyUrl.getVacancies()}/${id}`}
      className={
        "overflow-hidden rounded-3xl border border-tep_gray-500/20 p-6 transition-shadow hover:shadow-[0_0_12px_rgba(29,29,29,0.05)]"
      }
    >
      <Title size={"xl"} component={"h4"} className={"mb-6"}>
        {position}
      </Title>
      <div className={"flex flex-col gap-y-4 text-sm font-light"}>
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
    </Link>
  );
}
