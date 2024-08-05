"use client";

import { MainUrl } from "route-urls";

import { IconButton, Section } from "common/ui";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import MainIMG from "./static/main-bg.jpg";
import AppIMG from "./static/main-app.png";
import TowelIMG from "./static/main-towel.png"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { HeroCard } from "./HeroCard";
import { useLocalization } from "contexts/LocalizationContext";

const heros = [
  {
    id: 1,
    image: MainIMG,
    link: MainUrl.getGoods(),
  },
  {
    id: 2,
    image: TowelIMG,
    link: MainUrl.getGoods(),
  },
  {
    id: 3,
    image: AppIMG,
    link: "https://apps.apple.com/ua/app/%D1%82%D0%B5%D0%BF/id1631160979",
  }
]

export function Hero() {
  const { staticData } = useLocalization();
  return (
    <Section className={"relative bg-black overflow-hidden"}>
      <Swiper
            className={"!overflow-visible"}
            modules={[Navigation, Autoplay]}
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
            spaceBetween={0}
            breakpoints={{
              425: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
          >
            {heros.map((hero, indx) => (
              <SwiperSlide key={hero.id}>
                <HeroCard 
                  image={hero.image}
                  title={staticData.home.heroInfo[indx].title}
                  link={hero.link}
                  buttonText={staticData.home.heroInfo[indx].buttonText}
                />
              </SwiperSlide>
            ))}
            <IconButton
              id={"recomendations-prev-btn"}
              className={{
                button:
                  "absolute left-0 top-1/2 z-40 translate-x-1/2 -translate-y-1/2",
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
                  "absolute right-0 top-1/2 z-40 -translate-y-1/2 -translate-x-1/2",
              }}
              size={"large"}
              colorVariant={"ghost"}
            >
              <FiChevronRight className={"size-6"} />
            </IconButton>
          </Swiper>
    </Section>
  );
}
