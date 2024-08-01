import { ImageSquare } from "common/ImageSquare";
import { Title } from "common/ui";
import { StaticImageData } from "next/image";
import Link from "next/link";

type RedirectSectionProps = {
    photo: StaticImageData | string;
    url: string;
    title: string;
}

export default function RedirectSection({ photo, url, title }: RedirectSectionProps) {
    return (
      <Link href={url}>
        <div
          className={
            "group relative mx-auto max-w-[392px] max-h-[295px] overflow-hidden rounded-3xl transition-shadow hover:shadow"
          }
        >
          <ImageSquare
            source={photo}
            classes={{
              image: "transition-transform duration-300 max-w-[392px] max-h-[295px] group-hover:scale-105 brightness-90",
            }}
          />
          <div className="absolute top-[50%] inset-0 flex items-center justify-center">
            <span
              className={
                "z-10 text-2xl font-bold text-white"
              }>
              {title}
            </span>
          </div>
        </div>
      </Link>
    );
  }