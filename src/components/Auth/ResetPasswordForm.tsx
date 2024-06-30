"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { AuthUrl } from "route-urls";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { Button, FormTextInput } from "common/ui";

const formSchema = z.object({
  email: z.string().email("Не коректна адреса електронної пошти").default(""),
});

type Form = z.infer<typeof formSchema>;

const APIurl = process.env.NEXT_PUBLIC_API_URL

export function ResetPasswordForm() {
  const router = useRouter();
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  function onSubmit(dataToSend: Form) {
    fetch(`${APIurl}/api/account/password/reset/`, {
      method: 'POST',
      body: JSON.stringify(dataToSend),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem("TEPemail", dataToSend.email);
          router.push(AuthUrl.getResetSuccess());
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
        <div className={"flex flex-col gap-y-12 lg:gap-y-[72px]"}>
          <FormTextInput<Form>
            fieldName={"email"}
            label={"Електронна пошта"}
            placeholder={"Введіть пошту"}
          />
          <Button
            type={"submit"}
            size={"super-large"}
            colorVariant={"black"}
            fullWidth
          >
            Продовжити
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
