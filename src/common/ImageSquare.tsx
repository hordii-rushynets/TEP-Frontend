import Image, { StaticImageData } from "next/image";
import { cn } from "utils/cn";

export type ImageSquareProps = {
  source: StaticImageData | string;
  alt?: string;
  onClick?: () => void;
  classes?: {
    wrapper?: string;
    image?: string;
  };
};

export function ImageSquare(props: ImageSquareProps) {
  const { source, alt = "Image", classes, onClick, ...imageProps } = props;
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl pb-[100%]",
        classes?.wrapper,
      )}
    >
      <Image
        onClick={onClick}
        src={source}
        alt={alt}
        fill
        className={cn("object-cover", classes?.image)}
        {...imageProps}
      />
    </div>
  );
}
