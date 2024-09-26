"use client";

import Link from "next/link";

import { Container, Section, Title } from "common/ui";
import SearchFilters from "components/Filters/SearchFilters";
import ProductsList from "components/Goods/ProductsList";
import { RecommendedGoods } from "components/Goods/RecommendedGoods";
import { useSearchContext } from "contexts/SearchContext";

import { Breadcrumbs } from "./Breadcrumbs";
import { useEffect, useState } from "react";
import { ProductToShow, ProductWithVariant } from "app/goods/[category]/page";
import { SearchService } from "./services";
import { useLocalization } from "contexts/LocalizationContext";
import { sortings } from "app/goods/[category]/defaultValues";
import { useAuth } from "contexts/AuthContext";
import { ConversionsService } from "services/conversionsServices";

export default function SearchPage() {
  const { searchQuery } = useSearchContext();
  const [products, setProducts] = useState<ProductToShow[]>([]);
  const [productsWithVariants, setProductsWithVariants] = useState<ProductWithVariant[]>([]);
  const [tags, setTags] = useState<{tag: string, count: number}[]>([]);
  const searchService = new SearchService();
  const conversionsService = new ConversionsService();
  const authContext = useAuth();
  const { staticData, localization } = useLocalization();
  const [filters, setFilters] = useState<{[key: string]: string}>({
    "title_uk": "",
    "title_en": "",
    "title_ru": "",
    "size": "",
    "color": "",
    "material": ""
  });
  const [sort, setSort] = useState<string>("suitable");

  const handleFilterChange = (key: string, value: string) => {
    setFilters({
      ...filters,
      [key]: value,
    });
  }

  useEffect(() => {
    handleFilterChange(`title_${localization}`, searchQuery);
    conversionsService.sendConversion("Search");
  }, [searchQuery]);

  useEffect(() => {
    searchService.getSearchProducts(filters, staticData, authContext).then(products => {
      setProducts(products.productsToShow);
      setProductsWithVariants(products.productsWithVariant);
    })
  }, [filters, localization]);

  useEffect(() => {
    products.length !== 0 ? searchService.getTags(products[0].category_slug, staticData).then(tags => setTags(tags))
     : searchService.getTags("", staticData).then(tags => setTags(tags));
  }, [products]);

  useEffect(() => {
    const newProducts = [...products].sort(sortings[sort])
    setProducts(newProducts);
  }, [sort])

  return (
    <>
      <Breadcrumbs />
      <Section className={"mt-12"}>
        <Container>
          <div>
            {products.length !== 0 && searchQuery ? (
              <Title className={"mb-10"}>
                {staticData.search.searchPage.found} “{searchQuery}”
              </Title>
            ) : (
              <div className={"mb-24 lg:mb-40"}>
                <Title className={"mb-16"}>
                {staticData.search.searchPage.notfound} “{searchQuery}”
                </Title>
                <p className={"mb-5 text-2xl font-bold"}>{staticData.search.searchPage.question}</p>
                {tags.map((tag, indx) => 
                  <div key={indx}>
                    <span className={"font-bold underline underline-offset-1"}>
                      {tag.tag}
                    </span>{" "}
                    <span className={"font-extralight text-tep_gray-500"}>
                      ({tag.count})
                    </span>
                  </div>
                )}
              </div>
            )}
          </div>
        </Container>
      </Section>
      {searchQuery && products.length !== 0 && (
        <>
          <SearchFilters sort={sort} setSort={setSort} className={"border-none"} count={products.length} onFilterChange={handleFilterChange}/>
          <ProductsList activePage={1} products={products} productsWithVariants={productsWithVariants}/>
          <Section className={"mb-40 lg:mb-64"}>
            <Container>
              <div>
                <Title size={"2xl"} className={"mb-8"}>
                {staticData.search.searchPage.title}
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
