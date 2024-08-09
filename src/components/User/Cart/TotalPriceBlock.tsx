import { Price } from "components/Goods/Product/Price";

import { CartItem } from "app/account/cart/interfaces";
import { useLocalization } from "contexts/LocalizationContext";

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

  const { staticData } = useLocalization();

  return (
    <div
      className={
        "mb-12 flex flex-col gap-y-4 border-b border-tep_gray-200 pb-6 leading-normal"
      }
    >
      {hasTotalPrice && (
        <div className={"flex justify-between gap-x-3"}>
          <span className={"font-light"}>{staticData.account.totalPriceBlock.text1}</span>
          <Price className={"text-base"} price={totalPrice} />
        </div>
      )}
      <div className={"flex justify-between gap-x-3"}>
        <span className={"font-light"}>
        {staticData.account.totalPriceBlock.text2}&nbsp;&nbsp;&nbsp;&nbsp;
          {isLoading && (
            <span className={"text-sm text-tep_gray-500 lg:font-extralight"}>
              ({staticData.account.totalPriceBlock.text3})
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
        <span className={"font-bold"}>{staticData.account.totalPriceBlock.text4}</span>
        <Price price={isLoading ? totalPrice : totalPriceWithVAT} />
      </div>
    </div>
  );
}
