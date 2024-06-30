import { Switch } from "@headlessui/react";
import { cn } from "utils/cn";

import { ColorCheckboxProps } from "./BlueCheckbox";

export function GrayCheckbox(props: ColorCheckboxProps) {
  const { checked, onChange, label, className = {} } = props;

  const {
    checkbox: checkboxClassName = "",
    label: labelClassName = "",
    wrapper,
  } = className;

  return (
    <div className={cn("flex flex-col items-center gap-y-4", wrapper)}>
      <Switch.Group>
        <Switch
          checked={checked}
          onChange={onChange}
          className={cn(
            `size-14 rounded-full bg-[#BFBFBF] outline-none`,
            {
              "border border-black": checked,
            },
            checkboxClassName,
          )}
        ></Switch>
        {label && (
          <Switch.Label
            className={cn(
              "mt-0.5 cursor-pointer select-none break-words text-center text-sm lg:font-extralight",
              {
                "!font-bold": checked,
              },
              labelClassName,
            )}
          >
            {label}
          </Switch.Label>
        )}
      </Switch.Group>
    </div>
  );
}
