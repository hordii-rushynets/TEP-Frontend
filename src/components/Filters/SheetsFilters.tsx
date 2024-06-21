"use client";

import { useState } from "react";
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

type SheetsFiltersProps = {
  count: number;
};

export default function SheetsFilters({ count }: SheetsFiltersProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sort, setSort] = useState("suitable");
  const [fabric, setFabric] = useState({
    microfiber: false,
    bamboo: false,
  });
  const [type, setType] = useState({
    normal: false,
    waterproof: false,
  });
  const [size, setSize] = useState({
    "80х200": false,
    "90х200": false,
    "120х200": false,
    "140х200": false,
    "160х200": false,
    "180х200": false,
    "200х200": false,
  });

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
            <Button size={"filter"}>Порівняти</Button>
            <Button
              onClick={() => setIsFilterOpen(true)}
              size={"filter"}
              colorVariant={"filter"}
              endIcon={
                <FiChevronDown aria-hidden className={"size-6 select-none"} />
              }
            >
              Сортувати
            </Button>

            <Button
              onClick={() => setIsFilterOpen(true)}
              size={"filter"}
              colorVariant={"filter"}
            >
              Розмір
            </Button>
            <Button
              onClick={() => setIsFilterOpen(true)}
              size={"filter"}
              colorVariant={"filter"}
            >
              Тканина
            </Button>
            <Button
              onClick={() => setIsFilterOpen(true)}
              size={"filter"}
              colorVariant={"filter"}
            >
              Тип
            </Button>
            <Button
              onClick={() => setIsFilterOpen(true)}
              endIcon={<PiFadersBold className={"size-6"} />}
              size={"filter"}
              colorVariant={"filter"}
            >
              Всі фільтри
            </Button>
          </div>
          <div className={"text-sm font-bold text-tep_gray-700"}>
            {count} товара
          </div>
        </div>
        <FilterDialog
          open={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
        >
          <Skeleton onClick={() => setIsFilterOpen(false)}>
            <Disclosure>
              <DisclosureItem
                trigger={"Сортувати"}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"py-5"}>
                  <RadioGroupInput
                    value={sort}
                    onChange={setSort}
                    options={[
                      { label: "Найкраще підходять", value: "suitable" },
                      {
                        label: "Ціна: від низької до високої",
                        value: "asc",
                      },
                      { label: "Ціна: від високої до низької", value: "desc" },
                      { label: "Новинка", value: "new" },
                      { label: "Назва", value: "title" },
                      { label: "Найпопулярніше", value: "popular" },
                    ]}
                  />
                </div>
              </DisclosureItem>
              <DisclosureItem
                trigger={"Тканина"}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"flex max-w-[145px] flex-col gap-y-5 py-5"}>
                  <FilterCheckbox
                    checked={fabric.microfiber}
                    onChange={() =>
                      setFabric((v) => ({
                        ...v,
                        microfiber: !v.microfiber,
                      }))
                    }
                    label={"Мікрофібра"}
                  />
                  <FilterCheckbox
                    checked={fabric.bamboo}
                    onChange={() =>
                      setFabric((v) => ({
                        ...v,
                        bamboo: !v.bamboo,
                      }))
                    }
                    label={"Бамбук"}
                  />
                </div>
              </DisclosureItem>
              <DisclosureItem
                trigger={"Тип"}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"flex max-w-[151px] flex-col gap-y-5 py-5"}>
                  <FilterCheckbox
                    checked={type.normal}
                    onChange={() =>
                      setType((v) => ({
                        ...v,
                        normal: !v.normal,
                      }))
                    }
                    label={"Звичайне"}
                  />
                  <FilterCheckbox
                    checked={type.waterproof}
                    onChange={() =>
                      setType((v) => ({
                        ...v,
                        waterproof: !v.waterproof,
                      }))
                    }
                    label={"Водозахисне"}
                  />
                </div>
              </DisclosureItem>
              <DisclosureItem
                trigger={"Розмір"}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"flex max-w-[128px] flex-col gap-y-5 py-5"}>
                  <FilterCheckbox
                    checked={size["80х200"]}
                    onChange={() =>
                      setSize((v) => ({
                        ...v,
                        "80х200": !v["80х200"],
                      }))
                    }
                    label={"80 х 200"}
                  />
                  <FilterCheckbox
                    checked={size["90х200"]}
                    onChange={() =>
                      setSize((v) => ({
                        ...v,
                        "90х200": !v["90х200"],
                      }))
                    }
                    label={"90 х 200"}
                  />
                  <FilterCheckbox
                    checked={size["140х200"]}
                    onChange={() =>
                      setSize((v) => ({
                        ...v,
                        "140х200": !v["140х200"],
                      }))
                    }
                    label={"140 х 200"}
                  />
                  <FilterCheckbox
                    checked={size["160х200"]}
                    onChange={() =>
                      setSize((v) => ({
                        ...v,
                        "160х200": !v["160х200"],
                      }))
                    }
                    label={"160 х 200"}
                  />
                  <FilterCheckbox
                    checked={size["180х200"]}
                    onChange={() =>
                      setSize((v) => ({
                        ...v,
                        "180х200": !v["180х200"],
                      }))
                    }
                    label={"180 х 200"}
                  />{" "}
                  <FilterCheckbox
                    checked={size["200х200"]}
                    onChange={() =>
                      setSize((v) => ({
                        ...v,
                        "200х200": !v["200х200"],
                      }))
                    }
                    label={"200 х 200"}
                  />
                </div>
              </DisclosureItem>
            </Disclosure>
          </Skeleton>
        </FilterDialog>
      </Container>
    </Section>
  );
}
