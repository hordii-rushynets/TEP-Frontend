"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import AuthIMG from "components/Auth/static/auth-img.jpg";
import styles from "components/Auth/styles.module.css";

import "swiper/css";
import "swiper/css/pagination";

export function AuthSlider() {
  return (
    <Swiper
      className={styles.swiper}
      modules={[Pagination]}
      pagination={{ clickable: true, enabled: true }}
      speed={1000}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      slidesPerView={1}
      spaceBetween={12}
    >
      <SwiperSlide>
        <div className={"relative h-60 w-full overflow-hidden rounded-3xl"}>
          <Image fill className={"object-cover"} src={AuthIMG} alt={"Image"} sizes="100vw, 50vw, 33vw"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={"relative h-60 overflow-hidden rounded-3xl"}>
          <Image fill className={"object-cover"} src={AuthIMG} alt={"Image"} sizes="100vw, 50vw, 33vw"/>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={"relative h-60 overflow-hidden rounded-3xl"}>
          <Image fill className={"object-cover"} src={AuthIMG} alt={"Image"} sizes="100vw, 50vw, 33vw"/>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
