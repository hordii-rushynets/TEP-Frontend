import { productDescriptions } from "data";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { GoodsUrl } from "route-urls";
import { cn } from "utils/cn";

import { ImageSquare } from "common/ImageSquare";
import { Button, Container, Section, Title } from "common/ui";
import { PopularGoods } from "components/Goods/PopularGoods";
import { Article } from "components/Goods/Product/Article";
import { Price } from "components/Goods/Product/Price";
import ProductDescriptions from "components/Goods/ProductDescriptions";
import IMG1 from "components/Goods/static/covered.jpg";
import IMG2 from "components/Goods/static/linens.jpg";

const items = [
  {
    id: "1",
    title: "Dream",
    image: IMG1,
    isInStock: true,
    size: "150 х 210",
    color: { label: "Сірий", value: "gray" },
    fiber: { label: "Мікрофібра", value: "microfiber" },
    packageDetails: {
      width: 60,
      height: 15,
      length: 63,
      weight: 0.87,
      packageCount: 1,
      article: "903.048.89",
    },
    price: 1199,
  },
  {
    id: "2",
    title: "Indigo",
    label: "Покривало",
    image: IMG2,
    isInStock: true,
    size: "180 х 240",
    color: { label: "Рожевий", value: "pink" },
    fiber: { label: "Велюр", value: "velor" },
    packageDetails: {
      width: 60,
      height: 15,
      length: 63,
      weight: 0.87,
      packageCount: 1,
      article: "903.048.89",
    },
    price: 699,
  },
  {
    id: "3",
    title: "Dream",
    image: IMG1,
    isInStock: true,
    size: "150 х 210",
    color: { label: "Сірий", value: "gray" },
    fiber: { label: "Мікрофібра", value: "microfiber" },
    packageDetails: {
      width: 60,
      height: 15,
      length: 63,
      weight: 0.87,
      packageCount: 1,
      article: "903.048.89",
    },
    price: 1199,
  },
  {
    id: "4",
    title: "Indigo",
    label: "Покривало",
    image: IMG2,
    isInStock: true,
    size: "180 х 240",
    color: { label: "Рожевий", value: "pink" },
    fiber: { label: "Велюр", value: "velor" },
    packageDetails: {
      width: 60,
      height: 15,
      length: 63,
      weight: 0.87,
      packageCount: 1,
      article: "903.048.89",
    },
    price: 699,
  },
];

export default function ComparePage() {
  return (
    <>
      <Section className={"mb-24 mt-6 md:mt-12 lg:mb-40"}>
        <Container>
          <div>
            <div className={"mb-[72px]"}>
              <Title className={"mb-3.5 text-3xl"}>Порівняння товарів</Title>
              <p className={"text-sm lg:font-extralight"}>
                Порівняти {items.length} товари
              </p>
            </div>
            <div
              className={
                "mb-8 flex flex-col-reverse justify-between gap-6 md:mb-12 lg:flex-row lg:items-center"
              }
            >
              <Link href={GoodsUrl.getCovered()}>
                <Button
                  className={{ button: "px-8 py-2" }}
                  colorVariant={"filter"}
                  startIcon={<FiArrowLeft className={"size-6 "} />}
                >
                  змінити
                </Button>
              </Link>
              <span className={"text-sm font-bold text-tep_gray-500"}>
                {items.length} товара
              </span>
            </div>

            <div className={"mb-24 flex gap-x-6 overflow-x-scroll"}>
              {items.map((item) => {
                const { id, image, title } = item;
                return (
                  <div
                    key={id}
                    className={
                      "min-w-[152px] md:min-w-[250px] lg:min-w-[288px]"
                    }
                  >
                    <ImageSquare source={image} classes={{ wrapper: "mb-6" }} />
                    <Title size={"xl"}>{title}</Title>
                  </div>
                );
              })}
            </div>
            <div
              className={
                "mb-6 border-b border-tep_gray-200 pb-6 text-2xl font-bold"
              }
            >
              Можна замовити
            </div>
            <div className={"mb-24 flex gap-x-6 overflow-x-scroll"}>
              {items.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={
                      "min-w-[152px] md:min-w-[250px] lg:min-w-[288px]"
                    }
                  >
                    <div
                      className={cn("mb-5 flex items-center gap-x-3", {
                        "mb-4": !item.isInStock,
                      })}
                    >
                      <span
                        className={cn("size-2 rounded-full", {
                          "bg-tep_blue-500": item.isInStock,
                          "bg-[#703F4D]": !item.isInStock,
                        })}
                      ></span>
                      <span className={"text-sm font-extralight"}>
                        {item.isInStock ? "В наявності" : "Немає в наявності"}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className={
                "mb-6 border-b border-tep_gray-200 pb-6 text-2xl font-bold"
              }
            >
              Розміри
            </div>
            <div className={"mb-24 flex gap-x-6 overflow-x-scroll"}>
              {items.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={
                      "min-w-[152px] md:min-w-[250px] lg:min-w-[288px]"
                    }
                  >
                    <p className={"text-sm lg:font-extralight"}>{item.size}</p>
                  </div>
                );
              })}
            </div>
            <div
              className={
                "mb-6 border-b border-tep_gray-200 pb-6 text-2xl font-bold"
              }
            >
              Колір
            </div>
            <div className={"mb-24 flex gap-x-6 overflow-x-scroll"}>
              {items.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={
                      "min-w-[152px] md:min-w-[250px] lg:min-w-[288px]"
                    }
                  >
                    <div
                      className={
                        "inline-flex flex-col items-center gap-y-4 text-center"
                      }
                    >
                      <span
                        className={cn("size-14 rounded-full", {
                          "bg-tep_gray-700": item.color.value === "gray",
                          "bg-[#EFD0C8]": item.color.value === "pink",
                        })}
                      ></span>
                      <span className={"text-sm lg:font-extralight"}>
                        {item.color.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className={
                "mb-6 border-b border-tep_gray-200 pb-6 text-2xl font-bold"
              }
            >
              Тканина
            </div>
            <div className={"mb-24 flex gap-x-6 overflow-x-scroll"}>
              {items.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={
                      "min-w-[152px] md:min-w-[250px] lg:min-w-[288px]"
                    }
                  >
                    <p className={"text-sm lg:font-extralight"}>
                      {item.fiber.label}
                    </p>
                  </div>
                );
              })}
            </div>
            <div
              className={
                "mb-6 border-b border-tep_gray-200 pb-6 text-2xl font-bold"
              }
            >
              Деталі упаковки
            </div>
            <div className={"mb-24 flex gap-x-6 overflow-x-scroll"}>
              {items.map((item) => {
                const { id, packageDetails } = item;
                const { article, height, length, packageCount, weight, width } =
                  packageDetails;
                return (
                  <div
                    key={id}
                    className={"w-[152px] md:w-[250px] lg:w-[288px]"}
                  >
                    <p className={"mb-5 text-sm lg:font-extralight"}>
                      Ергоном подушка, для сну на боці/спині
                    </p>
                    <p className={"text-sm lg:font-extralight"}>
                      Артикул номер
                    </p>
                    <Article
                      article={article}
                      className={"mb-6 inline-block bg-black"}
                    />
                    <p className={"flex flex-col text-sm lg:font-extralight"}>
                      <span>Ширина {width} см</span>
                      <span>Висота {height} см</span>
                      <span>Довжина {length} см</span>
                      <span>Вага {weight} кг</span>
                      <span>Упаковка {packageCount}</span>
                    </p>
                  </div>
                );
              })}
            </div>
            <div
              className={
                "mb-6 border-b border-tep_gray-200 pb-6 text-2xl font-bold"
              }
            >
              Ціна
            </div>
            <div className={"flex gap-x-6 overflow-x-scroll"}>
              {items.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={"w-[152px] md:w-[250px] lg:w-[288px]"}
                  >
                    <Price price={item.price} />
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
      <PopularGoods />
      <ProductDescriptions descriptions={productDescriptions} />
    </>
  );
}
