import { ProductVariant, Color, Size, SearchParams } from "app/goods/[category]/page";
import { DynamicFilter } from "components/Filters/ProductsFilters";
import StaticData from "locals/dataInterface";

export function getUniqueColors(productVariants: ProductVariant[]): Color[] {
    return Array.from(
        productVariants.flatMap(variant => variant.colors)
          .reduce((map, color) => map.set(color.id, color), new Map())
          .values())
}

export function getUniqueSizes(productVariants: ProductVariant[]): Size[] {
    return Array.from(
        productVariants.flatMap(variant => variant.sizes)
          .reduce((map, size) => map.set(size.id, size), new Map())
          .values())
}

export function getUniqueFilters(allFiltersFromCategory: DynamicFilter[], productVariants: ProductVariant[]): DynamicFilter[] {
  const filterFieldIds = new Set<number>();

  productVariants.forEach(variant => {
    variant.filter_field.forEach(field => {
      filterFieldIds.add(field.id);
    });
  });

  const filteredFilters = allFiltersFromCategory.map(filter => {
    const filteredFields = filter.filter_field.filter(field =>
      filterFieldIds.has(field.id)
    );

    if (filteredFields.length > 0) {
      return {
        ...filter,
        filter_field: filteredFields
      };
    }

    return null;
  }).filter(Boolean) as DynamicFilter[];

  return filteredFilters;
}

export function findMatchingVariant(selectedColor: string, selectedSize: string, selectedFilters: {[key: string]: string}, productVariants: ProductVariant[], staticData: StaticData, searchParams: SearchParams): ProductVariant | undefined {
    return (selectedColor || selectedSize || selectedFilters) ? 
    productVariants.find((productVariant) => {
      const colorMatch = selectedColor ? 
        productVariant.colors.map(color => color[(`title_${staticData.backendPostfix}` || "title") as keyof Color]).includes(selectedColor) : 
        true;
      const sizeMatch = selectedSize ? 
        productVariant.sizes.map(size => size[(`title_${staticData.backendPostfix}` || "title") as keyof Size]).includes(selectedSize) : 
        true;
      const filterMatch = Object.entries(selectedFilters).every(([filter, value]) => 
        productVariant.filter_field.some(field => field.filter === Number(filter))
      );

      return colorMatch && sizeMatch && filterMatch;
    }) : 
    productVariants.find((productVariant) => productVariant.sku === searchParams.article);
}