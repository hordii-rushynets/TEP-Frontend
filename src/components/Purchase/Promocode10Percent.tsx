"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { Button, Dialog, FormTextInput, Title } from "common/ui";

export const formSchema = z.object({
  email: z.string().email("Не коректна адреса електронної пошти").default(""),
});

type Form = z.infer<typeof formSchema>;

export function Promocode10Percent() {
  const [isOpen, setIsOpen] = useState(false);
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
        <Title className={"mb-3.5 text-3xl"}>Отакої!</Title>
        <p className={"mb-8 text-sm lg:font-extralight"}>
          Вітаємо! Ви набрали більше{" "}
          <span className={"font-bold"}>10 тис грн.</span> Отримайте{" "}
          <span className={"font-bold"}>-10%</span> на наступну покупку!
        </p>
        <FormProvider {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={"mx-auto flex max-w-[392px] flex-col gap-y-5"}
          >
            <FormTextInput<Form>
              fieldName={"email"}
              placeholder={"Ваша пошта"}
            />
            <Button
              type={"submit"}
              size={"super-large"}
              colorVariant={"black"}
              fullWidth
            >
              Отримати промокод
            </Button>
          </form>
        </FormProvider>
      </div>
    </Dialog>
  );
}
