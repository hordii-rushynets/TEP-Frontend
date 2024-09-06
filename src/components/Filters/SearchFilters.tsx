"use client";

import { HTMLAttributes, useEffect, useState } from "react";
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
  ColorCheckbox,
} from "./ColorCheckboxes";
import { FilterDialog } from "./FilterDialog";
import { Skeleton } from "./Skeleton";
import { Color, Material, Size } from "app/goods/[category]/page";
import { SearchService } from "app/search/services";
import { generateDictionary, getTrueKeys } from "utils/helpers";
import { useLocalization } from "contexts/LocalizationContext";

type SearchFiltersProps = {
  count: number;
  onFilterChange: (key: string, value: string) => void;
  sort: string;
  setSort: (v: string) => void;
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export default function SearchFilters({
  count,
  className,
  onFilterChange,
  sort, 
  setSort
}: SearchFiltersProps) {
  const { localization, staticData } = useLocalization();

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [color, setColor] = useState<{[key: string]: boolean}>({});
  const [material, setMaterial] = useState<{[key: string]: boolean}>({});
  const [size, setSize] = useState<{[key: string]: boolean}>({});

  const [sizes, setSizes] = useState<Size[]>([]);
  const [colors, setColors] = useState<Color[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);

  const searchService = new SearchService();

  useEffect(() => {
    searchService.getSearchFilterFields().then(filtersValues => {
      setSizes(filtersValues.size);
      setColors(filtersValues.color);
      setMaterials(filtersValues.material);
    });
  }, []);

  useEffect(() => {
    setSize(generateDictionary(sizes.map(size => size.title)));
  }, [sizes]);

  useEffect(() => {
    setColor(generateDictionary(colors.map(color => color.title)));
  }, [colors]);

  useEffect(() => {
    setMaterial(generateDictionary(materials.map(material => material.title)));
  }, [materials]);

  useEffect(() => {
    onFilterChange("size", getTrueKeys(size));
  }, [size]);

  useEffect(() => {
    onFilterChange("color", getTrueKeys(color));
  }, [color]);

  useEffect(() => {
    onFilterChange("material", getTrueKeys(material));
  }, [material]);

  const [isCleanButtonDisabled, setIsCleanButtonDisabled] = useState(true);

  useEffect(() => {
    setIsCleanButtonDisabled(getTrueKeys(size) + getTrueKeys(color) + getTrueKeys(material) === "");
  }, [size, material, color]);

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
              {staticData.filters.searchFilter.text1}
            </Button>

            <Button
              onClick={() => setIsFilterOpen(true)}
              size={"filter"}
              colorVariant={"filter"}
            >
              {staticData.filters.searchFilter.text2}
            </Button>

            <Button
              onClick={() => setIsFilterOpen(true)}
              size={"filter"}
              colorVariant={"filter"}
            >
              {staticData.filters.searchFilter.text3}
            </Button>
            <Button
              onClick={() => setIsFilterOpen(true)}
              size={"filter"}
              colorVariant={"filter"}
            >
              {staticData.filters.searchFilter.text4}
            </Button>
            <Button
              onClick={() => setIsFilterOpen(true)}
              endIcon={<PiFadersBold className={"size-6"} />}
              size={"filter"}
              colorVariant={"filter"}
            >
              {staticData.filters.searchFilter.text5}
            </Button>
          </div>
          <div className={"text-sm font-bold text-tep_gray-700"}>
            {count} {staticData.filters.searchFilter.text6}
          </div>
        </div>
        <FilterDialog
          open={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
        >
          <Skeleton count={count} onClick={() => setIsFilterOpen(false)} isCleanButtonDisabled={isCleanButtonDisabled} cleanFIlter={() => {
              setSize(generateDictionary(sizes.map(size => size.title)));
              setColor(generateDictionary(colors.map(color => color.title)));
              setMaterial(generateDictionary(materials.map(material => material.title)));
            }}>
            <Disclosure>
              <DisclosureItem
                trigger={staticData.filters.searchFilter.text1}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"py-5"}>
                  <RadioGroupInput
                    value={sort}
                    onChange={setSort}
                    options={[
                      { label: staticData.filters.searchFilter.text7, value: "suitable" },
                      {
                        label: staticData.filters.searchFilter.text8,
                        value: "asc",
                      },
                      { label: staticData.filters.searchFilter.text9, value: "desc" },
                      { label: staticData.filters.searchFilter.text10, value: "new" },
                      { label: staticData.filters.searchFilter.text11, value: "title" },
                      { label: staticData.filters.searchFilter.text12, value: "popular" },
                    ]}
                  />
                </div>
              </DisclosureItem>
              <DisclosureItem
                trigger={staticData.filters.searchFilter.text3}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"grid grid-cols-4 gap-y-8 py-5"}>
                  {colors.map((c, indx) => 
                    <ColorCheckbox
                      checked={color[c.title]}
                      onChange={() => setColor((v) => ({ ...v, [c.title]: !v[c.title] }))}
                      label={c[`title_${localization}` as keyof Color]}
                      hex={c.hex}
                      key={indx}
                    />
                  )}
                </div>
              </DisclosureItem>
              <DisclosureItem
                trigger={staticData.filters.searchFilter.text13}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"max-w-[142px] py-5"}>
                  {materials.map((m, indx) => 
                    <FilterCheckbox
                      checked={material[m.title]}
                      onChange={() =>
                        setMaterial((v) => ({ ...v, [m.title]: !v[m.title] }))
                      }
                      label={m[`title_${localization}` as keyof Material]}
                      key={indx}
                    />
                  )}
                </div>
              </DisclosureItem>
              <DisclosureItem
                trigger={staticData.filters.searchFilter.text2}
                endIcon={<FiChevronDown className={"size-6"} />}
                className={{ triggerWrapper: "py-8 font-bold" }}
              >
                <div className={"max-w-[127px] py-5"}>
                  {sizes.map((s, indx) => 
                    <FilterCheckbox
                      checked={size[s.title]}
                      onChange={() =>
                        setSize((v) => ({ ...v, [s.title]: !v[s.title] }))
                      }
                      label={s[`title_${localization}` as keyof Size]}
                      key={indx}
                    />
                  )}
                </div>
              </DisclosureItem>
            </Disclosure>
          </Skeleton>
        </FilterDialog>
      </Container>
    </Section>
  );
}
