"use client";

import { ProductToShow } from "app/goods/[category]/page";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Container, IconButton, Section, Title } from "common/ui";

import ProductCard from "../ProductCard";

import IMG1 from "./static/img1.jpg";
import IMG2 from "./static/img2.jpg";
import IMG3 from "./static/img3.jpg";
import IMG4 from "./static/img4.jpg";
import IMG5 from "./static/img5.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export function Recomendations() {
  return (
    <Section className={"overflow-hidden mb-24"}>
      <Container>
        <div>
          <Title className={"mb-7"}>Рекомендації для тебе</Title>
          <Swiper
            className={"!overflow-visible"}
            modules={[Navigation, Scrollbar, Autoplay]}
            scrollbar={{ draggable: true }}
            navigation={{
              nextEl: "#recomendations-next-btn",
              prevEl: "#recomendations-prev-btn",
            }}
            speed={1000}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={24}
            breakpoints={{
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
              id={"recomendations-prev-btn"}
              className={{
                button:
                  "absolute left-0 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2",
              }}
              size={"large"}
              colorVariant={"ghost"}
            >
              <FiChevronLeft className={"size-6"} />
            </IconButton>
            <IconButton
              id={"recomendations-next-btn"}
              className={{
                button:
                  "absolute right-0 top-1/2 z-40 -translate-y-1/2 translate-x-1/2",
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
    image: IMG1,
    title: "VÅRELD ВОРЕЛЬД",
    category: "Ковдра",
    price: 1299,
  },
  {
    id: "2",
    image: IMG2,
    title: "INDIRA ІНДІРА",
    category: "Наматрасник",
    price: 699,
  },
  {
    id: "3",
    image: IMG3,
    title: "NATTJASMIN НАТТЯСМІН",
    category: "Постільна білизна",
    price: 1099,
  },
  {
    id: "4",
    image: IMG4,
    title: "GULVED ГУЛЬВЕД",
    category: "Покривало",
    price: 899,
  },
  {
    id: "5",
    image: IMG5,
    title: "VÅRELD ВОРЕЛЬД",
    category: "Подушка",
    price: 299,
  },
];
