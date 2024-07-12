import { ProductVariant, Color, Size, SearchParams } from "app/goods/[category]/page";
import StaticData from "locals/dataInterface";

export function getUniqueColors(productVariants: ProductVariant[]): Color[] {
    return Array.from(
        productVariants.flatMap(variant => variant.colors)
          .reduce((map, color) => map.set(color.id, color), new Map())
          .values())
}

export function getUniqueSizes(productVariants: ProductVariant[], staticData: StaticData, selectedColor: string): Size[] {
    return Array.from(
        productVariants.filter((productVariant) => {
            return productVariant.colors.map(
                color=>color[(`title_${staticData.backendPostfix}` || "title") as keyof Color])
                .includes(selectedColor)})
                .flatMap(item => item.sizes)
          .reduce((map, size) => map.set(size.id, size), new Map())
          .values()
      );
}

export function findMatchingVariant(selectedColor: string, selectedSize: string, productVariants: ProductVariant[], staticData: StaticData, searchParams: SearchParams): ProductVariant | undefined {
    return (selectedColor || selectedSize) ? 
        productVariants.find((productVariant) => {
            return (selectedColor ? productVariant.colors.map(color=>color[(`title_${staticData.backendPostfix}` || "title") as keyof Color]).includes(selectedColor) : true) 
            && (selectedSize ? productVariant.sizes.map(size=>size[(`title_${staticData.backendPostfix}` || "title") as keyof Size]).includes(selectedSize) : true)}) 
            : productVariants.find((productVariant) => {return productVariant.sku === searchParams.article});
}