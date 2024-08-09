"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { AuthUrl } from "route-urls";
import { getDefaults } from "utils/zod";
import { z } from "zod";
import { useRouter } from 'next/navigation';

import { useNotificationContext } from "contexts/NotificationContext";
import { useLocalization } from "contexts/LocalizationContext";

import {
  Button,
  FormTextInput,
} from "common/ui";

const formSchema = z.object({
  verificationCode: z.string(),
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
  const { staticData } = useLocalization();

  function onSubmit(data: Form) {
    const dataToSend = {
      "code": data.verificationCode,
      "email": localStorage.getItem("TEPemail")
    }

    fetch(`${APIurl}/api/account/password/forget/confirm/`, {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.status === 200) {
            setText(staticData.auth.notifications.resetPasswordConfirm);
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
            label={staticData.auth.resetPasswordConfirmationForm.text1}
            placeholder={staticData.auth.resetPasswordConfirmationForm.text2}
          />
          <Button
            type={"submit"}
            size={"super-large"}
            colorVariant={"black"}
            fullWidth
          >
            {staticData.auth.resetPasswordConfirmationForm.text3}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
