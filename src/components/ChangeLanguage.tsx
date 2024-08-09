"use client";

import Image from "next/image";
import { useState } from "react";
import { FiGlobe } from "react-icons/fi";

import { Button, Dialog, Title } from "common/ui";

import FlagRU from "./static/ru.png";
import FlagUA from "./static/ua.png";
import FlagUS from "./static/us.png";
import { useLocalization } from "contexts/LocalizationContext";

export function ChangeLanguage() {
  const [langIsOpen, setLangIsOpen] = useState(false);
  const { setLocalization, staticData, localization } = useLocalization();

  return (
    <>
      <Button
        size={"small"}
        startIcon={<FiGlobe className={"size-4"} />}
        onClick={() => setLangIsOpen(true)}
      >
        {staticData.changeLanguage.title}
      </Button>
      <Dialog open={langIsOpen} onClose={() => setLangIsOpen(false)}>
        <div className={"w-[327px] py-10 md:w-[392px]"}>
          <Title className={"mb-5 text-center"} size={"2xl"} component={"h4"}>
          {staticData.changeLanguage.title}
          </Title>
          <div className={"flex flex-col items-center gap-y-4"}>
            <Button
              startIcon={
                <Image width={16} height={16} src={FlagUA} alt={"Flag UA"} />
              }
              size={"small"}
              colorVariant={"gray"}
              className={localization === "uk" && { button: "border-black" }}
              onClick={() => {
                setLocalization("uk");
              }}
            >
              {staticData.changeLanguage.uk}
            </Button>
            <Button
              startIcon={
                <Image width={16} height={16} src={FlagRU} alt={"Flag RU"} />
              }
              size={"small"}
              colorVariant={"gray"}
              className={localization === "ru" && { button: "border-black" }}
              onClick={() => {
                setLocalization("ru");
              }}
            >
              {staticData.changeLanguage.ru}
            </Button>
            <Button
              startIcon={
                <Image width={16} height={16} src={FlagUS} alt={"Flag US"} />
              }
              size={"small"}
              colorVariant={"gray"}
              className={localization === "en" && { button: "border-black" }}
              onClick={() => {
                setLocalization("en");
              }}
            >
              {staticData.changeLanguage.en}
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
