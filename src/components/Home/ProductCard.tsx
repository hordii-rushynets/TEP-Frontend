"use client";

import { ProductToShow } from "app/goods/[category]/page";
import Link from "next/link";
import { FiCheck, FiHeart } from "react-icons/fi";
import { MainUrl } from "route-urls";
import { cn } from "utils/cn";

import { ImageSquare } from "common/ImageSquare";
import { Checkbox, IconButton, Title } from "common/ui";
import { ShoppingBasket } from "common/ui/icons/ShoppingBasket";
import { Price } from "components/Goods/Product/Price";
import { useCartContext } from "contexts/CartContext";
import { useCompareContext } from "contexts/CompareContext";
import { useFavouriteContext } from "contexts/FavouriteContext";
import { FavouriteService } from "app/account/favourite/services";
import { useAuth } from "contexts/AuthContext";
import { useRouter } from 'next/navigation';
import { useNotificationContext } from "contexts/NotificationContext";
import { useLocalization } from "contexts/LocalizationContext";
import { useState } from "react";
import { ProductWithVariant } from "app/goods/[category]/page";
import { CartService } from "app/account/cart/services";

type ProductCardProps = {
  product: ProductToShow;
  hasFavourite?: boolean;
  hasCompare?: boolean;
  hasCart?: boolean;
  productWithVariant: ProductWithVariant;
  onFavouriteClick?: (id: string) => void;
  onCompareClick?: (id: string) => void;
  onCartClick?: (id: string) => void;
  refreshFav?: boolean;
  setRefreshFav?: (v: boolean) => void;
};

export default function ProductCard({
  product,
  hasFavourite = true,
  hasCompare = true,
  hasCart = true,
  productWithVariant,
  onCartClick = () => {},
  onCompareClick = () => {},
  refreshFav = false,
  setRefreshFav = () => {},
}: ProductCardProps) {
  const {
    id,
    slug,
    image,
    price,
    category_slug,
    category_title,
    title,
    isSale = false,
    salePrice,
    isFavourite = false,
    isInCart = false,
  } = product;
  const { setIsOpen: setIsOpenC, setTitle } = useCartContext();
  const { setIsOpen: setIsOpenCompare, isInCompare : IsInCompare, removeProduct, addProduct } = useCompareContext();
  const { setIsOpen: setIsOpenF, setTitle: setTitleF } = useFavouriteContext();
  const router = useRouter();
  const { setIsOpen, setText } = useNotificationContext();
  const [IsFavourite, setIsFavourite] = useState(isFavourite);
  const [IsInCart, setIsInCart] = useState(isInCart);
  const [isInCompare, setIsInCompare] = useState(IsInCompare(id));
  const favouriteService = new FavouriteService();
  const authContext = useAuth();
  const { staticData } = useLocalization();
  const cartService = new CartService();

  return (
    <div
      className={
        "group mx-auto flex w-full max-w-[288px] flex-col overflow-hidden rounded-3xl p-2 transition-shadow hover:shadow"
      }
    >
      <Link href={`${MainUrl.getGoods()}/${category_slug}/${slug}`}>
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
            href={`${MainUrl.getGoods()}/${category_slug}/${slug}`}
            className={"mb-1.5 "}
          >
            <Title size={"xl"} className={"uppercase"} component={"h3"}>
              {title}
            </Title>
          </Link>
          <p className={"font-light text-[#A5A5A5]"}>
            {category_title}
          </p>
        </div>
        <div className={"flex gap-x-6 pl-3"}>
          {hasCompare && (
            <div className={"py-3"}>
              <Checkbox
                checked={isInCompare}
                onChange={() => {
                  !isInCompare && addProduct(id);
                  isInCompare && removeProduct(id);
                  setIsInCompare(!isInCompare);
                  !isInCompare && setIsOpenCompare(true);
                }}
              />
            </div>
          )}
          {hasFavourite && (
            <IconButton
              colorVariant={"empty"}
              size={"large"}
              onClick={() => {
                favouriteService.markFavourite(id, !IsFavourite, authContext, ()=>{
                  setText(staticData.auth.notifications.unautorized);
                  setIsOpen(true);
                  router.push('/sign-in');
                }).then((success)=>{
                  if (success) {
                    !isFavourite && setTitleF(title);
                    !isFavourite && setIsOpenF(true);
                    setIsFavourite(!IsFavourite);
                    setRefreshFav(!refreshFav);
                  }
                });
              }}
            >
              <FiHeart
                className={cn("size-6", {
                  "fill-[#EFD0C8] text-[#EFD0C8] transition-colors hover:fill-[#e19c8a] hover:text-[#e19c8a]":
                    IsFavourite,
                })}
              />
            </IconButton>
          )}
        </div>
      </div>
      <div className={"flex items-end justify-between"}>
        <Price isSale={isSale} salePrice={salePrice} price={price} />
        {hasCart && !IsInCart && (
          <IconButton
            size={"large"}
            onClick={() => {
              cartService.putItemInCart({
                color_id: productWithVariant.product_variants[0].colors[0].id,
                size_id: productWithVariant.product_variants[0].sizes[0].id,
                filter_field_ids: [],
                product_variants_id: productWithVariant.product_variants[0].id,
                quantity: 1,
              }, authContext).then(response => {
                if (response.status === 401) {
                  setText(staticData.auth.notifications.unautorized);
                  setIsOpen(true);
                  router.push('/sign-in');
                }
                if (response.ok) {
                  setTitle(title);
                  setIsOpenC(true);
                  setIsInCart(true);
                }});
            }}
          >
              <ShoppingBasket className={"size-6"} />
          </IconButton>
        )}
        {IsInCart && (
          <IconButton
            size={"large"}
            onClick={() => {
            }}
          >
              <FiCheck className={"size-6"} />
          </IconButton>
        )}
      </div>
    </div>
  );
}
