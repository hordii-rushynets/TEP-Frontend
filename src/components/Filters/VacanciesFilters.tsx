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
import { Address, ScopeOfWork, TypeOfEmployement, TypeOfWork } from "app/company/vacancies/interfaces";
import { VacancyService } from "app/company/vacancies/services";
import { generateDictionary, getTrueKeys } from "utils/helpers";
import { useLocalization } from "contexts/LocalizationContext";

type VacanciesFiltersProps = {
  count: number;
  onFilterChange: (key: string, value: string) => void
};

export default function VacanciesFilters({ count, onFilterChange }: VacanciesFiltersProps) {
  const vacancyService = new VacancyService();
  const { localization, staticData } = useLocalization();

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
  const [scope, setScope] = useState<{[key: string]: boolean}>({});
  const [type, setType] = useState<{[key: string]: boolean}>({});
  const [occupation, setOccupation] = useState<{[key: string]: boolean}>({});
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilter((params) => ({
        ...params,
        query: searchInputValue,
        page: "",
      }));
      onFilterChange(`title_${localization}`, searchInputValue);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchInputValue, filter, setFilter]);

  const [scopesOfWork, setScopesOfWork] = useState<ScopeOfWork[]>([]);
  const [typesOfWork, setTypesOfWork] = useState<TypeOfWork[]>([]);
  const [typesOfEmployement, setTypesOfEmployement] = useState<TypeOfEmployement[]>([]);
  const [addresses, setAddresses] = useState<Address[]>([]);
  
  useEffect(() => {
    vacancyService.getFiltersValues().then(filtersValues => {
      setScopesOfWork(filtersValues.scope_of_work);
      setTypesOfWork(filtersValues.type_of_work);
      setTypesOfEmployement(filtersValues.type_of_employment);
      setAddresses(filtersValues.address);
    });
  }, []);

  useEffect(() => {
    setScope(generateDictionary(scopesOfWork.map(scope => scope.name)));
  }, [scopesOfWork]);

  useEffect(() => {
    setType(generateDictionary(typesOfWork.map(type => type.name)));
  }, [typesOfWork]);

  useEffect(() => {
    setOccupation(generateDictionary(typesOfEmployement.map(occup => occup.name)));
  }, [typesOfEmployement]);

  useEffect(() => {
    onFilterChange("scope_of_work", getTrueKeys(scope));
  }, [scope]);

  useEffect(() => {
    onFilterChange("type_of_work", getTrueKeys(type));
  }, [type]);

  useEffect(() => {
    onFilterChange("type_of_employment", getTrueKeys(occupation));
  }, [occupation]);

  useEffect(() => {
    onFilterChange("region", region);
  }, [region]);

  useEffect(() => {
    onFilterChange("city", city);
  }, [city]);

  const [isCleanButtonDisabled, setIsCleanButtonDisabled] = useState(true);

  useEffect(() => {
    setIsCleanButtonDisabled(getTrueKeys(scope) + getTrueKeys(type) + getTrueKeys(occupation) + region + city === "");
  }, [scope, type, occupation, region, city]);

  return (
    <>
      <div className={"border-b border-tep_gray-200 md:pb-6"}>
        <TextInput
          className={{
            wrapper: "mb-14 max-w-[392px]",
          }}
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
          placeholder={staticData.filters.vacancyFilter.text1}
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
             {staticData.filters.vacancyFilter.text2}
            </Button>
            <Button
              onClick={() => setIsOpen(true)}
              colorVariant={"filter"}
              size={"filter"}
            >
              {staticData.filters.vacancyFilter.text3}
            </Button>
            <Button
              onClick={() => setIsOpen(true)}
              colorVariant={"filter"}
              size={"filter"}
            >
              {staticData.filters.vacancyFilter.text4}
            </Button>
            <Button
              onClick={() => setIsOpen(true)}
              colorVariant={"filter"}
              size={"filter"}
            >
              {staticData.filters.vacancyFilter.text5}
            </Button>
          </div>
          <span className={"text-sm font-bold text-tep_gray-500"}>
            {count} {staticData.filters.vacancyFilter.text7}
          </span>
        </div>
      </div>
      <FilterDialog open={isOpen} onClose={() => setIsOpen(false)}>
        <Skeleton count={count} title={staticData.filters.vacancyFilter.text6} onClick={() => setIsOpen(false)} isCleanButtonDisabled={isCleanButtonDisabled} cleanFIlter={() => {
          setScope(generateDictionary(scopesOfWork.map(scope => scope.name)));
          setType(generateDictionary(typesOfWork.map(type => type.name)));
          setOccupation(generateDictionary(typesOfEmployement.map(occup => occup.name)));
          setRegion("");
          setCity("");
        }}>
          <Disclosure>
            <DisclosureItem
              trigger={staticData.filters.vacancyFilter.text2}
              endIcon={<FiChevronDown className={"size-6"} />}
              className={{ triggerWrapper: "py-8 font-bold" }}
            >
              <div className={"flex max-w-[144px] flex-col gap-y-5 py-5"}>
                {scopesOfWork.map(s => (
                  <FilterCheckbox
                    key={s.name}
                    checked={scope[s.name]}
                    onChange={() =>
                      setScope((v) => ({ ...v, [s.name]: !v[s.name] }))
                    }
                    label={s[`name_${localization}` as keyof ScopeOfWork]}
                  />
                ))}
              </div>
            </DisclosureItem>
            <DisclosureItem
              trigger={staticData.filters.vacancyFilter.text8}
              endIcon={<FiChevronDown className={"size-6"} />}
              className={{ triggerWrapper: "py-8 font-bold" }}
            >
              <div className={"flex max-w-[138px] flex-col gap-y-5 py-5"}>
                {typesOfWork.map(t => (
                  <FilterCheckbox
                    key={t.name}
                    checked={type[t.name]}
                    onChange={() =>
                      setType((v) => ({ ...v, [t.name]: !v[t.name] }))
                    }
                    label={t[`name_${localization}` as keyof TypeOfWork]}
                  />
                ))}
              </div>
            </DisclosureItem>
            <DisclosureItem
              trigger={staticData.filters.vacancyFilter.text3}
              endIcon={<FiChevronDown className={"size-6"} />}
              className={{ triggerWrapper: "py-8 font-bold" }}
            >
              <div className={"flex max-w-[193px] flex-col gap-y-5 py-5"}>
                {typesOfEmployement.map(e => (
                  <FilterCheckbox
                    key={e.name}
                    checked={occupation[e.name]}
                    onChange={() =>
                      setOccupation((v) => ({ ...v, [e.name]: !v[e.name] }))
                    }
                    label={e[`name_${localization}` as keyof TypeOfEmployement]}
                  />
                ))}
              </div>
            </DisclosureItem>
            <DisclosureItem
              trigger={staticData.filters.vacancyFilter.text4}
              endIcon={<FiChevronDown className={"size-6"} />}
              className={{ triggerWrapper: "py-8 font-bold" }}
            >
              <div className={"flex flex-col gap-y-5 py-5"}>
                <SelectInput
                  value={region}
                  onChange={setRegion}
                  display={staticData.filters.vacancyFilter.text9}
                  options={addresses.map(address => ({
                    label: address[`region_${localization}` as keyof Address],
                    value: address.region
                  }))}
                />
              </div>
            </DisclosureItem>
            <DisclosureItem
              trigger={staticData.filters.vacancyFilter.text5}
              endIcon={<FiChevronDown className={"size-6"} />}
              className={{ triggerWrapper: "py-8 font-bold" }}
            >
              <div className={"flex flex-col gap-y-5 py-5"}>
                <SelectInput
                  value={city}
                  onChange={setCity}
                  display={staticData.filters.vacancyFilter.text10}
                  options={addresses.map(address => ({
                    label: address[`city_${localization}` as keyof Address],
                    value: address.city
                  }))}
                />
              </div>
            </DisclosureItem>
          </Disclosure>
        </Skeleton>
      </FilterDialog>
    </>
  );
}
