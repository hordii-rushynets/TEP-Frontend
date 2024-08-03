"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { Button, FormSelectInput, FormTextInput } from "common/ui";
import { PurchaseService } from "app/purchase/services";
import { Stage } from "app/purchase/interfaces";

export const formSchema = z.object({
  order_number: z
    .string()
    .min(14, "Номер замовлення не коректний. Перевірте будь ласка введені дані.")
    .default(""),
  delivery_service: z
    .string()
    .min(1, "Обовязково вкажіть службу доставки")
    .default(""),
});

type Form = z.infer<typeof formSchema>;

export type TrackingFormProps = {
  onSending: (v: Stage[]) => void;
};

export function TrackingForm({ onSending }: TrackingFormProps) {
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  const purchaseService = new PurchaseService();

  function onSubmit(data: Form) {
    purchaseService.getTracking(data.delivery_service, data.order_number).then(stages => onSending(stages));
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={"max-w-[600px]"}>
          <FormSelectInput
            fieldName={"delivery_service"}
            label={"Служба доставки"}
            display={"Оберіть службу"}
            options={[
              {
                label: "Укр Пошта",
                value: "UkrPost",
              },
              {
                label: "Нова Пошта",
                value: "NovaPost",
              },
            ]}
          />
          <br/>
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
