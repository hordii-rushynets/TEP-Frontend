import { Price } from "components/Goods/Product/Price";

import { CartItem } from "app/account/cart/interfaces";
import { PurchaseService } from "app/purchase/services";
import { useEffect, useState } from "react";
import { usePostService } from "contexts/PostServiceContext";

export type TotalPriceBlockProps = {
  hasTotalPrice?: boolean;
  goods: CartItem[];
};

export function TotalPriceBlock({
  hasTotalPrice = true,
  goods,
}: TotalPriceBlockProps) {
  const totalPrice = goods.reduce((acc, el) => acc + (el?.product_variants?.promotion ? el?.product_variants?.promo_price : el?.product_variants?.default_price) * el.quantity, 0) * 1.19;

  const [deliveryPrice, setDeliveryPrice] = useState<number | undefined>();
  const purchaseService = new PurchaseService();
  const { addressForm, deliveryForm } = usePostService();

  useEffect(() => {
    const service = deliveryForm.getValues().delivery_service;
    const city = addressForm.getValues().city;
    if (city !== "" && service !== "") {
      purchaseService.getDeliveryPrice(service, totalPrice, city).then(cost => setDeliveryPrice(cost));
    }
  }, []);


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
          {!deliveryPrice && (
            <span className={"text-sm text-tep_gray-500 lg:font-extralight"}>
              (Ще не прорахована)
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
        <span className={"font-bold"}>Разом по замовленню із ПДВ</span>
        <Price price={!deliveryPrice ? totalPrice : totalPrice + deliveryPrice} />
      </div>
    </div>
  );
}
