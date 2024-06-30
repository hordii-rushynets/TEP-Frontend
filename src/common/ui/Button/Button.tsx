import { cn } from "utils/cn";

import { ButtonBase, ButtonBaseProps } from "common/ui";

export type ButtonProps<T> = {
  size?: "small" | "normal" | "large" | "super-large" | "filter";
  colorVariant?: "white" | "black" | "outlined" | "danger" | "gray" | "filter";
  fullWidth?: boolean;
} & ButtonBaseProps<T>;

export function Button<T>(props: ButtonProps<T>) {
  const {
    size = "normal",
    colorVariant = "outlined",
    fullWidth = false,
    children,
    className,
    loading = false,
    ...buttonBaseProps
  } = props;

  return (
    <ButtonBase
      loading={loading}
      className={{
        button: cn(
          "cursor-pointer items-center justify-center rounded-full text-center text-sm font-bold transition-colors duration-200 ease-linear disabled:cursor-not-allowed",
          {
            "disabled:opacity-50": !loading,
          },
          {
            "opacity-90": loading,
          },
          {
            // White
            "bg-white text-black": colorVariant === "white",
            "hover:text-tep_blue-500 active:bg-tep_gray-200 disabled:bg-tep_gray-200 disabled:text-tep_gray-700":
              colorVariant === "white" && !loading,
          },
          {
            // Black
            "bg-black text-white": colorVariant === "black",
            "hover:bg-tep_blue-500 active:bg-tep_blue-500/90 disabled:text-tep_gray-200":
              colorVariant === "black" && !loading,
          },
          {
            // Outlined
            "border border-black text-black": colorVariant === "outlined",
            "hover:border-tep_blue-500 hover:bg-white/20 hover:text-tep_blue-500 active:border-black active:bg-transparent active:text-black disabled:bg-tep_gray-700/60 disabled:hover:border-black disabled:hover:text-black":
              colorVariant === "outlined" && !loading,
          },
          {
            // Gray
            "border border-tep_gray-700/20 text-black": colorVariant === "gray",
            "hover:border-tep_gray-700 active:border-tep_blue-500 active:text-tep_blue-500 disabled:text-gray-200":
              colorVariant === "gray" && !loading,
          },
          {
            // Filter
            "bg-[#EAEAEA] text-black": colorVariant === "filter",
            "hover:bg-tep_gray-700/50 active:bg-tep_gray-700/30 disabled:bg-gray-700/50 disabled:text-gray-200":
              colorVariant === "filter" && !loading,
          },
          {
            // Danger
            "bg-red-500 text-red-50": colorVariant === "danger",
            "hover:bg-red-400 active:bg-red-600 disabled:hover:bg-red-500":
              colorVariant === "danger" && !loading,
          },
          {
            "w-full": fullWidth,
            "px-6 py-3": size === "small",
            "px-6 py-4": size === "normal",
            "px-12 py-4": size === "large",
            "px-16 py-4": size === "super-large",
            "px-8 py-3": size === "filter",
          },
          className?.button,
        ),
        loadingIcon: className?.loadingIcon,
      }}
      {...buttonBaseProps}
    >
      {children}
    </ButtonBase>
  );
}
