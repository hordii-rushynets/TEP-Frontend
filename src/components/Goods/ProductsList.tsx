import { ProductToShow, ProductWithVariant } from "app/goods/[category]/page";
import { HTMLAttributes } from "react";
import { cn } from "utils/cn";

import { Container, Pagination, Section } from "common/ui";
import ProductCard from "components/Home/ProductCard";

type ProductsListProps = {
  products: ProductToShow[];
  productsWithVariants: ProductWithVariant[];
  activePage: number;
  totalPages: number;
  showCompare?: boolean;
} & Pick<HTMLAttributes<HTMLElement>, "className">;
export default function ProductsList({
  products,
  productsWithVariants,
  activePage,
  className,
  totalPages,
  showCompare = true,
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
            return <ProductCard 
              key={product.id} 
              product={product} 
              productWithVariant={productsWithVariants.find(productWithVariant => productWithVariant.id.toString() == product.id) || {} as ProductWithVariant}
              hasCart={product.count && product.count > 0 ? true : false}
              hasCompare={showCompare}
            />;
          })}
        </div>
        <Pagination
          className={"mt-12 md:mt-[72px]"}
          total={totalPages}
          activePage={activePage}
        />
      </Container>
    </Section>
  );
}
