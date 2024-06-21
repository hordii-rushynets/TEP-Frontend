"use client";

import { Listbox, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FiAlertTriangle, FiCheck, FiChevronDown } from "react-icons/fi";
import { cn } from "utils/cn";

type Option = {
  value: string;
  label: string;
};

type BaseProps = {
  options: Option[];
  display?: string;
  className?: {
    label?: string;
    wrapper?: string;
    button?: string;
  };
  label?: string;
  helperText?: string;
  error?: boolean;
  children?: React.ReactNode;
};

export type SelectInputProps =
  | ({
      value: string;
      onChange: (value: string) => void;
      multiple?: false;
    } & BaseProps)
  | ({
      value: string[];
      onChange: (value: string[]) => void;
      multiple: true;
    } & BaseProps);

export function SelectInput(props: SelectInputProps) {
  const {
    value,
    children,
    onChange,
    options,
    display = "",
    multiple,
    label,
    helperText,
    error,
    className = {},
  } = props;

  const { label: labelClassName, wrapper, button } = className;

  let displayValue = display;
  if (multiple) {
    const activeOptionsLabel = options
      .filter((i) => value.includes(i.value))
      .map((i) => i.label)
      .join(", ");
    if (activeOptionsLabel) displayValue = activeOptionsLabel;
  } else {
    const activeOptionLabel = options.find((i) => i.value === value)?.label;
    if (activeOptionLabel) displayValue = activeOptionLabel;
  }

  return (
    <div className={cn("flex flex-col gap-y-2", wrapper)}>
      {label && (
        <label className={cn("text-sm lg:font-extralight", labelClassName)}>
          {label}
        </label>
      )}
      <Listbox value={value} onChange={onChange} multiple={multiple}>
        <div className={"relative"}>
          {children ? (
            <Listbox.Button as={"div"}>{children}</Listbox.Button>
          ) : (
            <Listbox.Button
              className={cn(
                "group flex w-full items-center justify-between rounded-full border border-tep_gray-700/20 text-left text-tep_gray-700 transition-colors hover:border-black hover:text-black",
                { "border-tep_red-500": error },
                button,
              )}
            >
              {({ open }) => (
                <>
                  <span
                    className={cn(
                      "line-clamp-1 flex-1 whitespace-nowrap px-6 py-[15px] text-sm font-light",
                      {
                        "text-black": displayValue !== display,
                      },
                    )}
                  >
                    {displayValue}
                  </span>
                  <div className={"px-6 py-[11px]"}>
                    <FiChevronDown
                      aria-hidden
                      className={cn(
                        "size-6 transform select-none text-tep_gray-700 transition-transform group-hover:text-black",
                        {
                          "rotate-180": open,
                        },
                      )}
                    />
                  </div>
                </>
              )}
            </Listbox.Button>
          )}
          <Transition
            as={Fragment}
            enter={"transition ease-in duration-100"}
            enterFrom={"opacity-0"}
            enterTo={"opacity-100"}
            leave={"transition ease-in duration-100"}
            leaveFrom={"opacity-100"}
            leaveTo={"opacity-0"}
          >
            <Listbox.Options
              className={
                "absolute z-[300] max-h-44 w-full overflow-scroll rounded-2xl border border-tep_gray-200 bg-white text-sm text-black shadow-[0_10px_24px_rgba(150,150,150,0.15)] focus:outline-none lg:font-light"
              }
            >
              {options.map((i) => (
                <Listbox.Option key={i.value} value={i.value}>
                  {({ active, selected }) => (
                    <span
                      className={cn(
                        "line-clamp-1 flex cursor-pointer select-none items-center justify-between whitespace-nowrap px-6 pb-3.5 pt-4",
                        {
                          "bg-tep_gray-200": active,
                          "!bg-tep_blue-500 text-white": selected,
                        },
                      )}
                    >
                      {i.label}

                      {selected && multiple && (
                        <FiCheck
                          className={"h-4 w-4 flex-shrink-0 text-tep_blue-500"}
                        />
                      )}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>

      {helperText && (
        <p
          className={cn("flex items-center gap-x-2 text-xs font-bold", {
            "text-tep_red-500": error,
            "text-tep_gray-700": !error,
          })}
        >
          <FiAlertTriangle className={"size-4 stroke-[2.5px]"} />
          {helperText}
        </p>
      )}
    </div>
  );
}
