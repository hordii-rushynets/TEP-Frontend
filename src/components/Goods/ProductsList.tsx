import { Product } from "app/goods/pillows/page";
import { HTMLAttributes } from "react";
import { cn } from "utils/cn";

import { Container, Pagination, Section } from "common/ui";
import ProductCard from "components/Home/ProductCard";

type ProductsListProps = {
  products: Product[];
  pages: number;
  activePage: number;
} & Pick<HTMLAttributes<HTMLElement>, "className">;
export default function ProductsList({
  products,
  activePage,
  pages,
  className,
}: ProductsListProps) {
  return (
    <Section className={cn("mb-[100px] lg:mb-40", className)}>
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
        <Pagination
          className={"mt-12 md:mt-[72px]"}
          total={pages}
          activePage={activePage}
        />
      </Container>
    </Section>
  );
}
