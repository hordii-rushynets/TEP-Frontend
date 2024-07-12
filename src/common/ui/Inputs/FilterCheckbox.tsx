import { Switch, Transition } from "@headlessui/react";
import { ReactNode } from "react";
import { FiCheck } from "react-icons/fi";
import { cn } from "utils/cn";

export type FilterCheckboxProps = {
  checked: boolean;
  onChange?: (checked: boolean) => void;
  label?: string | ReactNode;
  className?: {
    checkbox?: string;
    label?: string;
    wrapper?: string;
  };
};

export function FilterCheckbox(props: FilterCheckboxProps) {
  const { checked, onChange, label, className = {} } = props;

  const {
    checkbox: checkboxClassName = "",
    label: labelClassName = "",
    wrapper,
  } = className;

  return (
    <div className={cn("flex items-center justify-between gap-x-4 my-2", wrapper)}>
      <Switch.Group>
        {label && (
          <Switch.Label
            className={cn(
              "mt-0.5 cursor-pointer select-none text-sm lg:font-extralight",
              labelClassName,
            )}
          >
            {label}
          </Switch.Label>
        )}
        <Switch
          checked={checked}
          onChange={onChange}
          className={cn(
            "relative inline-flex size-6 shrink-0 items-center justify-center rounded border-2 border-tep_gray-700/50 outline-none",
            {
              "border-black bg-black": checked,
            },
            checkboxClassName,
          )}
        >
          <Transition
            show={checked}
            enter={"transition-opacity duration-75"}
            enterFrom={"opacity-0 scale-75"}
            enterTo={"opacity-100 scale-100"}
            leave={"transition-opacity duration-75"}
            leaveFrom={"opacity-100 scale-100"}
            leaveTo={"opacity-0 scale-75"}
          >
            <FiCheck className={"text-white"} />
          </Transition>
        </Switch>
      </Switch.Group>
    </div>
  );
}
