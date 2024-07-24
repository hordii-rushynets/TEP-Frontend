import { Button, Title } from "common/ui";

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
  title = "Фільтр та сортування",
  children,
  count = 12,
  isSelected = true,
  isCleanButtonDisabled = true,
  onClick,
  cleanFIlter,
}: SkeletonProps) {
  return (
    <div className={"flex h-full w-full flex-col"}>
      <Title size={"2xl"} className={"md:mb-8"}>
        {title}
      </Title>
      <div className={"-mr-4 flex-1 overflow-y-scroll pr-4"}>{children}</div>
      <div className={"flex w-full gap-x-2 overflow-auto pt-2"}>
        <Button
          fullWidth
          disabled={isCleanButtonDisabled}
          onClick={cleanFIlter}
          className={{ button: "px-2 py-3" }}
        >
          Очистити все
        </Button>
        <Button
          className={{ button: "px-2 py-3" }}
          fullWidth
          colorVariant={"black"}
          disabled={!isSelected}
          onClick={onClick}
        >
          Переглянути {count}
        </Button>
      </div>
    </div>
  );
}
