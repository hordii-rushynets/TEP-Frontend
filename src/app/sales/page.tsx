import { Container, Section, Title } from "common/ui";
import CategoriesFilter from "components/Filters/CategoriesFilter";
import { BigGrid } from "components/Goods/BigGrid";
import SalesProductsList from "components/Goods/SalesProductsList";
import IMG1 from "components/Goods/static/sales/img1.jpg";
import IMG2 from "components/Goods/static/sales/img2.jpg";
import IMG3 from "components/Goods/static/sales/img3.jpg";
import IMG4 from "components/Goods/static/sales/img4.jpg";
import IMG5 from "components/Goods/static/sales/img5.jpg";
import IMG6 from "components/Goods/static/sales/img6.jpg";
import ProductIMG1 from "components/Goods/static/sales/sales1.jpg";
import ProductIMG2 from "components/Goods/static/sales/sales2.jpg";
import ProductIMG3 from "components/Goods/static/sales/sales3.jpg";
import ProductIMG4 from "components/Goods/static/sales/sales4.jpg";

import { Breadcrumbs } from "./Breadcrumbs";

const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6];
const productsImages = [ProductIMG1, ProductIMG2, ProductIMG3, ProductIMG4];

const products = [...Array(12)].map((_, Idx) => ({
  id: (Idx + 1).toString(),
  title: "Dream",
  category: ["pillows", "blankets", "covered", "linens", "toppers", "sheets"][
    Math.floor(Math.random() * 6)
  ],
  image: productsImages[Math.floor(Math.random() * 4)],
  price: 1199,
  isSale: true,
  salePrice: 1090,
}));

export default function SalesPage() {
  return (
    <>
      <Breadcrumbs />
      <Section className={"my-12"}>
        <Container>
          <div>
            <Title className={"mb-[38px] text-3xl"}>Акції</Title>
            <div className={"border-b border-tep_gray-200 pb-6"}>
              
              <CategoriesFilter />
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
              <CategoriesFilter />
            </div>
            <BigGrid images_array={images} />
          </div>
        </Container>
      </Section>
    </>
  );
}
