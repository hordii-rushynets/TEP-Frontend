"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { Button, Dialog, FormTextInput, Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export function Promocode10Percent() {
  const [isOpen, setIsOpen] = useState(false);
  const { staticData } = useLocalization();

  const formSchema = z.object({
    email: z.string().email(staticData.forms.emailError).default(""),
  });
  
  type Form = z.infer<typeof formSchema>;

  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsOpen(true);
  //   }, 1000 * 120);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  function onSubmit(data: Form) {
    // TODO
    // ...
    data;
    setIsOpen(false);
    form.reset();
  }

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className={{ contentWrapper: "w-full md:max-w-[680px]" }}
    >
      <div
        className={
          "w-full px-6 py-20 text-center md:px-24 md:py-24 lg:px-24 lg:pb-28 lg:pt-36"
        }
      >
        <Title className={"mb-3.5 text-3xl"}>{staticData.purchase.promocode.text1}</Title>
        <p className={"mb-8 text-sm lg:font-extralight"}>
        {staticData.purchase.promocode.text2}{" "}
          <span className={"font-bold"}>{staticData.purchase.promocode.text3}</span> {staticData.purchase.promocode.text4}{" "}
          <span className={"font-bold"}>-10%</span> {staticData.purchase.promocode.text5}
        </p>
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={"mx-auto flex max-w-[392px] flex-col gap-y-5"}
          >
            <FormTextInput<Form>
              fieldName={"email"}
              placeholder={staticData.purchase.promocode.text6}
            />
            <Button
              type={"submit"}
              size={"super-large"}
              colorVariant={"black"}
              fullWidth
            >
              {staticData.purchase.promocode.text7}
            </Button>
          </form>
        </FormProvider>
      </div>
    </Dialog>
  );
}
