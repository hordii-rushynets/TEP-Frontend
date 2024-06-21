import { TbLoader3 } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

export type LoaderProps = {
  className?: {
    wrapper?: string;
    icon?: string;
  };
};

export function Loader(props: LoaderProps) {
  const { className } = props;

  return (
    <div
      className={twMerge(
        "flex h-full w-full items-center justify-center",
        className?.wrapper,
      )}
    >
      <TbLoader3
        className={twMerge(
          "h-12 w-12 animate-spin text-tep_blue-500",
          className?.icon,
        )}
      />
    </div>
  );
}
