"use client";

import { ProductToShow } from "app/goods/[category]/page";
import { HTMLAttributes } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "utils/cn";

import { Container, IconButton, Section, Title } from "common/ui";
import BlanketIMG from "components/Goods/static/blanket.jpg";
import ProductCard from "components/Home/ProductCard";
import { ProductService } from "app/goods/[category]/services";
import { useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useLocalization } from "contexts/LocalizationContext";

type PopularGoodsProps = {
  title?: string;
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export function PopularGoods({
  title = "Популярні товари",
  className,
}: PopularGoodsProps) {
  const productService = new ProductService();
  const { staticData } = useLocalization();
  const [products, setProducts] = useState<ProductToShow[]>([]);

  useEffect(() => {
    productService.getPopularProducts(staticData).then(data => {setProducts(data);})
  }, []);

  return (
    <Section className={cn("mb-[72px] overflow-hidden", className)}>
      <Container>
        <div>
          <Title className={"mb-12"}>{title}</Title>
          <Swiper
            className={"!overflow-visible"}
            modules={[Navigation, Scrollbar, Autoplay]}
            scrollbar={{ draggable: true }}
            navigation={{
              nextEl: "#popular-next-btn",
              prevEl: "#popular-prev-btn",
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
                slidesPerView: 1.5,
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
                <ProductCard
                  product={product}
                  hasCompare={false}
                  hasFavourite={false}
                />
              </SwiperSlide>
            ))}
            <IconButton
              id={"popular-prev-btn"}
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
              id={"popular-next-btn"}
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
