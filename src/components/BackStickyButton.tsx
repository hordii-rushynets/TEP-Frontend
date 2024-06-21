"use client";

import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";

import { IconButton } from "common/ui";

export function BackStickyButton() {
  const [isVisible, setIsVisible] = useState(false);

  const changeVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeVisibility);
    return () => window.removeEventListener("scroll", changeVisibility);
  }, []);

  return (
    <Transition
      show={isVisible}
      enter={"ease-out transform duration-500"}
      enterFrom={"opacity-0 scale-50"}
      enterTo={"opacity-100 scale-100"}
      leave={"ease-in duration-500"}
      leaveFrom={"opacity-100 scale-100"}
      leaveTo={"opacity-0 scale-50"}
    >
      <IconButton
        size={"large"}
        className={{ button: "fixed left-[4%] top-[90%] z-40" }}
        onClick={() => window.scrollTo(0, 0)}
      >
        <FiChevronUp />
      </IconButton>
    </Transition>
  );
}
