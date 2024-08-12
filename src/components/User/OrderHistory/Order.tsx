import Link from "next/link";
import { HTMLAttributes } from "react";
import { ServicesUrl } from "route-urls";

import { Button, Title } from "common/ui";

import { OrderProductCard } from "./OrderProductCard";
import { useLocalization } from "contexts/LocalizationContext";
import { Order as OrderInterface } from "app/account/order-history/interfaces";

export type OrderProps = {
  order: OrderInterface;
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export function Order({ order, className }: OrderProps) {
  const { staticData } = useLocalization();

  return (
    <div className={className}>
      <div
        className={
          "mb-[70px] flex flex-col items-start justify-between gap-y-7 md:mb-11 md:flex-row"
        }
      >
        <div>
          <Title size={"2xl"} component={"h6"} className={"mb-1.5"}>
            {staticData.account.order.text1} {order.number}
          </Title>
          <span className={"text-sm lg:font-extralight"}>
            {order.date && new Date(order.date).toLocaleString("uk").slice(0, 10) || ""}
          </span>
        </div>
        <p className={"text-sm lg:font-extralight"}>
        {staticData.account.order.text2}{" "}
          <span className={"font-bold lg:font-extralight"}>{order.status || "В обробці"}</span>
        </p>
      </div>
      <div className={"mb-16 flex flex-col gap-y-24 md:gap-y-12"}>
        {order.order_item.map((product) => (
          <OrderProductCard
            trashClassName={"md:hidden"}
            key={product.id}
            product={product}
          />
        ))}
      </div>
        <Link href={`${ServicesUrl.getTracking()}?order_id=${order.number}`}>
          <Button
            size={"super-large"}
            colorVariant={"black"}
            fullWidth
            className={{ button: "md:w-auto" }}
          >
            {staticData.account.order.text3}
          </Button>
        </Link>
    </div>
  );
}
