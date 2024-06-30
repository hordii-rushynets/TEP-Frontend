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

export function ResetPasswordForm() {
  const router = useRouter();
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  function onSubmit(data: Form) {
    data;
    // TODO
    // ...
    router.push(AuthUrl.getResetSuccess());
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
