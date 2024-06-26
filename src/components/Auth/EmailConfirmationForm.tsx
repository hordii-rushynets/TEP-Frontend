"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { MainUrl, AuthUrl } from "route-urls";
import { getDefaults } from "utils/zod";
import { z } from "zod";
import { useRouter } from 'next/navigation';

import {
  Button,
  FormCheckbox,
  FormPasswordInput,
  FormTextInput,
} from "common/ui";

const formSchema = z.object({
  verificationCode: z.string(),
});
  
type Form = z.infer<typeof formSchema>;

export function EmailConfirmationForm() {
  const router = useRouter();
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  function onSubmit(data: Form) {
    data;
    // TODO
    // ...
    router.push(AuthUrl.getAccount());
    form.reset();
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
