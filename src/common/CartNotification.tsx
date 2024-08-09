"use client";

import { Transition } from "@headlessui/react";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { UserUrl } from "route-urls";

import { ButtonBase } from "common/ui";
import { useCartContext } from "contexts/CartContext";
import { Fragment } from "react";
import { useLocalization } from "contexts/LocalizationContext";

export function CartNotification() {
  const { isOpen, title, setIsOpen, setTitle } = useCartContext();
  const { staticData } = useLocalization();
  return (
    <Transition
      as={Fragment}
      show={isOpen}
      enter={"transition duration-100 ease-out"}
      enterFrom={"transform scale-95 opacity-0"}
      enterTo={"transform scale-100 opacity-100"}
      leave={"transition duration-75 ease-out"}
      leaveFrom={"transform scale-100 opacity-100"}
      leaveTo={"transform scale-95 opacity-0"}
    >
      <div
        className={
          "fixed right-[7%] top-[12%] z-[200] flex w-full max-w-[400px] items-center justify-between rounded-[4px] bg-black px-10 py-6 text-white"
        }
      >
        <p className={"basis-1/2 leading-normal lg:font-extralight"}>
          <span className={"text-xl"}>{title}</span> {staticData.common.cartNotification.message}
        </p>
        <div className={"flex items-center gap-x-4"}>
          <Link
            href={UserUrl.getCart()}
            onClick={() => {
              setTitle("");
              setIsOpen(false);
            }}
            className={
              "text-sm font-bold transition-colors hover:text-blue-300"
            }
          >
            {staticData.common.cartNotification.link}
          </Link>
          <ButtonBase
            onClick={() => {
              setTitle("");
              setIsOpen(false);
            }}
          >
            <FiX className={"size-6 transition-colors hover:text-blue-300"} />
          </ButtonBase>
        </div>
      </div>
    </Transition>
  );
}
