"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { InfoUrl } from "route-urls";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import {
  Button,
  FormSelectInput,
  FormTextInput,
  TextInput,
  Title,
} from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export const contactUsRequestSchema = z.object({
  fullname: z.string().default(""),
  email: z.string().email("Не коректна адреса електронної пошти").default(""),
  communication_method: z.string().default(""),
  message: z.string().default(""),
});

type Form = z.infer<typeof contactUsRequestSchema>;

export function ContactUsRequestForm() {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const form = useForm<Form>({
    resolver: zodResolver(contactUsRequestSchema),
    defaultValues: getDefaults(contactUsRequestSchema),
  });
  function onSubmit(data: Form) {
    const fullData = { ...data, phone: phone.match(/\d/g)?.join("") };
    fullData;

    // TODO
    // ...

    form.reset();
    setPhone("");
    router.push(`${InfoUrl.getContactUsRequest()}/success`);
  }

  const { staticData } = useLocalization();

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Title className={"mb-[62px] text-3xl"}>{staticData.forms.contactUsRequestForm.text1}</Title>
        <div className={"mb-[72px] flex flex-col gap-y-6 md:mb-24"}>
          <FormTextInput<Form>
            fieldName={"fullname"}
            label={staticData.forms.contactUsRequestForm.text2}
            placeholder={staticData.forms.contactUsRequestForm.text3}
          />
          <FormTextInput<Form>
            fieldName={"email"}
            label={staticData.forms.contactUsRequestForm.text4}
            placeholder={"taras@gmail.com"}
          />
          <InputMask
            mask={"+38 (099) 999-99-99"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            alwaysShowMask
            autoComplete={"off"}
          >
            <TextInput label={staticData.forms.contactUsRequestForm.text5} />
          </InputMask>
          <FormSelectInput
            label={staticData.forms.contactUsRequestForm.text6}
            display={staticData.forms.contactUsRequestForm.text7}
            fieldName={"communication_method"}
            options={[
              { label: staticData.forms.contactUsRequestForm.text8, value: "by_phone" },
              { label: staticData.forms.contactUsRequestForm.text9, value: "by_email" },
            ]}
          />
          <FormTextInput<Form>
            multiline
            fieldName={"message"}
            label={staticData.forms.contactUsRequestForm.text10}
            placeholder={staticData.forms.contactUsRequestForm.text11}
          />
        </div>
        <Button
          type={"submit"}
          size={"super-large"}
          colorVariant={"black"}
          fullWidth
          className={{ button: "sm:w-auto" }}
        >
          {staticData.forms.contactUsRequestForm.text12}
        </Button>
      </form>
    </FormProvider>
  );
}
