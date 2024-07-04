"use client";

import { ProductToShow } from "app/goods/[category]/page";
import { products } from "data";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { MainUrl } from "route-urls";
import { translateCategory } from "utils/helpers";

import { ImageSquare } from "common/ImageSquare";
import { Tip } from "common/Tip";
import { Container, IconButton, Section, Title } from "common/ui";
import { Price } from "components/Goods/Product/Price";
import IMG1 from "components/Home/Inspiration/static/img1.jpg";

export function InteriorGoods() {
  return (
    <Section className={"mb-24 lg:mb-40"}>
      <Container>
        <div className={"flex flex-col gap-7 lg:flex-row"}>
          <div
            className={
              "relative min-h-[548px] overflow-hidden rounded-3xl lg:min-h-[800px] lg:basis-[57%]"
            }
          >
            <Image src={IMG1} alt={"Image"} fill className={"object-cover"} />
            <Tip
              product={products[0]}
              className={"absolute right-[7%] top-[10%]"}
            />
            <Tip
              product={products[1]}
              className={"absolute right-[12%] top-[50%]"}
            />
            <Tip
              product={products[2]}
              className={"absolute right-[32%] top-[55%]"}
            />
            <Tip
              product={products[3]}
              className={"absolute bottom-[15%] left-[17%]"}
            />
          </div>
          <div
            className={
              "flex flex-1 flex-col gap-y-2 divide-y divide-tep_gray-200"
            }
          >
            {products.slice(0, 4).map((product) => (
              <InteriorCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

type InteriorCardProps = {
  product: ProductToShow;
};

export function InteriorCard({ product }: InteriorCardProps) {
  const { category, price, title, color, image, size, id } = product;
  return (
    <div className={"flex gap-x-4 py-6 md:px-6 [&:not(:first-child)]:pt-8"}>
      <div className={"w-[134px]"}>
        <ImageSquare source={image} />
      </div>
      <div className={"flex flex-1 flex-col gap-y-2"}>
        <div className={"flex-1"}>
          <Title size={"2xl"} className={"mb-2"}>
            {title}
          </Title>
          <p className={"text-sm font-light text-tep_gray-500"}>
            {[translateCategory(category), color, size].join(", ")}
          </p>
        </div>
        <div className={"flex justify-between"}>
          <div>
            <Price price={price} className={"mb-4 text-[26px]"} />
            <span className={"text-xs font-light text-tep_gray-500"}>
              Більше варіантів
            </span>
          </div>
          <Link
            href={`${MainUrl.getGoods()}/${category}/${id}`}
            className={"self-end"}
          >
            <IconButton size={"large"}>
              <FiArrowRight className={"size-6"} />
            </IconButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
