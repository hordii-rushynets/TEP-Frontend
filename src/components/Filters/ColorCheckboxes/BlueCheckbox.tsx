import { Switch } from "@headlessui/react";
import { ReactNode } from "react";
import { cn } from "utils/cn";

export type ColorCheckboxProps = {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  label?: string | ReactNode;
  className?: {
    checkbox?: string;
    label?: string;
    wrapper?: string;
  };
};

export function BlueCheckbox(props: ColorCheckboxProps) {
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
            `size-14 rounded-full bg-[#3B5B8C] outline-none`,
            {
              "border border-black": checked,
            },
            checkboxClassName,
          )}
        ></Switch>
        {label && (
          <Switch.Label
            className={cn(
              "mt-0.5 cursor-pointer select-none text-center text-sm lg:font-extralight",
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
