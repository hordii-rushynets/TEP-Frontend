"use client";

import { HTMLAttributes } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { CompanyUrl } from "route-urls";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "utils/cn";

import { SimpleCard } from "common/Cards/SimpleCard";
import { Container, IconButton, Section, Title } from "common/ui";
import { useEffect, useState } from "react";

import { Article } from "app/company/blog//interfaces";
import { ArticleService } from "app/company/blog/services";
import { useLocalization } from "contexts/LocalizationContext";

import "swiper/css";
import "swiper/css/navigation";

type PopularGoodsProps = {
  id: string;
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export function MoreArticles({ id, className }: PopularGoodsProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const { localization, staticData } = useLocalization();

  useEffect(() => {
    const articleService = new ArticleService();

    articleService.getArticles("1")
      .then(
        articles => {
          setArticles(articles.results);
          setLoading(false);
        }
      )
      .catch(error => {
        console.error('Error fetching articles:', error);
      })

  }, [localization]);

  if (loading) {
    return <div>Loading...</div>; // Show a loading state while fetching data
  }

  const otherArticles = articles.filter((article) => article.slug !== id);
  return otherArticles.length !== 0 ? (
    <Section className={cn("overflow-hidden", className)}>
      <Container>
        <div>
          <Title className={"mb-12"}>{staticData.company.blog.moreArticles}</Title>
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
                  source={article.image}
                  title={article[`title_${localization}` as keyof Article] as string}
                  url={CompanyUrl.getArticle(article.slug)}
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
  ) : <></>;
}
