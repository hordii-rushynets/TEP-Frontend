"use client";

import { Transition } from "@headlessui/react";
import Link from "next/link";
import { FiX } from "react-icons/fi";

import { ImageSquare } from "common/ImageSquare";
import { Button, Container, IconButton, Section } from "common/ui";
import PillowIMG from "components/Goods/static/pillow.jpg";
import { useCompareContext } from "contexts/CompareContext";

export type CompareBannerProps = {
  url: string;
};

export function CompareBanner({ url }: CompareBannerProps) {
  const items = [PillowIMG, PillowIMG];

  const { isOpen, setIsOpen } = useCompareContext();
  return (
    <Transition
      show={isOpen}
      enter={"transition duration-100 ease-out"}
      enterFrom={"transform scale-95 opacity-0"}
      enterTo={"transform scale-100 opacity-100"}
      leave={"transition duration-75 ease-out"}
      leaveFrom={"transform scale-100 opacity-100"}
      leaveTo={"transform scale-95 opacity-0"}
    >
      <Section>
        <Container>
          <div
            className={
              "flex flex-col justify-between gap-y-7 border-b border-tep_gray-200 py-5 md:flex-row md:items-center"
            }
          >
            <div className={"flex items-center gap-x-7"}>
              <p className={"text-sm font-bold text-tep_gray-500"}>
                {items.length} обрано
              </p>
              <div className={"flex items-center justify-between gap-x-4"}>
                {items.map((item, Idx) => (
                  <ImageSquare
                    key={Idx}
                    source={item}
                    classes={{ wrapper: "size-10 pb-0 rounded" }}
                  />
                ))}
              </div>
            </div>
            <div className={"flex justify-between gap-x-2.5"}>
              <Link href={`${url}/compare`}>
                <Button
                  onClick={() => setIsOpen(false)}
                  colorVariant={"black"}
                  size={"small"}
                >
                  Порівняти товари
                </Button>
              </Link>
              <IconButton
                onClick={() => setIsOpen(false)}
                colorVariant={"outlined"}
                size={"large"}
              >
                <FiX className={"size-6"} />
              </IconButton>
            </div>
          </div>
        </Container>
      </Section>
    </Transition>
  );
}
