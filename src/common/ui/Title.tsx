import { cn } from "utils/cn";

export type TitleProps = {
  children: React.ReactNode;
  component?: React.ElementType;
  className?: string;
  size?: "base" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl";
};

export function Title(props: TitleProps) {
  const {
    children,
    component: Component = "h2",
    className,
    size = "3xl",
  } = props;

  return (
    <Component
      className={cn(
        "font-bold",
        {
          "text-base": size === "base",
          "text-lg": size === "lg",
          "text-xl": size === "xl",
          "text-2xl": size === "2xl",
          "text-2xl md:text-3xl": size === "3xl",
          "text-3xl md:text-4xl": size === "4xl",
          "text-3xl md:text-5xl": size === "5xl",
        },
        className,
      )}
    >
      {children}
    </Component>
  );
}
