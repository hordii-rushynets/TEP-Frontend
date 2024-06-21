"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { FormProvider, useForm } from "react-hook-form";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { Button, FormTextInput, Title } from "common/ui";
import FormIMG from "components/Company/Blog/static/form-img.png";

export const getInstructionsSchema = z.object({
  fullname: z.string().default(""),
  email: z.string().email("Не коректна адреса електронної пошти").default(""),
});

type Form = z.infer<typeof getInstructionsSchema>;

export function GetInstructionsForm() {
  const form = useForm<Form>({
    resolver: zodResolver(getInstructionsSchema),
    defaultValues: getDefaults(getInstructionsSchema),
  });
  function onSubmit(data: Form) {
    data;
    // TODO
    // ...

    form.reset();
  }

  return (
    <div className={"mb-24 lg:mb-40"}>
      <Title className={"mb-4 text-3xl"}>
        Отримай PDF інструкцію по пранню ковдр в якості бонусу
      </Title>
      <p
        className={
          "mb-8 text-lg md:mb-3 md:text-sm lg:mb-14 lg:font-extralight "
        }
      >
        Шукаєш внформацію по тому як правильно прати дитячі ковдри? Заповни
        форму та клікай завантажити, щоб отримати інструкцію! Шукаєш внформацію
        по тому як правильно прати дитячі ковдри? Заповни форму та клікай
        завантажити, щоб отримати інструкцію!
      </p>
      <div
        className={
          "flex flex-col-reverse gap-x-6 gap-y-8 md:gap-y-12 lg:flex-row"
        }
      >
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={"flex-1"}>
            <div className={"mb-[72px] flex flex-col gap-y-6"}>
              <FormTextInput<Form>
                fieldName={"fullname"}
                label={"Ім’я"}
                placeholder={"Тарас Шевченко"}
              />
              <FormTextInput<Form>
                fieldName={"email"}
                label={"Пошта"}
                placeholder={"taras@gmail.com"}
              />
            </div>
            <Button
              type={"submit"}
              size={"super-large"}
              colorVariant={"black"}
              fullWidth
              className={{ button: "sm:w-auto" }}
            >
              Завантажити
            </Button>
          </form>
        </FormProvider>
        <div
          className={
            "max-w-[250px] basis-[250px] lg:-mr-24 lg:max-w-[288px] lg:basis-[288px]"
          }
        >
          <div className={"relative pb-[100%]"}>
            <Image
              src={FormIMG}
              alt={"Form image"}
              aria-hidden
              fill
              className={"object-cover"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
