import Link from "next/link";
import { HTMLAttributes } from "react";
import { ServicesUrl } from "route-urls";

import { Button, Title } from "common/ui";

import { OrderType } from "./OrderHistory";
import { OrderProductCard } from "./OrderProductCard";
import { useLocalization } from "contexts/LocalizationContext";

export type OrderProps = {
  order: OrderType;
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export function Order({ order, className }: OrderProps) {
  const { article, date, id, products, status } = order;

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
            {staticData.account.order.text1} {article}
          </Title>
          <span className={"text-sm lg:font-extralight"}>
            {date.toLocaleString("uk").slice(0, 10)}
          </span>
        </div>
        <p className={"text-sm lg:font-extralight"}>
        {staticData.account.order.text2}{" "}
          <span className={"font-bold lg:font-extralight"}>{status.label}</span>
        </p>
      </div>
      <div className={"mb-16 flex flex-col gap-y-24 md:gap-y-12"}>
        {products.map((product) => (
          <OrderProductCard
            trashClassName={"md:hidden"}
            key={product.id}
            product={product}
          />
        ))}
      </div>
      {status.value === "active" ? (
        <Link href={`${ServicesUrl.getTracking()}?order_id=${id}`}>
          <Button
            size={"super-large"}
            colorVariant={"black"}
            fullWidth
            className={{ button: "md:w-auto" }}
          >
            {staticData.account.order.text3}
          </Button>
        </Link>
      ) : (
        <Link href={`${ServicesUrl.getTracking()}?order_id=${id}`}>
          <Button
            size={"super-large"}
            fullWidth
            className={{ button: "md:w-auto" }}
          >
            {staticData.account.order.text4}
          </Button>
        </Link>
      )}
    </div>
  );
}
