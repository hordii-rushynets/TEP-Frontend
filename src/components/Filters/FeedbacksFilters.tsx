"use client";

import { StringParam, useQueryParams, withDefault } from "use-query-params";

import { Button, Container, Section } from "common/ui";
import { Category } from "components/Header/GoodsMenu";

type FeedbacksFiltersProps = {
  categories: Category[];
};

export default function FeedbacksFilters({
  categories,
}: FeedbacksFiltersProps) {
  const [, setFilter] = useQueryParams(
    {
      category: withDefault(StringParam, ""),
      page: withDefault(StringParam, ""),
    },
    { removeDefaultsFromUrl: true },
  );

  return (
    <Section className={"relative mb-12 overflow-hidden"}>
      <Container>
        <div className={"border-b border-tep_gray-200"}>
          <div className={"flex flex-nowrap gap-x-4 overflow-scroll pb-6"}>
            <Button
              size={"filter"}
              colorVariant={"filter"}
              onClick={() =>
                setFilter((params) => ({
                  ...params,
                  category: "",
                }))
              }
            >
              Всі
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                size={"filter"}
                colorVariant={"filter"}
                onClick={() =>
                  setFilter((params) => ({
                    ...params,
                    category: category.name,
                  }))
                }
              >
                {category.title}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
