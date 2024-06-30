import { HTMLAttributes } from "react";
import { cn } from "utils/cn";

import { Title } from "common/ui";

export type TextSectionProps = {
  title?: string;
  text: string[] | React.ReactNode[];
  react_node?: React.ReactNode;
  isMain?: boolean;
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export function TextSection({
  text,
  title,
  react_node,
  isMain = false,
  className,
}: TextSectionProps) {
  return (
    <div className={className}>
      {title && (
        <Title
          size={"2xl"}
          className={cn("mb-3 md:mb-6", { "text-3xl": isMain })}
        >
          {title}
        </Title>
      )}
      <div className={"flex flex-col gap-y-6"}>
        {text.map((p, Idx) => (
          <p
            key={Idx}
            className={"text-lg !leading-relaxed md:text-sm lg:font-extralight"}
          >
            {p}
          </p>
        ))}
        {react_node}
      </div>
    </div>
  );
}
