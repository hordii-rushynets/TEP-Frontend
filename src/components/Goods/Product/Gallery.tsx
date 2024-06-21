"use client";

import { StaticImageData } from "next/image";
import { useState } from "react";
import { Autoplay, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { ImageSquare } from "common/ImageSquare";
import { Dialog } from "common/ui";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

type GalleryProps = {
  images: (StaticImageData | string)[];
};

export default function Gallery({ images }: GalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className={"hidden gap-6 md:grid md:grid-cols-1 lg:grid-cols-2"}>
        {images.map((image, Idx) => (
          <ImageSquare
            key={Idx}
            onClick={() => setIsOpen(true)}
            source={image}
            classes={{
              image:
                "transform transition-transform duration-500 hover:scale-105",
            }}
          />
        ))}
      </div>
      <div className={"md:hidden"}>
        <Swiper
          className={"!pb-8"}
          modules={[Scrollbar, Autoplay]}
          scrollbar={{ draggable: true }}
          speed={1000}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={24}
          slidesPerView={1}
        >
          {images.map((image, Idx) => (
            <SwiperSlide key={Idx}>
              <ImageSquare source={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={{
          contentWrapper:
            "max-h-[800px] w-full  max-w-[calc(100%-24px)] md:max-w-[calc(100%-48px)] xl:max-w-[1224px]",
        }}
      >
        <div className={"mb-10 mt-20 w-full overflow-hidden px-2"}>
          <Swiper
            modules={[Scrollbar]}
            scrollbar={{ draggable: true }}
            speed={1000}
            spaceBetween={24}
            slidesPerView={1}
          >
            {images.map((image, Idx) => (
              <SwiperSlide key={Idx}>
                <div
                  className={
                    "mx-auto mb-10 max-w-[70%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[600px]"
                  }
                >
                  <ImageSquare classes={{ wrapper: "" }} source={image} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Dialog>
    </>
  );
}
