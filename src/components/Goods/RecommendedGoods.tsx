"use client";

import { ProductToShow, ProductWithVariant } from "app/goods/[category]/page";
import { HTMLAttributes, useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "utils/cn";

import { Container, IconButton, Section, Title } from "common/ui";
import ProductCard from "components/Home/ProductCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { ProductService } from "app/goods/[category]/services";
import { useLocalization } from "contexts/LocalizationContext";
import { useAuth } from "contexts/AuthContext";

type RecommendedGoodsProps = {
  title?: string;
  product_slug? : string;
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export function RecommendedGoods({
  title = "",
  product_slug = "",
  className,
}: RecommendedGoodsProps) {
  const productService = new ProductService();
  const [products, setProducts] = useState<ProductToShow[]>([]);
  const [productsWithVariants, setProductsWithVariants] = useState<ProductWithVariant[]>([]);
  const { staticData } = useLocalization();
  const authContext = useAuth();

  useEffect(() => {
    productService.getRecommendedGoods(staticData, authContext, product_slug).then(goods => {
      setProducts(goods.productsToShow);
      setProductsWithVariants(goods.productsWithVariant);
    });
  }, [product_slug]);

  return products.length !== 0 ? (
    <Section className={cn("mb-[110px] overflow-hidden", className)}>
      <Container>
        <div>
          <Title className={"mb-12"}>{title !== "" ? title : staticData.goods.recommendedGoods}</Title>
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
                <ProductCard 
                  product={product} 
                  productWithVariant={productsWithVariants.find(productWithVariants => productWithVariants.slug === product.slug) as ProductWithVariant}
                  hasFavourite={false}
                  hasCompare={false}
                />
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
  ) : <></>;
}