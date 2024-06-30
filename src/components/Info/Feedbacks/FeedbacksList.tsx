import { StaticImageData } from "next/image";

import { Container, Pagination, Section } from "common/ui";

import { FeedbackCard } from "./FeedbackCard";

import AvatarIMG1 from "./static/avatar1.jpg";
import AvatarIMG2 from "./static/avatar2.jpg";
import AvatarIMG3 from "./static/avatar3.jpg";
import IMG1 from "./static/img1.jpg";
import IMG2 from "./static/img2.jpg";
import IMG3 from "./static/img3.jpg";

type FeedbacksListProps = {
  category: string;
  page: number;
};

export type Feedback = {
  id: string;
  author: {
    name: string;
    avatar?: StaticImageData | string;
  };
  category: string;
  text: string;
  images?: (StaticImageData | string)[];
  rating: number;
  created_at: string;
  interaction: {
    like: number;
    dislike: number;
  };
};

export const feedbacks: Feedback[] = [
  {
    id: "1",
    author: {
      name: "Тарас Шевченко",
      avatar: AvatarIMG1,
    },
    category: "linens",
    text: "Раніше замовляла постільну білизну 'Еллі'. Після прання не полиняло, не сіло, колір малюнка залишився. Сподобалася сама тканина, щільна, натуральна і не змінна.",
    images: [IMG1, IMG2, IMG3],
    rating: 5,
    created_at: "12.03.2021",
    interaction: {
      like: 12,
      dislike: 0,
    },
  },
  {
    id: "2",
    author: {
      name: "Олена Шестопалова",
      avatar: AvatarIMG2,
    },
    category: "linens",
    text: "Раніше замовляла постільну білизну 'Еллі'. Після прання не полиняло, не сіло, колір малюнка залишився. Сподобалася сама тканина, щільна, натуральна і не змінна. Раніше замовляла постільну білизну 'Еллі'. Після прання не полиняло, не сіло, колір малюнка залишився. Сподобалася сама тканина, щільна, натуральна і не змінна.",
    images: [],
    rating: 4,
    created_at: "02.03.2021",
    interaction: {
      like: 8,
      dislike: 1,
    },
  },
  {
    id: "3",
    author: {
      name: "Богдана Закалужна",
      avatar: AvatarIMG3,
    },
    category: "blankets",
    text: "Супер все! Дуже задоволена покупкою!",
    images: [IMG1, IMG2, IMG3],
    rating: 3,
    created_at: "02.03.2021",
    interaction: {
      like: 6,
      dislike: 0,
    },
  },
  {
    id: "4",
    author: {
      name: "Тарас Шевченко",
      avatar: AvatarIMG1,
    },
    category: "linens",
    text: "Раніше замовляла постільну білизну 'Еллі'. Після прання не полиняло, не сіло, колір малюнка залишився. Сподобалася сама тканина, щільна, натуральна і не змінна.",
    images: [],
    rating: 2,
    created_at: "12.03.2021",
    interaction: {
      like: 12,
      dislike: 0,
    },
  },
  {
    id: "5",
    author: {
      name: "Катерина Антоненко",
      avatar: AvatarIMG2,
    },
    category: "linens",
    text: "Раніше замовляла постільну білизну 'Еллі'. Після прання не полиняло, не сіло, колір малюнка залишився. Сподобалася сама тканина, щільна, натуральна і не змінна.",
    images: [IMG1, IMG2, IMG3],
    rating: 1,
    created_at: "12.03.2021",
    interaction: {
      like: 12,
      dislike: 0,
    },
  },
  {
    id: "6",
    author: {
      name: "Олена Шестопалова",
      avatar: AvatarIMG2,
    },
    category: "sheets",
    text: "Раніше замовляла постільну білизну 'Еллі'. Після прання не полиняло, не сіло, колір малюнка залишився. Сподобалася сама тканина, щільна, натуральна і не змінна. Раніше замовляла постільну білизну 'Еллі'. Після прання не полиняло, не сіло, колір малюнка залишився. Сподобалася сама тканина, щільна, натуральна і не змінна.",
    images: [],
    rating: 4,
    created_at: "02.03.2021",
    interaction: {
      like: 8,
      dislike: 1,
    },
  },
  {
    id: "7",
    author: {
      name: "Богдана Закалужна",
      avatar: AvatarIMG3,
    },
    category: "toppers",
    text: "Супер все! Дуже задоволена покупкою!",
    images: [],
    rating: 3,
    created_at: "02.03.2021",
    interaction: {
      like: 6,
      dislike: 0,
    },
  },
  {
    id: "8",
    author: {
      name: "Тарас Шевченко",
      avatar: AvatarIMG1,
    },
    category: "pillows",
    text: "Раніше замовляла постільну білизну 'Еллі'. Після прання не полиняло, не сіло, колір малюнка залишився. Сподобалася сама тканина, щільна, натуральна і не змінна.",
    images: [],
    rating: 5,
    created_at: "12.03.2021",
    interaction: {
      like: 12,
      dislike: 0,
    },
  },
  {
    id: "9",
    author: {
      name: "Катерина Антоненко",
      avatar: AvatarIMG2,
    },
    category: "pillows",
    text: "Раніше замовляла постільну білизну 'Еллі'. Після прання не полиняло, не сіло, колір малюнка залишився. Сподобалася сама тканина, щільна, натуральна і не змінна.",
    images: [IMG1, IMG2, IMG3],
    rating: 2,
    created_at: "12.03.2021",
    interaction: {
      like: 12,
      dislike: 0,
    },
  },
];

export function FeedbacksList({ page }: FeedbacksListProps) {
  // category param for fetching
  return (
    <Section className={"mb-24 lg:mb-40"}>
      <Container>
        <div>
          <div className={"mb-[72px] flex flex-col gap-10 lg:mb-16"}>
            {feedbacks.map((feedback) => (
              <FeedbackCard key={feedback.id} feedback={feedback} />
            ))}
          </div>
          <Pagination activePage={page} total={10} />
        </div>
      </Container>
    </Section>
  );
}
