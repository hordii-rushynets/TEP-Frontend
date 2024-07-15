"use client";

import { StringParam, useQueryParams, withDefault } from "use-query-params";
import { cn } from "utils/cn";

import { Button } from "common/ui";
import { CategoriesProvider, useCategories} from "contexts/CategoriesContext";
import { useEffect } from "react";

interface CategoryFiltersProps {
  setCategory: (value: string) => void;
}

export default function CategoriesFilter({setCategory}: CategoryFiltersProps) {
  const [filter, setFilter] = useQueryParams(
    {
      category: withDefault(StringParam, ""),
    },
    {
      removeDefaultsFromUrl: true,
    },
  );

  useEffect(() => {
    setCategory(filter.category);
  }, [filter]);

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
      <CategoriesProvider>
        <CategoryButtonsList filter={filter} setFilter={setFilter} />
      </CategoriesProvider>
    </div>
  );
}

type CategoryButtonListProps = {
  filter: any,
  setFilter: any
}

const CategoryButtonsList : React.FC<CategoryButtonListProps> = ({filter, setFilter}) => {

  const { categories } = useCategories();

  return (
    <>
    {categories.map((category) => (
      <Button
        key={category.slug}
        className={{
          button: cn({
            "border border-black": filter.category === category.slug,
          }),
        }}
        size={"filter"}
        colorVariant={"filter"}
        onClick={() => setFilter({ category: category.slug })}
      >
        {category.title}
      </Button>
    ))}
    </>
  );
}
