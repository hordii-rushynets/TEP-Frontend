"use client";

import { usePathname } from "next/navigation";

import AnyQuestions from "common/AnyQuestions";
import { Disclosure, DisclosureItem } from "common/Disclosure";
import { Container, Section, Title } from "common/ui";

import { qaa_categories } from "../_data";

export default function CategoryPage() {
  const pathname = usePathname();
  const category = qaa_categories.find((c) => c.url === pathname);

  return (
    <>
      <Section className={"mb-24 mt-12 lg:mb-40"}>
        <Container>
          <div>
            <Title className={"mb-12"}>Наявність товару</Title>
            <Disclosure>
              {category?.data?.map((i) => (
                <DisclosureItem
                  key={i.question}
                  className={{
                    triggerWrapper:
                      "text-left font-bold underline-offset-2 hover:underline",
                  }}
                  trigger={i.question}
                >
                  <div className={"flex flex-col gap-y-6"}>
                    {i.answer.map((text, Idx) => (
                      <p
                        key={Idx}
                        className={"text-sm leading-normal lg:font-extralight"}
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </DisclosureItem>
              ))}
            </Disclosure>
          </div>
        </Container>
      </Section>
      <AnyQuestions buttonSize={"large"} />
    </>
  );
}
