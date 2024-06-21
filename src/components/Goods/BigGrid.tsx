"use client";

import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { cn } from "utils/cn";
import { transformImagesArr } from "utils/helpers";

import { Button } from "common/ui";

export type BigGridProps = {
  images_array: (StaticImageData | string)[];
};

export function BigGrid({ images_array }: BigGridProps) {
  const [count, setCount] = useState(6);
  const [images, setImages] = useState(transformImagesArr(images_array));

  useEffect(() => {
    if (document.documentElement.clientWidth < 768) {
      setImages(transformImagesArr(images_array, 2));
      setCount(2);
    } else if (document.documentElement.clientWidth < 1024) {
      setImages(transformImagesArr(images_array, 4));
      setCount(4);
    }
  }, [images_array]);

  return (
    <>
      <div className={"mb-[72px]"}>
        {images.map((image, Idx) => {
          return <ImagesSection key={Idx} images={image} />;
        })}
      </div>
      <Button
        colorVariant={"black"}
        size={"large"}
        className={{ button: "mx-auto" }}
        onClick={() =>
          setImages((data) => [...data, images_array.slice(0, count)])
        }
      >
        Більше
      </Button>
    </>
  );
}

export type ImagesSectionProps = {
  images: (StaticImageData | string)[];
};
export function ImagesSection({ images }: ImagesSectionProps) {
  return (
    <div className={"columns-1 gap-6 md:columns-2 lg:columns-3"}>
      {images.map((image, Idx) => {
        const isSquare = Idx === 1 || Idx === 2 || Idx === 5;
        return (
          <Image
            key={Idx}
            src={image}
            alt={"Image"}
            className={cn("mb-6 w-full rounded-3xl object-cover", {
              "aspect-square": isSquare,
              "aspect-[3/5]": !isSquare,
            })}
          />
        );
      })}
    </div>
  );
}
