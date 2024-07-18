import { Price } from "components/Goods/Product/Price";

import { CartItem } from "app/account/cart/interfaces";

export type TotalPriceBlockProps = {
  hasTotalPrice?: boolean;
  goods: CartItem[];
  isLoading?: boolean;
};

export function TotalPriceBlock({
  hasTotalPrice = true,
  isLoading = false,
  goods,
}: TotalPriceBlockProps) {
  const deliveryPrice = goods.length * 70;
  const totalPrice = goods.reduce((acc, el) => acc + el?.product_variants?.default_price * el.quantity, 0) * 1.19;
  const totalPriceWithVAT =
    goods.reduce((acc, el) => acc + el?.product_variants?.default_price, 0) * 1.19 + goods.length * 70;

  return (
    <div
      className={
        "mb-12 flex flex-col gap-y-4 border-b border-tep_gray-200 pb-6 leading-normal"
      }
    >
      {hasTotalPrice && (
        <div className={"flex justify-between gap-x-3"}>
          <span className={"font-light"}>Повна сума</span>
          <Price className={"text-base"} price={totalPrice} />
        </div>
      )}
      <div className={"flex justify-between gap-x-3"}>
        <span className={"font-light"}>
          Доставка&nbsp;&nbsp;&nbsp;&nbsp;
          {isLoading && (
            <span className={"text-sm text-tep_gray-500 lg:font-extralight"}>
              (Ще не прорахована)
            </span>
          )}
        </span>
        {isLoading ? (
          <span className={"font-bold"}>?</span>
        ) : (
          <Price className={"text-base"} price={deliveryPrice} />
        )}
      </div>
      <div className={"flex items-end justify-between gap-x-3"}>
        <span className={"font-bold"}>Разом по замовленню із ПДВ</span>
        <Price price={isLoading ? totalPrice : totalPriceWithVAT} />
      </div>
    </div>
  );
}
