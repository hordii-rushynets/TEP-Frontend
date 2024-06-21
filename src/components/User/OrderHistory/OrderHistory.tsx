import { Product } from "app/goods/pillows/page";

import { Container, Section, Title } from "common/ui";

import { OrderList } from "./OrderList";

import IMG1 from "./static/id_1.jpg";
import IMG2 from "./static/id_2.jpg";
import IMG3 from "./static/id_3.jpg";

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

export type OrderedProduct = Product & {
  count: number;
};

export type OrderType = {
  id: string;
  article: string;
  status: Status;
  date: Date;
  products: OrderedProduct[];
};

export const orders: OrderType[] = [
  {
    id: "1",
    article: "SO123456",
    status: {
      value: "active",
      label: "В обробці",
    },
    date: new Date(2021, 1, 3),
    products: [
      {
        id: "1",
        image: IMG1,
        article: "903.048.89",
        category: "linens",
        color: "сірий",
        count: 1,
        price: 1099,
        title: "Vareld",
        size: "50x50",
      },
      {
        id: "2",
        image: IMG2,
        article: "923.248.54",
        category: "toppers",
        color: "білий",
        count: 1,
        price: 699,
        title: "Dream",
        size: "120x160",
      },
      {
        id: "3",
        image: IMG3,
        article: "723.238.51",
        category: "blankets",
        color: "білий",
        count: 2,
        price: 599,
        title: "Pink flower",
        size: "120x160",
      },
    ],
  },
  {
    id: "2",
    article: "SO112456",
    status: {
      value: "delivered",
      label: "Доставлено",
    },
    date: new Date(2023, 6, 23),
    products: [
      {
        id: "1",
        image: IMG1,
        article: "903.048.89",
        category: "linens",
        color: "сірий",
        count: 1,
        price: 1099,
        title: "Vareld",
        size: "50x50",
      },
    ],
  },
  {
    id: "3",
    article: "S7623456",
    status: {
      value: "сanceled",
      label: "Відміна замовлення",
    },
    date: new Date(2024, 3, 10),
    products: [
      {
        id: "1",
        image: IMG1,
        article: "903.048.89",
        category: "linens",
        color: "сірий",
        count: 1,
        price: 1099,
        title: "Vareld",
        size: "50x50",
      },
      {
        id: "2",
        image: IMG2,
        article: "923.248.54",
        category: "toppers",
        color: "білий",
        count: 1,
        price: 699,
        title: "Dream",
        size: "120x160",
      },
    ],
  },
];

export function OrderHistory() {
  return (
    <Section>
      <Container>
        <div className={"mb-40 mt-12 lg:mb-64"}>
          <Title className={"mb-[70px] text-3xl"}>Історія замовлень</Title>
          <OrderList orders={orders} />
        </div>
      </Container>
    </Section>
  );
}
