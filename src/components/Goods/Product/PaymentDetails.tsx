"use client";

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { cn } from "utils/cn";
import { toTitleCase } from "utils/string";

import { Button, IconButton, SelectInput, TextInput, Title } from "common/ui";
import { useFavouriteContext } from "contexts/FavouriteContext";
import { useLocalization } from "contexts/LocalizationContext";

import { Article } from "./Article";
import { Counter } from "./Counter";
import Gallery from "./Gallery";
import { Price } from "./Price";
import { Color, Size, SearchParams } from "app/goods/[category]/page";

import DeliveryIcon from "./static/deliveryIcon.svg";
import GaranteeIcon from "./static/garanteeIcon.svg";
import SupportIcon from "./static/supportIcon.svg";
import { DynamicFilter, DynamicFilterField } from "components/Filters/ProductsFilters";

type PaymentDetailsProps = {
  id: string;
  title: string;
  category: string;
  sizes: Size[];
  price: number;
  count: number;
  setCount: (v: number) => void;
  isInStock: boolean;
  article: string;
  colors: Color[];
  description: string;
  images: (StaticImageData | string)[];
  isFavourite: boolean;
  isInCart: boolean;
  searchParams: SearchParams;
  onFavouriteClick: (v: string) => void;
  onCartClick: (v: string) => void;
  selectedColor: string;
  setSelectedColor: (v: string) => void; 
  selectedSize: string;
  setSelectedSize: (v: string) => void; 
  filters: DynamicFilter[];
  selectedFilters: {[key: string]: string};
  setSelectedFilters:  (v: any) => void; 
};

export function PaymentDetails({
  id,
  article,
  category,
  colors,
  images,
  description,
  isInStock,
  count,
  setCount,
  price,
  sizes,
  title,
  isFavourite,
  isInCart,
  onFavouriteClick = () => {},
  onCartClick = () => {},
  selectedColor,
  setSelectedColor,
  selectedSize,
  setSelectedSize,
  filters,
  selectedFilters,
  setSelectedFilters
}: PaymentDetailsProps) {
  const { staticData, localization } = useLocalization();
  const [email, setEmail] = useState("");
  const sizeOptions = sizes.map((s) => ({ label: s[(`title_${staticData.backendPostfix}` || "title") as keyof Size], value: s[(`title_${staticData.backendPostfix}` || "title") as keyof Size] }));
  const colorOptions = colors.map((c) => ({
    label: toTitleCase(c[(`title_${staticData.backendPostfix}` || "title") as keyof Color]),
    value: c[(`title_${staticData.backendPostfix}` || "title") as keyof Color],
  }));

  const handleColorChange = (value: string) => {
    setSelectedColor(value);
  }

  const handleSizeChange = (value: string) => {
    setSelectedSize(value);
  }

  const handleFilterChange = (filter_id: string, value: string) => {
    setSelectedFilters({...selectedFilters, [filter_id]: value});
  }

  const { setIsOpen: setIsOpenF, setTitle: setTitleF } = useFavouriteContext();

  return (
    <div className={"flex flex-col gap-x-6 md:flex-row"}>
      <div className={"overflow-hidden md:grow-0 md:basis-[65%]"}>
        <Gallery
          images={images}
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
                {category},{" "}
                {
                  selectedColor || staticData.goods.paymentDetails.text1
                }
                , {selectedSize || staticData.goods.paymentDetails.text2}
              </p>
            </div>
            <Article className={"hidden lg:block"} article={article} />
          </div>
          <div className={"mb-9 flex items-center justify-between"}>
            <Price price={price} className={"text-[42px]"} />
            <Counter count={count} setCount={setCount}/>
          </div>
          <p className={"mb-6 text-sm font-extralight"}>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          </p>
          <div className={"mb-[65px] flex flex-col gap-y-6"}>
            {colors.length > 0 && (
              <SelectInput
                label={staticData.goods.paymentDetails.text1}
                display={staticData.goods.paymentDetails.text3}
                options={colorOptions}
                value={selectedColor || ""}
                onChange={handleColorChange}
                className={{
                  label: "text-sm font-extralight",
                }}
              />
            )}
            {sizes.length > 0 && (
              <SelectInput
                label={staticData.goods.paymentDetails.text2}
                display={staticData.goods.paymentDetails.text4}
                options={sizeOptions}
                value={selectedSize||""}
                onChange={handleSizeChange}
                className={{ label: "text-sm font-extralight" }}
              />
            )}
            {filters.map(filter => (
              filter.filter_field.length > 0 && (
                <SelectInput
                  key={filter.id}
                  label={filter[`name_${localization}` as keyof DynamicFilter] as string}
                  display={staticData.goods.paymentDetails.text5}
                  options={filter.filter_field.map(field => ({
                    label: toTitleCase(field[(`value_${staticData.backendPostfix}` || "value") as keyof DynamicFilterField] as string),
                    value: field[(`value_${staticData.backendPostfix}` || "value") as keyof DynamicFilterField] as string,
                  }))}
                  value={selectedFilters[filter.id.toString()]||""}
                  onChange={(v: string) => {
                    handleFilterChange(filter.id.toString(), v);
                  }}
                  className={{ label: "text-sm font-extralight" }}
                />
              )
            ))}
          </div>
          {isInStock && (
            <div className={"mb-8 flex gap-x-2"}>
              {!isInCart ? <Button
                onClick={() => {
                  onCartClick(id);
                }}
                colorVariant={"black"}
                fullWidth
              >
                {staticData.goods.paymentDetails.text6}
              </Button> : <Button
                colorVariant={"black"}
                fullWidth
              >
                {staticData.goods.paymentDetails.text7}
              </Button>}
              <IconButton
                className={{ button: "shrink-0" }}
                size={"large"}
                colorVariant={"outlined"}
                onClick={() => {
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
                placeholder={staticData.goods.paymentDetails.text8}
              />
              <Button size={"small"} colorVariant={"black"} fullWidth>
                {staticData.goods.paymentDetails.text9}
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
                {staticData.goods.paymentDetails.text10}
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
              {isInStock ? staticData.goods.paymentDetails.text11 : staticData.goods.paymentDetails.text12}
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
                  {staticData.goods.paymentDetails.text13}
                </span>
              </div>
              <div
                className={
                  "mx-auto flex max-w-[67px] flex-col items-center text-center"
                }
              >
                <Image src={GaranteeIcon} alt={"Icon"} className={"flex-1"} />
                <span className={"text-[11px] font-semibold"}>
                  {staticData.goods.paymentDetails.text14}
                </span>
              </div>
              <div
                className={
                  "mx-auto flex max-w-[67px] flex-col items-center text-center"
                }
              >
                <Image src={SupportIcon} alt={"Icon"} className={"flex-1"} />
                <span className={"text-[11px] font-semibold"}>
                  {staticData.goods.paymentDetails.text15}
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
