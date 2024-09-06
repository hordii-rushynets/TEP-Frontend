"use client";

import { Feedback } from "app/information-for-buyers/feedbacks/interfaces";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { cn } from "utils/cn";

import { Disclosure, DisclosureItem } from "common/Disclosure";
import { Title } from "common/ui";
import { FilterDialog } from "components/Filters/FilterDialog";
import { DimensionalGrid, DimensionalGridSize, VariantInfo } from "app/goods/[category]/page";

import { useLocalization } from "contexts/LocalizationContext";

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
          {!(info.ecology_and_environment + info.material_and_care + info.packaging === "") && <DisclosureItem
            onClick={() => setIsInfoOpen(true)}
            trigger={
              <Title component={"h4"} size={"xl"}>
                {staticData.goods.infoDisclosure.text1}
              </Title>
            }
          />}
          {dimensionalGrid.length !== 0 && <DisclosureItem
            onClick={() => setIsSizeOpen(true)}
            trigger={
              <Title component={"h4"} size={"xl"}>
                {staticData.goods.infoDisclosure.text2}
              </Title>
            }
          />}
          {!!feedbacks.length && (
            <DisclosureItem
              trigger={
                <Title component={"h4"} size={"xl"}>
                  {staticData.goods.infoDisclosure.text3}
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
                      <Title className={"!text-sm"}>{feedback.tep_user.first_name} {feedback.tep_user.last_name}</Title>
                      <div
                        className={
                          "flex items-center gap-x-1 text-sm font-bold"
                        }
                      >
                        <FaStar className={"size-3"} />
                        <span>{feedback.evaluation}</span>
                      </div>
                    </div>
                    <p className={"text-xs font-light leading-none"}>
                    <div dangerouslySetInnerHTML={{ __html: feedback.text }} />
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
          title={staticData.goods.infoDisclosure.text1}
          description={
            description
          }
        >
          <Disclosure>
            {info[(`material_and_care_${staticData.backendPostfix}` || "material_and_care") as keyof VariantInfo].toString() && <DisclosureItem
              trigger={staticData.goods.infoDisclosure.text4}
              endIcon={<FiChevronDown className={"size-6"} />}
              className={{ triggerWrapper: "py-8 font-bold" }}
            >
              <div>
                <div dangerouslySetInnerHTML={{ __html:info[(`material_and_care_${staticData.backendPostfix}` || "material_and_care") as keyof VariantInfo].toString()}} className={"mb-5 text-sm lg:font-extralight"} />
              </div>
            </DisclosureItem>}
            {info[(`ecology_and_environment_${staticData.backendPostfix}` || "ecology_and_environment") as keyof VariantInfo].toString() && <DisclosureItem
              trigger={staticData.goods.infoDisclosure.text5}
              endIcon={<FiChevronDown className={"size-6"} />}
              className={{ triggerWrapper: "py-8 font-bold" }}
            >
                <div dangerouslySetInnerHTML={{ __html:info[(`ecology_and_environment_${staticData.backendPostfix}` || "ecology_and_environment") as keyof VariantInfo].toString()}} className={"text-sm lg:font-extralight"}/>
            </DisclosureItem>}
            {info[(`packaging_${staticData.backendPostfix}` || "packaging") as keyof VariantInfo].toString() && <DisclosureItem
              trigger={staticData.goods.infoDisclosure.text6}
              endIcon={<FiChevronDown className={"size-6"} />}
              className={{ triggerWrapper: "py-8 font-bold" }}
            >
              <div>
                  <div dangerouslySetInnerHTML={{ __html: info[(`packaging_${staticData.backendPostfix}` || "packaging") as keyof VariantInfo].toString() }} className={"mb-5 text-sm lg:font-extralight"}/>
              </div>
            </DisclosureItem>}
          </Disclosure>
        </InfoSkeleton>
      </FilterDialog>
      {dimensionalGrid.length !== 0 && <FilterDialog open={isSizeOpen} onClose={() => setIsSizeOpen(false)}>
        <InfoSkeleton title={staticData.goods.infoDisclosure.text2}>
          <Disclosure>
            {dimensionalGrid.map((grid, indx) => (
              <div className={"flex gap-x-2 py-8"} key={indx}>
                <Title className={"basis-32"} component={"h6"} size={"base"}>
                  {grid[`title_${staticData.backendPostfix}` as keyof DimensionalGrid] as string}
                </Title>
                <div
                  className={
                    "flex flex-1 flex-col gap-y-2 text-sm lg:font-extralight"
                  }
                >
                  {grid.sizes.map((size, indx) => (
                    <span key={indx}>{size[`title_${staticData.backendPostfix}` as keyof DimensionalGridSize]}</span>
                  ))}
                </div>
                <div
                  className={
                    "flex flex-1 flex-col gap-y-2 text-sm lg:font-extralight"
                  }
                >
                  {grid.sizes.map((size, indx) => (
                    <span key={indx}>{size[`size_${staticData.backendPostfix}` as keyof DimensionalGridSize]}</span>
                  ))}
                </div>
              </div>
            ))}
          </Disclosure>
        </InfoSkeleton>
      </FilterDialog>}
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
        <p className={"mb-[75px] text-sm font-extralight"}><div dangerouslySetInnerHTML={{ __html: description }} /></p>
      )}
      <div className={"-mr-4 flex-1 overflow-y-scroll pr-4"}>{children}</div>
    </div>
  );
}
