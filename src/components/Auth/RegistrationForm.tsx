"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { MainUrl } from "route-urls";
import { getDefaults } from "utils/zod";
import { z } from "zod";
import { useRouter } from 'next/navigation';

import {
  Button,
  FormCheckbox,
  FormPasswordInput,
  FormTextInput,
} from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

const APIurl = process.env.NEXT_PUBLIC_API_URL

export function RegistrationForm() {
  const { staticData } = useLocalization();

  const formSchema = z.object({
    first_name: z.string().default(""),
    last_name: z.string().default(""),
    email: z.string().email(staticData.forms.emailError).default(""),
    password: z
      .string()
      .min(8, staticData.forms.passwordLengthError)
      .default(""),
    wholesale: z.boolean().default(false),
    wantInfo: z.boolean().default(false),
    policy: z.boolean().default(true),
  });
  
  type Form = z.infer<typeof formSchema>;

  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  const router = useRouter();

  function onSubmit(dataToSend: Form) {
    fetch(`${APIurl}/api/account/register/`, {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.status === 201) {
          localStorage.setItem("TEPemail", dataToSend.email);
          router.push('/email-confirmation');
        }
        else if (response.status === 409 || response.status === 400) {
          form.setError("email", { type: "manual", message: staticData.auth.registrationForm.text1 });
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
        <div className={"mb-10 flex flex-col gap-y-6"}>
          <FormTextInput<Form>
            fieldName={"first_name"}
            label={staticData.auth.registrationForm.text2}
            placeholder={staticData.auth.registrationForm.text3}
          />
          <FormTextInput<Form>
            fieldName={"last_name"}
            label={staticData.auth.registrationForm.text4}
            placeholder={staticData.auth.registrationForm.text5}
          />
          <FormTextInput<Form>
            fieldName={"email"}
            label={staticData.auth.registrationForm.text6}
            placeholder={staticData.auth.registrationForm.text7}
          />
          <FormPasswordInput<Form>
            fieldName={"password"}
            label={staticData.auth.registrationForm.text8}
            placeholder={staticData.auth.registrationForm.text9}
          />
        </div>
        <div className={"mb-14 flex flex-col gap-y-6"}>
          <FormCheckbox
            fieldName={"wholesale"}
            label={staticData.auth.registrationForm.text10 }
          />
          <FormCheckbox
            fieldName={"wantInfo"}
            label={
              staticData.auth.registrationForm.text11
            }
          />
          <FormCheckbox
            fieldName={"policy"}
            label={
              <span>
                {staticData.auth.registrationForm.text12}{" "}
                <Link
                  className={
                    "underline underline-offset-2 transition-colors hover:text-tep_blue-500"
                  }
                  href={MainUrl.getPrivacyPolicy()}
                >
                  {staticData.auth.registrationForm.text13}
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
          {staticData.auth.registrationForm.text14}
        </Button>
      </form>
    </FormProvider>
  );
}
