import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

import { IconButton, Title } from "common/ui";

type InfoCardProps = {
  title: string;
  description: string;
  bg: StaticImageData;
  url: string;
};

export default function InfoCard({
  bg,
  description,
  title,
  url,
}: InfoCardProps) {
  return (
    <Link href={url} className={"group relative overflow-hidden rounded-3xl"}>
      <div className={"relative pb-[100%]"}>
        <Image
          src={bg}
          alt={"Background image"}
          fill
          className={
            "object-cover transition-transform duration-300 group-hover:scale-105"
          }
        />
      </div>
      <IconButton
        size={"large"}
        className={{ button: "absolute right-8 top-8" }}
      >
        <FiArrowRight className={"size-6"} />
      </IconButton>
      <div className={"absolute top-[68%] z-10 w-full px-8 text-white"}>
        <Title size={"2xl"} className={"mb-1.5"} component={"h3"}>
          {title}
        </Title>
        <p className={"font-light"}>{description}</p>
      </div>
    </Link>
  );
}
