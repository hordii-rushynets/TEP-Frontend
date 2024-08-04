import { ProductToShow, ProductWithVariant, ProductVariant } from "app/goods/[category]/page";
import { Category } from "contexts/CategoriesContext"; 
import { ProductForSaleDAOService } from "./dao-services";
import { count } from "console";


export class ProductForSaleService {
    private daoService: ProductForSaleDAOService;

    constructor() {
        this.daoService = new ProductForSaleDAOService(process.env.NEXT_PUBLIC_API_URL || "");
    }

    public async getProductsForSale(category: string, localization: string, authContext: any): Promise<{productsWithVariant: ProductWithVariant[], productsToShow: ProductToShow[]}> {
        return await this.daoService.getProductsForSale(category, authContext).then(data => {
            let productsToShow = data.map((product) => {
                const variantOnPromotion : ProductVariant | undefined = product.product_variants.find((variant) => variant.promotion);
                return {
                    id: product.id.toString(),
                    slug: product.slug,
                    title: product[(`title_${localization}` || "title") as keyof ProductWithVariant].toString(),
                    category_slug: product.category.slug,
                    category_title: product.category[(`title_${localization}` || "title") as keyof Category].toString(),
                    image: variantOnPromotion?.main_image || "",
                    price: variantOnPromotion?.default_price || 0,
                    isSale: variantOnPromotion?.promotion || false,
                    salePrice: variantOnPromotion?.promo_price || 0,
                    count: variantOnPromotion?.count,
                    number_of_views: product.number_of_views,
                    date: new Date(product.last_modified),
                    isFavourite: product.is_favorite,
                    isInCart: product.in_cart
                }
            })
            return {productsWithVariant: data, productsToShow: productsToShow};
        })
    }
}
