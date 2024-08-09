"use client"

import { ProductToShow, ProductWithVariant } from "app/goods/[category]/page";
import Link from "next/link";
import { MainUrl } from "route-urls";

import { Button, ButtonBase, Container, Section, Title } from "common/ui";
import { Price } from "components/Goods/Product/Price";
import ProductCard from "components/Home/ProductCard";

import { useEffect, useState } from "react";
import { FavouriteService } from "app/account/favourite/services";
import { useLocalization } from "contexts/LocalizationContext";
import { useAuth } from "contexts/AuthContext";

export function Favourite() {
  const [favourite_goods, setFavouriteGoods] = useState<ProductToShow[]>([]);
  const [goodsWithVariants, setGoodsWithVariants] = useState<ProductWithVariant[]>([]);
  const favouriteService = new FavouriteService();
  const { staticData } = useLocalization();
  const authContext = useAuth();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    favouriteService.getFavourites(authContext, staticData, () => {}).then(products => {
      setFavouriteGoods(products.productsToShow);
      setGoodsWithVariants(products.productsWithVariant);
    });
  }, [refresh]);

  if (!favourite_goods.length) {
    return (
      <Section>
        <Container>
          <div className={"mb-40 mt-8 md:mb-64 md:mt-12"}>
            <Title className={"mb-24 text-3xl md:mb-40"}>{staticData.account.favourite.text1}</Title>
            <div
              className={
                "mx-auto flex max-w-[500px] flex-col items-center text-center"
              }
            >
              <Title className={"mb-3.5 text-3xl"}>{staticData.account.favourite.text2}</Title>
              <p
                className={
                  "mb-[72px] text-sm leading-normal md:mb-12 lg:font-extralight"
                }
              >
                {staticData.account.favourite.text3}
              </p>
              <Link href={MainUrl.getHome()}>
                <Button colorVariant={"black"} size={"super-large"} fullWidth>
                {staticData.account.favourite.text4}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <div className={"mb-40 pt-8 md:pt-12 lg:mb-64"}>
          <Title className={"mb-12 text-3xl"}>{staticData.account.favourite.text1}</Title>
          <div
            className={
              "mb-24 grid grid-cols-1 gap-x-6 gap-y-11 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-[72px]"
            }
          >
            {favourite_goods.map((favourite) => {
              return <ProductCard key={favourite.id} product={favourite} refreshFav={refresh} setRefreshFav={setRefresh} productWithVariant={goodsWithVariants.find(good => favourite.slug === good.slug) as ProductWithVariant} />;
            })}
          </div>
          <ButtonBase
            className={{
              button:
                "mb-6 text-sm font-semibold underline underline-offset-2 transition-colors hover:text-tep_blue-500",
            }}
            onClick={()=> {
              favouriteService.deleteAllFavourite(authContext, ()=>{}).then(() => {setRefresh(!refresh)})
            }}
          >
            {staticData.account.favourite.text5}
          </ButtonBase>
          <div className={"mb-12 h-[1px] bg-tep_gray-200"}></div>
          <div className={"flex justify-between"}>
            <Title component={"h6"} size={"base"}>
            {staticData.account.favourite.text6}
            </Title>
            <Price
              price={favourite_goods.reduce((acc, p) => acc + p.price, 0)}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
