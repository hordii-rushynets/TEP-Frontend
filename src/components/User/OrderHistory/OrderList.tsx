import { cn } from "utils/cn";

import { Order } from "./Order";
import { type OrderType } from "./OrderHistory";

export type OrderListProps = {
  orders: OrderType[];
};

export function OrderList({ orders }: OrderListProps) {
  if (!orders.length)
    return (
      <p className={"py-10 text-center text-2xl font-medium"}>
        У вас ще немає замовлень
      </p>
    );
  return (
    <div className={"flex max-w-[704px] flex-col gap-y-24"}>
      {orders.map((order, Idx) => (
        <Order
          className={cn({ "border-t border-tep_gray-200 pt-12": Idx !== 0 })}
          key={order.id}
          order={order}
        />
      ))}
    </div>
  );
}
