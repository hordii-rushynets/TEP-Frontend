import Image from "next/image";
import { cn } from "utils/cn";

import { Title } from "common/ui";

import Border from "./Vector 1.svg";

export type OrderStatusStageProps = {
  isLast: boolean;
  isDone: boolean;
  label: string;
  date: Date;
};
export function OrderStatusStage({
  isDone,
  isLast,
  date,
  label,
}: OrderStatusStageProps) {
  return (
    <div
      className={cn(
        "relative pl-7 before:absolute before:-left-[11px] before:top-0 before:z-0 before:block before:size-6 before:rounded-full before:border-2 before:border-tep_gray-700/50",
        {
          "after:absolute after:-left-1.5 after:top-[5px] after:z-10 after:block after:size-[14px] after:rounded-full after:bg-black":
            isDone,
          "h-[124px]": !isLast,
        },
      )}
    >
      <Title component={"h6"} size={"lg"} className={"mb-2"}>
        {label}
      </Title>
      <p className={"flex gap-x-4 text-sm lg:font-extralight"}>
        <span>{date.toLocaleDateString()}</span>
        <span>{date.toLocaleTimeString().slice(0, 5)}</span>
      </p>
      <Image
        src={Border}
        alt={"Decor"}
        className={cn("absolute left-0 top-7 select-none", { hidden: isLast })}
        aria-hidden
      />
    </div>
  );
}
