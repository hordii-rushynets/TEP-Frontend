"use client";

import { Disclosure as BaseDisclosure, Transition } from "@headlessui/react";
import { HTMLAttributes } from "react";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "utils/cn";

export type DisclosureProps = {
  children: React.ReactNode;
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export function Disclosure({ children, className }: DisclosureProps) {
  return (
    <div
      className={cn(
        "divide-y-[1px] divide-tep_gray-700/20 border-y border-tep_gray-700/20",
        className,
      )}
    >
      {children}
    </div>
  );
}

export type DisclosureItemProps = {
  trigger: React.ReactNode;
  endIcon?: React.ReactElement;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: {
    triggerWrapper?: string;
    panelWrapper?: string;
  };
};

export function DisclosureItem({
  children,
  trigger,
  endIcon,
  className,
  onClick,
}: DisclosureItemProps) {
  return (
    <BaseDisclosure>
      <BaseDisclosure.Button
        onClick={onClick}
        className={cn(
          "flex w-full items-center justify-between gap-x-2 py-6 transition-all hover:text-tep_blue-500",
          className?.triggerWrapper,
        )}
      >
        {trigger}
        {endIcon ? endIcon : <FiArrowRight className={"size-6 shrink-0"} />}
      </BaseDisclosure.Button>
      {children && (
        <Transition
          enter={"transition duration-100 ease-out"}
          enterFrom={"transform scale-95 opacity-0"}
          enterTo={"transform scale-100 opacity-100"}
          leave={"transition duration-75 ease-out"}
          leaveFrom={"transform scale-100 opacity-100"}
          leaveTo={"transform scale-95 opacity-0"}
        >
          <BaseDisclosure.Panel className={cn("py-4", className?.panelWrapper)}>
            {children}
          </BaseDisclosure.Panel>
        </Transition>
      )}
    </BaseDisclosure>
  );
}
