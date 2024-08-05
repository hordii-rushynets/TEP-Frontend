"use client"

import { Button, Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export type SkeletonProps = {
  title?: string;
  children: React.ReactNode;
  count?: number;
  isSelected?: boolean;
  isCleanButtonDisabled?: boolean;
  cleanFIlter?: () => void;
  onClick: () => void;
};

export function Skeleton({
  title = "",
  children,
  count = 12,
  isSelected = true,
  isCleanButtonDisabled = true,
  onClick,
  cleanFIlter,
}: SkeletonProps) {

  const { staticData } = useLocalization();
  return (
    <div className={"flex h-full w-full flex-col"}>
      <Title size={"2xl"} className={"md:mb-8"}>
        {title !== "" ? title : staticData.filters.skeleton.title}
      </Title>
      <div className={"-mr-4 flex-1 overflow-y-scroll pr-4"}>{children}</div>
      <div className={"flex w-full gap-x-2 overflow-auto pt-2"}>
        <Button
          fullWidth
          disabled={isCleanButtonDisabled}
          onClick={cleanFIlter}
          className={{ button: "px-2 py-3" }}
        >
          {staticData.filters.skeleton.clear}
        </Button>
        <Button
          className={{ button: "px-2 py-3" }}
          fullWidth
          colorVariant={"black"}
          disabled={!isSelected}
          onClick={onClick}
        >
          {staticData.filters.skeleton.view} {count}
        </Button>
      </div>
    </div>
  );
}
