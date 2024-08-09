import { cn } from "utils/cn";

import { Order as OrderComponent } from "./Order";
import { useLocalization } from "contexts/LocalizationContext";
import { Order } from "app/account/order-history/interfaces";

export type OrderListProps = {
  orders: Order[];
};

export function OrderList({ orders }: OrderListProps) {
  const { staticData } = useLocalization();

  if (!orders.length)
    return (
      <p className={"py-10 text-center text-2xl font-medium"}>
        {staticData.account.orderList}
      </p>
    );
  return (
    <div className={"flex max-w-[704px] flex-col gap-y-24"}>
      {orders.map((order, Idx) => (
        <OrderComponent
          className={cn({ "border-t border-tep_gray-200 pt-12": Idx !== 0 })}
          key={order.id}
          order={order}
        />
      ))}
    </div>
  );
}
