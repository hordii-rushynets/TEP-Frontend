import { Product } from "app/goods/pillows/page";
import Link from "next/link";
import { MainUrl } from "route-urls";

import { Button, ButtonBase, Container, Section, Title } from "common/ui";
import { Price } from "components/Goods/Product/Price";
import ProductCard from "components/Home/ProductCard";

import IMG1 from "./static/img1.jpg";
import IMG2 from "./static/img2.jpg";
import IMG3 from "./static/img3.jpg";
import IMG4 from "./static/img4.jpg";
import IMG5 from "./static/img5.jpg";
import IMG6 from "./static/img6.jpg";

const favourite_goods: Product[] = [
  {
    id: "1",
    category: "blankets",
    image: IMG1,
    price: 1299,
    description: "",
    title: "ВОРЕЛЬД",
    article: "",
    color: "",
    isInStock: true,
    size: "",
    isFavourite: true,
  },
  {
    id: "2",
    category: "linens",
    image: IMG2,
    price: 1299,
    description: "",
    title: "ВОРЕЛЬД",
    article: "",
    color: "",
    isInStock: true,
    size: "",
    isFavourite: true,
  },
  {
    id: "3",
    category: "linens",
    image: IMG3,
    price: 1299,
    description: "",
    title: "ВОРЕЛЬД",
    article: "",
    color: "",
    isInStock: true,
    size: "",
    isFavourite: true,
  },
  {
    id: "4",
    category: "pillows",
    image: IMG4,
    price: 1299,
    description: "",
    title: "ВОРЕЛЬД",
    article: "",
    color: "",
    isInStock: true,
    size: "",
    isFavourite: true,
  },
  {
    id: "5",
    category: "covered",
    image: IMG5,
    price: 1299,
    description: "",
    title: "ВОРЕЛЬД",
    article: "",
    color: "",
    isInStock: true,
    size: "",
    isFavourite: true,
  },
  {
    id: "6",
    category: "linens",
    image: IMG6,
    price: 1299,
    description: "",
    title: "ВОРЕЛЬД",
    article: "",
    color: "",
    isInStock: true,
    size: "",
    isFavourite: true,
  },
];

export function Favourite() {
  if (!favourite_goods.length) {
    return (
      <Section>
        <Container>
          <div className={"mb-40 mt-8 md:mb-64 md:mt-12"}>
            <Title className={"mb-24 text-3xl md:mb-40"}>Улюблене</Title>
            <div
              className={
                "mx-auto flex max-w-[500px] flex-col items-center text-center"
              }
            >
              <Title className={"mb-3.5 text-3xl"}>Ваш список пустий</Title>
              <p
                className={
                  "mb-[72px] text-sm leading-normal md:mb-12 lg:font-extralight"
                }
              >
                Ще не готові зробити покупку? Збережіть тут, поки не вирішите.
                Ви можете переглянути наш асортимент та обрати товари, які Вам
                до вподоби!
              </p>
              <Link href={MainUrl.getHome()}>
                <Button colorVariant={"black"} size={"super-large"} fullWidth>
                  На головну
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <div className={"mb-40 pt-8 md:pt-12 lg:mb-64"}>
          <Title className={"mb-12 text-3xl"}>Улюблене</Title>
          <div
            className={
              "mb-24 grid grid-cols-1 gap-x-6 gap-y-11 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-[72px]"
            }
          >
            {favourite_goods.map((favourite) => {
              return <ProductCard key={favourite.id} product={favourite} />;
            })}
          </div>
          <ButtonBase
            className={{
              button:
                "mb-6 text-sm font-semibold underline underline-offset-2 transition-colors hover:text-tep_blue-500",
            }}
          >
            Видалити всі товари
          </ButtonBase>
          <div className={"mb-12 h-[1px] bg-tep_gray-200"}></div>
          <div className={"flex justify-between"}>
            <Title component={"h6"} size={"base"}>
              Загальна вартість
            </Title>
            <Price
              price={favourite_goods.reduce((acc, p) => acc + p.price, 0)}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
