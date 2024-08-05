"use client"

import { Button, Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export type DeleteAccountConfirmProps = {
  onClick: () => void;
};

export function DeleteAccountConfirm({ onClick }: DeleteAccountConfirmProps) {
  const { staticData } = useLocalization();
  return (
    <div
      className={
        "w-full px-6 pb-14 pt-24 text-center md:w-[700px] md:px-24 md:py-36"
      }
    >
      <Title className={"mb-3.5 text-3xl"}>{staticData.account.deleteAccountConfirm.text1}</Title>
      <p className={"mb-[72px] text-sm lg:font-extralight"}>
        {staticData.account.deleteAccountConfirm.text2}
      </p>
      <div className={"flex justify-center gap-x-4"}>
        <Button
          type={"submit"}
          fullWidth
          className={{ button: "md:w-auto" }}
          size={"super-large"}
          colorVariant={"black"}
          onClick={onClick}
        >
          {staticData.account.deleteAccountConfirm.text3}
        </Button>
        <Button
          type={"submit"}
          fullWidth
          className={{ button: "md:w-auto" }}
          size={"large"}
          onClick={onClick}
        >
          {staticData.account.deleteAccountConfirm.text4}
        </Button>
      </div>
    </div>
  );
}
