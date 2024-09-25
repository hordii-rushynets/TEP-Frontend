import Link from "next/link";
import { PurchaseUrl } from "route-urls";

import { Button } from "common/ui";

import { CartItem } from "app/account/cart/interfaces";
import { CartProductCard } from "./CartProductCard";
import { useLocalization } from "contexts/LocalizationContext";
import { ConversionsService } from "services/conversionsServices";

export type CartListProps = {
  goods: CartItem[];
  hasButton?: boolean;
  trashAction: (item_id: number, authContext: any) => void;
  cartRefresh: boolean,
  setCartRefresh: (v: boolean) => void,
};

export function CartList({ goods, hasButton = true, trashAction, cartRefresh, setCartRefresh }: CartListProps) {
  const { staticData } = useLocalization();
  const conversionsService = new ConversionsService();

  return (
    <div
      className={
        "mb-12 flex flex-col-reverse justify-between gap-y-16 md:mb-24 lg:flex-row"
      }
    >
      <div className={"flex max-w-[704px] flex-1 flex-col gap-y-12"}>
        {goods.map((product) => (
          <CartProductCard key={product.cart} product={product} trashAction={trashAction} cartRefresh={cartRefresh} setCartRefresh={setCartRefresh}/>
        ))}
      </div>
      {hasButton && (
        <Link
          href={PurchaseUrl.getAddress()}
          className={"self-end lg:self-start"}
        >
          <Button colorVariant={"black"} size={"super-large"} onClick={() => {conversionsService.sendConversion("InitiateCheckout")}}>
            {staticData.account.cartList}
          </Button>
        </Link>
      )}
    </div>
  );
}
