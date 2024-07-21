"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FiCalendar } from "react-icons/fi";
import InputMask from "react-input-mask";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { Button, Dialog, FormSelectInput, FormTextInput, TextInput } from "common/ui";

import { BirthdayForm } from "./BirthdayForm";
import { UserSocials } from "./UserSocials";

import { UserAccountProps } from "./UserAccount";
import { AccountService } from "app/account/services";
import { useAuth } from "contexts/AuthContext";
import { useNotificationContext } from "contexts/NotificationContext";
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  first_name: z.string().default(""),
  last_name: z.string().default(""),
  email: z.string().email("Не коректна адреса електронної пошти").default(""),
  phone_number: z.string().default(""),
  birth_date: z.string().default(""),
  profileType: z.string().default("usual"),
});

type Form = z.infer<typeof formSchema>;

export function UserAccountForm({user, refresh, setRefresh,}: UserAccountProps) {
  const [phoneNumber, setPhoneNumber] = useState(user.phone_number || "");
  const [isDateOpen, setIsDateOpen] = useState(false);

  const accountService = new AccountService();
  const authContext = useAuth();
  const { setText, setIsOpen } = useNotificationContext();

  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  useEffect(() => {
    form.setValue("first_name", user.first_name || "");
    form.setValue("last_name", user.last_name || "");
    form.setValue("birth_date", user.birth_date || "");
    form.setValue("email", user.email || "");
    form.setValue("phone_number", user.phone_number || "");
    setPhoneNumber(user.phone_number);
  }, [user]);

  const router = useRouter();

  function onFormSubmit(data: Form) {
    const fullData = {
      ...data,
      phone_number: phoneNumber.match(/\d/g)?.join(""),
    };
    const formData = new FormData();
    Object.entries(fullData).map(value => {
      formData.append(value[0], value[1] || "");
    })

    const isEmailChanged = fullData.email !== user.email;

    accountService.profileUpdate(formData, authContext).then(success => {
      if (success && !isEmailChanged) {
        setText("Ваш профіль успішно оновлено!");
        setIsOpen(true);
      }
    });

    isEmailChanged && accountService.emailUpdateRequest(fullData.email, authContext).then(success => {
      if (success) {
        localStorage.setItem("TEPemail", fullData.email);
        router.push('/account/email-confirmation');
      }
      else {
        form.setError("email", {type: "manual", message: "Пошта неправильна, або вже зареєстрована"});
      }
    })
  }

  return (
    <>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onFormSubmit)}
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
              fieldName={"birth_date"}
              label={"День народження"}
              placeholder={"pppp-мм-дд"}
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
            <Button
              type={"submit"}
              fullWidth
              className={{ button: "mx-auto block md:w-auto" }}
              size={"super-large"}
              colorVariant={"black"}
            >
              Змінити профіль
            </Button>
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
            form.setValue("birth_date", values.reverse().join("-"));
            setIsDateOpen(false);
          }}
        />
      </Dialog>
    </>
  );
}
