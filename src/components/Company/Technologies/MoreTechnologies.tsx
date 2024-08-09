"use client";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CompanyUrl } from "route-urls";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { SimpleCard } from "common/Cards/SimpleCard";
import { Container, IconButton, Section, Title } from "common/ui";

import { Technology } from "./Technologies";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { useLocalization } from "contexts/LocalizationContext";

type MoreTechnologiesProps = {
  data: Technology[];
};

export function MoreTechnologies({ data }: MoreTechnologiesProps) {
  const { staticData } = useLocalization();

  return (
    <Section className={"overflow-hidden pb-40 pt-24"}>
      <Container>
        <div>
          <Title size={"2xl"} className={"mb-8 md:mb-12"}>
            {staticData.company.technologies.moreTechnologies}
          </Title>
          <Swiper
            className={"!overflow-visible"}
            modules={[Navigation, Scrollbar, Autoplay]}
            navigation={{
              nextEl: "#technology-next-btn",
              prevEl: "#technology-prev-btn",
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
            {data.map((i, Idx) => (
              <SwiperSlide key={i.id}>
                <SimpleCard
                  url={`${CompanyUrl.getTechnologies()}/${i.id}`}
                  title={staticData.company.technologies.technologies.data.find((data: {id: string, title: string}) => data.id === i.id).title}
                  source={i.image}
                  isIcon={false}
                  cardClasses={{ title: "text-xl" }}
                />
              </SwiperSlide>
            ))}
            <IconButton
              id={"technology-prev-btn"}
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
              id={"technology-next-btn"}
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
