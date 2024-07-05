"use client";

import { products } from "data";
import Link from "next/link";

import { Container, Section, Title } from "common/ui";
import SearchFilters from "components/Filters/SearchFilters";
import ProductsList from "components/Goods/ProductsList";
import { RecommendedGoods } from "components/Goods/RecommendedGoods";
import { useSearchContext } from "contexts/SearchContext";

import { Breadcrumbs } from "./Breadcrumbs";

const tags = [
  {
    tag: "Постіль",
    count: 27,
  },
  {
    tag: "дитяча постіль",
    count: 8,
  },
  {
    tag: "подушки",
    count: 40,
  },
  {
    tag: "дитяча постіль",
    count: 8,
  },
  {
    tag: "подушки",
    count: 40,
  },
  {
    tag: "покривала",
    count: 8,
  },
];

export default function SearchPage() {
  const { searchQuery } = useSearchContext();

  return (
    <>
      <Breadcrumbs />
      <Section className={"mt-12"}>
        <Container>
          <div>
            {searchQuery ? (
              <Title className={"mb-10"}>
                Результати пошуку для “{searchQuery}”
              </Title>
            ) : (
              <div className={"mb-24 lg:mb-40"}>
                <Title className={"mb-16"}>
                  Ми не знайшли збігів для “{searchQuery}”
                </Title>
                <p className={"mb-5 text-2xl font-bold"}>Малось на увазі?</p>
                <div>
                  <span className={"font-bold underline underline-offset-1"}>
                    Ківі
                  </span>{" "}
                  <span className={"font-extralight text-tep_gray-500"}>
                    (2)
                  </span>
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>
      {searchQuery && (
        <>
          <SearchFilters className={"border-none"} count={4} />
          <ProductsList activePage={1} products={products} />
          <Section className={"mb-40 lg:mb-64"}>
            <Container>
              <div>
                <Title size={"2xl"} className={"mb-8"}>
                  З цим товаром також шукають
                </Title>
                <Link
                  href={"#"}
                  className={"flex flex-wrap items-center gap-x-8 gap-y-4"}
                >
                  {tags.map((tag, Idx) => (
                    <div key={Idx}>
                      <span
                        className={"font-bold underline underline-offset-1"}
                      >
                        {tag.tag}
                      </span>{" "}
                      <span className={"font-extralight text-tep_gray-500"}>
                        {tag.count}
                      </span>
                    </div>
                  ))}
                </Link>
              </div>
            </Container>
          </Section>
        </>
      )}
      {!searchQuery && <RecommendedGoods />}
    </>
  );
}
