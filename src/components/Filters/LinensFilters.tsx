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
import { GrayCheckbox } from "./ColorCheckboxes/GrayCheckbox";
import { DesignCheckbox } from "./DesignCheckboxes/DesignCheckbox ";
import AbstractionIMG from "./DesignCheckboxes/static/abstraction.png";
import FlowersIMG from "./DesignCheckboxes/static/flowers.png";
import GeometryIMG from "./DesignCheckboxes/static/geometry.png";
import { FilterDialog } from "./FilterDialog";
import { Skeleton } from "./Skeleton";

type LinensFiltersProps = {
  count: number;
};

export default function LinensFilters({ count }: LinensFiltersProps) {
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
  const [design, setDesign] = useState({
    abstraction: false,
    geometry: false,
    flowers: false,
    one_tone: false,
  });
  const [fabric, setFabric] = useState({
    cotton_maize: false,
  });
  const [size, setSize] = useState({
    one_and_a_half: false,
    eurostandard: false,
    two_bedroom: false,
    family: false,
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
                trigger={"Дизайн"}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"grid grid-cols-4 gap-y-8 py-5"}>
                  <DesignCheckbox
                    checked={design.abstraction}
                    onChange={() =>
                      setDesign((v) => ({ ...v, abstraction: !v.abstraction }))
                    }
                    label={"Абстракція"}
                    image={AbstractionIMG}
                  />
                  <DesignCheckbox
                    checked={design.geometry}
                    onChange={() =>
                      setDesign((v) => ({ ...v, geometry: !v.geometry }))
                    }
                    label={"Геометрія"}
                    image={GeometryIMG}
                  />
                  <DesignCheckbox
                    checked={design.flowers}
                    onChange={() =>
                      setDesign((v) => ({ ...v, flowers: !v.flowers }))
                    }
                    label={"Квіти"}
                    image={FlowersIMG}
                  />
                  <GrayCheckbox
                    checked={design.one_tone}
                    onChange={() =>
                      setDesign((v) => ({ ...v, one_tone: !v.one_tone }))
                    }
                    label={"Однотонне"}
                  />
                </div>
              </DisclosureItem>
              <DisclosureItem
                trigger={"Тканина"}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"max-w-[145px] py-5"}>
                  <FilterCheckbox
                    checked={fabric.cotton_maize}
                    onChange={() =>
                      setFabric((v) => ({
                        ...v,
                        cotton_maize: !v.cotton_maize,
                      }))
                    }
                    label={"Бавовна (бязь)"}
                  />
                </div>
              </DisclosureItem>
              <DisclosureItem
                trigger={"Розмір "}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"max-w-[161px] py-5"}>
                  <FilterCheckbox
                    checked={size.one_and_a_half}
                    onChange={() =>
                      setSize((v) => ({
                        ...v,
                        one_and_a_half: !v.one_and_a_half,
                      }))
                    }
                    label={"Полуторний"}
                  />
                  <FilterCheckbox
                    checked={size.eurostandard}
                    onChange={() =>
                      setSize((v) => ({
                        ...v,
                        eurostandard: !v.eurostandard,
                      }))
                    }
                    label={"Євростандарт"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={size.two_bedroom}
                    onChange={() =>
                      setSize((v) => ({
                        ...v,
                        two_bedroom: !v.two_bedroom,
                      }))
                    }
                    label={"Двухспальний"}
                    className={{ wrapper: "mt-5" }}
                  />
                  <FilterCheckbox
                    checked={size.family}
                    onChange={() =>
                      setSize((v) => ({
                        ...v,
                        family: !v.family,
                      }))
                    }
                    label={"Сімейний"}
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
