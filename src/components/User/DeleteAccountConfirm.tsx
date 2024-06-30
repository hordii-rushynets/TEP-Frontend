import { Button, Title } from "common/ui";

export type DeleteAccountConfirmProps = {
  onClick: () => void;
};

export function DeleteAccountConfirm({ onClick }: DeleteAccountConfirmProps) {
  return (
    <div
      className={
        "w-full px-6 pb-14 pt-24 text-center md:w-[700px] md:px-24 md:py-36"
      }
    >
      <Title className={"mb-3.5 text-3xl"}>Видалити профіль?</Title>
      <p className={"mb-[72px] text-sm lg:font-extralight"}>
        Ви дійсно хочете видалити свій обліковий запис ТЕП? Це призведе до
        видалення особистого профілю та пов&apos;язаної з ним інформації.
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
          Ні
        </Button>
        <Button
          type={"submit"}
          fullWidth
          className={{ button: "md:w-auto" }}
          size={"large"}
          onClick={onClick}
        >
          Так
        </Button>
      </div>
    </div>
  );
}
