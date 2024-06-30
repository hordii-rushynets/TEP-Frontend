"use client";

import * as HoverCard from "@radix-ui/react-hover-card";
import { PiQuestionBold } from "react-icons/pi";

export type QuestionTipProps = {
  text: string;
};

export function QuestionTip({ text }: QuestionTipProps) {
  return (
    <div className={"inline-block"}>
      <HoverCard.Root openDelay={100} closeDelay={200}>
        <HoverCard.Trigger>
          <PiQuestionBold
            className={
              "size-6 text-tep_gray-700 transition-colors hover:text-tep_blue-500"
            }
          />
        </HoverCard.Trigger>
        <HoverCard.Portal>
          <HoverCard.Content sideOffset={8} align={"center"} side={"right"}>
            <div
              className={"overflow-hidden rounded-[4px] bg-tep_gray-200 p-4"}
            >
              <p
                className={
                  "max-w-72 text-sm leading-normal text-black lg:font-extralight"
                }
              >
                {text}
              </p>
            </div>
          </HoverCard.Content>
        </HoverCard.Portal>
      </HoverCard.Root>
    </div>
  );
}
