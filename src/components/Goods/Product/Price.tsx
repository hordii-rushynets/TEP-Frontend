import { HTMLAttributes } from "react";
import { cn } from "utils/cn";

import { Title } from "common/ui";

export type PriceProps = {
  price: number;
  isSale?: boolean;
  salePrice?: number;
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export function Price({
  price,
  isSale = false,
  salePrice,
  className,
}: PriceProps) {
  return !isSale && !salePrice ? (
    <Title size={"2xl"} component={"h6"} className={className}>
      <span className={"whitespace-nowrap"}>
        {price}
        <span className={"align-top text-xs font-bold"}> грн</span>
      </span>
    </Title>
  ) : (
    <Title
      size={"2xl"}
      component={"h6"}
      className={cn("flex gap-x-4", className)}
    >
      <span
        className={"whitespace-nowrap bg-tep_blue-400 pl-1 pr-[1px] text-white"}
      >
        {salePrice}
        <span className={"align-top text-xs font-bold"}> грн</span>
      </span>
      <span
        className={
          "block whitespace-nowrap text-base leading-none text-tep_gray-700"
        }
      >
        <span className={"line-through"}>{price}</span>
        <span className={"align-top  text-[8px] font-bold"}> грн</span>
      </span>
    </Title>
  );
}
