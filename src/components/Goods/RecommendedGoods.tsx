"use client";

import { ProductToShow } from "app/goods/[category]/page";
import { HTMLAttributes } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "utils/cn";

import { Container, IconButton, Section, Title } from "common/ui";
import ProductCard from "components/Home/ProductCard";

import BlankedIMG from "./static/blanket.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

type RecommendedGoodsProps = {
  title?: string;
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export function RecommendedGoods({
  title = "Рекомендації для тебе",
  className,
}: RecommendedGoodsProps) {
  return (
    <Section className={cn("mb-[110px] overflow-hidden", className)}>
      <Container>
        <div>
          <Title className={"mb-12"}>{title}</Title>
          <Swiper
            className={"!overflow-visible !pb-8"}
            modules={[Navigation, Scrollbar, Autoplay]}
            scrollbar={{ draggable: true }}
            navigation={{
              nextEl: "#recommended-next-btn",
              prevEl: "#recommended-prev-btn",
            }}
            speed={1000}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={24}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              425: {
                slidesPerView: 1.7,
              },
              576: {
                slidesPerView: 2.2,
              },
              768: {
                slidesPerView: 2.8,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
            <IconButton
              id={"recommended-prev-btn"}
              className={{
                button:
                  "absolute left-0 top-1/2 z-40 -translate-y-1/2 xl:-translate-x-1/2",
              }}
              size={"large"}
              colorVariant={"ghost"}
            >
              <FiChevronLeft className={"size-6"} />
            </IconButton>
            <IconButton
              id={"recommended-next-btn"}
              className={{
                button:
                  "absolute right-0 top-1/2 z-40 -translate-y-1/2 xl:translate-x-1/2",
              }}
              size={"large"}
              colorVariant={"ghost"}
            >
              <FiChevronRight className={"size-6"} />
            </IconButton>
          </Swiper>
        </div>
      </Container>
    </Section>
  );
}

export const products: ProductToShow[] = [
  {
    id: "1",
    image: BlankedIMG,
    title: "ВОРЕЛЬД",
    category_title: "Ковдра",
    category_slug: "sheets",
    price: 1299,
  },
  {
    id: "2",
    image: BlankedIMG,
    title: "ВОРЕЛЬД",
    category_title: "Ковдра",
    category_slug: "sheets",
    price: 699,
  },
  {
    id: "3",
    image: BlankedIMG,
    title: "ВОРЕЛЬД",
    category_title: "Ковдра",
    category_slug: "sheets",
    price: 1099,
  },
  {
    id: "4",
    image: BlankedIMG,
    title: "ВОРЕЛЬД",
    category_title: "Ковдра",
    category_slug: "sheets",
    price: 899,
  },
  {
    id: "5",
    image: BlankedIMG,
    title: "ВОРЕЛЬД",
    category_title: "Ковдра",
    category_slug: "sheets",
    price: 299,
  },
  {
    id: "6",
    image: BlankedIMG,
    title: "ВОРЕЛЬД",
    category_title: "Ковдра",
    category_slug: "sheets",
    price: 699,
  },
  {
    id: "7",
    image: BlankedIMG,
    title: "ВОРЕЛЬД",
    category_title: "Ковдра",
    category_slug: "sheets",
    price: 1099,
  },
  {
    id: "8",
    image: BlankedIMG,
    title: "ВОРЕЛЬД",
    category_title: "Ковдра",
    category_slug: "sheets",
    price: 899,
  },
  {
    id: "9",
    image: BlankedIMG,
    title: "ВОРЕЛЬД",
    category_title: "Ковдра",
    category_slug: "sheets",
    price: 299,
  },
];
