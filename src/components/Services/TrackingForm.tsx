"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { Button, FormTextInput } from "common/ui";

export const formSchema = z.object({
  order_number: z
    .string()
    .min(8, "Номер замовлення не коректний. Перевірте будь ласка введені дані.")
    .default(""),
});

type Form = z.infer<typeof formSchema>;

export type TrackingFormProps = {
  onSending: (v: string) => void;
};

export function TrackingForm({ onSending }: TrackingFormProps) {
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });
  function onSubmit(data: Form) {
    onSending(data.order_number);
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={"max-w-[600px]"}>
        <FormTextInput<Form>
          className={{ wrapper: "mb-12" }}
          fieldName={"order_number"}
          label={"Номер замовлення"}
          placeholder={"Ваш номер"}
        />
        <Button
          type={"submit"}
          size={"super-large"}
          colorVariant={"black"}
          fullWidth
          className={{ button: "sm:w-auto" }}
        >
          Відстежити
        </Button>
      </form>
    </FormProvider>
  );
}
