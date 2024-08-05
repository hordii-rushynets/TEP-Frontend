"use client";

import { Transition } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { Fragment, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FiHelpCircle, FiSend, FiX } from "react-icons/fi";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import { Button, ButtonBase, FormTextInput, Title } from "common/ui";

import AvatarIMG from "./static/chat-avatar.png";
import { useLocalization } from "contexts/LocalizationContext";

const formSchema = z.object({
  message: z.string().min(1).default(""),
});

type Form = z.infer<typeof formSchema>;

export function HelpButton() {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  function onSubmit(data: Form) {
    if (data?.message.trim()) {
      // Send message
      form.reset();
    }
  }

  const { staticData } = useLocalization();

  return (
    <>
      {!isOpen && (
        <Button
          size={"small"}
          colorVariant={"black"}
          startIcon={<FiHelpCircle className={"size-6 md:size-4"} />}
          className={{
            button: "fixed right-[4%] top-[90%] z-40 p-3 md:px-6 md:py-3",
          }}
          onClick={() => setIsOpen(true)}
        >
          <span className={"hidden md:block"}>{staticData.helpButton.name}</span>
        </Button>
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Transition.Child
          as={Fragment}
          enter={"ease-out duration-300"}
          enterFrom={"opacity-0 scale-95"}
          enterTo={"opacity-100 scale-100"}
          leave={"ease-in duration-200"}
          leaveFrom={"opacity-100 scale-100"}
          leaveTo={"opacity-0 scale-95"}
        >
          <div
            className={
              "fixed bottom-[5%] right-1/2 z-[300] h-[472px] w-[90%] max-w-[327px] translate-x-1/2 overflow-scroll  rounded-3xl bg-white p-6 shadow-[0_0_32px_rgba(29,29,29,0.2)] sm:right-[4%] sm:translate-x-0 md:max-w-[392px]"
            }
          >
            <div className={"flex h-full flex-col justify-between gap-7"}>
              <Title
                className={"max-w-52 sm:max-w-full md:text-center"}
                size={"xl"}
                component={"h4"}
              >
                {staticData.helpButton.title}
              </Title>
              <div className={"flex flex-1 flex-col gap-y-2"}>
                <div className={"flex items-start gap-x-2"}>
                  <div className={"size-10 shrink-0 basis-10"}></div>
                  <div>
                    <div
                      className={
                        "mb-1 rounded-2xl bg-tep_gray-200 px-4 py-3 text-xs font-extralight"
                      }
                    >
                      {staticData.helpButton.greeting}
                    </div>
                    <div
                      className={
                        "text-[10px] font-extralight text-tep_gray-700"
                      }
                    >
                      13:19
                    </div>
                  </div>
                </div>
                <div className={"flex items-start gap-x-2"}>
                  <div className={"relative size-10 shrink-0 basis-10"}>
                    <Image
                      src={AvatarIMG}
                      alt={"User"}
                      fill
                      className={"object-cover"}
                      sizes="100vw, 50vw, 33vw"
                    />
                  </div>
                  <div>
                    <div
                      className={
                        "mb-1 rounded-2xl bg-tep_gray-200 px-4 py-3 text-xs font-extralight"
                      }
                    >
                      {staticData.helpButton.greeting}
                    </div>
                    <div
                      className={
                        "text-[10px] font-extralight text-tep_gray-700"
                      }
                    >
                      13:20
                    </div>
                  </div>
                </div>
                <div className={"flex flex-row-reverse items-start gap-x-2"}>
                  <div className={"relative size-10 shrink-0 basis-10"}>
                    <Image
                      src={AvatarIMG}
                      alt={"User"}
                      fill
                      className={"object-cover"}
                      sizes="100vw, 50vw, 33vw"
                    />
                  </div>
                  <div>
                    <div
                      className={
                        "mb-1 rounded-2xl bg-tep_gray-200 px-4 py-3 text-xs font-extralight"
                      }
                    >
                      {staticData.helpButton.greeting}
                    </div>
                    <div
                      className={
                        "text-[10px] font-extralight text-tep_gray-700"
                      }
                    >
                      13:25
                    </div>
                  </div>
                </div>
              </div>
              <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormTextInput<Form>
                    className={{
                      inputWrapper:
                        "relative h-20 rounded-3xl border-tep_gray-700/20",
                      endIcon: "absolute right-4 top-4 z-20 p-0",
                      input:
                        "h-full resize-none placeholder:text-sm placeholder:text-tep_gray-700/50",
                    }}
                    placeholder={staticData.helpButton.placeholder}
                    endAdornment={
                      <ButtonBase type={"submit"}>
                        <FiSend
                          className={
                            "size-6 transition-colors hover:text-tep_blue-500 active:text-tep_blue-500/80"
                          }
                        />
                      </ButtonBase>
                    }
                    fieldName={"message"}
                    multiline
                  />
                </form>
              </FormProvider>
            </div>

            <ButtonBase
              className={{
                button: "absolute right-6 top-6 z-[210]",
              }}
              onClick={() => setIsOpen(false)}
              startIcon={
                <FiX
                  className={
                    "size-6 text-tep_gray-700 transition-colors hover:text-tep_blue-500"
                  }
                />
              }
            />
          </div>
        </Transition.Child>
      </Transition>
    </>
  );
}
