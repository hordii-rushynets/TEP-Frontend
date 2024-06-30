import { cn } from "utils/cn";

import { ButtonBase, ButtonBaseProps } from "common/ui";

export type IconButtonProps<T> = {
  size?: "small" | "normal" | "large";
  colorVariant?: "black" | "ghost" | "empty" | "outlined";
} & Omit<ButtonBaseProps<T>, "endIcon">;

export function IconButton<T>(props: IconButtonProps<T>) {
  const {
    size = "small",
    colorVariant = "black",
    className,
    loading = false,
    children,
    ...buttonBaseProps
  } = props;

  return (
    <ButtonBase
      loading={loading}
      className={{
        button: cn(
          "cursor-pointer justify-center rounded-full transition-colors ease-linear disabled:cursor-not-allowed",
          {
            "disabled:opacity-50": !loading,
          },
          {
            "opacity-90": loading,
          },
          {
            // Black
            "text-white": colorVariant === "black",
            "bg-black hover:bg-tep_blue-500 active:bg-tep_blue-500/90 disabled:bg-gray-400":
              colorVariant === "black" && !loading,
          },
          {
            // Ghost
            "text-white": colorVariant === "ghost",
            "bg-tep_gray-700/50 hover:bg-tep_gray-700/70 active:bg-tep_gray-700/60 disabled:bg-tep_gray-200":
              colorVariant === "ghost" && !loading,
          },
          {
            // Empty
            "text-black": colorVariant === "empty",
            " hover:text-tep_blue-500 active:text-tep_blue-500/80 disabled:text-tep_gray-700":
              colorVariant === "empty" && !loading,
          },
          {
            // Outlined
            "border border-black text-black": colorVariant === "outlined",
            " hover:border-tep_blue-500 hover:text-tep_blue-500 active:text-tep_blue-500/80 disabled:text-tep_gray-700":
              colorVariant === "outlined" && !loading,
          },
          {
            "h-6 w-6": size === "small",
            "h-10 w-10": size === "normal",
            "h-12 w-12": size === "large",
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
