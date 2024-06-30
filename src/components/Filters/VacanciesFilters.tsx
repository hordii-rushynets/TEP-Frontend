"use client";

import { useEffect, useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";
import { StringParam, useQueryParams, withDefault } from "use-query-params";

import { Disclosure, DisclosureItem } from "common/Disclosure";
import {
  Button,
  FilterCheckbox,
  IconButton,
  SelectInput,
  TextInput,
} from "common/ui";

import { FilterDialog } from "./FilterDialog";
import { Skeleton } from "./Skeleton";

type VacanciesFiltersProps = {
  count: number;
};

export default function VacanciesFilters({ count }: VacanciesFiltersProps) {
  const [filter, setFilter] = useQueryParams(
    {
      query: withDefault(StringParam, ""),
      page: withDefault(StringParam, ""),
    },
    {
      removeDefaultsFromUrl: true,
    },
  );
  const [searchInputValue, setSearchInputValue] = useState(filter.query);

  const [isOpen, setIsOpen] = useState(false);
  const [scope, setScope] = useState({
    seamstress: false,
    marketer: false,
    accountant: false,
    manager: false,
  });
  const [type, setType] = useState({
    office: false,
    production: false,
  });
  const [occupation, setOccupation] = useState({
    fulltime: false,
    parttime: false,
    remote: false,
  });
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilter((params) => ({
        ...params,
        query: searchInputValue,
        page: "",
      }));
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchInputValue, filter, setFilter]);

  return (
    <>
      <div className={"border-b border-tep_gray-200 md:pb-6"}>
        <TextInput
          className={{
            wrapper: "mb-14 max-w-[392px]",
          }}
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
          placeholder={"Вакансія"}
          startAdornment={
            <IconButton colorVariant={"empty"}>
              <FiSearch className={"size-6"} />
            </IconButton>
          }
        />
        <div
          className={
            "flex flex-col-reverse justify-between gap-6 lg:flex-row lg:items-center"
          }
        >
          <div
            className={"flex flex-nowrap gap-x-4 overflow-scroll pb-8 md:pb-0"}
          >
            <Button
              colorVariant={"filter"}
              size={"filter"}
              onClick={() => setIsOpen(true)}
            >
              Сфера роботи
            </Button>
            <Button
              onClick={() => setIsOpen(true)}
              colorVariant={"filter"}
              size={"filter"}
            >
              Тип зайнятості
            </Button>
            <Button
              onClick={() => setIsOpen(true)}
              colorVariant={"filter"}
              size={"filter"}
            >
              Область
            </Button>
            <Button
              onClick={() => setIsOpen(true)}
              colorVariant={"filter"}
              size={"filter"}
            >
              Місто
            </Button>
          </div>
          <span className={"text-sm font-bold text-tep_gray-500"}>
            {count} знайдено
          </span>
        </div>
      </div>
      <FilterDialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Skeleton count={4} title={"Фільтр"} onClick={() => setIsOpen(false)}>
          <Disclosure>
            <DisclosureItem
              trigger={"Сфера роботи"}
              endIcon={<FiChevronDown className={"size-6"} />}
              className={{ triggerWrapper: "py-8 font-bold" }}
            >
              <div className={"flex max-w-[144px] flex-col gap-y-5 py-5"}>
                <FilterCheckbox
                  checked={scope.seamstress}
                  onChange={() =>
                    setScope((v) => ({ ...v, seamstress: !v.seamstress }))
                  }
                  label={"Швачка"}
                />
                <FilterCheckbox
                  checked={scope.marketer}
                  onChange={() =>
                    setScope((v) => ({ ...v, marketer: !v.marketer }))
                  }
                  label={"Маркетолог"}
                />
                <FilterCheckbox
                  checked={scope.accountant}
                  onChange={() =>
                    setScope((v) => ({ ...v, accountant: !v.accountant }))
                  }
                  label={"Бугалтер"}
                />
                <FilterCheckbox
                  checked={scope.manager}
                  onChange={() =>
                    setScope((v) => ({ ...v, manager: !v.manager }))
                  }
                  label={"Менеджер"}
                />
              </div>
            </DisclosureItem>
            <DisclosureItem
              trigger={"Вид роботи"}
              endIcon={<FiChevronDown className={"size-6"} />}
              className={{ triggerWrapper: "py-8 font-bold" }}
            >
              <div className={"flex max-w-[138px] flex-col gap-y-5 py-5"}>
                <FilterCheckbox
                  checked={type.office}
                  onChange={() => setType((v) => ({ ...v, office: !v.office }))}
                  label={"Офісна"}
                />
                <FilterCheckbox
                  checked={type.production}
                  onChange={() =>
                    setType((v) => ({ ...v, production: !v.production }))
                  }
                  label={"Виробнича"}
                />
              </div>
            </DisclosureItem>
            <DisclosureItem
              trigger={"Тип зайнятості"}
              endIcon={<FiChevronDown className={"size-6"} />}
              className={{ triggerWrapper: "py-8 font-bold" }}
            >
              <div className={"flex max-w-[193px] flex-col gap-y-5 py-5"}>
                <FilterCheckbox
                  checked={occupation.fulltime}
                  onChange={() =>
                    setOccupation((v) => ({ ...v, fulltime: !v.fulltime }))
                  }
                  label={"Повна зайнятість"}
                />
                <FilterCheckbox
                  checked={occupation.parttime}
                  onChange={() =>
                    setOccupation((v) => ({ ...v, parttime: !v.parttime }))
                  }
                  label={"Неповна зайнятість"}
                />
                <FilterCheckbox
                  checked={occupation.remote}
                  onChange={() =>
                    setOccupation((v) => ({ ...v, remote: !v.remote }))
                  }
                  label={"Віддалено"}
                />
              </div>
            </DisclosureItem>
            <DisclosureItem
              trigger={"Область"}
              endIcon={<FiChevronDown className={"size-6"} />}
              className={{ triggerWrapper: "py-8 font-bold" }}
            >
              <div className={"flex flex-col gap-y-5 py-5"}>
                <SelectInput
                  value={region}
                  onChange={setRegion}
                  display={"Ваша область"}
                  options={[
                    { label: "Львівська", value: "lviv" },
                    { label: "Тернопільська", value: "ternopil" },
                    { label: "Хмельницька", value: "khmelnytskyi" },
                    { label: "Київська", value: "kyiv" },
                  ]}
                />
              </div>
            </DisclosureItem>
            <DisclosureItem
              trigger={"Місто"}
              endIcon={<FiChevronDown className={"size-6"} />}
              className={{ triggerWrapper: "py-8 font-bold" }}
            >
              <div className={"flex flex-col gap-y-5 py-5"}>
                <SelectInput
                  value={city}
                  onChange={setCity}
                  display={"Ваше місто"}
                  options={[
                    { label: "Львів", value: "lviv" },
                    { label: "Тернопіль", value: "ternopil" },
                    { label: "Хмельницький", value: "khmelnytskyi" },
                    { label: "Київ", value: "kyiv" },
                  ]}
                />
              </div>
            </DisclosureItem>
          </Disclosure>
        </Skeleton>
      </FilterDialog>
    </>
  );
}
