import { ProductToShow } from "app/goods/[category]/page";

import { Container, Section } from "common/ui";
import ProductCard from "components/Home/ProductCard";

type SalesProductsListProps = {
  products: ProductToShow[];
};
export default function SalesProductsList({
  products,
}: SalesProductsListProps) {
  return (
    <Section className={"mb-[100px] lg:mb-40"}>
      <Container>
        <div
          className={
            "grid grid-cols-1 gap-x-6 gap-y-11 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-y-[72px]"
          }
        >
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </Container>
    </Section>
  );
}
