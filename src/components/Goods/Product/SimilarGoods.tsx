"use client";

import { Product } from "app/goods/pillows/page";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight, FiHeart } from "react-icons/fi";
import { GoodsUrl } from "route-urls";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ButtonBase, Container, IconButton, Section, Title } from "common/ui";

import BlankedIMG from "./static/blanket.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export function SimilarGoods() {
  return (
    <Section className={"mb-24"}>
      <Container>
        <div>
          <Title className={"mb-12"}>Подібні товари</Title>
          <Swiper
            className={"!pb-6"}
            modules={[Navigation, Scrollbar, Autoplay]}
            scrollbar={{ draggable: true }}
            navigation={{
              nextEl: "#similar-next-btn",
              prevEl: "#similar-prev-btn",
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
                <Card product={product} />
              </SwiperSlide>
            ))}
            <IconButton
              id={"similar-prev-btn"}
              className={{
                button: "absolute left-0 top-1/2 z-40 -translate-y-1/2",
              }}
              size={"large"}
              colorVariant={"ghost"}
            >
              <FiChevronLeft className={"size-6"} />
            </IconButton>
            <IconButton
              id={"similar-next-btn"}
              className={{
                button: "absolute right-0 top-1/2 z-40 -translate-y-1/2",
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

export const products: Product[] = [
  {
    id: "1",
    image: BlankedIMG,
    title: "ВОРЕЛЬД",
    category: "Ковдра",
    price: 1299,
  },
  {
    id: "2",
    image: BlankedIMG,
    title: "ВОРЕЛЬД",
    category: "Ковдра",
    price: 699,
  },
  {
    id: "3",
    image: BlankedIMG,
    title: "ВОРЕЛЬД",
    category: "Ковдра",
    price: 1099,
  },
  {
    id: "4",
    image: BlankedIMG,
    title: "ВОРЕЛЬД",
    category: "Ковдра",
    price: 899,
  },
  {
    id: "5",
    image: BlankedIMG,
    title: "ВОРЕЛЬД",
    category: "Ковдра",
    price: 299,
  },
  {
    id: "6",
    image: BlankedIMG,
    title: "ВОРЕЛЬД",
    category: "Ковдра",
    price: 699,
  },
  {
    id: "7",
    image: BlankedIMG,
    title: "ВОРЕЛЬД",
    category: "Ковдра",
    price: 1099,
  },
  {
    id: "8",
    image: BlankedIMG,
    title: "ВОРЕЛЬД",
    category: "Ковдра",
    price: 899,
  },
  {
    id: "9",
    image: BlankedIMG,
    title: "ВОРЕЛЬД",
    category: "Ковдра",
    price: 299,
  },
];

type ProductCardProps = {
  product: Product;
};

export default function Card({ product }: ProductCardProps) {
  const { id, image, price, category, title } = product;
  return (
    <Link
      href={`${GoodsUrl.getPillows()}/${id}`}
      className={
        "group  mx-auto w-full max-w-[288px] overflow-hidden rounded-3xl p-2 transition-shadow hover:shadow"
      }
    >
      <div className={"relative mb-6 overflow-hidden rounded-3xl pb-[100%]"}>
        <Image
          src={image}
          alt={"Product image"}
          fill
          className={
            "object-cover transition-transform duration-300 group-hover:scale-105"
          }
        />
      </div>
      <div className={"mb-4 flex items-start justify-between"}>
        <div>
          <Title size={"base"} className={"mb-1.5 uppercase"} component={"h3"}>
            {title}
          </Title>
          <p className={"text-sm font-light text-[#A5A5A5]"}>{category}</p>
        </div>
        <div className={"flex gap-x-6 px-3"}>
          <ButtonBase
            className={
              "text-tep_gray-700/50 transition-colors hover:text-tep_blue-500 active:text-tep_blue-500/80 disabled:text-tep_gray-700"
            }
          >
            <FiHeart
              className={
                "size-6 hover:text-tep_blue-500 active:text-tep_blue-500/80 disabled:text-tep_gray-700"
              }
            />
          </ButtonBase>
        </div>
      </div>
      <div className={"flex items-end justify-between"}>
        <span className={"text-xl font-bold"}>
          {price}
          <span className={"align-top text-[10px] font-bold"}> грн</span>
        </span>
      </div>
    </Link>
  );
}
