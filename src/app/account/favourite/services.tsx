import { Category } from "contexts/CategoriesContext";
import { FavouriteDAOService } from "./dao-services";
import { ProductToShow, ProductWithVariant } from "app/goods/[category]/page";
import StaticData from "locals/dataInterface";

export class FavouriteService {
    private daoService: FavouriteDAOService;

    constructor() {
        this.daoService = new FavouriteDAOService(process.env.NEXT_PUBLIC_API_URL || "");
    }

    public async getFavourites(authContext: any, staticData: StaticData, dontAuthAction: () => void): Promise<{productsWithVariant: ProductWithVariant[], productsToShow: ProductToShow[]}> {
      const productsWithVariants = await this.daoService.getFavourites(authContext, dontAuthAction);
      const productsToShow = productsWithVariants ? productsWithVariants.map((product:any) => {
        let productVariant = product.product_variants[0];

        return {
          id: product.id,
          slug: product.slug,
          title: product[`title_${staticData.backendPostfix}` || "title"],
          category_slug: product.category.slug,
          category_title: product.category[`title_${staticData.backendPostfix}` || "title"],
          image: productVariant.main_image || "",
          price: productVariant.default_price,
          isSale: productVariant.promotion,
          salePrice: productVariant.promo_price,
          number_of_views: product.number_of_views,
          date: new Date(product.last_modified),
          isFavourite: product.is_favorite,
          isInCart: product.in_cart,
        }
      }) : [];
      return {productsWithVariant: productsWithVariants || [], productsToShow : productsToShow}; 
    }

    public async markFavourite(product_id: string, is_favourite: boolean, authContext: any, dontAuthAction: () => void): Promise<boolean> {
      const success = await this.daoService.markFavourite(product_id, is_favourite, authContext, dontAuthAction);
      return success || false;
    }

    public async deleteAllFavourite(authContext: any, dontAuthAction: () => void): Promise<void> {
      await this.daoService.deleteAllFavourite(authContext, dontAuthAction);
    }
}
