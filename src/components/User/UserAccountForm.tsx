"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FiCalendar } from "react-icons/fi";
import InputMask from "react-input-mask";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { Dialog, FormSelectInput, FormTextInput, TextInput } from "common/ui";

import { BirthdayForm } from "./BirthdayForm";
import { UserSocials } from "./UserSocials";

import { UserAccountProps } from "./UserAccount";

const formSchema = z.object({
  first_name: z.string().default(""),
  last_name: z.string().default(""),
  email: z.string().email("Не коректна адреса електронної пошти").default(""),
  phone_number: z.string().default(""),
  birthday: z.string().default(""),
  profileType: z.string().default("usual"),
});

type Form = z.infer<typeof formSchema>;

export function UserAccountForm({user}: UserAccountProps) {
  const [phoneNumber, setPhoneNumber] = useState(user.phone_number);
  const [isDateOpen, setIsDateOpen] = useState(false);

  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: user,
  });

  useEffect(() => {
    form.reset(user);
  }, [user]);

  function onSubmit(data: Form) {
    const fullData = {
      ...data,
      phone_number: phoneNumber.match(/\d/g)?.join(""),
    };
    fullData;
    // TODO
    // ...
  }

  return (
    <>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={"max-w-[600px]"}
        >
          <div className={"flex flex-col gap-y-6"}>
            <FormTextInput<Form>
              fieldName={"first_name"}
              label={"Ім’я"}
              placeholder={"Ваше ім’я"}
            />
            <FormTextInput<Form>
              fieldName={"last_name"}
              label={"Прізвище"}
              placeholder={"Ваше прізвище"}
            />
            <FormTextInput<Form>
              fieldName={"email"}
              label={"Електронна пошта"}
              placeholder={"Ваша пошта"}
            />
            <InputMask
              mask={"+38 (099) 999-99-99"}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              alwaysShowMask
              autoComplete={"off"}
            >
              <TextInput label={"Телефон"} />
            </InputMask>
            <FormTextInput<Form>
              fieldName={"birthday"}
              label={"День народження"}
              placeholder={"дд/мм/рррр"}
              endAdornment={
                <FiCalendar className={"size-6 text-tep_gray-700"} />
              }
              onClick={() => setIsDateOpen(true)}
            />
            <FormSelectInput
              fieldName={"profileType"}
              label={"Профіль"}
              options={[
                { label: "Звичайний", value: "usual" },
                { label: "Інший", value: "another" },
              ]}
            />
            <UserSocials fbLink={"#"} googleLink={"#"} />
          </div>
        </form>
      </FormProvider>
      <Dialog
        open={isDateOpen}
        onClose={() => setIsDateOpen(false)}
        className={{
          contentWrapper:
            "top-[60%] h-full w-full max-w-full md:top-1/2 md:h-auto md:w-auto",
          content: "h-full",
        }}
      >
        <BirthdayForm
          onSubmit={(values) => {
            form.setValue("birthday", values.join("/"));
            setIsDateOpen(false);
          }}
        />
      </Dialog>
    </>
  );
}
