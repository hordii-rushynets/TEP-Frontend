"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { AuthUrl } from "route-urls";
import { getDefaults } from "utils/zod";
import { z } from "zod";
import { useRouter } from 'next/navigation';

import { useNotificationContext } from "contexts/NotificationContext";

import {
  Button,
  FormTextInput,
  FormPasswordInput
} from "common/ui";

const formSchema = z.object({
  verificationCode: z.string(),
  new_password: z.string()
});
  
type Form = z.infer<typeof formSchema>;

const APIurl = process.env.NEXT_PUBLIC_API_URL

export function ResetPasswordConfirmationForm() {
  const router = useRouter();
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  const { setIsOpen, setText } = useNotificationContext();

  function onSubmit(data: Form) {
    const dataToSend = {
      "otp": data.verificationCode,
      "email": localStorage.getItem("TEPemail"),
      "new_password": data.new_password
    }

    fetch(`${APIurl}/api/account/password/reset/confirm/`, {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.status === 200) {
            setText("Ваш пароль успішно змінено!");
            setIsOpen(true);
            localStorage.removeItem("TEPemail");
            router.push(AuthUrl.getSignIn());
        }
        else {
            return;
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    form.reset();
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={"flex flex-col gap-y-12 lg:gap-y-[45px]"}>
          <FormTextInput<Form>
            fieldName={"verificationCode"}
            label={"Верифікаційний код"}
            placeholder={"Введіть код"}
          />
          <FormPasswordInput<Form>
            fieldName={"new_password"}
            label={"Новий пароль"}
            placeholder={"Введіть новий пароль"}
          />
          <Button
            type={"submit"}
            size={"super-large"}
            colorVariant={"black"}
            fullWidth
          >
            Підтвердити
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
