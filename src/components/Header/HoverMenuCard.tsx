"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { IconButton, Title } from "common/ui";

type HoverMenuCardProps = {
  url: string;
  info: {
    slug: string;
    title: string;
    image: StaticImageData | string;
    description: string;
  };
};

export function HoverMenuCard({ info, url }: HoverMenuCardProps) {
  const { description, image, slug, title } = info;
  return (
    <div
      className={
        "relative flex h-[256px] w-[441px] flex-col justify-end gap-y-1.5 overflow-hidden rounded-3xl bg-gradient-to-b from-black/0 from-40% to-black/60 p-6 text-white shadow-[0_0_10px_0_rgba(29,29,29,0.1)] transition-shadow duration-300"
      }
    >
      <Title size={"2xl"}>{title}</Title>
      <div className={"line-clamp-3 text-sm font-extralight"} dangerouslySetInnerHTML={{ __html:description}} />
      <Image src={image} alt={"Image"} fill className={"-z-10 object-cover"} sizes="100vw, 50vw, 33vw"/>
      <Link className={"absolute right-6 top-6"} href={`${url}/${slug}`}>
        <IconButton size={"large"}>
          <FiArrowRight className={"size-6"} />
        </IconButton>
      </Link>
    </div>
  );
}
