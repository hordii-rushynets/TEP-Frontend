"use client";

import { ProductToShow, ProductWithVariant } from "app/goods/[category]/page";
import Image from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight, FiHeart } from "react-icons/fi";
import { GoodsUrl } from "route-urls";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ButtonBase, Container, IconButton, Section, Title } from "common/ui";
import { useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useLocalization } from "contexts/LocalizationContext";

interface SimilarGoodsProps {
  product: ProductWithVariant | undefined;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export function SimilarGoods({product}:SimilarGoodsProps) {
  const [products, setProducts] = useState<ProductToShow[]>([]);
  const { staticData } = useLocalization();

  useEffect(() => {
    fetch(`${apiUrl}/api/store/products/?category_slug=${product?.category.slug || ""}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      else {
        return
      }
    })
    .then(data => {
      if (data) {
        let productsToShow : ProductToShow[] = data.map((product:any) => {
          let productVariant = product.product_variants[0];
          return {
            id: product.id,
            slug: product.slug,
            title: product[`title_${staticData.backendPostfix}` || "title"],
            category_slug: product.category.slug,
            category_title: product.category[`title_${staticData.backendPostfix}` || "title"],
            image: productVariant.main_image || "",
            price: productVariant.default_price,
            isSale: productVariant.promotion,
            salePrice: productVariant.promo_price,
            number_of_views: product.number_of_views,
            date: new Date(product.last_modified),
            isFavourite: product.is_favorite
          }
        });

        productsToShow = productsToShow.filter(productWithVar => productWithVar.slug !== product?.slug)

        setProducts(productsToShow);
      }
    })
  }, [product]);

  return products.length !== 0 ? (
    <Section className={"mb-24"}>
      <Container>
        <div>
          <Title className={"mb-12"}>{staticData.goods.similarGoods}</Title>
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
  ) : <></>;
}


type ProductCardProps = {
  product: ProductToShow;
};

export default function Card({ product }: ProductCardProps) {
  const { id, slug, image, price, category_title, category_slug, title } = product;
  const { staticData } = useLocalization();
  return (
    <Link
      href={`${GoodsUrl.getPillows()}/${slug}`}
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
          sizes="100vw, 50vw, 33vw"
        />
      </div>
      <div className={"mb-4 flex items-start justify-between"}>
        <div>
          <Title size={"base"} className={"mb-1.5 uppercase"} component={"h3"}>
            {title}
          </Title>
          <p className={"text-sm font-light text-[#A5A5A5]"}>{category_title}</p>
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
          <span className={"align-top text-[10px] font-bold"}> {staticData.goods.price}</span>
        </span>
      </div>
    </Link>
  );
}
