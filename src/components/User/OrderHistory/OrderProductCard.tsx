import { HTMLAttributes } from "react";
import { FiTrash2 } from "react-icons/fi";
import { cn } from "utils/cn";

import { ImageSquare } from "common/ImageSquare";
import { IconButton, Title } from "common/ui";
import { Counter } from "components/Goods/Product/Counter";
import { Price } from "components/Goods/Product/Price";

import { OrderedProduct } from "./OrderHistory";
import { useLocalization } from "contexts/LocalizationContext";

export type OrderProductCardProps = {
  product: OrderedProduct;
  hasThrash?: boolean;
  trashAction?: () => void;
  trashClassName?: string;
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export function OrderProductCard({
  product,
  className,
  hasThrash = true,
  trashAction,
  trashClassName,
}: OrderProductCardProps) {
  const { category_title, category_slug, image, price, title, article, color, count, size } =
    product;

  const { staticData } = useLocalization();

  return (
    <div
      className={cn(
        "flex flex-col justify-between gap-y-7 md:flex-row md:items-end",
        className,
      )}
    >
      <div className={"flex flex-1 gap-x-6"}>
        <div className={"w-full max-w-[184px]"}>
          <ImageSquare source={image} />
        </div>
        <div>
          <div className={"mb-2 flex flex-col justify-between gap-y-2 md:mb-6"}>
            <Title size={"2xl"} className={"truncate"}>
              {title}
            </Title>
            {category_title && (
              <p className={"text-sm text-tep_gray-500 lg:font-extralight"}>
                {category_title}
              </p>
            )}
          </div>
          <div>
            <Price price={price} className={"mb-2.5"} />
            <div className={"text-sm leading-normal lg:font-extralight"}>
              <p>{color}</p>
              <p>{size} {staticData.account.orderProductCard.text1}</p>
              <p>{staticData.account.orderProductCard.text2} {article}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={"flex flex-col gap-y-8"}>
        <div className={"flex items-center justify-between gap-x-8"}>
          <Counter count={count} inactive={true} />
          <IconButton
            onClick={trashAction}
            className={{
              button: cn({ hidden: !hasThrash }, trashClassName),
            }}
            colorVariant={"empty"}
          >
            <FiTrash2 className={"size-6"} />
          </IconButton>
        </div>
        <div
          className={
            "flex flex-col gap-x-4 gap-y-1.5 md:flex-row md:items-end md:self-end"
          }
        >
          <span className={"text-sm lg:font-extralight"}>{staticData.account.orderProductCard.text3}</span>
          <Price price={price} />
        </div>
      </div>
    </div>
  );
}
