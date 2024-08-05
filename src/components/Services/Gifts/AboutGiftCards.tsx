"use client"

import { Container, Section, Title } from "common/ui";
import { GiftCard } from "components/Services/Gifts/GiftCard";

import GiftCard500 from "./static/card_gift500.jpg";
import GiftCard1000 from "./static/card_gift1000.jpg";
import GiftCard2000 from "./static/card_gift2000.jpg";
import { useLocalization } from "contexts/LocalizationContext";

export const gift_cards = [
  {
    id: "1",
    image: GiftCard500,
    price: 500,
  },
  {
    id: "2",
    image: GiftCard1000,
    price: 1000,
  },
  {
    id: "3",
    image: GiftCard2000,
    price: 2000,
  },
];

export function AboutGiftCards() {
  const { staticData } = useLocalization();

  return (
    <Section>
      <Container>
        <div id={"gift-cards"} className={"py-24 md:pb-28 md:pt-32 lg:py-[120px]"}>
          <Title className={"mb-5 text-3xl md:mb-3.5 md:text-2xl"}>
            {staticData.services.aboutGiftCards.title}
          </Title>
          <p
            className={
              "mb:text-sm mb-14 max-w-[613px] text-lg leading-[1.8] md:mb-8 lg:mb-12 lg:max-w-[818px] lg:font-extralight"
            }
          >
            {staticData.services.aboutGiftCards.description}
          </p>
          <div
            className={"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"}
          >
            {gift_cards.map((card, indx) => (
              <GiftCard
                key={card.id}
                image={card.image}
                price={card.price}
                description={staticData.services.aboutGiftCards.cardsDescriptions[indx]}
              />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
