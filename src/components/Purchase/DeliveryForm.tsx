"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { PurchaseUrl } from "route-urls";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { Button, FormSelectInput, FormTextInput } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

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

  const { staticData } = useLocalization();

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
            label={staticData.purchase.deliveryForm.text1}
            display={staticData.purchase.deliveryForm.text2}
            options={[
              {
                label: staticData.purchase.deliveryForm.text3,
                value: "ua_post",
              },
              {
                label: staticData.purchase.deliveryForm.text4,
                value: "new_post",
              },
            ]}
          />
          <FormSelectInput
            fieldName={"delivery_method"}
            label={staticData.purchase.deliveryForm.text5}
            display={staticData.purchase.deliveryForm.text6}
            options={[
              {
                label:
                  form.watch("delivery_service") === "new_post"
                    ? staticData.purchase.deliveryForm.text7
                    : staticData.purchase.deliveryForm.text8,
                value: "department",
              },
              {
                label:
                  form.watch("delivery_service") === "new_post"
                    ? staticData.purchase.deliveryForm.text9
                    : staticData.purchase.deliveryForm.text10,
                value: "courier",
              },
            ]}
          />
          {form.watch("delivery_method") === "department" && (
            <FormSelectInput
              fieldName={"department"}
              label={staticData.purchase.deliveryForm.text11}
              display={staticData.purchase.deliveryForm.text12}
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
              label={staticData.purchase.deliveryForm.text13}
              placeholder={staticData.purchase.deliveryForm.text14}
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
          {staticData.purchase.deliveryForm.text15}
        </Button>
      </form>
    </FormProvider>
  );
}
