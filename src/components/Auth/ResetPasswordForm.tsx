"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { AuthUrl } from "route-urls";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { Button, FormTextInput } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

const APIurl = process.env.NEXT_PUBLIC_API_URL

export function ResetPasswordForm() {
  const router = useRouter();
  const { staticData } = useLocalization();
  const formSchema = z.object({
    email: z.string().email(staticData.forms.emailError).default(""),
  });
  
  type Form = z.infer<typeof formSchema>;

  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  function onSubmit(dataToSend: Form) {
    fetch(`${APIurl}/api/account/password/forget/`, {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.status === 201) {
          localStorage.setItem("TEPemail", dataToSend.email);
          router.push(AuthUrl.getResetSuccess());
        }
        else if (response.status === 400) {
          form.setError("email", {type: "manual", message: staticData.auth.resetPasswordForm.text1})
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
            fieldName={"email"}
            label={staticData.auth.resetPasswordForm.text2}
            placeholder={staticData.auth.resetPasswordForm.text3}
          />
          <Button
            type={"submit"}
            size={"super-large"}
            colorVariant={"black"}
            fullWidth
          >
            {staticData.auth.resetPasswordForm.text4}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
