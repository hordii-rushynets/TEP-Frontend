"use client";

import { articles } from "app/company/blog/page";
import { HTMLAttributes } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CompanyUrl } from "route-urls";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "utils/cn";

import { SimpleCard } from "common/Cards/SimpleCard";
import { Container, IconButton, Section, Title } from "common/ui";

import "swiper/css";
import "swiper/css/navigation";

type PopularGoodsProps = {
  id: string;
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export function MoreArticles({ id, className }: PopularGoodsProps) {
  const otherArticles = articles.filter((article) => article.id !== id);
  return (
    <Section className={cn("overflow-hidden", className)}>
      <Container>
        <div>
          <Title className={"mb-12"}>Більше стеттей</Title>
          <Swiper
            className={"!overflow-visible"}
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: "#more_articles-next-btn",
              prevEl: "#more_articles-prev-btn",
            }}
            speed={1000}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            spaceBetween={24}
            slidesPerView={1.5}
            breakpoints={{
              768: {
                slidesPerView: 2.5,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {otherArticles.map((article) => (
              <SwiperSlide key={article.id}>
                <SimpleCard
                  source={article.info.images.topicImg}
                  title={article.topic}
                  url={CompanyUrl.getArticle(id)}
                  isIcon={false}
                />
              </SwiperSlide>
            ))}
            <IconButton
              id={"more_articles-prev-btn"}
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
              id={"more_articles-next-btn"}
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
