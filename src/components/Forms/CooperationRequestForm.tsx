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
import { VacancyService } from "app/company/vacancies/services";

export function CooperationRequestForm() {
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const { staticData } = useLocalization();
  const vacancyService = new VacancyService();

  const leaveRequestSchema = z.object({
    name: z.string().min(1, staticData.forms.requiredError).default(""),
    email: z.string().email(staticData.forms.emailError).default(""),
    message: z.string().min(1, staticData.forms.requiredError).default(""),
    topic: z.string().min(1, staticData.forms.requiredError).default("")
  });
  
  type Form = z.infer<typeof leaveRequestSchema>;

  const form = useForm<Form>({
    resolver: zodResolver(leaveRequestSchema),
    defaultValues: getDefaults(leaveRequestSchema),
  });
  function onSubmit(data: Form) {
    const fullData = { ...data, phone: phone.match(/\d/g)?.join("") };
    vacancyService.postCooperationOffer(fullData).then(success => {
      if (success) {
        form.reset();
        setPhone("");
        router.push(CompanyUrl.getCooperationSuccess());
      }
    })
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Title className={"mb-[62px] text-3xl"}>{staticData.forms.cooperationRequestForm.text1}</Title>
        <div className={"mb-[72px] flex flex-col gap-y-6 md:mb-24"}>
          <FormTextInput<Form>
            fieldName={"name"}
            label={staticData.forms.cooperationRequestForm.text2}
            placeholder={staticData.forms.cooperationRequestForm.text3}
          />
          <FormTextInput<Form>
            fieldName={"email"}
            label={staticData.forms.cooperationRequestForm.text4}
            placeholder={"taras@gmail.com"}
          />
          <InputMask
            mask={"+38 (099) 999-99-99"}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            alwaysShowMask
            autoComplete={"off"}
          >
            <TextInput label={staticData.forms.cooperationRequestForm.text5} />
          </InputMask>
          <FormTextInput<Form>
            fieldName={"topic"}
            label={staticData.forms.cooperationRequestForm.subjectLabel}
            placeholder={staticData.forms.cooperationRequestForm.subjectPlaceholder}
          />
          <FormTextInput<Form>
            multiline
            fieldName={"message"}
            label={staticData.forms.cooperationRequestForm.text6}
            placeholder={staticData.forms.cooperationRequestForm.text7}
          />
        </div>
        <Button
          type={"submit"}
          size={"super-large"}
          colorVariant={"black"}
          fullWidth
          className={{ button: "sm:w-auto" }}
        >
          {staticData.forms.cooperationRequestForm.text8}
        </Button>
      </form>
    </FormProvider>
  );
}
