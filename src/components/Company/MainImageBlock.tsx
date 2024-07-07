import Image, { StaticImageData } from "next/image";
import { cn } from "utils/cn";

import { Section, Title } from "common/ui";

export type MainImageBlockProps = {
  image: StaticImageData | string;
  title?: string;
  className?: {
    image?: string;
  };
};

export function MainImageBlock({
  image,
  title = "",
  className,
}: MainImageBlockProps) {
  return (
    <Section>
      <div
        className={cn(
          "relative flex h-[568px] items-center justify-center md:h-[844px] lg:h-[640px]",
          {
            "bg-black/25": title,
          },
        )}
      >
        <Image
          src={image}
          alt={"Image"}
          fill
          className={cn("-z-10 select-none object-cover", className?.image)}
          sizes="100vw, 50vw, 33vw"
        />
        {title && (
          <Title
            size={"5xl"}
            component={"h1"}
            className={"max-w-[520px] text-center !leading-tight text-white"}
          >
            {title}
          </Title>
        )}
      </div>
    </Section>
  );
}
