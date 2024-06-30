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
  Title,
} from "common/ui";

import { FilterDialog } from "./FilterDialog";
import { Skeleton } from "./Skeleton";

type PillowsFiltersProps = {
  count: number;
};

export default function ToppersFilters({ count }: PillowsFiltersProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sort, setSort] = useState("suitable");
  const [design, setDesign] = useState({
    rubber_band: false,
    cover: false,
  });
  const [fabric, setFabric] = useState({
    micropolyester: false,
    microfiber: false,
  });
  const [size, setSize] = useState({
    cover: {
      "80х200": false,
      "90х200": false,
      "120х200": false,
      "140х200": false,
      "160х200": false,
      "180х200": false,
      "200х200": false,
    },
    rubber_band: {
      "80х200х30": false,
      "90х200х30": false,
      "120х200х30": false,
      "140х200х30": false,
      "160х200х30": false,
      "180х200х30": false,
      "200х200х30": false,
    },
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
              Дизайн
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
                trigger={"Дизайн"}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"max-w-[136px] py-5"}>
                  <FilterCheckbox
                    checked={design.rubber_band}
                    onChange={() =>
                      setDesign((v) => ({ ...v, rubber_band: !v.rubber_band }))
                    }
                    label={"На резинці"}
                  />
                  <FilterCheckbox
                    checked={design.cover}
                    onChange={() =>
                      setDesign((v) => ({ ...v, cover: !v.cover }))
                    }
                    label={"Чохол"}
                    className={{ wrapper: "mt-5" }}
                  />
                </div>
              </DisclosureItem>
              <DisclosureItem
                trigger={"Тканина"}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"max-w-[160px] py-5"}>
                  <FilterCheckbox
                    checked={fabric.micropolyester}
                    onChange={() =>
                      setFabric((v) => ({
                        ...v,
                        micropolyester: !v.micropolyester,
                      }))
                    }
                    label={"Мікрополіестр"}
                  />
                  <FilterCheckbox
                    checked={fabric.microfiber}
                    onChange={() =>
                      setFabric((v) => ({
                        ...v,
                        microfiber: !v.microfiber,
                      }))
                    }
                    label={"Мікрофібра"}
                    className={{ wrapper: "mt-5" }}
                  />
                </div>
              </DisclosureItem>
              <DisclosureItem
                trigger={"Розмір "}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"grid grid-cols-2 py-5"}>
                  <div className={"flex max-w-[128px] flex-col gap-y-5"}>
                    <Title component={"h6"} size={"base"}>
                      Для чохла
                    </Title>
                    <FilterCheckbox
                      checked={size.cover["80х200"]}
                      onChange={() =>
                        setSize((v) => ({
                          rubber_band: { ...v.rubber_band },
                          cover: { ...v.cover, "80х200": !v.cover["80х200"] },
                        }))
                      }
                      label={"80 х 200"}
                    />
                    <FilterCheckbox
                      checked={size.cover["90х200"]}
                      onChange={() =>
                        setSize((v) => ({
                          rubber_band: { ...v.rubber_band },
                          cover: { ...v.cover, "90х200": !v.cover["90х200"] },
                        }))
                      }
                      label={"90 х 200"}
                    />
                    <FilterCheckbox
                      checked={size.cover["120х200"]}
                      onChange={() =>
                        setSize((v) => ({
                          rubber_band: { ...v.rubber_band },
                          cover: { ...v.cover, "120х200": !v.cover["120х200"] },
                        }))
                      }
                      label={"120 х 200"}
                    />
                    <FilterCheckbox
                      checked={size.cover["140х200"]}
                      onChange={() =>
                        setSize((v) => ({
                          rubber_band: { ...v.rubber_band },
                          cover: { ...v.cover, "140х200": !v.cover["140х200"] },
                        }))
                      }
                      label={"140 х 200"}
                    />
                    <FilterCheckbox
                      checked={size.cover["160х200"]}
                      onChange={() =>
                        setSize((v) => ({
                          rubber_band: { ...v.rubber_band },
                          cover: { ...v.cover, "160х200": !v.cover["160х200"] },
                        }))
                      }
                      label={"160 х 200"}
                    />
                    <FilterCheckbox
                      checked={size.cover["180х200"]}
                      onChange={() =>
                        setSize((v) => ({
                          rubber_band: { ...v.rubber_band },
                          cover: { ...v.cover, "180х200": !v.cover["180х200"] },
                        }))
                      }
                      label={"180 х 200"}
                    />
                    <FilterCheckbox
                      checked={size.cover["200х200"]}
                      onChange={() =>
                        setSize((v) => ({
                          rubber_band: { ...v.rubber_band },
                          cover: { ...v.cover, "200х200": !v.cover["200х200"] },
                        }))
                      }
                      label={"200 х 200"}
                    />
                  </div>
                  <div className={"flex flex-col gap-y-5"}>
                    <Title component={"h6"} size={"base"}>
                      На резинці
                    </Title>
                    <FilterCheckbox
                      checked={size.rubber_band["80х200х30"]}
                      onChange={() =>
                        setSize((v) => ({
                          cover: { ...v.cover },
                          rubber_band: {
                            ...v.rubber_band,
                            "80х200х30": !v.rubber_band["80х200х30"],
                          },
                        }))
                      }
                      label={"80 х 200 x 30"}
                    />
                    <FilterCheckbox
                      checked={size.rubber_band["90х200х30"]}
                      onChange={() =>
                        setSize((v) => ({
                          cover: { ...v.cover },
                          rubber_band: {
                            ...v.rubber_band,
                            "90х200х30": !v.rubber_band["90х200х30"],
                          },
                        }))
                      }
                      label={"90 х 200 x 30"}
                    />
                    <FilterCheckbox
                      checked={size.rubber_band["120х200х30"]}
                      onChange={() =>
                        setSize((v) => ({
                          cover: { ...v.cover },
                          rubber_band: {
                            ...v.rubber_band,
                            "120х200х30": !v.rubber_band["120х200х30"],
                          },
                        }))
                      }
                      label={"120 х 200 x 30"}
                    />
                    <FilterCheckbox
                      checked={size.rubber_band["140х200х30"]}
                      onChange={() =>
                        setSize((v) => ({
                          cover: { ...v.cover },
                          rubber_band: {
                            ...v.rubber_band,
                            "140х200х30": !v.rubber_band["140х200х30"],
                          },
                        }))
                      }
                      label={"140 х 200 x 30"}
                    />
                    <FilterCheckbox
                      checked={size.rubber_band["160х200х30"]}
                      onChange={() =>
                        setSize((v) => ({
                          cover: { ...v.cover },
                          rubber_band: {
                            ...v.rubber_band,
                            "160х200х30": !v.rubber_band["160х200х30"],
                          },
                        }))
                      }
                      label={"160 х 200 x 30"}
                    />
                    <FilterCheckbox
                      checked={size.rubber_band["180х200х30"]}
                      onChange={() =>
                        setSize((v) => ({
                          cover: { ...v.cover },
                          rubber_band: {
                            ...v.rubber_band,
                            "180х200х30": !v.rubber_band["180х200х30"],
                          },
                        }))
                      }
                      label={"180 х 200 x 30"}
                    />
                    <FilterCheckbox
                      checked={size.rubber_band["200х200х30"]}
                      onChange={() =>
                        setSize((v) => ({
                          cover: { ...v.cover },
                          rubber_band: {
                            ...v.rubber_band,
                            "200х200х30": !v.rubber_band["200х200х30"],
                          },
                        }))
                      }
                      label={"200 х 200 x 30"}
                    />
                  </div>
                </div>
              </DisclosureItem>
            </Disclosure>
          </Skeleton>
        </FilterDialog>
      </Container>
    </Section>
  );
}
