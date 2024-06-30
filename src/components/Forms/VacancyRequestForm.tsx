"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter } from "next/navigation";
import React, { useId, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FiPaperclip } from "react-icons/fi";
import InputMask from "react-input-mask";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { Button, FormTextInput, TextInput, Title } from "common/ui";

export const vacancyRequestSchema = z.object({
  fullname: z.string().default(""),
  email: z.string().email("Не коректна адреса електронної пошти").default(""),
  message: z.string().default(""),
});

type Form = z.infer<typeof vacancyRequestSchema>;

export function VacancyRequestForm() {
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const id = useId();

  const form = useForm<Form>({
    resolver: zodResolver(vacancyRequestSchema),
    defaultValues: getDefaults(vacancyRequestSchema),
  });
  function onSubmit(data: Form) {
    const fullData = { ...data, phone: phone.match(/\d/g)?.join("") };
    fullData;

    // TODO
    // ...

    setPhone("");
    form.reset();
    router.push(`${pathname.split("?")[0]}/success`);
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={"max-w-[600px]"}>
        <Title className={"mb-[62px] text-3xl"}>Залишити заявку</Title>
        <div className={"mb-[72px] flex flex-col gap-y-6 md:mb-24"}>
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
          <InputMask
            mask={"+38 (099) 999-99-99"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            alwaysShowMask
            autoComplete={"off"}
          >
            <TextInput label={"Телефон"} />
          </InputMask>
          <FormTextInput<Form>
            multiline
            fieldName={"message"}
            label={"Повідомлення *"}
            placeholder={"Не обов’язково *"}
          />
          {/* //TODO FileInput */}
          <div className={"self-end"}>
            <label
              htmlFor={id}
              className={
                "inline-flex items-center gap-x-2 rounded-full border border-black bg-white px-6 py-3 text-black outline-none transition-colors hover:border-tep_blue-500  hover:text-tep_blue-500"
              }
            >
              <FiPaperclip className={"size-4"} />
              <span className={"text-sm font-bold"}>Файли</span>
            </label>
            <input id={id} type={"file"} className={"hidden"} />
          </div>
        </div>
        <Button
          type={"submit"}
          size={"super-large"}
          colorVariant={"black"}
          fullWidth
          className={{ button: "sm:w-auto" }}
        >
          Надіслати
        </Button>
      </form>
    </FormProvider>
  );
}
