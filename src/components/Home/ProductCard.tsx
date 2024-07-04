"use client";

import { ProductToShow } from "app/goods/[category]/page";
import Link from "next/link";
import { FiCheck, FiHeart } from "react-icons/fi";
import { MainUrl } from "route-urls";
import { cn } from "utils/cn";
import { translateCategory } from "utils/helpers";

import { ImageSquare } from "common/ImageSquare";
import { Checkbox, IconButton, Title } from "common/ui";
import { ShoppingBasket } from "common/ui/icons/ShoppingBasket";
import { Price } from "components/Goods/Product/Price";
import { useCartContext } from "contexts/CartContext";
import { useCompareContext } from "contexts/CompareContext";
import { useFavouriteContext } from "contexts/FavouriteContext";

type ProductCardProps = {
  product: ProductToShow;
  hasFavourite?: boolean;
  hasCompare?: boolean;
  hasCart?: boolean;
  onFavouriteClick?: (id: string) => void;
  onCompareClick?: (id: string) => void;
  onCartClick?: (id: string) => void;
};

export default function ProductCard({
  product,
  hasFavourite = true,
  hasCompare = true,
  hasCart = true,
  onFavouriteClick = () => {},
  onCartClick = () => {},
  onCompareClick = () => {},
}: ProductCardProps) {
  const {
    id,
    image,
    price,
    category,
    title,
    isSale = false,
    salePrice,
    isFavourite = false,
    isInCart = false,
    isInCompare = false,
  } = product;
  const { setIsOpen, setTitle } = useCartContext();
  const { setIsOpen: setIsOpenCompare } = useCompareContext();
  const { setIsOpen: setIsOpenF, setTitle: setTitleF } = useFavouriteContext();
  return (
    <div
      className={
        "group mx-auto flex w-full max-w-[288px] flex-col overflow-hidden rounded-3xl p-2 transition-shadow hover:shadow"
      }
    >
      <Link href={`${MainUrl.getGoods()}/${category}/${id}`}>
        <ImageSquare
          source={image}
          classes={{
            wrapper: "mb-6",
            image: "transition-transform duration-300 group-hover:scale-105",
          }}
        />
      </Link>
      <div className={"mb-4 flex flex-1 items-start justify-between"}>
        <div>
          <Link
            href={`${MainUrl.getGoods()}/${category}/${id}`}
            className={"mb-1.5 "}
          >
            <Title size={"xl"} className={"uppercase"} component={"h3"}>
              {title}
            </Title>
          </Link>
          <p className={"font-light text-[#A5A5A5]"}>
            {translateCategory(category)}
          </p>
        </div>
        <div className={"flex gap-x-6 pl-3"}>
          {hasCompare && (
            <div className={"py-3"}>
              <Checkbox
                checked={isInCompare}
                onChange={() => {
                  onCompareClick(id);
                  setIsOpenCompare(true);
                }}
              />
            </div>
          )}
          {hasFavourite && (
            <IconButton
              colorVariant={"empty"}
              size={"large"}
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
          )}
        </div>
      </div>
      <div className={"flex items-end justify-between"}>
        <Price isSale={isSale} salePrice={salePrice} price={price} />
        {hasCart && (
          <IconButton
            size={"large"}
            onClick={() => {
              setTitle(title);
              setIsOpen(true);
              onCartClick(id);
            }}
          >
            {!isInCart ? (
              <ShoppingBasket className={"size-6"} />
            ) : (
              <FiCheck className={"size-6"} />
            )}
          </IconButton>
        )}
      </div>
    </div>
  );
}
