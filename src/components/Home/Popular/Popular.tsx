"use client";

import { StaticImageData } from "next/image";
import Link from "next/link";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { MainUrl } from "route-urls";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ImageSquare } from "common/ImageSquare";
import { Button, Container, IconButton, Section, Title } from "common/ui";
import { useCategories } from "contexts/CategoriesContext";

import IMG1 from "./static/img1.jpg";
import IMG2 from "./static/img2.jpg";
import IMG3 from "./static/img3.jpg";
import IMG4 from "./static/img4.jpg";
import IMG5 from "./static/img5.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export function Popular() {
  const { categories } = useCategories();

  return (
    <Section className={"my-24 overflow-hidden"}>
      <Container>
        <div>
          <Title className={"mb-7"}>Популярне</Title>
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
            {categories.map((c) => (
              <SwiperSlide key={c.id || 0}>
                <PopularCard photo={c.image || ""} category={c.title || ""} slug={c.slug || ""} />
              </SwiperSlide>
            ))}
            <IconButton
              id={"popular-prev-btn"}
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
              id={"popular-next-btn"}
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

type PopularCardProps = {
  category: string;
  photo: StaticImageData | string;
  slug: string;
};

export default function PopularCard({ photo, category, slug }: PopularCardProps) {
  return (
    <div
      className={
        "group relative mx-auto max-w-[288px] overflow-hidden rounded-3xl transition-shadow hover:shadow"
      }
    >
      <ImageSquare
        source={photo}
        classes={{
          image: "transition-transform duration-300 group-hover:scale-105",
        }}
      />
      <Link href={`${MainUrl.getGoods()}/${slug}`}>
        <Button
          className={{
            button: "absolute left-1/2 top-[72%] z-10 -translate-x-1/2",
          }}
          colorVariant={"black"}
        >
          {category}
        </Button>
      </Link>
    </div>
  );
}