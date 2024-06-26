"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { AuthUrl } from "route-urls";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { Button, FormPasswordInput, FormTextInput } from "common/ui";

import { SocialLogin } from "./SocialLogin";

const formSchema = z.object({
  email: z.string().email("Не коректна адреса електронної пошти").default(""),
  password: z.string().default(""),
});

type Form = z.infer<typeof formSchema>;

export function LoginForm() {
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  function onSubmit(data: Form) {
    data;
    // TODO
    // ...
    form.reset();
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={"mb-[70px] flex flex-col gap-y-6"}>
          <FormTextInput<Form>
            fieldName={"email"}
            label={"Електронна пошта"}
            placeholder={"Введіть пошту"}
          />
          <FormPasswordInput<Form>
            fieldName={"password"}
            label={"Пароль"}
            placeholder={"Введіть пароль"}
          />
          <Link
            href={AuthUrl.getResetPassword()}
            className={
              "inline-block text-sm font-light underline underline-offset-2 transition-colors hover:text-tep_blue-500"
            }
          >
            Забули пароль?
          </Link>
        </div>
        <div className={"flex flex-col gap-y-6"}>
          <Button
            type={"submit"}
            size={"super-large"}
            colorVariant={"black"}
            fullWidth
          >
            Увійти
          </Button>
          <div
            className={
              "flex items-center justify-center gap-x-2 text-sm lg:font-extralight"
            }
          >
            <span
              className={"h-[1px] flex-1 rounded-full bg-tep_gray-200"}
            ></span>
            <span>або</span>
            <span
              className={"h-[1px] flex-1 rounded-full bg-tep_gray-200"}
            ></span>
          </div>
          <SocialLogin onFBClick={() => {}} onGoogleClick={() => {}} />
        </div>
      </form>
    </FormProvider>
  );
}
