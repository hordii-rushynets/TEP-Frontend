"use client";

import { HTMLAttributes, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { cn } from "utils/cn";

import { ButtonBase } from "common/ui";

export type CounterProps = {
  count?: number;
  inactive?: boolean;
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export function Counter({
  count = 1,
  inactive = false,
  className,
}: CounterProps) {
  const [num, setNum] = useState(count);

  return (
    <div
      className={cn(
        "flex w-[118px] justify-center gap-x-4 rounded-full border border-tep_gray-700/20 py-4 transition-colors hover:border-black",
        className,
      )}
    >
      <ButtonBase
        disabled={inactive}
        className={{
          button: "text-tep_gray-700 transition-colors hover:text-black",
        }}
        onClick={() => setNum((prev) => prev + 1)}
      >
        <FiPlus className={"stroke-[3px]"} />
      </ButtonBase>
      <span className={"text-sm font-bold"}>{num}</span>
      <ButtonBase
        disabled={inactive}
        className={{
          button: "text-tep_gray-700 transition-colors hover:text-black",
        }}
        onClick={() => setNum((prev) => (prev !== 0 ? prev - 1 : 0))}
      >
        <FiMinus className={"stroke-[3px]"} />
      </ButtonBase>
    </div>
  );
}
