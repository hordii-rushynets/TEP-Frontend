"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { PurchaseUrl } from "route-urls";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import {
  Button,
  FormCheckbox,
  FormSelectInput,
  FormTextInput,
  TextInput,
} from "common/ui";
import { QuestionTip } from "components/User/QuestionTip";

const formSchema = z.object({
  payment_method: z
    .string()
    .min(1, "Обовязково оберіть спосіб оплати")
    .default(""),
  add_card: z.boolean().default(true),
  promo_code: z.string().default(""),
  comment: z.string().default(""),
});

type Form = z.infer<typeof formSchema>;

export function PaymentForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");

  const router = useRouter();

  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  function onSubmit(data: Form) {
    const fullData = {
      ...data,
      cardNumber: cardNumber.match(/\d/g)?.join(""),
      date,
      cvv,
    };
    fullData;
    setCardNumber("");
    setDate("");
    setCvv("");
    // TODO
    // ...
    router.push(PurchaseUrl.getConfirmation());
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
            fieldName={"payment_method"}
            label={"Споіб оплати"}
            display={"Оберіть спосіб оплати"}
            options={[
              {
                label: "Оплата картою он-лайн",
                value: "by_card",
              },
              {
                label: "Оплата при доставці",
                value: "upon_delivery",
              },
            ]}
          />
          {form.watch("payment_method") === "by_card" && (
            <div className={"flex flex-col gap-y-6 md:mb-4"}>
              <ReactInputMask
                mask={"9999 9999 9999 9999"}
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                alwaysShowMask
                autoComplete={"off"}
              >
                <TextInput label={"Номер банківської картки"} />
              </ReactInputMask>
              <div className={"flex flex-wrap gap-6"}>
                <ReactInputMask
                  mask={"99/99"}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  autoComplete={"off"}
                >
                  <TextInput
                    placeholder={"мм/рр"}
                    className={{
                      inputWrapper: "max-w-[184px]",
                    }}
                    label={"Дійсний до"}
                  />
                </ReactInputMask>
                <div className={"flex items-end gap-x-4"}>
                  <ReactInputMask
                    mask={"999"}
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    autoComplete={"off"}
                  >
                    <TextInput
                      className={{
                        inputWrapper: "max-w-[184px]",
                      }}
                      type={"password"}
                      placeholder={"•••"}
                      label={"CVV"}
                    />
                  </ReactInputMask>
                  <div className={"py-3.5 leading-[0]"}>
                    <QuestionTip
                      text={
                        "CVV/CVC2 - це код безпеки вашої картки. Це три останні цифри в полі підпису на зворотному боці Вашої картки."
                      }
                    />
                  </div>
                </div>
              </div>
              <FormCheckbox
                fieldName={"add_card"}
                label={"Додати картку до шаблану"}
              />
            </div>
          )}

          <FormTextInput
            fieldName={"promo_code"}
            label={"Промокод*"}
            placeholder={"Ваш промокод"}
          />
          <FormTextInput
            multiline
            fieldName={"comment"}
            label={"Коментар до замовлення*"}
            placeholder={"Ваш коментар"}
          />
        </div>
        <Button
          fullWidth
          className={{ button: "sm:w-auto" }}
          type={"submit"}
          size={"large"}
          colorVariant={"black"}
        >
          Оплатити та продовжити
        </Button>
      </form>
    </FormProvider>
  );
}
