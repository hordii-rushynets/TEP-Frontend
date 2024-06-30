"use client";

import Image from "next/image";
import { useState } from "react";
import { FiGlobe } from "react-icons/fi";

import { Button, Dialog, Title } from "common/ui";

import FlagRU from "./static/ru.png";
import FlagUA from "./static/ua.png";
import FlagUS from "./static/us.png";

export function ChangeLanguage() {
  const [langIsOpen, setLangIsOpen] = useState(false);

  return (
    <>
      <Button
        size={"small"}
        startIcon={<FiGlobe className={"size-4"} />}
        onClick={() => setLangIsOpen(true)}
      >
        Змінити мову
      </Button>
      <Dialog open={langIsOpen} onClose={() => setLangIsOpen(false)}>
        <div className={"w-[327px] py-10 md:w-[392px]"}>
          <Title className={"mb-5 text-center"} size={"2xl"} component={"h4"}>
            Змінити мову
          </Title>
          <div className={"flex flex-col items-center gap-y-4"}>
            <Button
              startIcon={
                <Image width={16} height={16} src={FlagUA} alt={"Flag UA"} />
              }
              size={"small"}
              colorVariant={"gray"}
              className={{ button: "border-black" }}
            >
              Українська
            </Button>
            <Button
              startIcon={
                <Image width={16} height={16} src={FlagRU} alt={"Flag RU"} />
              }
              size={"small"}
              colorVariant={"gray"}
            >
              Русский
            </Button>
            <Button
              startIcon={
                <Image width={16} height={16} src={FlagUS} alt={"Flag US"} />
              }
              size={"small"}
              colorVariant={"gray"}
            >
              English
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
