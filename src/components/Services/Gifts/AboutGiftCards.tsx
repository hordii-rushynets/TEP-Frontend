import { Container, Section, Title } from "common/ui";
import { GiftCard } from "components/Services/Gifts/GiftCard";

import GiftCard500 from "./static/card_gift500.jpg";
import GiftCard1000 from "./static/card_gift1000.jpg";
import GiftCard2000 from "./static/card_gift2000.jpg";

export const gift_cards = [
  {
    id: "1",
    image: GiftCard500,
    price: 500,
    description:
      "Ви можете придбати у нас подарункову картку, в якості подарунку на будь-яке свято чи святкову подію.",
  },
  {
    id: "2",
    image: GiftCard1000,
    price: 1000,
    description:
      "Ви можете придбати у нас подарункову картку, в якості подарунку на будь-яке свято чи святкову подію.",
  },
  {
    id: "3",
    image: GiftCard2000,
    price: 2000,
    description:
      "Ви можете придбати у нас подарункову картку, в якості подарунку на будь-яке свято чи святкову подію.",
  },
];

export function AboutGiftCards() {
  return (
    <Section>
      <Container>
        <div id={"gift-cards"} className={"py-24 md:pb-28 md:pt-32 lg:py-[120px]"}>
          <Title className={"mb-5 text-3xl md:mb-3.5 md:text-2xl"}>
            Про картки
          </Title>
          <p
            className={
              "mb:text-sm mb-14 max-w-[613px] text-lg leading-[1.8] md:mb-8 lg:mb-12 lg:max-w-[818px] lg:font-extralight"
            }
          >
            Ми пропонуємо покупцям сотні товарів, тому вибрати найкращий з них
            може бути складно. З подарунковою карткою ТЕП ти даруєш подарунок,
            який дорога людина може обрати сама. Ми пропонуємо покупцям сотні
            товарів, тому вибрати найкращий з них може бути складно. З
            подарунковою карткою ТЕП ти даруєш подарунок, який дорога людина
            може обрати сама.
          </p>
          <div
            className={"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"}
          >
            {gift_cards.map((card) => (
              <GiftCard
                key={card.id}
                image={card.image}
                price={card.price}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
