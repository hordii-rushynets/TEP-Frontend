"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { AuthUrl } from "route-urls";
import { getDefaults } from "utils/zod";
import { z } from "zod";
import { useRouter } from 'next/navigation';

import { useNotificationContext } from "contexts/NotificationContext";
import { useLocalization } from "contexts/LocalizationContext";
import { AccountService } from "app/account/services";

import {
  Button,
  FormTextInput,
} from "common/ui";
import { useAuth } from "contexts/AuthContext";

const formSchema = z.object({
  verificationCode: z.string()
});
  
type Form = z.infer<typeof formSchema>;

const APIurl = process.env.NEXT_PUBLIC_API_URL

type EmailConfirmationFormProps = {
  updating?: boolean;
}

export function EmailConfirmationForm({updating = false} : EmailConfirmationFormProps) {
  const router = useRouter();
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  const { setIsOpen, setText } = useNotificationContext();
  const { staticData } = useLocalization();

  const accountService = new AccountService();
  const authContext = useAuth();

  function onSubmit(data: Form) {
    const dataToSend = {
      "code": data.verificationCode,
      "email": localStorage.getItem("TEPemail")
    }

    updating ? accountService.emailUpdateConfirm(dataToSend.email || "", dataToSend.code, authContext).then(success => {
      if (success) {
        localStorage.removeItem("TEPemail");
        setText("Ваш профіль успішно оновлено!");
        setIsOpen(true);
        router.push(AuthUrl.getAccount());
      }
      else {
        form.setError("verificationCode", { type: "manual", message: "Не вірний код доступу" });
      }
    })
    : fetch(`${APIurl}/api/account/register/confirm/`, {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.status === 200) {
          setText(staticData.auth.notifications.registration);
          setIsOpen(true);
          localStorage.removeItem("TEPemail");
          router.push(AuthUrl.getSignIn());
        }
        else if (response.status === 400) {
          form.setError("verificationCode", { type: "manual", message: "Не вірний код доступу" });
        }
        else {
            return;
        }
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
