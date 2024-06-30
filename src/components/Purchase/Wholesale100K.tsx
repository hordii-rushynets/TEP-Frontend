"use client";

import { useState } from "react";

import { Button, Dialog, Title } from "common/ui";

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
          Ви набрали товар на суму більше 100 000 гривень, тому ви автоматично
          перейшли в режим оптової закупівлі. Ціни на сайті було оновлено згідно
          з умов оптової купівлі товару.
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
          Добре
        </Button>
      </div>
    </Dialog>
  );
}
