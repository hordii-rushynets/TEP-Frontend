"use client";

import { Container, Section } from "common/ui";
import { InfoDisclosure } from "components/Goods/Product/InfoDisclosure";
import { InteriorLook } from "components/Goods/Product/InteriorLook";
import { PaymentDetails } from "components/Goods/Product/PaymentDetails";
import { SimilarGoods } from "components/Goods/Product/SimilarGoods";
import IMG1 from "components/Goods/Product/static/img1.jpg";
import IMG2 from "components/Goods/Product/static/img2.jpg";
import IMG3 from "components/Goods/Product/static/img3.jpg";
import IMG4 from "components/Goods/Product/static/img4.jpg";
import PinkIMG1 from "components/Goods/Product/static/pinkIMG1.jpg";
import PinkIMG2 from "components/Goods/Product/static/pinkIMG2.jpg";
import PinkIMG3 from "components/Goods/Product/static/pinkIMG3.jpg";
import { RecommendedGoods } from "components/Goods/RecommendedGoods";

const product = {
  id: "1",
  image: IMG1,
  article: "803.048.89",
  category: "blankets",
  colors: [
    {
      color: {
        label: "сірий",
        value: "gray",
        description:
          "Тому що сіре та біле підходить під все, а сердечок забагато не буває. Грайливий орнамент від лондонського дизайнера Ханни Вілкокс. Також є подушка і підковдра з таким же орнаментом.",
      },
      images: [IMG1, IMG2, IMG3, IMG4],
    },
    {
      color: {
        label: "рожевий",
        value: "pink",
        description:
          "Тому що сіре та біле підходить під все, а сердечок забагато не буває. Грайливий орнамент від лондонського дизайнера Ханни Вілкокс. Також є подушка і підковдра з таким же орнаментом.",
      },
      images: [PinkIMG1, PinkIMG2, PinkIMG3],
    },
  ],
  count: 1,
  price: 1099,
  title: "Ковдри",
  sizes: ["50х50", "60х80", "80х120"],
  feedbacks: [
    {
      title: "Тарас Шевченко",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 5,
    },
    {
      title: "Тарас Шевченко",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 5,
    },
  ],
  isInStock: true,
  isFavourite: false,
  isInCart: true,
};

const packageDetails = {
  width: 60,
  height: 15,
  length: 63,
  weight: 0.87,
  packageCount: 1,
  article: "803.048.89",
};
export default function BlanketPage() {
  const {
    article,
    category,
    colors,
    feedbacks,
    isInStock,
    count,
    id,
    price,
    sizes,
    title,
    isFavourite,
    isInCart,
  } = product;
  return (
    <>
      <Section>
        <Container>
          <div>
            <PaymentDetails
              id={id}
              article={article}
              category={category}
              colors={colors}
              isInStock={isInStock}
              price={price}
              sizes={sizes}
              title={title}
              count={count}
              isInCart={isInCart}
              isFavourite={isFavourite}
              onCartClick={() => {}}
              onFavouriteClick={() => {}}
            />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <div className={"flex gap-x-6"}>
            <div className={"overflow-hidden md:grow-0 md:basis-[65%]"}>
              <InfoDisclosure
                packageDetails={packageDetails}
                feedbacks={feedbacks}
              />
              <SimilarGoods />
              <InteriorLook />
            </div>
            <div className={"hidden md:block"}></div>
          </div>
        </Container>
      </Section>
      <RecommendedGoods className={"mb-40 lg:mb-64"} />
    </>
  );
}
