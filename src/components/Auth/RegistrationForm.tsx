"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { MainUrl } from "route-urls";
import { getDefaults } from "utils/zod";
import { z } from "zod";
import { useRouter } from 'next/navigation';

import { useAuthNotificationContext } from "contexts/AuthNotificationContext";

import {
  Button,
  FormCheckbox,
  FormPasswordInput,
  FormTextInput,
} from "common/ui";

const formSchema = z.object({
  firstName: z.string().default(""),
  lastName: z.string().default(""),
  email: z.string().email("Не коректна адреса електронної пошти").default(""),
  password: z
    .string()
    .min(8, "Пароль повинен містити хоча б 8 символів")
    .default(""),
  wholesale: z.boolean().default(false),
  wantInfo: z.boolean().default(false),
  policy: z.boolean().default(true),
});

type Form = z.infer<typeof formSchema>;

const APIurl = process.env.NEXT_PUBLIC_API_URL

export function RegistrationForm() {
  const { setIsOpen, setTitle } = useAuthNotificationContext();

  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  const router = useRouter();

  function onSubmit(data: Form) {
    fetch(`${APIurl}/api/account/register/`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.status === 201) {
            return response.json()
        }
        else {
            return;
        }
      })
      .then(data => {
        localStorage.setItem("TEPtoken", data.token.access);
        localStorage.setItem("TEPid", data.data.id);
        setTitle(data.data.email);
        setIsOpen(true);
        router.push('/account');
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    form.reset();
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={"mb-10 flex flex-col gap-y-6"}>
          <FormTextInput<Form>
            fieldName={"firstName"}
            label={"Ім’я"}
            placeholder={"Ваше ім’я"}
          />
          <FormTextInput<Form>
            fieldName={"lastName"}
            label={"Прізвище"}
            placeholder={"Ваше прізвище"}
          />
          <FormTextInput<Form>
            fieldName={"email"}
            label={"Електронна пошта"}
            placeholder={"Ваша пошта"}
          />
          <FormPasswordInput<Form>
            fieldName={"password"}
            label={"Пароль"}
            placeholder={"Введіть пароль"}
          />
        </div>
        <div className={"mb-14 flex flex-col gap-y-6"}>
          <FormCheckbox
            fieldName={"wholesale"}
            label={"Я зацікавлений(-на) в оптових закупівлях"}
          />
          <FormCheckbox
            fieldName={"wantInfo"}
            label={
              "Я хочу отримувати інформацію щодо новинок, акцій та пропозиції від ТЕП"
            }
          />
          <FormCheckbox
            fieldName={"policy"}
            label={
              <span>
                Я прочитав(-ла) і зрозумів(-ла){" "}
                <Link
                  className={
                    "underline underline-offset-2 transition-colors hover:text-tep_blue-500"
                  }
                  href={MainUrl.getPrivacyPolicy()}
                >
                  політику конфіденційності.
                </Link>
              </span>
            }
          />
        </div>
        <Button
          type={"submit"}
          size={"super-large"}
          colorVariant={"black"}
          fullWidth
        >
          Створити профіль
        </Button>
      </form>
    </FormProvider>
  );
}
