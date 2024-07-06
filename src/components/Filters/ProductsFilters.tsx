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

type PillowsFiltersProps = {
  count: number;
  sort: string;
  setSort: (string: string) => void;
};

export default function ProductsFilters({ count, sort, setSort }: PillowsFiltersProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filler, setFiller] = useState({
    aloe: false,
    bamboo: false,
    nettle: false,
    soy: false,
    sheep_wool: false,
    fluff: false,
    cotton: false,
    double_air: false,
    quadro_air: false,
  });
  const [outerFabric, setOuterFabric] = useState({
    cotton: false,
    microfiber: false,
    microfiber_membrana: false,
  });
  const [size, setSize] = useState({
    "140х210": false,
    "175х210": false,
    "200х220": false,
  });
  const [season, setSeason] = useState({
    all_season: false,
    summer: false,
    winter: false,
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
              Наповнювач
            </Button>
            <Button
              onClick={() => setIsFilterOpen(true)}
              size={"filter"}
              colorVariant={"filter"}
            >
              Зовнішня тканина
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
                trigger={"Наповнювач"}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"columns-2 gap-x-12 py-5"}>
                  <FilterCheckbox
                    checked={filler.aloe}
                    onChange={() => setFiller((v) => ({ ...v, aloe: !v.aloe }))}
                    label={"Алое Вера"}
                  />
                  <FilterCheckbox
                    checked={filler.bamboo}
                    onChange={() =>
                      setFiller((v) => ({ ...v, bamboo: !v.bamboo }))
                    }
                    label={"Бамбук"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={filler.nettle}
                    onChange={() =>
                      setFiller((v) => ({ ...v, nettle: !v.nettle }))
                    }
                    label={"Кропива"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={filler.soy}
                    onChange={() => setFiller((v) => ({ ...v, soy: !v.soy }))}
                    label={"Соя"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={filler.sheep_wool}
                    onChange={() =>
                      setFiller((v) => ({ ...v, sheep_wool: !v.sheep_wool }))
                    }
                    label={"Овеча Шерсть"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={filler.fluff}
                    onChange={() =>
                      setFiller((v) => ({ ...v, fluff: !v.fluff }))
                    }
                    label={"Штучний пух"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={filler.cotton}
                    onChange={() =>
                      setFiller((v) => ({ ...v, cotton: !v.cotton }))
                    }
                    label={"Бавовна"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={filler.double_air}
                    onChange={() =>
                      setFiller((v) => ({ ...v, double_air: !v.double_air }))
                    }
                    label={"Double Air"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={filler.quadro_air}
                    onChange={() =>
                      setFiller((v) => ({
                        ...v,
                        quadro_air: !v.quadro_air,
                      }))
                    }
                    label={"Quadro Air"}
                    className={{ wrapper: "mt-5" }}
                  />
                </div>
              </DisclosureItem>
              <DisclosureItem
                trigger={"Зовнішня тканина"}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"max-w-[212px] py-5"}>
                  <FilterCheckbox
                    checked={outerFabric.cotton}
                    onChange={() =>
                      setOuterFabric((v) => ({ ...v, cotton: !v.cotton }))
                    }
                    label={"Бавовна"}
                  />
                  <FilterCheckbox
                    checked={outerFabric.microfiber}
                    onChange={() =>
                      setOuterFabric((v) => ({
                        ...v,
                        microfiber: !v.microfiber,
                      }))
                    }
                    label={"Мікрофібра"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={outerFabric.microfiber_membrana}
                    onChange={() =>
                      setOuterFabric((v) => ({
                        ...v,
                        microfiber_membrana: !v.microfiber_membrana,
                      }))
                    }
                    label={"Мікрофібра Membrana"}
                    className={{ wrapper: "mt-5" }}
                  />
                </div>
              </DisclosureItem>
              <DisclosureItem
                trigger={"Розмір "}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"max-w-[127px] py-5"}>
                  <FilterCheckbox
                    checked={size["140х210"]}
                    onChange={() =>
                      setSize((v) => ({ ...v, "140х210": !v["140х210"] }))
                    }
                    label={"140 х 210"}
                  />
                  <FilterCheckbox
                    checked={size["175х210"]}
                    onChange={() =>
                      setSize((v) => ({
                        ...v,
                        "175х210": !v["175х210"],
                      }))
                    }
                    label={"175 х 210"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={size["200х220"]}
                    onChange={() =>
                      setSize((v) => ({
                        ...v,
                        "200х220": !v["200х220"],
                      }))
                    }
                    label={"200 х 220"}
                    className={{ wrapper: "mt-5" }}
                  />
                </div>
              </DisclosureItem>
              <DisclosureItem
                trigger={"Сезон"}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"max-w-[148px] gap-x-12 py-5"}>
                  <FilterCheckbox
                    checked={season.all_season}
                    onChange={() =>
                      setSeason((v) => ({ ...v, all_season: !v.all_season }))
                    }
                    label={"Всесезонне"}
                  />
                  <FilterCheckbox
                    checked={season.summer}
                    onChange={() =>
                      setSeason((v) => ({ ...v, summer: !v.summer }))
                    }
                    label={"Літнє"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={season.winter}
                    onChange={() =>
                      setSeason((v) => ({ ...v, winter: !v.winter }))
                    }
                    label={"Зимнє"}
                    className={{ wrapper: "mt-5" }}
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
