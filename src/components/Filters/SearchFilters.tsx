"use client";

import { HTMLAttributes, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { PiFadersBold } from "react-icons/pi";
import { cn } from "utils/cn";

import { Disclosure, DisclosureItem } from "common/Disclosure";
import {
  Button,
  Container,
  FilterCheckbox,
  RadioGroupInput,
  Section,
} from "common/ui";

import {
  BlueCheckbox,
  DarkGreenCheckbox,
  DarkPinkCheckbox,
  GreenCheckbox,
  LightBlueCheckbox,
  LightGreenCheckbox,
  PinkCheckbox,
  WhiteCheckbox,
} from "./ColorCheckboxes";
import { FilterDialog } from "./FilterDialog";
import { Skeleton } from "./Skeleton";

type SearchFiltersProps = {
  count: number;
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export default function SearchFilters({
  count,
  className,
}: SearchFiltersProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sort, setSort] = useState("suitable");
  const [color, setColor] = useState({
    blue: false,
    light_blue: false,
    dark_green: false,
    green: false,
    light_green: false,
    pink: false,
    dark_pink: false,
    white: false,
  });
  const [fabric, setFabric] = useState({
    velor: false,
    microfiber: false,
  });
  const [size, setSize] = useState({
    "150х210": false,
    "180х240": false,
    "220х240": false,
    "240х260": false,
  });

  return (
    <Section className={"overflow-x-hidden"}>
      <Container>
        <div
          className={cn(
            "flex flex-col-reverse justify-between gap-y-6 border-b border-tep_gray-200 pb-6 lg:flex-row lg:items-center",
            className,
          )}
        >
          <div
            className={"-mb-2 flex flex-nowrap gap-x-4 overflow-x-scroll pb-2"}
          >
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
              Колір
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
                trigger={"Колір"}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"grid grid-cols-4 gap-y-8 py-5"}>
                  <BlueCheckbox
                    checked={color.blue}
                    onChange={() => setColor((v) => ({ ...v, blue: !v.blue }))}
                    label={"Синій"}
                  />
                  <LightBlueCheckbox
                    checked={color.light_blue}
                    onChange={() =>
                      setColor((v) => ({ ...v, light_blue: !v.light_blue }))
                    }
                    label={"Блакитний"}
                  />
                  <DarkGreenCheckbox
                    checked={color.dark_green}
                    onChange={() =>
                      setColor((v) => ({ ...v, dark_green: !v.dark_green }))
                    }
                    label={"Темно зелений"}
                  />
                  <GreenCheckbox
                    checked={color.green}
                    onChange={() =>
                      setColor((v) => ({ ...v, green: !v.green }))
                    }
                    label={"Зелений"}
                  />
                  <LightGreenCheckbox
                    checked={color.light_green}
                    onChange={() =>
                      setColor((v) => ({ ...v, light_green: !v.light_green }))
                    }
                    label={"Світло зелений"}
                  />
                  <PinkCheckbox
                    checked={color.pink}
                    onChange={() => setColor((v) => ({ ...v, pink: !v.pink }))}
                    label={"Рожевий"}
                  />
                  <DarkPinkCheckbox
                    checked={color.dark_pink}
                    onChange={() =>
                      setColor((v) => ({ ...v, dark_pink: !v.dark_pink }))
                    }
                    label={"Темно рожевий"}
                  />
                  <WhiteCheckbox
                    checked={color.white}
                    onChange={() =>
                      setColor((v) => ({ ...v, white: !v.white }))
                    }
                    label={"Білий"}
                  />
                </div>
              </DisclosureItem>
              <DisclosureItem
                trigger={"Тканина"}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"max-w-[142px] py-5"}>
                  <FilterCheckbox
                    checked={fabric.velor}
                    onChange={() =>
                      setFabric((v) => ({ ...v, velor: !v.velor }))
                    }
                    label={"Велюр"}
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
                <div className={"max-w-[127px] py-5"}>
                  <FilterCheckbox
                    checked={size["150х210"]}
                    onChange={() =>
                      setSize((v) => ({ ...v, "150х210": !v["150х210"] }))
                    }
                    label={"150 х 210"}
                  />
                  <FilterCheckbox
                    checked={size["180х240"]}
                    onChange={() =>
                      setSize((v) => ({
                        ...v,
                        "180х240": !v["180х240"],
                      }))
                    }
                    label={"180 х 240"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={size["220х240"]}
                    onChange={() =>
                      setSize((v) => ({
                        ...v,
                        "220х240": !v["220х240"],
                      }))
                    }
                    label={"220 х 240"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={size["240х260"]}
                    onChange={() =>
                      setSize((v) => ({
                        ...v,
                        "240х260": !v["240х260"],
                      }))
                    }
                    label={"240 х 260"}
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
