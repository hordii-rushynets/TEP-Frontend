import { Dialog as HuiDialog, Transition } from "@headlessui/react";
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

export function Dialog(props: DialogProps) {
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
      <HuiDialog onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter={"ease-out transition transform duration-300"}
          enterFrom={"opacity-0 scale-95"}
          enterTo={"opacity-100 scale-100"}
          leave={"ease-in transition transform duration-200"}
          leaveFrom={"opacity-100 scale-100"}
          leaveTo={"opacity-0 scale-95"}
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
          enterFrom={"opacity-0 scale-90"}
          enterTo={"opacity-100 scale-100"}
          leave={"ease-in transition transform duration-200"}
          leaveFrom={"opacity-100 scale-100"}
          leaveTo={"opacity-0 scale-90"}
        >
          <HuiDialog.Panel
            className={cn(
              `fixed left-1/2 top-1/2 z-[200] max-h-full max-w-[calc(100%-48px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto overflow-x-hidden`,
              className?.contentWrapper,
            )}
          >
            <div
              className={cn(
                "relative flex flex-col items-center overflow-hidden rounded-3xl bg-white",
                className?.content,
              )}
            >
              <ButtonBase
                className={{
                  button: "absolute right-10 top-10 z-[210] outline-none",
                }}
                onClick={onClose}
                startIcon={
                  <FiX
                    className={
                      "size-6 text-tep_gray-700 transition-colors hover:text-tep_blue-500"
                    }
                  />
                }
              />

              {children}
            </div>
          </HuiDialog.Panel>
        </Transition.Child>
      </HuiDialog>
    </Transition>
  );
}
