import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { Disclosure } from "common/Disclosure";
import { Container, Section, Title } from "common/ui";

import { info_links } from "./_data";

export default function InformationForBuyersPage() {
  return (
    <Section>
      <Container>
        <div className={"mb-40 mt-12"}>
          <Title className={"mb-3.5 text-3xl"}>Інформація для покупців</Title>
          <p
            className={
              "mb-[72px] max-w-[704px] text-sm md:mb-[52px] lg:font-extralight"
            }
          >
            ТЕП — це значно більше, ніж компанія з роздрібних продажів виробів з
            текстилю. Це багатогранний бренд, що характеризується використанням
            екологічних та сучасних матеріалів, таких як бавовна, стійкою
            позицією щодо прав людини, комфортними умовами роботи та
            демократичним дизайном своїх виробів.
          </p>
          <Disclosure>
            {info_links.map((link) => (
              <Link
                href={link.url}
                key={link.url}
                className={
                  "group flex items-center justify-between gap-x-4 py-6 pl-1 transition-colors duration-300 hover:text-tep_blue-400"
                }
              >
                <Title size={"xl"}>{link.title}</Title>
                <FiArrowRight
                  className={
                    "size-6 transform transition-transform group-hover:-translate-x-2"
                  }
                />
              </Link>
            ))}
          </Disclosure>
        </div>
      </Container>
    </Section>
  );
}
