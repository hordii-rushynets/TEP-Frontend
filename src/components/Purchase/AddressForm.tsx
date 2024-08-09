"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { PurchaseUrl } from "route-urls";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { Button, FormTextInput, TextInput } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export function AddressForm() {
  const { staticData } = useLocalization();
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();

  const formSchema = z.object({
    firstName: z.string().min(1, staticData.forms.firstNameError).default(""),
    lastName: z.string().min(1, staticData.forms.secondNameError).default(""),
    street: z.string().min(1, staticData.forms.streetError).default(""),
    city: z.string().min(1, staticData.forms.cityError).default(""),
    region: z.string().min(1, staticData.forms.regionError).default(""),
    postal: z.string().min(1, staticData.forms.postalError).default(""),
    phoneNumber: z.string().default(""),
    email: z.string().email(staticData.forms.emailError).default(""),
  });
  
  type Form = z.infer<typeof formSchema>;

  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  function onSubmit(data: Form) {
    const fullData = {
      ...data,
      phoneNumber: phoneNumber.match(/\d/g)?.join(""),
    };
    fullData;
    // TODO
    // ...
    router.push(PurchaseUrl.getDelivery());
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={"max-w-[600px]"}>
        <div
          className={
            "mb-12 flex flex-col gap-y-6 border-b border-tep_gray-200 pb-24"
          }
        >
          <FormTextInput<Form>
            fieldName={"firstName"}
            label={staticData.purchase.addressForm.text1}
            placeholder={staticData.purchase.addressForm.text2}
          />
          <FormTextInput<Form>
            fieldName={"lastName"}
            label={staticData.purchase.addressForm.text3}
            placeholder={staticData.purchase.addressForm.text4}
          />
          <FormTextInput
            fieldName={"street"}
            label={staticData.purchase.addressForm.text5}
            placeholder={staticData.purchase.addressForm.text6}
          />

          <FormTextInput
            fieldName={"city"}
            label={staticData.purchase.addressForm.text7}
            placeholder={staticData.purchase.addressForm.text8}
          />
          <FormTextInput
            fieldName={"region"}
            label={staticData.purchase.addressForm.text9}
            placeholder={staticData.purchase.addressForm.text10}
          />
          <FormTextInput
            fieldName={"postal"}
            label={staticData.purchase.addressForm.text11}
            placeholder={staticData.purchase.addressForm.text12}
          />
          <InputMask
            mask={"+38 (099) 999 99 99"}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            alwaysShowMask
            autoComplete={"off"}
          >
            <TextInput label={staticData.purchase.addressForm.text13} placeholder={staticData.purchase.addressForm.text14} />
          </InputMask>
          <FormTextInput<Form>
            fieldName={"email"}
            label={staticData.purchase.addressForm.text15}
            placeholder={staticData.purchase.addressForm.text16}
          />
        </div>
        <Button
          fullWidth
          className={{ button: "sm:w-auto" }}
          type={"submit"}
          size={"large"}
          colorVariant={"black"}
        >
          {staticData.purchase.addressForm.text17}
        </Button>
      </form>
    </FormProvider>
  );
}
