import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { cn } from "utils/cn";

import { ImageSquare, ImageSquareProps } from "common/ImageSquare";
import { IconButton, Title } from "common/ui";

type SimpleCardProps = {
  url: string;
  title: string;
  description?: string;
  isIcon?: boolean;
  cardClasses?: {
    wrapper?: string;
    title?: string;
    icon?: string;
  };
} & ImageSquareProps;

export function SimpleCard(props: SimpleCardProps) {
  const {
    url,
    title,
    description,
    isIcon = true,
    cardClasses,
    ...cardProps
  } = props;
  return (
    <Link
      href={url}
      className={cn("group flex flex-col gap-y-6", cardClasses?.wrapper)}
    >
      <ImageSquare
        {...cardProps}
        classes={{
          image:
            "group-hover:scale-105 transition-transform transform duration-500",
        }}
      />
      <div className={"flex flex-col gap-y-4"}>
        <Title size={"2xl"} className={cn("flex-1", cardClasses?.title)}>
          {title}
        </Title>
        {description && (
          <p className={"hidden text-sm lg:[display:-webkit-box]"}>
            {description}
          </p>
        )}
      </div>
      {isIcon && (
        <IconButton
          colorVariant={"empty"}
          className={{
            button: cn(
              "transform transition-transform duration-300 group-hover:translate-x-2",
              cardClasses?.icon,
            ),
          }}
        >
          <FiArrowRight
            className={"size-6 transition-colors hover:text-tep_blue-500"}
          />
        </IconButton>
      )}
    </Link>
  );
}
