"use client";

import * as HoverCard from "@radix-ui/react-hover-card";
import { ProductToShow } from "app/goods/[category]/page";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { FiChevronRight } from "react-icons/fi";
import { MainUrl } from "route-urls";
import { cn } from "utils/cn";

import { IconButton, Title } from "./ui";
import { useLocalization } from "contexts/LocalizationContext";

type TipProps = {
  product: ProductToShow;
} & Pick<HTMLAttributes<HTMLDivElement>, "className">;

export function Tip({ product, className }: TipProps) {
  const { staticData } = useLocalization();
  return (
    <div className={cn("inline-block", className)}>
      <HoverCard.Root openDelay={100} closeDelay={200}>
        <HoverCard.Trigger>
          <div
            className={
              "flex size-8 items-center justify-center rounded-full bg-tep_gray-700/60"
            }
          >
            <span className={"relative size-2 rounded-full bg-white"}>
              <span
                className={
                  "absolute h-full w-full animate-ping rounded-full bg-white opacity-75"
                }
              ></span>
            </span>
          </div>
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content sideOffset={8}>
            <div
              className={
                "w-[217px] overflow-hidden rounded-3xl bg-white px-4 py-3 shadow-[0_0_24px_rgba(29,29,29,0.08)]"
              }
            >
              <Title className={"mb-2"}>{product?.title || ''}</Title>
              <p className={"mb-4 text-sm font-extralight text-[#A5A5A5]"}>
                {product?.category_title || ""}
              </p>
              <div className={"flex items-end justify-between"}>
                <span className={"text-2xl font-bold"}>
                  {product?.price || 0}
                  <span className={"align-top text-xs font-bold"}> {staticData.common.tipCurrency}</span>
                </span>
                <Link href={`${MainUrl.getGoods()}/${product?.category_slug || ""}/${product?.slug || ""}`}>
                  <IconButton colorVariant={"empty"}>
                    <FiChevronRight
                      className={
                        "size-6 transition-colors hover:text-tep_blue-500"
                      }
                    />
                  </IconButton>
                </Link>
              </div>
            </div>
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </div>
  );
}
