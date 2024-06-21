"use client";

import * as HoverCard from "@radix-ui/react-hover-card";
import Link from "next/link";

import { Container } from "common/ui";

type HoverMenuTipProps = {
  label: string;
  url: string;
  children: React.ReactNode;
  onClose?: () => void;
};

export function HoverMenuTip({
  onClose,
  label,
  url,
  children,
}: HoverMenuTipProps) {
  return (
    <HoverCard.Root onOpenChange={onClose} openDelay={100} closeDelay={200}>
      <HoverCard.Trigger asChild>
        <Link
          href={url}
          className={
            "whitespace-nowrap transition-colors duration-200 hover:text-tep_blue-500"
          }
        >
          {label}
        </Link>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          className={"relative z-[40] shadow-[0_5px_5px_0_rgba(29,29,29,0.05)]"}
          asChild
          sideOffset={38}
        >
          <div className={"h-[328px] w-screen bg-white"}>
            <Container className={"max-w-[860px]"}>
              <div className={"flex py-6"}>{children}</div>
            </Container>
          </div>
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}
