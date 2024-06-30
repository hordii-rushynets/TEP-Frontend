"use client";

import { Transition } from "@headlessui/react";
import Link from "next/link";
import { FiX } from "react-icons/fi";
import { UserUrl } from "route-urls";

import { ButtonBase } from "common/ui";
import { useFavouriteContext } from "contexts/FavouriteContext";
import { Fragment } from "react";

export function FavouriteNotification() {
  const { isOpen, title, setIsOpen, setTitle } = useFavouriteContext();
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
          <span className={"text-xl"}>{title}</span> було збережено до
          улюбленого
        </p>
        <div className={"flex items-center gap-x-4"}>
          <Link
            href={UserUrl.getFavourite()}
            onClick={() => {
              setTitle("");
              setIsOpen(false);
            }}
            className={
              "text-sm font-bold transition-colors hover:text-blue-300"
            }
          >
            Переглянути
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
