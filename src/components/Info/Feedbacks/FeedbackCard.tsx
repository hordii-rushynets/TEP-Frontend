import Image from "next/image";
import Link from "next/link";
import { BiDislike, BiLike } from "react-icons/bi";
import { MainUrl } from "route-urls";
import { cn } from "utils/cn";
import { translateCategory } from "utils/helpers";

import { ImageSquare } from "common/ImageSquare";
import { ButtonBase, Title } from "common/ui";
import { Star } from "common/ui/icons/Star";
import NoAvatarIMG from "components/static/noavatar.png";

import { Feedback } from "./FeedbacksList";

export type FeedbackCardProps = {
  feedback: Feedback;
};

export function FeedbackCard({ feedback }: FeedbackCardProps) {
  const { author, category, created_at, interaction, rating, text, images } =
    feedback;

  return (
    <div
      className={
        "flex max-w-[808px] flex-col gap-y-6 overflow-hidden rounded-3xl bg-tep_gray-200 p-8"
      }
    >
      <div
        className={
          "flex flex-col items-start justify-between gap-y-6 md:flex-row"
        }
      >
        <div className={"flex items-center gap-x-4"}>
          <div className={"relative size-12 overflow-hidden rounded-full"}>
            <Image
              className={"select-none object-cover"}
              aria-hidden
              fill
              src={author.avatar ?? NoAvatarIMG}
              alt={"Avatar image"}
            />
          </div>
          <div>
            <Title size={"xl"}>{author.name}</Title>
            <span
              className={"block text-[10px] text-tep_gray-700 lg:font-light"}
            >
              {created_at}
            </span>
          </div>
        </div>
        <div className={"flex gap-x-2"}>
          {Array.from({ length: 5 }).map((_, Idx) => (
            <Star key={Idx} className={cn({ "fill-black": Idx < rating })} />
          ))}
        </div>
      </div>
      <div>
        <Link
          href={`${MainUrl.getGoods()}/${category}`}
          className={
            "mb-6 inline-block transition-colors hover:text-tep_blue-500 md:mb-4"
          }
        >
          <span
            className={"rounded-full bg-white px-4 py-1 text-[10px] font-bold"}
          >
            {translateCategory(category)}
          </span>
        </Link>
        <p className={"text-sm lg:font-extralight"}>{text}</p>
      </div>
      {!!images?.length && (
        <div className={"flex flex-wrap gap-2"}>
          {images.map((image, Idx) => (
            <div key={Idx} className={"w-[118px]"}>
              <ImageSquare
                classes={{ wrapper: "rounded-2xl" }}
                source={image}
              />
            </div>
          ))}
        </div>
      )}
      <div className={"mt-2 flex gap-x-2"}>
        <div className={"flex flex-col items-center text-tep_gray-700"}>
          <ButtonBase
            className={{ button: "transition-colors hover:text-tep_blue-400" }}
          >
            <BiLike className={"size-4"} />
          </ButtonBase>
          <span className={"text-[10px] font-light"}>{interaction.like}</span>
        </div>
        <div className={"flex flex-col items-center text-tep_gray-700"}>
          <ButtonBase
            className={{ button: "transition-colors hover:text-tep_blue-400" }}
          >
            <BiDislike className={"size-4"} />
          </ButtonBase>
          <span className={"text-[10px] font-light"}>
            {interaction.dislike}
          </span>
        </div>
      </div>
    </div>
  );
}
