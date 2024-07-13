"use client"

import { Container, Section, Title } from "common/ui";
import CategoriesFilter from "components/Filters/CategoriesFilter";
import { BigGrid } from "components/Goods/BigGrid";
import SalesProductsList from "components/Goods/SalesProductsList";
import { useState, useEffect } from "react";
import { ProductForSaleService } from "./services"; 
import { ProductToShow } from "app/goods/[category]/page";
import { useLocalization } from "contexts/LocalizationContext";
import IMG1 from "components/Goods/static/sales/img1.jpg";
import IMG2 from "components/Goods/static/sales/img2.jpg";
import IMG3 from "components/Goods/static/sales/img3.jpg";
import IMG4 from "components/Goods/static/sales/img4.jpg";
import IMG5 from "components/Goods/static/sales/img5.jpg";
import IMG6 from "components/Goods/static/sales/img6.jpg";

import { Breadcrumbs } from "./Breadcrumbs";

const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6];

export default function SalesPage() {
  const [products, setProducts] = useState<ProductToShow[]>([]);
  const [category, setCategory] = useState("");
  const { localization } = useLocalization();

  useEffect(()=>{
    const productsService = new ProductForSaleService();
    productsService.getProductsForSale(category, localization).then(products => {
      setProducts(products);
    })
  }, [category]);

  return (
    <>
      <Breadcrumbs />
      <Section className={"my-12"}>
        <Container>
          <div>
            <Title className={"mb-[38px] text-3xl"}>Акції</Title>
            <div className={"border-b border-tep_gray-200 pb-6"}>
              
              <CategoriesFilter setCategory={setCategory}/>
            </div>
          </div>
        </Container>
      </Section>
      <SalesProductsList products={products} />
      <Section className={"mb-40 lg:mb-64"}>
        <Container>
          <div>
            <Title className={"mb-[38px] text-3xl"}>
              Більше акційних товарів
            </Title>
            <div className={"mb-6"}>
              <CategoriesFilter setCategory={setCategory}/>
            </div>
            <BigGrid images_array={images} />
          </div>
        </Container>
      </Section>
    </>
  );
}
