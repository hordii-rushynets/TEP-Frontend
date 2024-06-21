"use client";

import { useEffect, useState } from "react";

import { Button, Checkbox, Dialog, Title } from "common/ui";

import { DeleteAccountConfirm } from "./DeleteAccountConfirm";

export function UserSettings() {
  const [byEmail, setByEmail] = useState(false);
  const [bySMS, setBySMS] = useState(true);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  useEffect(() => {
    const data = { byEmail, bySMS };
    data;
    // TODO send data
  }, [byEmail, bySMS]);

  return (
    <>
      <div className={"max-w-[496px]"}>
        <div className={"mb-24"}>
          <Title component={"h5"} size={"xl"} className={"mb-1.5"}>
            Спосіб комунікації
          </Title>
          <p className={"mb-3 text-sm leading-normal lg:font-extralight"}>
            Отримання пропозицій і новин
            <br />
            через:
          </p>
          <div className={"flex flex-col gap-y-6"}>
            <Checkbox
              label={"Електронна пошта"}
              checked={byEmail}
              onChange={setByEmail}
            />
            <Checkbox label={"СМС"} checked={bySMS} onChange={setBySMS} />
          </div>
        </div>
        <div>
          <Title component={"h5"} size={"xl"} className={"mb-1.5"}>
            Видалити профіль
          </Title>
          <p className={"mb-8 text-sm leading-normal lg:font-extralight"}>
            Ви можете видалити свій обліковий запис ТЕП у будь-який момент. Це
            призведе до видалення профілю та пов&apos;язаної з ним інформації.
          </p>
          <Button onClick={() => setIsConfirmOpen(true)} size={"large"}>
            Видалити профіль
          </Button>
        </div>
      </div>
      <Dialog
        open={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        className={{
          contentWrapper: "w-full md:w-auto",
        }}
      >
        <DeleteAccountConfirm
          onClick={() => {
            setIsConfirmOpen(false);
          }}
        />
      </Dialog>
    </>
  );
}
