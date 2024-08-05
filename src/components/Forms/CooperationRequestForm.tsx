"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { CompanyUrl } from "route-urls";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { Button, FormTextInput, TextInput, Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export const leaveRequestSchema = z.object({
  fullname: z.string().default(""),
  email: z.string().email("Не коректна адреса електронної пошти").default(""),
  message: z.string().default(""),
});

type Form = z.infer<typeof leaveRequestSchema>;

export function CooperationRequestForm() {
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const form = useForm<Form>({
    resolver: zodResolver(leaveRequestSchema),
    defaultValues: getDefaults(leaveRequestSchema),
  });
  function onSubmit(data: Form) {
    const fullData = { ...data, phone: phone.match(/\d/g)?.join("") };
    fullData;

    // TODO
    // ...

    form.reset();
    setPhone("");
    router.push(CompanyUrl.getCooperationSuccess());
  }
  const { staticData } = useLocalization();

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Title className={"mb-[62px] text-3xl"}>{staticData.forms.cooperationequestForm.text1}</Title>
        <div className={"mb-[72px] flex flex-col gap-y-6 md:mb-24"}>
          <FormTextInput<Form>
            fieldName={"fullname"}
            label={staticData.forms.cooperationequestForm.text2}
            placeholder={staticData.forms.cooperationequestForm.text3}
          />
          <FormTextInput<Form>
            fieldName={"email"}
            label={staticData.forms.cooperationequestForm.text4}
            placeholder={"taras@gmail.com"}
          />
          <InputMask
            mask={"+38 (099) 999-99-99"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            alwaysShowMask
            autoComplete={"off"}
          >
            <TextInput label={staticData.forms.cooperationequestForm.text5} />
          </InputMask>

          <FormTextInput<Form>
            multiline
            fieldName={"message"}
            label={staticData.forms.cooperationequestForm.text6}
            placeholder={staticData.forms.cooperationequestForm.text7}
          />
        </div>
        <Button
          type={"submit"}
          size={"super-large"}
          colorVariant={"black"}
          fullWidth
          className={{ button: "sm:w-auto" }}
        >
          {staticData.forms.cooperationequestForm.text8}
        </Button>
      </form>
    </FormProvider>
  );
}
