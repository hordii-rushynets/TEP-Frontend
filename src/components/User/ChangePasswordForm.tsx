"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { Button, FormPasswordInput, Title } from "common/ui";
import { AccountService } from "app/account/services";
import { useAuth } from "contexts/AuthContext";
import { useLocalization } from "contexts/LocalizationContext";

const formSchema = z.object({
  old_password: z.string().default(""),
  new_password: z
    .string()
    .min(8, "Пароль повинен містити хоча б 8 символів")
    .default(""),
  repeat_password: z.string().default(""),
});

type Form = z.infer<typeof formSchema>;

export type ChangePasswordFormProps = {
  onSubmit: () => void;
};

export function ChangePasswordForm({ onSubmit }: ChangePasswordFormProps) {
  const [isSuccess, setIsSuccess] = useState(false);
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  const { staticData } = useLocalization();

  const accountService = new AccountService();
  const authContext = useAuth();

  function onSubmitHandler(data: Form) {
    accountService.passwordUpdate(data.old_password, data.new_password, data.repeat_password, () => {
      form.setError("repeat_password", {type: "manual", message: staticData.account.changePasswordForm.text1});
    }, () => {
      form.setError("old_password", {type: "manual", message: staticData.account.changePasswordForm.text2});
    }, authContext)
    .then(success => {
      if (success) {
        setIsSuccess(true);
        form.reset();
      }
    })
  }

  if (isSuccess) {
    return (
      <div className={"w-full px-6 py-36 text-center md:w-[700px] md:px-24"}>
        <Title className={"mb-3.5 text-3xl"}>{staticData.account.changePasswordForm.text3}</Title>
        <p className={"mb-[72px] text-sm lg:font-extralight"}>
          {staticData.account.changePasswordForm.text4}
        </p>
        <Button
          type={"submit"}
          fullWidth
          className={{ button: "mx-auto block md:w-auto" }}
          size={"super-large"}
          colorVariant={"black"}
          onClick={() => {
            onSubmit();
          }}
        >
          {staticData.account.changePasswordForm.text5}
        </Button>
      </div>
    );
  }

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmitHandler)}
        className={
          "w-full overflow-hidden px-6 pt-[72px] md:w-[700px] md:px-24 md:py-10"
        }
      >
        <Title size={"2xl"} className={"mb-8 md:text-center"}>
          {staticData.account.changePasswordForm.text6}
        </Title>
        <div className={"mb-12 flex flex-col gap-6"}>
          <FormPasswordInput<Form>
            fieldName={"old_password"}
            label={staticData.account.changePasswordForm.text7}
            placeholder={staticData.account.changePasswordForm.text8}
          />
          <FormPasswordInput<Form>
            fieldName={"new_password"}
            label={staticData.account.changePasswordForm.text9}
            placeholder={staticData.account.changePasswordForm.text10}
          />
          <FormPasswordInput<Form>
            fieldName={"repeat_password"}
            label={staticData.account.changePasswordForm.text11}
            placeholder={staticData.account.changePasswordForm.text12}
          />
        </div>
        <Button
          type={"submit"}
          fullWidth
          className={{ button: "mx-auto block md:w-auto" }}
          size={"super-large"}
          colorVariant={"black"}
        >
          {staticData.account.changePasswordForm.text13}
        </Button>
      </form>
    </FormProvider>
  );
}
