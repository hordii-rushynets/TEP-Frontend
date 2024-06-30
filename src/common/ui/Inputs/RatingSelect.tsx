import { Rating, RatingProps } from "@smastrom/react-rating";
import { FiAlertTriangle } from "react-icons/fi";
import { cn } from "utils/cn";

export type RatingSelectProps = {
  label?: string;
  className?: {
    label?: string;
    wrapper?: string;
    inputWrapper?: string;
  };
  helperText?: string;
  error?: boolean;
} & Omit<RatingProps, "className">;

export function RatingSelect(props: RatingSelectProps) {
  const { label, className = {}, helperText, error, ...ratingProps } = props;
  const {
    label: labelClassName = "",
    wrapper,
    inputWrapper: inputWrapperClassName = "max-w-[232px]",
  } = className;

  return (
    <div className={cn("flex flex-col gap-y-2", wrapper)}>
      {label && (
        <label
          className={cn(
            "mb-4 text-sm text-black lg:font-extralight",
            labelClassName,
          )}
        >
          {label}
        </label>
      )}

      <div className={inputWrapperClassName}>
        <Rating {...ratingProps} />
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
}
