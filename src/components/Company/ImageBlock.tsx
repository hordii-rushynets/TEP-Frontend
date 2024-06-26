import Image, { StaticImageData } from "next/image";
import { HTMLAttributes } from "react";
import { cn } from "utils/cn";

import { Container, Section } from "common/ui";

export type ImageBlockProps = {
  image: StaticImageData | string;
  description?: string;
  size?: "small" | "large";
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export function ImageBlock({
  image,
  description = "",
  size = "small",
  className,
}: ImageBlockProps) {
  return (
    <Section
      className={cn(
        "relative",
        {
          "bg-black/35": description,
        },
        className,
      )}
    >
      <Container>
        <div
          className={cn("flex items-center justify-center", {
            "h-[480px]": size === "small",
            "h-[640px]": size === "large",
          })}
        >
          {description && (
            <p className={"max-w-[1016px] text-2xl text-white lg:text-3xl"}>
              {description}
            </p>
          )}
        </div>
      </Container>
      <Image
        src={image}
        alt={"Image"}
        fill
        className={"-z-10 select-none object-cover"}
      />
    </Section>
  );
}
