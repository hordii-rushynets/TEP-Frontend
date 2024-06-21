"use client";

import { useState } from "react";

import { Button, Dialog, Title } from "common/ui";

type Wholesale10K = {
  onYes?: () => void;
  onNo?: () => void;
};

export function Wholesale10K({
  onNo = () => {},
  onYes = () => {},
}: Wholesale10K) {
  const [isOpen, setIsOpen] = useState(false);
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsOpen(true);
  //   }, 1000 * 60);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className={{ contentWrapper: "w-full md:max-w-[690px]" }}
    >
      <div
        className={
          "w-full px-6 py-20 text-center md:px-24 md:py-28 lg:px-24 lg:py-36"
        }
      >
        <Title className={"mb-3.5 text-3xl"}>Режим оптової закупівлі</Title>
        <p className={"mb-[72px] text-sm lg:font-extralight"}>
          Ви набрали товар на суму більше 10 000 гривень, тому ви перейшли в
          режим оптової закупівлі. Ви оптовий покупець?
        </p>
        <div
          className={
            "flex flex-col justify-center gap-2 sm:flex-row md:gap-x-6"
          }
        >
          <Button
            onClick={() => {
              setIsOpen(false);
              onYes();
            }}
            size={"super-large"}
            colorVariant={"black"}
          >
            Так
          </Button>
          <Button
            onClick={() => {
              setIsOpen(false);
              onNo();
            }}
            size={"super-large"}
          >
            Ні
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
