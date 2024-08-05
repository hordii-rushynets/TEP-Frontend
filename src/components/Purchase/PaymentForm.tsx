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
import { useLocalization } from "contexts/LocalizationContext";

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
            fieldName={"payment_method"}
            label={staticData.purchase.paymentForm.text1}
            display={staticData.purchase.paymentForm.text2}
            options={[
              {
                label: staticData.purchase.paymentForm.text3,
                value: "by_card",
              },
              {
                label: staticData.purchase.paymentForm.text4,
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
                <TextInput label={staticData.purchase.paymentForm.text5} />
              </ReactInputMask>
              <div className={"flex flex-wrap gap-6"}>
                <ReactInputMask
                  mask={"99/99"}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  autoComplete={"off"}
                >
                  <TextInput
                    placeholder={staticData.purchase.paymentForm.text6}
                    className={{
                      inputWrapper: "max-w-[184px]",
                    }}
                    label={staticData.purchase.paymentForm.text7}
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
                        staticData.purchase.paymentForm.text8
                      }
                    />
                  </div>
                </div>
              </div>
              <FormCheckbox
                fieldName={"add_card"}
                label={staticData.purchase.paymentForm.text9}
              />
            </div>
          )}

          <FormTextInput
            fieldName={"promo_code"}
            label={staticData.purchase.paymentForm.text10}
            placeholder={staticData.purchase.paymentForm.text11}
          />
          <FormTextInput
            multiline
            fieldName={"comment"}
            label={staticData.purchase.paymentForm.text12}
            placeholder={staticData.purchase.paymentForm.text13}
          />
        </div>
        <Button
          fullWidth
          className={{ button: "sm:w-auto" }}
          type={"submit"}
          size={"large"}
          colorVariant={"black"}
        >
          {staticData.purchase.paymentForm.text14}
        </Button>
      </form>
    </FormProvider>
  );
}
