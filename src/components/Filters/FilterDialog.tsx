import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FiX } from "react-icons/fi";
import { cn } from "utils/cn";

import { ButtonBase } from "common/ui";

export type DialogProps = {
  open?: boolean;
  onClose?: () => void;
  children?: React.ReactNode;
  className?: {
    overlay?: string;
    contentWrapper?: string;
    content?: string;
  };
};

export function FilterDialog(props: DialogProps) {
  const {
    open = false,
    onClose = () => {
      console.warn("Close dialog not implemented");
    },
    children,
    className,
  } = props;

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter={"ease-out transition transform duration-300"}
          enterFrom={"opacity-0"}
          enterTo={"opacity-100"}
          leave={"ease-in transition transform duration-200"}
          leaveFrom={"opacity-100"}
          leaveTo={"opacity-0"}
        >
          <div
            className={cn(
              "fixed inset-0 z-[200] bg-black/25",
              className?.overlay,
            )}
            aria-hidden
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter={"ease-out transition transform duration-300"}
          enterFrom={"opacity-0 translate-x-full"}
          enterTo={"opacity-100 translate-x-0"}
          leave={"ease-in transition transform duration-200"}
          leaveFrom={"opacity-100 translate-x-0"}
          leaveTo={"opacity-0 translate-x-full"}
        >
          <Dialog.Panel
            className={cn(
              "fixed inset-y-0 right-0 top-[10%] z-[200] w-full overflow-y-auto overflow-x-hidden md:top-0 md:h-auto md:w-[529px]",
              className?.contentWrapper,
            )}
          >
            <div
              className={cn(
                "relative flex h-full flex-col items-center overflow-hidden rounded-t-3xl bg-white p-6 pt-16 md:rounded-none md:pb-8 md:pl-16 md:pr-28",
                className?.content,
              )}
            >
              <ButtonBase
                className={{
                  button:
                    "absolute right-6 top-6 z-[210] outline-none md:right-28 md:top-16",
                }}
                onClick={onClose}
                startIcon={
                  <FiX
                    className={
                      "size-6 transition-colors hover:text-tep_blue-500"
                    }
                  />
                }
              />

              {children}
            </div>
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}
