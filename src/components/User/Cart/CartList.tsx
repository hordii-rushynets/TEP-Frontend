import Link from "next/link";
import { PurchaseUrl } from "route-urls";

import { Button } from "common/ui";

import { OrderedProduct } from "../OrderHistory/OrderHistory";
import { CartProductCard } from "./CartProductCard";

export type CartListProps = {
  goods: OrderedProduct[];
  hasButton?: boolean;
};

export function CartList({ goods, hasButton = true }: CartListProps) {
  return (
    <div
      className={
        "mb-12 flex flex-col-reverse justify-between gap-y-16 md:mb-24 lg:flex-row"
      }
    >
      <div className={"flex max-w-[704px] flex-1 flex-col gap-y-12"}>
        {goods.map((product) => (
          <CartProductCard key={product.id} product={product} />
        ))}
      </div>
      {hasButton && (
        <Link
          href={PurchaseUrl.getAddress()}
          className={"self-end lg:self-start"}
        >
          <Button colorVariant={"black"} size={"super-large"}>
            Оформити
          </Button>
        </Link>
      )}
    </div>
  );
}
