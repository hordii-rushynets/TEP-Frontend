"use client";

import { StringParam, useQueryParams, withDefault } from "use-query-params";

import { Button, Container, Section } from "common/ui";
import { Category } from "contexts/CategoriesContext";
import { useLocalization } from "contexts/LocalizationContext";

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

  const { staticData } = useLocalization();

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
              {staticData.filters.feedbacksFilterAll}
            </Button>
            {categories.map((category) => (
              <Button
                key={category.slug}
                size={"filter"}
                colorVariant={"filter"}
                onClick={() =>
                  setFilter((params) => ({
                    ...params,
                    category: category.slug,
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
