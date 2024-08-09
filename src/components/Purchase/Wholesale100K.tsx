"use client";

import { useState } from "react";

import { Button, Dialog, Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export function Wholesale100K() {
  const [isOpen, setIsOpen] = useState(false);
  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsOpen(true);
  //   }, 1000 * 120);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  const { staticData } = useLocalization();
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
        <Title className={"mb-3.5 text-3xl"}>{staticData.purchase.wholesale100k.title}</Title>
        <p className={"mb-[72px] text-sm lg:font-extralight"}>
        {staticData.purchase.wholesale100k.description}
        </p>
        <Button
          onClick={() => {
            setIsOpen(false);
          }}
          size={"super-large"}
          colorVariant={"black"}
          fullWidth
          className={{ button: "mx-auto sm:w-auto" }}
        >
          {staticData.purchase.wholesale100k.accept}
        </Button>
      </div>
    </Dialog>
  );
}
