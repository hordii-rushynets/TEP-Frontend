"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { Button, FormPasswordInput, Title } from "common/ui";

const formSchema = z.object({
  old_password: z.string().email("").default(""),
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

  function onSubmitHandler(data: Form) {
    data;
    setIsSuccess(true);
    // TODO
    // ...
    form.reset();
  }

  if (isSuccess) {
    return (
      <div className={"w-full px-6 py-36 text-center md:w-[700px] md:px-24"}>
        <Title className={"mb-3.5 text-3xl"}>Пароль змінено</Title>
        <p className={"mb-[72px] text-sm lg:font-extralight"}>
          Ваш пароль був зміненний на новий, тепер Ви зможете зайти в обліковий
          запис використовуючи новий пароль.
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
          Добре
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
          Змінити пароль
        </Title>
        <div className={"mb-12 flex flex-col gap-6"}>
          <FormPasswordInput<Form>
            fieldName={"old_password"}
            label={"Старий пароль"}
            placeholder={"Введіть старий пароль"}
          />
          <FormPasswordInput<Form>
            fieldName={"new_password"}
            label={"Новий пароль"}
            placeholder={"Введіть новий пароль"}
          />
          <FormPasswordInput<Form>
            fieldName={"repeat_password"}
            label={"Повторіть новий пароль"}
            placeholder={"Введіть новий пароль"}
          />
        </div>
        <Button
          type={"submit"}
          fullWidth
          className={{ button: "mx-auto block md:w-auto" }}
          size={"super-large"}
          colorVariant={"black"}
        >
          Змінити
        </Button>
      </form>
    </FormProvider>
  );
}
