"use client"

import { ProductToShow } from "app/goods/[category]/page";

import { Container, Section, Title } from "common/ui";

import { OrderList } from "./OrderList";

import { useLocalization } from "contexts/LocalizationContext";
import { OrderHistoryService } from "app/account/order-history/services";
import { useEffect, useState } from "react";
import { useAuth } from "contexts/AuthContext";
import { Order } from "app/account/order-history/interfaces";

// export type Status = "active" | "delivered" | "сanceled";
export type Status =
  | {
      value: "active";
      label: "В обробці";
    }
  | {
      value: "delivered";
      label: "Доставлено";
    }
  | {
      value: "сanceled";
      label: "Відміна замовлення";
    };

export type OrderedProduct = ProductToShow & {
  count: number;
};

export function OrderHistory() {
  const { staticData } = useLocalization();
  const [ orders, setOrders ] = useState<Order[]>([]);

  const orderHistoryService = new OrderHistoryService();

  const authContext = useAuth();

  useEffect(() => {
    orderHistoryService.getOrderHistory(authContext).then(items => setOrders(items));
  }, []);

  return (
    <Section>
      <Container>
        <div className={"mb-40 mt-12 lg:mb-64"}>
          <Title className={"mb-[70px] text-3xl"}>{staticData.account.orderHistory}</Title>
          <OrderList orders={orders} />
        </div>
      </Container>
    </Section>
  );
}
