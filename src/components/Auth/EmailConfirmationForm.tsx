"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { AuthUrl } from "route-urls";
import { getDefaults } from "utils/zod";
import { z } from "zod";
import { useRouter } from 'next/navigation';

import { useAuthNotificationContext } from "contexts/AuthNotificationContext";

import {
  Button,
  FormTextInput,
} from "common/ui";

const formSchema = z.object({
  verificationCode: z.string()
});
  
type Form = z.infer<typeof formSchema>;

const APIurl = process.env.NEXT_PUBLIC_API_URL

export function EmailConfirmationForm() {
  const router = useRouter();
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  const { setIsOpen, setTitle } = useAuthNotificationContext();

  function onSubmit(data: Form) {
    const dataToSend = {
      "otp": data.verificationCode,
      "email": localStorage.getItem("TEPemail")
    }

    fetch(`${APIurl}/api/account/verify-otp/`, {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.status === 200) {
            return response.json()
        }
        else if (response.status === 401) {
          form.setError("verificationCode", { type: "manual", message: "Не вірний код доступу" });
        }
        else {
            return;
        }
      })
      .then(data => {
        localStorage.setItem("TEPAccessToken", data.token);
        setTitle(localStorage.getItem("TEPemail") || "");
        setIsOpen(true);
        localStorage.removeItem("TEPemail");
        router.push(AuthUrl.getAccount());
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className={"flex flex-col gap-y-12 lg:gap-y-[72px]"}>
          <FormTextInput<Form>
            fieldName={"verificationCode"}
            label={"Верифікаційний код"}
            placeholder={"Введіть код"}
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
