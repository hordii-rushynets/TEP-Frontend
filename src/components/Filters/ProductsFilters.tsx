"use client";

import { useState, useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import { FiChevronDown } from "react-icons/fi";
import { PiFadersBold } from "react-icons/pi";

import { Disclosure, DisclosureItem } from "common/Disclosure";
import {
  Button,
  Container,
  FilterCheckbox,
  RadioGroupInput,
  Section,
} from "common/ui";

import { FilterDialog } from "./FilterDialog";
import { Skeleton } from "./Skeleton";
import { useLocalization } from "contexts/LocalizationContext";
import { generateDictionary, getTrueKeys } from "utils/helpers";
import { useParams } from "next/navigation";
import Link from "next/link";

export interface DynamicFilterField {
  id: number;
  value: string;
  value_uk: string;
  value_en: string;
  filter: number;
}

export interface DynamicFilter {
  id: number;
  filter_field: DynamicFilterField[];
  name: string;
  name_uk: string;
  name_en: string;
}

type PillowsFiltersProps = {
  count: number;
  sort: string;
  setSort: (string: string) => void;
  filters: DynamicFilter[];
  sizes: string[];
  filterParams: {[key: string]: string;};
  setFilterParams: Dispatch<SetStateAction<{[key: string]: string;}>>;
};

export default function ProductsFilters({ count, sort, setSort, filters, sizes, setFilterParams, filterParams }: PillowsFiltersProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { staticData } = useLocalization();
  const params = useParams();

  const [size, setSize] = useState(generateDictionary(sizes));
  const [dynamicFilterFields, setDynamicFilterFields] = useState<{ [key: string]: boolean }>({});

  useEffect(()=>{
    setFilterParams({...filterParams, ["size"]: getTrueKeys(size)});
  }, [size]);

  useEffect(()=>{
    setFilterParams({...filterParams, ["filter_fields_id"]: getTrueKeys(dynamicFilterFields)});
  }, [dynamicFilterFields]);

  return (
    <Section className={"overflow-x-hidden"}>
      <Container>
        <div
          className={
            "flex flex-col-reverse justify-between gap-y-6 border-b border-tep_gray-200 pb-6 lg:flex-row lg:items-center"
          }
        >
          <div
            className={"-mb-2 flex flex-nowrap gap-x-4 overflow-x-scroll pb-2"}
          >
            <Link href={`${params.category}/compare`}><Button size={"filter"}>{staticData.filters.productsFilter.text1}</Button></Link>
            <Button
              onClick={() => setIsFilterOpen(true)}
              size={"filter"}
              colorVariant={"filter"}
              endIcon={
                <FiChevronDown aria-hidden className={"size-6 select-none"} />
              }
            >
              {staticData.filters.productsFilter.text2}
            </Button>

            <Button
              onClick={() => setIsFilterOpen(true)}
              size={"filter"}
              colorVariant={"filter"}
            >
              {staticData.filters.productsFilter.text3}
            </Button>
            {filters.slice(0, Math.floor(filters.length/2)).map((filter) =>
            <Button
              key={filter.id}
              onClick={() => setIsFilterOpen(true)}
              size={"filter"}
              colorVariant={"filter"}
            >
              {filter[(`name_${staticData.backendPostfix}` || "name") as keyof DynamicFilter].toString()}
            </Button>
            )}
            <Button
              onClick={() => setIsFilterOpen(true)}
              endIcon={<PiFadersBold className={"size-6"} />}
              size={"filter"}
              colorVariant={"filter"}
            >
              {staticData.filters.productsFilter.text4}
            </Button>
          </div>
          <div className={"text-sm font-bold text-tep_gray-700"}>
            {count} {staticData.filters.productsFilter.text5}
          </div>
        </div>
        <FilterDialog
          open={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
        >
          <Skeleton onClick={() => setIsFilterOpen(false)} count={count} isCleanButtonDisabled={getTrueKeys(size) + getTrueKeys(dynamicFilterFields) === ""} cleanFIlter={() => {
            setSize(generateDictionary(sizes));
            setDynamicFilterFields({});
          }}>
            <Disclosure>
              <DisclosureItem
                trigger={staticData.filters.productsFilter.text2}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"py-5"}>
                  <RadioGroupInput
                    value={sort}
                    onChange={setSort}
                    options={[
                      { label: staticData.filters.productsFilter.text6, value: "suitable" },
                      {
                        label: staticData.filters.productsFilter.text7,
                        value: "asc",
                      },
                      { label: staticData.filters.productsFilter.text8, value: "desc" },
                      { label: staticData.filters.productsFilter.text9, value: "new" },
                      { label: staticData.filters.productsFilter.text10, value: "title" },
                      { label: staticData.filters.productsFilter.text11, value: "popular" },
                    ]}
                  />
                </div>
              </DisclosureItem>
              <DisclosureItem
                trigger={staticData.filters.productsFilter.text3}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"max-w-[127px] py-5"}>
                  {sizes.map((size_name, idx)=>
                    <FilterCheckbox
                      key={idx}
                      checked={size[size_name]}
                      onChange={() =>
                        setSize((v) => ({ ...v, [size_name]: !v[size_name] }))
                      }
                      label={size_name}
                    />
                  )}
                </div>
              </DisclosureItem>
              {filters.map((filter) =>
              <DisclosureItem
                key={filter.id}
                trigger={filter[(`name_${staticData.backendPostfix}` || "name") as keyof DynamicFilter].toString()}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"max-w-[148px] gap-x-12 py-5"}>
                  {filter.filter_field?.map((field) =>
                  <FilterCheckbox
                    key={field.id}
                    checked={dynamicFilterFields[field.id]}
                    onChange={() =>
                      setDynamicFilterFields((v) => ({ ...v, [field.id]: !v[field.id] }))
                    }
                    label={field[(`value_${staticData.backendPostfix}` || "value") as keyof DynamicFilterField]}
                  />
                  )}
                </div>
              </DisclosureItem>
              )}
            </Disclosure>
          </Skeleton>
        </FilterDialog>
      </Container>
    </Section>
  );
}
