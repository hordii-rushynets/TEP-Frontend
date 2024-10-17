"use client"

import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { MainUrl } from "route-urls";
import { cn } from "utils/cn";

import { ImageSquare } from "common/ImageSquare";
import { Button, Container, Section, Title } from "common/ui";
import { PopularGoods } from "components/Goods/PopularGoods";
import { Article } from "components/Goods/Product/Article";
import { Price } from "components/Goods/Product/Price";
import ProductDescriptions from "components/Goods/ProductDescriptions";
import { useCompareContext } from "contexts/CompareContext";
import { useLocalization } from "contexts/LocalizationContext";
import { Color, Material, ProductWithVariant, Size } from "../page";

export default function ComparePage() {
  const { products } = useCompareContext();
  const { localization, staticData} = useLocalization();

  return (
    <>
      {products.length > 0 ? <Section className={"mb-24 mt-6 md:mt-12 lg:mb-40"}>
        <Container>
          <div>
            <div className={"mb-[72px]"}>
              <Title className={"mb-3.5 text-3xl"}>{staticData.goods.comparePage.text1}</Title>
              <p className={"text-sm lg:font-extralight"}>
              {staticData.goods.comparePage.text2} {products.length} {staticData.goods.comparePage.text3}
              </p>
            </div>
            <div
              className={
                "mb-8 flex flex-col-reverse justify-between gap-6 md:mb-12 lg:flex-row lg:items-center"
              }
            >
              <Link href={MainUrl.getGoods()}>
                <Button
                  className={{ button: "px-8 py-2" }}
                  colorVariant={"filter"}
                  startIcon={<FiArrowLeft className={"size-6 "} />}
                >
                  {staticData.goods.comparePage.text4}
                </Button>
              </Link>
              <span className={"text-sm font-bold text-tep_gray-500"}>
                {products.length} {staticData.goods.comparePage.text5}
              </span>
            </div>

            <div className={"mb-24 flex gap-x-6 overflow-x-scroll"}>
              {products.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={
                      "min-w-[152px] md:min-w-[250px] lg:min-w-[288px]"
                    }
                  >
                    <ImageSquare source={item.product_variants[0].main_image} classes={{ wrapper: "mb-6" }} />
                    <Title size={"xl"}>{item[`title_${localization}` as keyof ProductWithVariant] as string}</Title>
                  </div>
                );
              })}
            </div>
            <div
              className={
                "mb-6 border-b border-tep_gray-200 pb-6 text-2xl font-bold"
              }
            >
              {staticData.goods.comparePage.text6}
            </div>
            <div className={"mb-24 flex gap-x-6 overflow-x-scroll"}>
              {products.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={
                      "min-w-[152px] md:min-w-[250px] lg:min-w-[288px]"
                    }
                  >
                    <div
                      className={cn("mb-5 flex items-center gap-x-3", {
                        "mb-4": !(item.product_variants[0].count > 0),
                      })}
                    >
                      <span
                        className={cn("size-2 rounded-full", {
                          "bg-tep_blue-500": (item.product_variants[0].count > 0),
                          "bg-[#703F4D]": !(item.product_variants[0].count > 0),
                        })}
                      ></span>
                      <span className={"text-sm font-extralight"}>
                        {(item.product_variants[0].count > 0) ? staticData.goods.comparePage.text7 : staticData.goods.comparePage.text8}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className={
                "mb-6 border-b border-tep_gray-200 pb-6 text-2xl font-bold"
              }
            >
              {staticData.goods.comparePage.text9}
            </div>
            <div className={"mb-24 flex gap-x-6 overflow-x-scroll"}>
              {products.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={
                      "min-w-[152px] md:min-w-[250px] lg:min-w-[288px]"
                    }
                  >
                    <p className={"text-sm lg:font-extralight"}>{item.product_variants[0].sizes.map(size => size[`title_${localization}` as keyof Size]).join(", ")}</p>
                  </div>
                );
              })}
            </div>
            <div
              className={
                "mb-6 border-b border-tep_gray-200 pb-6 text-2xl font-bold"
              }
            >
              {staticData.goods.comparePage.text10}
            </div>
            <div className={"mb-24 flex gap-x-6 overflow-x-scroll"}>
              {products.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={
                      "min-w-[152px] md:min-w-[250px] lg:min-w-[288px]"
                    }
                  >
                    <div
                      className={
                        "inline-flex flex-col items-center gap-y-4 text-center"
                      }
                    >
                      {item.product_variants[0].colors.map(color => (<><span
                        className={cn("size-14 rounded-full")}
                        style={{backgroundColor: color.hex}}
                      ></span>
                      <span className={"text-sm lg:font-extralight"}>
                        {color[`title_${localization}` as keyof Color]}
                      </span></>))}
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              className={
                "mb-6 border-b border-tep_gray-200 pb-6 text-2xl font-bold"
              }
            >
              {staticData.goods.comparePage.text11}
            </div>
            <div className={"mb-24 flex gap-x-6 overflow-x-scroll"}>
              {products.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={
                      "min-w-[152px] md:min-w-[250px] lg:min-w-[288px]"
                    }
                  >
                    <p className={"text-sm lg:font-extralight"}>
                      {item.product_variants[0].materials?.[0]?.[`title_${localization}` as keyof Material] || localization === "en" ? "Material not specified" : "Матеріал не вказаний"}
                    </p>
                  </div>
                );
              })}
            </div>
            {/* <div
              className={
                "mb-6 border-b border-tep_gray-200 pb-6 text-2xl font-bold"
              }
            >
              Деталі упаковки
            </div> */}
            <div className={"mb-24 flex gap-x-6 overflow-x-scroll"}>
              {products.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={"w-[152px] md:w-[250px] lg:w-[288px]"}
                  >
                    <p className={"text-sm lg:font-extralight"}>
                    {staticData.goods.comparePage.text12}
                    </p>
                    <Article
                      article={item.product_variants[0].sku}
                      className={"mb-6 inline-block bg-black"}
                    />
                  </div>
                );
              })}
            </div>
            <div
              className={
                "mb-6 border-b border-tep_gray-200 pb-6 text-2xl font-bold"
              }
            >
              {staticData.goods.comparePage.text13}
            </div>
            <div className={"flex gap-x-6 overflow-x-scroll"}>
              {products.map((item) => {
                return (
                  <div
                    key={item.id}
                    className={"w-[152px] md:w-[250px] lg:w-[288px]"}
                  >
                    <Price price={item.product_variants[0].promotion ? item.product_variants[0].promo_price : item.product_variants[0].default_price} />
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </Section> : <div className={"pb-32 pt-24 lg:pb-48"}>
                <Title className={"mb-3.5 text-center text-3xl"}>
                {staticData.goods.comparePage.text14}
                </Title>
                <div
                  className={
                    "flex flex-col gap-4 md:flex-row md:justify-center"
                  }
                >
                  <Link href={MainUrl.getGoods()}>
                    <Button size={"large"} fullWidth>
                    {staticData.goods.comparePage.text15}
                    </Button>
                  </Link>
                </div>
              </div> }
      <PopularGoods />
      <ProductDescriptions descriptions={staticData.goods.productDescriptions} />
    </>
  );
}
