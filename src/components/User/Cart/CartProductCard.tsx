import { HTMLAttributes } from "react";
import { FiTrash2 } from "react-icons/fi";
import { cn } from "utils/cn";
import { translateCategory } from "utils/helpers";

import { ImageSquare } from "common/ImageSquare";
import { IconButton, Title } from "common/ui";
import { Counter } from "components/Goods/Product/Counter";
import { Price } from "components/Goods/Product/Price";
import { OrderedProduct } from "components/User/OrderHistory/OrderHistory";
import { CartItem } from "app/account/cart/interfaces";
import { Color, ProductVariant, Size } from "app/goods/[category]/page";
import { useLocalization } from "contexts/LocalizationContext";
import { DynamicFilterField } from "components/Filters/ProductsFilters";
import { useAuth } from "contexts/AuthContext";

export type OrderProductCardProps = {
  product: CartItem;
  hasThrash?: boolean;
  trashAction: (item_id: number, authContext: any) => void;
  trashClassName?: string;
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export function CartProductCard({
  product,
  className,
  hasThrash = true,
  trashAction,
  trashClassName,
}: OrderProductCardProps) {
  const {localization} = useLocalization();
  const authContext = useAuth();

  return (
    <div
      className={cn(
        "flex flex-col justify-between gap-y-7 md:flex-row md:items-end",
        className,
      )}
    >
      <div className={"flex flex-1 gap-x-6"}>
        <div className={"w-full max-w-[184px]"}>
          <ImageSquare source={product.product_variants.main_image || ""} />
        </div>
        <div>
          <div className={"mb-2 flex flex-col justify-between gap-y-2 md:mb-6"}>
            <Title size={"2xl"} className={"truncate"}>
              {product.product_variants[`title_${localization}` as keyof ProductVariant] as string}
            </Title>
            {/* {category_title && (
              <p className={"text-sm text-tep_gray-500 lg:font-extralight"}>
                {category_title}
              </p>
            )} */}
          </div>
          <div>
            <Price price={product.product_variants.default_price} className={"mb-2.5"} />
            <div className={"text-sm leading-normal lg:font-extralight"}>
              <p>{product.color[`title_${localization}` as keyof Color]}</p>
              <p>{product.size[`title_${localization}` as keyof Size]} см</p>
              {product.filter_field.map(field => <p>{field[`value_${localization}` as keyof DynamicFilterField]}</p>)}
              <p>товар {product.product_variants.sku}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={"flex flex-col gap-y-8"}>
        <div className={"flex items-center justify-between gap-x-8"}>
          <Counter count={product.quantity} setCount={(n: number) => {console.log(product.quantity); product.quantity = n}}/>
          <IconButton
            onClick={() => {
              trashAction(product.id, authContext);
            }}
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
          <span className={"text-sm lg:font-extralight"}>Разом</span>
          <Price price={product.product_variants.default_price * product.quantity} />
        </div>
      </div>
    </div>
  );
}
