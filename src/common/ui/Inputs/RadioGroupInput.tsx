import { RadioGroup } from "@headlessui/react";
import { cn } from "utils/cn";

type Option = {
  value: string;
  label: string;
};

export type RadioGroupInputProps = {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  className?: {
    label?: string;
  };
  label?: string;
  helperText?: string;
  error?: boolean;
};

export function RadioGroupInput(props: RadioGroupInputProps) {
  const { value, onChange, options, className, label, helperText, error } =
    props;

  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      className={"flex flex-col gap-y-2"}
    >
      {label && (
        <RadioGroup.Label
          className={cn(
            "text-sm font-medium text-tep_gray-700",
            className?.label,
          )}
        >
          {label}
        </RadioGroup.Label>
      )}

      <div className={"flex flex-col gap-y-5"}>
        {options.map((i) => (
          <RadioGroup.Option key={i.value} value={i.value}>
            {({ checked }) => (
              <div
                className={
                  "group flex cursor-pointer items-center justify-between gap-x-2"
                }
              >
                <span
                  className={cn(
                    "line-clamp-1 text-sm underline-offset-2 group-hover:underline lg:font-extralight",
                    {
                      "font-medium": checked,
                    },
                  )}
                >
                  {i.label}
                </span>
                <div
                  aria-hidden
                  className={
                    "flex size-6 items-center justify-center rounded-full border-2 border-tep_gray-700/50 "
                  }
                >
                  <span
                    className={cn(
                      "size-3.5 scale-0 transform rounded-full bg-black transition-transform",
                      {
                        "scale-100": checked,
                      },
                    )}
                  ></span>
                </div>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>

      {helperText && (
        <p
          className={cn("text-sm font-medium", {
            "text-red-600": error,
            "text-gray-500": !error,
          })}
        >
          {helperText}
        </p>
      )}
    </RadioGroup>
  );
}
