import { forwardRef, useId, useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import { cn } from "utils/cn";

type BaseProps = {
  label?: string;
  className?: {
    wrapper?: string;
    label?: string;
    inputWrapper?: string;
    input?: string;
    startIcon?: string;
    endIcon?: string;
  };
  helperText?: string;
  error?: boolean;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
};

export type TextInputProps =
  | ({
      multiline?: false;
    } & BaseProps &
      Omit<React.InputHTMLAttributes<HTMLInputElement>, "className">)
  | ({
      multiline: true;
    } & BaseProps &
      Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "className">);

export const TextInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextInputProps
>((props, ref) => {
  const {
    label,
    className,
    helperText,
    error = false,
    startAdornment,
    endAdornment,
    multiline = false,
    ...inputProps
  } = props;
  const [isFocused, setIsFocused] = useState(false);
  const id = useId();

  const Component = multiline ? "textarea" : "input";

  return (
    <div className={cn("flex flex-col gap-y-2", className?.wrapper)}>
      {label && (
        <label
          htmlFor={id}
          className={cn(
            "text-sm text-black lg:font-extralight",
            className?.label,
          )}
        >
          {label}
        </label>
      )}

      <div
        className={cn(
          "flex flex-nowrap items-center overflow-hidden border border-tep_gray-700/20",
          {
            "rounded-full": !multiline,
            "rounded-3xl": multiline,
          },
          {
            "border-black": isFocused && !error,
            "border-tep_red-500": error,
          },
          className?.inputWrapper,
        )}
      >
        {startAdornment && (
          <div className={cn("pl-6", className?.startIcon)}>
            {startAdornment}
          </div>
        )}

        <Component
          id={id}
          className={cn(
            "block flex-1 appearance-none bg-transparent px-6 pb-3.5 pt-4 text-sm font-light text-black outline-none placeholder:text-sm placeholder:font-light placeholder:text-tep_gray-700",
            { "min-h-40": multiline },
            className?.input,
          )}
          // @ts-expect-error ref discrimination error
          ref={ref}
          // @ts-expect-error ref discrimination error
          type={multiline ? undefined : inputProps.type ?? "text"}
          {...{
            ...inputProps,
            onFocus: (e) => {
              // @ts-expect-error ref discrimination error
              inputProps?.onFocus?.(e);
              setIsFocused(true);
            },
            onBlur: (e) => {
              // @ts-expect-error ref discrimination error
              inputProps?.onBlur?.(e);
              setIsFocused(false);
            },
          }}
        />

        {endAdornment && (
          <div className={cn("pr-6", className?.endIcon)}>{endAdornment}</div>
        )}
      </div>

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
});

TextInput.displayName = "TextInput";
