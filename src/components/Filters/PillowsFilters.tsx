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
};

export default function PillowsFilters({ count }: PillowsFiltersProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sort, setSort] = useState("suitable");
  const [filler, setFiller] = useState({
    aloe: false,
    bamboo: false,
    nettle: false,
    soy: false,
    sheep_wool: false,
    fluff: false,
    cotton: false,
    double_air: false,
    fluff_feather: false,
  });
  const [outerFabric, setOuterFabric] = useState({
    cotton: false,
    microfiber: false,
    microfiber_membrana: false,
  });
  const [size, setSize] = useState({
    "50х70": false,
    "70х70": false,
  });
  const [coverFiller, setCoverFiller] = useState({
    aloe: false,
    bamboo: false,
    nettle: false,
    soy: false,
    sheep_wool: false,
    fluff: false,
    cotton: false,
    double_air: false,
  });
  const [kind, setKind] = useState({
    orthopedic: false,
    soft: false,
    elastic: false,
    average: false,
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
              Тканина
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
                    checked={filler.fluff_feather}
                    onChange={() =>
                      setFiller((v) => ({
                        ...v,
                        fluff_feather: !v.fluff_feather,
                      }))
                    }
                    label={"Пух перо"}
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
                <div className={"max-w-[110px] py-5"}>
                  <FilterCheckbox
                    checked={size["50х70"]}
                    onChange={() =>
                      setSize((v) => ({ ...v, "50х70": !v["50х70"] }))
                    }
                    label={"50 х 70"}
                  />
                  <FilterCheckbox
                    checked={size["70х70"]}
                    onChange={() =>
                      setSize((v) => ({
                        ...v,
                        "70х70": !v["70х70"],
                      }))
                    }
                    label={"70 х 70"}
                    className={{ wrapper: "mt-5" }}
                  />
                </div>
              </DisclosureItem>
              <DisclosureItem
                trigger={"Наповнювач чохла"}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"columns-2 gap-x-12 py-5"}>
                  <FilterCheckbox
                    checked={coverFiller.aloe}
                    onChange={() =>
                      setCoverFiller((v) => ({ ...v, aloe: !v.aloe }))
                    }
                    label={"Алое Вера"}
                  />
                  <FilterCheckbox
                    checked={coverFiller.bamboo}
                    onChange={() =>
                      setCoverFiller((v) => ({ ...v, bamboo: !v.bamboo }))
                    }
                    label={"Бамбук"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={coverFiller.nettle}
                    onChange={() =>
                      setCoverFiller((v) => ({ ...v, nettle: !v.nettle }))
                    }
                    label={"Кропива"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={coverFiller.soy}
                    onChange={() =>
                      setCoverFiller((v) => ({ ...v, soy: !v.soy }))
                    }
                    label={"Соя"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={coverFiller.sheep_wool}
                    onChange={() =>
                      setCoverFiller((v) => ({
                        ...v,
                        sheep_wool: !v.sheep_wool,
                      }))
                    }
                    label={"Овеча Шерсть"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={coverFiller.fluff}
                    onChange={() =>
                      setCoverFiller((v) => ({ ...v, fluff: !v.fluff }))
                    }
                    label={"Штучний пух"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={coverFiller.cotton}
                    onChange={() =>
                      setCoverFiller((v) => ({ ...v, cotton: !v.cotton }))
                    }
                    label={"Бавовна"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={coverFiller.double_air}
                    onChange={() =>
                      setCoverFiller((v) => ({
                        ...v,
                        double_air: !v.double_air,
                      }))
                    }
                    label={"Double Air"}
                    className={{ wrapper: "mt-5" }}
                  />
                </div>
              </DisclosureItem>
              <DisclosureItem
                trigger={"Вид"}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"max-w-[150px] gap-x-12 py-5"}>
                  <FilterCheckbox
                    checked={kind.orthopedic}
                    onChange={() =>
                      setKind((v) => ({ ...v, orthopedic: !v.orthopedic }))
                    }
                    label={"Ортопедичні"}
                  />
                  <FilterCheckbox
                    checked={kind.soft}
                    onChange={() => setKind((v) => ({ ...v, soft: !v.soft }))}
                    label={"М'які"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={kind.elastic}
                    onChange={() =>
                      setKind((v) => ({ ...v, elastic: !v.elastic }))
                    }
                    label={"Пружні"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={kind.average}
                    onChange={() =>
                      setKind((v) => ({ ...v, average: !v.average }))
                    }
                    label={"Середні"}
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
