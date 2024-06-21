"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { PurchaseUrl } from "route-urls";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { Button, FormSelectInput, FormTextInput } from "common/ui";

const formSchema = z.object({
  delivery_service: z
    .string()
    .min(1, "Обовязково вкажіть службу доставки")
    .default(""),
  delivery_method: z
    .string()
    .min(1, "Обовязково вкажіть метод доставки")
    .default(""),
  department: z
    .string()
    .min(1, "Обовязково вкажіть номер відділення")
    .default(""),
});

type Form = z.infer<typeof formSchema>;

export function DeliveryForm() {
  const router = useRouter();

  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  function onSubmit(data: Form) {
    data;
    // TODO
    // ...
    router.push(PurchaseUrl.getOrderData());
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={"max-w-[600px]"}>
        <div
          className={
            "mb-12 flex flex-col gap-y-6 border-b border-tep_gray-200 pb-24"
          }
        >
          <FormSelectInput
            fieldName={"delivery_service"}
            label={"Служба доставки"}
            display={"Оберіть службу"}
            options={[
              {
                label: "Укр Пошта",
                value: "ua_post",
              },
              {
                label: "Нова Пошта",
                value: "new_post",
              },
            ]}
          />
          <FormSelectInput
            fieldName={"delivery_method"}
            label={"Спосіб доставки"}
            display={"Оберіть спосіб"}
            options={[
              {
                label:
                  form.watch("delivery_service") === "new_post"
                    ? "Відділення Нової пошти"
                    : "Відділення Укр пошти",
                value: "department",
              },
              {
                label:
                  form.watch("delivery_service") === "new_post"
                    ? "Кур’єр Нової Пошти"
                    : "Кур’єр Укр Пошти",
                value: "courier",
              },
            ]}
          />
          {form.watch("delivery_method") === "department" && (
            <FormSelectInput
              fieldName={"department"}
              label={"Номер відділення"}
              display={"Оберіть номер відділення"}
              options={[
                {
                  label: "Відділення №33, вул. Антоновича 90",
                  value: "33",
                },
              ]}
            />
          )}
          {form.watch("delivery_method") === "courier" && (
            <FormTextInput
              fieldName={"department"}
              label={"Адреса"}
              placeholder={"Ваша адреса"}
            />
          )}
        </div>
        <Button
          fullWidth
          className={{ button: "sm:w-auto" }}
          type={"submit"}
          size={"large"}
          colorVariant={"black"}
        >
          Зберегти та продовжити
        </Button>
      </form>
    </FormProvider>
  );
}
