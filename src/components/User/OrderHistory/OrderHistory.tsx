import { ProductToShow } from "app/goods/[category]/page";

import { Container, Section, Title } from "common/ui";

import { OrderList } from "./OrderList";

import IMG1 from "./static/id_1.jpg";
import IMG2 from "./static/id_2.jpg";
import IMG3 from "./static/id_3.jpg";
import { useLocalization } from "contexts/LocalizationContext";

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
        slug: "",
        image: IMG1,
        article: "903.048.89",
        category_title: "Ковдра",
        category_slug: "sheets",
        color: "сірий",
        count: 1,
        price: 1099,
        title: "Vareld",
        size: "50x50",
        number_of_views: 1,
        date: ""
      },
      {
        id: "2",
        slug: "",
        image: IMG2,
        article: "923.248.54",
        category_title: "Ковдра",
        category_slug: "sheets",
        color: "білий",
        count: 1,
        price: 699,
        title: "Dream",
        size: "120x160",
        number_of_views: 1,
        date: ""
      },
      {
        id: "3",
        slug: "",
        image: IMG3,
        article: "723.238.51",
        category_title: "Ковдра",
        category_slug: "sheets",
        color: "білий",
        count: 2,
        price: 599,
        title: "Pink flower",
        size: "120x160",
        number_of_views: 1,
        date: ""
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
        slug: "",
        image: IMG1,
        article: "903.048.89",
        category_title: "Ковдра",
        category_slug: "sheets",
        color: "сірий",
        count: 1,
        price: 1099,
        title: "Vareld",
        size: "50x50",
        number_of_views: 1,
        date: ""
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
        slug: "",
        image: IMG1,
        article: "903.048.89",
        category_title: "Ковдра",
        category_slug: "sheets",
        color: "сірий",
        count: 1,
        price: 1099,
        title: "Vareld",
        size: "50x50",
        number_of_views: 1,
        date: ""
      },
      {
        id: "2",
        slug: "",
        image: IMG2,
        article: "923.248.54",
        category_title: "Ковдра",
        category_slug: "sheets",
        color: "білий",
        count: 1,
        price: 699,
        title: "Dream",
        size: "120x160",
        number_of_views: 1,
        date: ""
      },
    ],
  },
];

export function OrderHistory() {
  const { staticData } = useLocalization();

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
