"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { cn } from "utils/cn";
import { translateCategory } from "utils/helpers";
import { toTitleCase } from "utils/string";

import { Button, IconButton, SelectInput, TextInput, Title } from "common/ui";
import { useCartContext } from "contexts/CartContext";
import { useFavouriteContext } from "contexts/FavouriteContext";

import { Article } from "./Article";
import { Counter } from "./Counter";
import Gallery from "./Gallery";
import { Price } from "./Price";

import DeliveryIcon from "./static/deliveryIcon.svg";
import GaranteeIcon from "./static/garanteeIcon.svg";
import SupportIcon from "./static/supportIcon.svg";

type PaymentDetailsProps = {
  id: string;
  title: string;
  category: string;
  sizes: string[];
  price: number;
  count: number;
  isInStock: boolean;
  article: string;
  colors: {
    color: {
      value: string;
      label: string;
      description: string;
    };
    images: (StaticImageData | string)[];
  }[];
  isFavourite: boolean;
  isInCart: boolean;
  onFavouriteClick: (v: string) => void;
  onCartClick: (v: string) => void;
};

export function PaymentDetails({
  id,
  article,
  category,
  colors,
  isInStock,
  count,
  price,
  sizes,
  title,
  isFavourite,
  isInCart,
  onFavouriteClick = () => {},
  onCartClick = () => {},
}: PaymentDetailsProps) {
  const [email, setEmail] = useState("");
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedColor, setSelectedColor] = useState(colors[0].color.value);
  const sizeOptions = sizes.map((s) => ({ label: s, value: s }));
  const colorOptions = colors.map((c) => ({
    label: toTitleCase(c.color.label),
    value: c.color.value,
  }));

  const { setIsOpen, setTitle } = useCartContext();
  const { setIsOpen: setIsOpenF, setTitle: setTitleF } = useFavouriteContext();

  return (
    <div className={"flex flex-col gap-x-6 md:flex-row"}>
      <div className={"overflow-hidden md:grow-0 md:basis-[65%]"}>
        <Gallery
          images={colors.find((c) => c.color.value === selectedColor)!.images}
        />
      </div>
      <div className={"flex-1 shrink-0"}>
        <div>
          <div className={"mb-6 flex items-start justify-between"}>
            <div>
              <Title className={"mb-1.5"} size={"3xl"}>
                {title}
              </Title>
              <p className={"text-sm font-light text-tep_gray-500"}>
                {translateCategory(category)},{" "}
                {
                  colors.find((c) => c.color.value === selectedColor)?.color
                    .label
                }
                , {selectedSize}
              </p>
            </div>
            <Article className={"hidden lg:block"} article={article} />
          </div>
          <div className={"mb-9 flex items-center justify-between"}>
            <Price price={price} className={"text-[42px]"} />
            <Counter count={count} />
          </div>
          <p className={"mb-6 text-sm font-extralight"}>
            {
              colors.find((c) => c.color.value === selectedColor)?.color
                .description
            }
          </p>
          <div className={"mb-[65px] flex flex-col gap-y-6"}>
            {colors.length > 1 && (
              <SelectInput
                label={"Рожевий"}
                display={"Оберіть колір"}
                options={colorOptions}
                value={selectedColor}
                onChange={setSelectedColor}
                className={{
                  label: "text-sm font-extralight",
                }}
              />
            )}
            <SelectInput
              label={"Розмір"}
              display={"Оберіть розмір"}
              options={sizeOptions}
              value={selectedSize}
              onChange={setSelectedSize}
              className={{ label: "text-sm font-extralight" }}
            />
          </div>
          {isInStock && (
            <div className={"mb-8 flex gap-x-2"}>
              <Button
                onClick={() => {
                  setTitle(title);
                  setIsOpen(true);
                  onCartClick(id);
                }}
                colorVariant={"black"}
                fullWidth
              >
                {!isInCart ? "Додати до кошика" : "Додано до кошика"}
              </Button>
              <IconButton
                className={{ button: "shrink-0" }}
                size={"large"}
                colorVariant={"outlined"}
                onClick={() => {
                  setTitleF(title);
                  setIsOpenF(true);
                  onFavouriteClick(id);
                }}
              >
                <FiHeart
                  className={cn("size-6", {
                    "fill-[#EFD0C8] text-[#EFD0C8] transition-colors hover:fill-[#e19c8a] hover:text-[#e19c8a]":
                      isFavourite,
                  })}
                />
              </IconButton>
            </div>
          )}
          {!isInStock && (
            <div className={"mb-4 mt-24 flex flex-col gap-y-4"}>
              <TextInput
                className={{
                  inputWrapper: "border-black",
                  input: "placeholder:text-black",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"Ваша пошта"}
              />
              <Button size={"small"} colorVariant={"black"} fullWidth>
                Повідомити про наявність
              </Button>
              <Button
                size={"small"}
                onClick={() => {
                  setTitleF(title);
                  setIsOpenF(true);
                  onFavouriteClick(id);
                }}
                endIcon={
                  <FiHeart
                    className={cn("size-6", {
                      "fill-[#EFD0C8] text-[#EFD0C8] transition-colors hover:fill-[#e19c8a] hover:text-[#e19c8a]":
                        isFavourite,
                    })}
                  />
                }
              >
                Додати в список покупок
              </Button>
            </div>
          )}
          <div
            className={cn("mb-5 flex items-center gap-x-3", {
              "mb-4": !isInStock,
            })}
          >
            <span
              className={cn("size-2 rounded-full", {
                "bg-tep_blue-500": isInStock,
                "bg-[#703F4D]": !isInStock,
              })}
            ></span>
            <span className={"text-sm font-extralight"}>
              {isInStock ? "В наявності" : "Немає в наявності"}
            </span>
          </div>

          {!isInStock && (
            <div
              className={
                "mb-4 grid grid-cols-3 rounded-3xl bg-tep_gray-700/10 py-5"
              }
            >
              <div
                className={
                  "mx-auto flex max-w-[67px] flex-col items-center text-center"
                }
              >
                <Image src={DeliveryIcon} alt={"Icon"} className={"flex-1"} />
                <span className={"text-[11px] font-semibold"}>
                  Доставка з трекінгом
                </span>
              </div>
              <div
                className={
                  "mx-auto flex max-w-[67px] flex-col items-center text-center"
                }
              >
                <Image src={GaranteeIcon} alt={"Icon"} className={"flex-1"} />
                <span className={"text-[11px] font-semibold"}>
                  Гарантія якості
                </span>
              </div>
              <div
                className={
                  "mx-auto flex max-w-[67px] flex-col items-center text-center"
                }
              >
                <Image src={SupportIcon} alt={"Icon"} className={"flex-1"} />
                <span className={"text-[11px] font-semibold"}>
                  Служба підтримки
                </span>
              </div>
            </div>
          )}

          <Article article={article} className={"lg:hidden"} />
        </div>
      </div>
    </div>
  );
}
