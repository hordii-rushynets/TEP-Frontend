"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider } from "react-hook-form";
import InputMask from "react-input-mask";
import { PurchaseUrl } from "route-urls";

import { Button, FormTextInput, TextInput } from "common/ui";
import { AddressForm as AddressFormType, usePostService } from "contexts/PostServiceContext";
import { useLocalization } from "contexts/LocalizationContext";

export function AddressForm() {
  const { staticData } = useLocalization();
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
      addressForm.setError("phoneNumber", { type: "manual", message: staticData.forms.phoneError });
      setPhoneNumberError(staticData.forms.phoneError);
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
            label={staticData.purchase.addressForm.text1}
            placeholder={staticData.purchase.addressForm.text2}
          />
          <FormTextInput<AddressFormType>
            fieldName={"lastName"}
            label={staticData.purchase.addressForm.text3}
            placeholder={staticData.purchase.addressForm.text4}
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
            <TextInput label={staticData.purchase.addressForm.text13} placeholder={staticData.purchase.addressForm.text14} error={phoneNumberError !== ""} helperText={phoneNumberError}/>
          </InputMask>
          <FormTextInput<AddressFormType>
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
