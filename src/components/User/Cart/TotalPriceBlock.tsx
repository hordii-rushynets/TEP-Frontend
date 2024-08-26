import { Price } from "components/Goods/Product/Price";

import { CartItem } from "app/account/cart/interfaces";
import { PurchaseService } from "app/purchase/services";
import { useEffect, useState } from "react";
import { usePostService } from "contexts/PostServiceContext";
import { useLocalization } from "contexts/LocalizationContext";

export type TotalPriceBlockProps = {
  hasTotalPrice?: boolean;
  goods: CartItem[];
};

export function TotalPriceBlock({
  hasTotalPrice = true,
  goods,
}: TotalPriceBlockProps) {
  const totalPrice = +(goods.reduce((acc, el) => acc + (el?.product_variants?.promotion ? el?.product_variants?.promo_price : el?.product_variants?.default_price) * el.quantity, 0) * 1.19).toFixed(2);

  const [deliveryPrice, setDeliveryPrice] = useState<number | undefined>();
  const purchaseService = new PurchaseService();
  const { addressForm, deliveryForm } = usePostService();

  useEffect(() => {
    const addressValues = addressForm.getValues();

    const service = deliveryForm.getValues().delivery_service;
    const city = service === "NovaPost" ? addressValues.city : addressValues.postal;
    const weight = goods.reduce((acc, el) => acc + el?.product_variants?.weight, 0)
    if (city !== "" && service !== "") {
      purchaseService.getDeliveryPrice(service, totalPrice, city, weight).then(cost => setDeliveryPrice(cost));
    }
  }, []);

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
          {!deliveryPrice && (
            <span className={"text-sm text-tep_gray-500 lg:font-extralight"}>
              ({staticData.account.totalPriceBlock.text3})
            </span>
          )}
        </span>
        {!deliveryPrice ? (
          <span className={"font-bold"}>?</span>
        ) : (
          <Price className={"text-base"} price={deliveryPrice} />
        )}
      </div>
      <div className={"flex items-end justify-between gap-x-3"}>
        <span className={"font-bold"}>{staticData.account.totalPriceBlock.text4}</span>
        <Price price={!deliveryPrice ? totalPrice : totalPrice + deliveryPrice} />
      </div>
    </div>
  );
}
