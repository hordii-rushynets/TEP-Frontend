"use client";

import { StringParam, useQueryParams, withDefault } from "use-query-params";
import { cn } from "utils/cn";

import { Button } from "common/ui";
import { categories } from "components/Header/GoodsMenu";

export default function CategoriesFilter() {
  const [filter, setFilter] = useQueryParams(
    {
      category: withDefault(StringParam, ""),
    },
    {
      removeDefaultsFromUrl: true,
    },
  );

  return (
    <div className={"-mb-3 flex flex-nowrap gap-x-6 overflow-scroll pb-3"}>
      <Button
        className={{
          button: cn({
            "border border-black": filter.category === "",
          }),
        }}
        size={"filter"}
        colorVariant={"filter"}
        onClick={() => setFilter({ category: "" })}
      >
        Всі
      </Button>
      {categories.map((category) => (
        <Button
          key={category.id}
          className={{
            button: cn({
              "border border-black": filter.category === category.name,
            }),
          }}
          size={"filter"}
          colorVariant={"filter"}
          onClick={() => setFilter({ category: category.name })}
        >
          {category.title}
        </Button>
      ))}
    </div>
  );
}
