import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type SectionProps = {
  children: React.ReactNode;
  size?: "default" | "small";
  className?: string;
  component?: React.ElementType;
};

export function Section(props: SectionProps) {
  const { children, size, className, component: Component = "section" } = props;

  return (
    <Component
      className={twMerge(
        clsx({
          "py-12": size === "default",
          "py-4 md:py-7": size === "small",
        }),
        className,
      )}
    >
      {children}
    </Component>
  );
}
