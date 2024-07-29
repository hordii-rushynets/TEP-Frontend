import StaticData from "locals/dataInterface";
import { InteriorProductDAOService } from "./dao-services";
import { ProductToShow } from "../[category]/page";

export class InteriorProductService {
    private daoService: InteriorProductDAOService;

    constructor() {
        this.daoService = new InteriorProductDAOService(process.env.NEXT_PUBLIC_API_URL || "");
    }

    public async getInspirationProducts(staticData: StaticData): Promise<ProductToShow[]> {
      return await this.daoService.getInspirationProducts().then(response => {
        if (response.ok) {return response.json();}
      }).then(data => {
        let productsToShow = data.map((product:any) => {
          let productVariant = product.product_variants[0];

          return {
            id: product.id,
            slug: product.slug,
            title: product[`title_${staticData.backendPostfix}` || "title"],
            category_slug: product.category.slug,
            category_title: product.category[`title_${staticData.backendPostfix}` || "title"],
            image: productVariant.main_image || "",
            count: productVariant.count,
            price: productVariant.default_price,
            isSale: productVariant.promotion,
            salePrice: productVariant.promo_price,
            number_of_views: product.number_of_views,
            date: new Date(product.last_modified),
            isFavourite: product.is_favorite,
            isInCart: product.in_cart
          }
        });

        return productsToShow;
      });
    }
}
