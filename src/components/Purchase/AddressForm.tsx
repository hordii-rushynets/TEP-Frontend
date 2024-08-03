"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider } from "react-hook-form";
import InputMask from "react-input-mask";
import { PurchaseUrl } from "route-urls";

import { Button, FormTextInput, TextInput } from "common/ui";
import { AddressForm as AddressFormType, usePostService } from "contexts/PostServiceContext";

export function AddressForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const router = useRouter();

  const { addressForm } = usePostService();

  function onSubmit(data: AddressFormType) {
    addressForm.clearErrors("phoneNumber");
    const realPhone = phoneNumber.match(/\d/g)?.join("") || "";
    if (realPhone.length === 12) {
      addressForm.setValue("phoneNumber", realPhone);
      router.push(PurchaseUrl.getDelivery());
    }
    else {
      addressForm.setError("phoneNumber", { type: "manual", message: "Введіть дійсний номер телефону" });
      setPhoneNumberError("Введіть дійсний номер телефону");
    }
  }

  return (
    <FormProvider {...addressForm}>
      <form onSubmit={addressForm.handleSubmit(onSubmit)} className={"max-w-[600px]"}>
        <div
          className={
            "mb-12 flex flex-col gap-y-6 border-b border-tep_gray-200 pb-24"
          }
        >
          <FormTextInput<AddressFormType>
            fieldName={"firstName"}
            label={"Ім’я"}
            placeholder={"Ваше ім’я"}
          />
          <FormTextInput<AddressFormType>
            fieldName={"lastName"}
            label={"Прізвище"}
            placeholder={"Ваше прізвище"}
          />
          <FormTextInput
            fieldName={"city"}
            label={"Місто"}
            placeholder={"Ваше місто"}
          />
          <FormTextInput
            fieldName={"region"}
            label={"Область"}
            placeholder={"Ваша область"}
          />
          <FormTextInput
            fieldName={"postal"}
            label={"Індекс"}
            placeholder={"Ваш індекс"}
          />
          <InputMask
            mask={"+38 (099) 999 99 99"}
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            alwaysShowMask
            autoComplete={"off"}
          >
            <TextInput label={"Телефон"} placeholder={"Ваш телефон"} error={phoneNumberError !== ""} helperText={phoneNumberError}/>
          </InputMask>
          <FormTextInput<AddressFormType>
            fieldName={"email"}
            label={"Електронна пошта"}
            placeholder={"Ваша пошта"}
          />
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
