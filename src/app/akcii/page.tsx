"use client"

import { Container, Section, Title } from "common/ui";
import CategoriesFilter from "components/Filters/CategoriesFilter";
import { BigGrid } from "components/Goods/BigGrid";
import SalesProductsList from "components/Goods/SalesProductsList";
import { useState, useEffect } from "react";
import { ProductForSaleService } from "./services"; 
import { ProductToShow, ProductWithVariant } from "app/goods/[category]/page";
import { useLocalization } from "contexts/LocalizationContext";
import IMG1 from "components/Goods/static/sales/img1.jpg";
import IMG2 from "components/Goods/static/sales/img2.jpg";
import IMG3 from "components/Goods/static/sales/img3.jpg";
import IMG4 from "components/Goods/static/sales/img4.jpg";
import IMG5 from "components/Goods/static/sales/img5.jpg";
import IMG6 from "components/Goods/static/sales/img6.jpg";

import { Breadcrumbs } from "./Breadcrumbs";
import { useAuth } from "contexts/AuthContext";

const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6];

export default function SalesPage() {
  const [products, setProducts] = useState<ProductToShow[]>([]);
  const [productsWithVariants, setProductsWithVariants] = useState<ProductWithVariant[]>([]);
  const [category, setCategory] = useState("");
  const { localization, staticData } = useLocalization();
  const authContext = useAuth();

  useEffect(()=>{
    const productsService = new ProductForSaleService();
    productsService.getProductsForSale(category, localization, authContext).then(products => {
      setProducts(products.productsToShow);
      setProductsWithVariants(products.productsWithVariant);
    })
  }, [category]);

  return (
    <>
      <Breadcrumbs />
      <Section className={"my-12"}>
        <Container>
          <div>
            <Title className={"mb-[38px] text-3xl"}>{staticData.sales.text1}</Title>
            <div className={"border-b border-tep_gray-200 pb-6"}>
              
              <CategoriesFilter setCategory={setCategory}/>
            </div>
          </div>
        </Container>
      </Section>
      <SalesProductsList products={products} productsWithVariants={productsWithVariants}/>
      <Section className={"mb-40 lg:mb-64"}>
        <Container>
          <div>
            <Title className={"mb-[38px] text-3xl"}>
            {staticData.sales.text2}
            </Title>
            <div className={"mb-6"}>
              <CategoriesFilter setCategory={setCategory}/>
            </div>
            <BigGrid images_array={productsWithVariants.flatMap(product => product.product_variants.flatMap(variant => variant.variant_images.map(image => image.image)))} />
          </div>
        </Container>
      </Section>
    </>
  );
}
