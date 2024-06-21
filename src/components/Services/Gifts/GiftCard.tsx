import { StaticImageData } from "next/image";

import { ImageSquare } from "common/ImageSquare";
import { IconButton, Title } from "common/ui";
import { ShoppingBasket } from "common/ui/icons/ShoppingBasket";

export type GiftCardProps = {
  price: number;
  description: string;
  image: StaticImageData | string;
  onClick?: () => void;
};

export function GiftCard({
  price,
  description,
  image,
  onClick,
}: GiftCardProps) {
  return (
    <div
      className={
        "relative transform overflow-hidden rounded-3xl transition-transform duration-700 hover:-translate-y-1.5"
      }
    >
      <ImageSquare
        source={image}
        alt={"Gift-card image"}
        classes={{ image: "-z-10 select-none" }}
      />
      <div
        className={
          "absolute top-[55%] z-10 px-8 pb-7 lg:top-[65%] lg:pb-4 lg:pl-10 lg:pr-12"
        }
      >
        <Title size={"2xl"} className={"mb-4"}>
          Картка на {price}
          <span className={"align-top text-sm"}>грн</span>
        </Title>
        <p className={"line-clamp-3 font-light"}>{description}</p>
      </div>
      <IconButton
        onClick={onClick}
        className={{
          button: "absolute right-8 top-8 lg:right-10 lg:top-10",
        }}
        size={"large"}
      >
        <ShoppingBasket />
      </IconButton>
    </div>
  );
}
