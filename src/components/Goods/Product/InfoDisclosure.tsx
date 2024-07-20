"use client";

import { Feedback } from "app/goods/[category]/[product]/page";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { cn } from "utils/cn";

import { Disclosure, DisclosureItem } from "common/Disclosure";
import { Title } from "common/ui";
import { FilterDialog } from "components/Filters/FilterDialog";
import { DimensionalGrid, DimensionalGridSize, VariantInfo } from "app/goods/[category]/page";

import { useLocalization } from "contexts/LocalizationContext";

import { Article } from "./Article";

type InfoDisclosure = {
  feedbacks: Feedback[];
  info: VariantInfo;
  description: string;
  dimensionalGrid: DimensionalGrid[];
};

export function InfoDisclosure({ feedbacks, info, description, dimensionalGrid }: InfoDisclosure) {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isSizeOpen, setIsSizeOpen] = useState(false);

  const { staticData } = useLocalization();

  return (
    <>
      <div className={"mb-24 mt-[72px] max-w-full"}>
        <Disclosure>
          <DisclosureItem
            onClick={() => setIsInfoOpen(true)}
            trigger={
              <Title component={"h4"} size={"xl"}>
                Інформація про товар
              </Title>
            }
          />
          <DisclosureItem
            onClick={() => setIsSizeOpen(true)}
            trigger={
              <Title component={"h4"} size={"xl"}>
                Розмірна сітка
              </Title>
            }
          />
          {!!feedbacks.length && (
            <DisclosureItem
              trigger={
                <Title component={"h4"} size={"xl"}>
                  Відгуки
                </Title>
              }
            >
              <div className={"grid grid-cols-1 gap-5 sm:grid-cols-2"}>
                {feedbacks.map((feedback, Idx) => (
                  <div
                    key={Idx}
                    className={"rounded-[20px] bg-tep_gray-200 px-7 py-6"}
                  >
                    <div className={"mb-2 flex items-center justify-between"}>
                      <Title className={"!text-sm"}>{feedback.title}</Title>
                      <div
                        className={
                          "flex items-center gap-x-1 text-sm font-bold"
                        }
                      >
                        <FaStar className={"size-3"} />
                        <span>{feedback.rating}</span>
                      </div>
                    </div>
                    <p className={"text-xs font-light leading-none"}>
                      {feedback.description}
                    </p>
                  </div>
                ))}
              </div>
            </DisclosureItem>
          )}
        </Disclosure>
      </div>
      <FilterDialog open={isInfoOpen} onClose={() => setIsInfoOpen(false)}>
        <InfoSkeleton
          title={"Інформація про товар"}
          description={
            description
          }
        >
          <Disclosure>
            <DisclosureItem
              trigger={"Матеріали та догляд"}
              endIcon={<FiChevronDown className={"size-6"} />}
              className={{ triggerWrapper: "py-8 font-bold" }}
            >
              <div>
                <p className={"mb-5 text-sm lg:font-extralight"}>
                  {info[(`material_and_care_${staticData.backendPostfix}` || "material_and_care") as keyof VariantInfo].toString()}
                </p>
              </div>
            </DisclosureItem>
            <DisclosureItem
              trigger={"Екологія та довкілля"}
              endIcon={<FiChevronDown className={"size-6"} />}
              className={{ triggerWrapper: "py-8 font-bold" }}
            >
              <p className={"text-sm lg:font-extralight"}>
                {info[(`ecology_and_environment_${staticData.backendPostfix}` || "ecology_and_environment") as keyof VariantInfo].toString()}
              </p>
            </DisclosureItem>
            <DisclosureItem
              trigger={"Упаковка"}
              endIcon={<FiChevronDown className={"size-6"} />}
              className={{ triggerWrapper: "py-8 font-bold" }}
            >
              <div>
                <p className={"mb-5 text-sm lg:font-extralight"}>
                  {info[(`packaging_${staticData.backendPostfix}` || "packaging") as keyof VariantInfo].toString()}
                </p>
              </div>
            </DisclosureItem>
          </Disclosure>
        </InfoSkeleton>
      </FilterDialog>
      <FilterDialog open={isSizeOpen} onClose={() => setIsSizeOpen(false)}>
        <InfoSkeleton title={"Розмірна сітка"}>
          <Disclosure>
            {dimensionalGrid.map(grid => (
              <div className={"flex gap-x-2 py-8"}>
                <Title className={"basis-32"} component={"h6"} size={"base"}>
                  {grid[`title_${staticData.backendPostfix}` as keyof DimensionalGrid] as string}
                </Title>
                <div
                  className={
                    "flex flex-1 flex-col gap-y-2 text-sm lg:font-extralight"
                  }
                >
                  {grid.sizes.map(size => (
                    <span>{size[`title_${staticData.backendPostfix}` as keyof DimensionalGridSize]}</span>
                  ))}
                </div>
                <div
                  className={
                    "flex flex-1 flex-col gap-y-2 text-sm lg:font-extralight"
                  }
                >
                  {grid.sizes.map(size => (
                    <span>{size[`size_${staticData.backendPostfix}` as keyof DimensionalGridSize]}</span>
                  ))}
                </div>
              </div>
            ))}
          </Disclosure>
        </InfoSkeleton>
      </FilterDialog>
    </>
  );
}

export type InfoSkeletonProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
};

export function InfoSkeleton({
  children,
  title,
  description,
}: InfoSkeletonProps) {
  return (
    <div className={"flex h-full w-full flex-col md:pt-14"}>
      <Title
        size={"2xl"}
        className={cn("mb-3.5", { "mb-6 md:mb-24": !description })}
      >
        {title}
      </Title>
      {description && (
        <p className={"mb-[75px] text-sm font-extralight"}>{description}</p>
      )}
      <div className={"-mr-4 flex-1 overflow-y-scroll pr-4"}>{children}</div>
    </div>
  );
}
