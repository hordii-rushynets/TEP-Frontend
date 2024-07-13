import { ProductToShow, ProductWithVariant } from "app/goods/[category]/page";
import { Category } from "contexts/CategoriesContext"; 
import { ProductForSaleDAOService } from "./dao-services";
import { useLocalization } from "contexts/LocalizationContext";


export class ProductForSaleService {
    private daoService: ProductForSaleDAOService;

    constructor() {
        this.daoService = new ProductForSaleDAOService(process.env.NEXT_PUBLIC_API_URL || "");
    }

    public async getProductsForSale(category: string, localization: string): Promise<ProductToShow[]> {
        return (await this.daoService.getProductsForSale(category)).map((product) => ({
            id: product.slug,
            title: product[(`title_${localization}` || "title") as keyof ProductWithVariant].toString(),
            category_slug: product.category.slug,
            category_title: product.category[(`title_${localization}` || "title") as keyof Category].toString(),
            image: product.product_variants.find((variant) => variant.promotion)?.main_image || "",
            price: product.product_variants.find((variant) => variant.promotion)?.default_price || 0,
            isSale: product.product_variants.find((variant) => variant.promotion)?.promotion || false,
            salePrice: product.product_variants.find((variant) => variant.promotion)?.promo_price || 0,
            number_of_views: product.number_of_views,
            date: new Date(product.last_modified)
        }))
    }
}
