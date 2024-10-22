import StaticData from "locals/dataInterface";
import { SearchDAOService } from "./dao-services";
import { Color, Material, ProductToShow, ProductWithVariant, Size } from "app/goods/[category]/page";

export class SearchService {
    private daoService: SearchDAOService;

    constructor() {
        this.daoService = new SearchDAOService(process.env.NEXT_PUBLIC_API_URL || "");
    }

    public async getSearchProducts(filterParams: {[key: string]: string}, staticData: StaticData, authContext: any): Promise<
    {
      productsWithVariant: ProductWithVariant[], 
      productsToShow: ProductToShow[],
      totalPages: number,
      count: number
    }
    > {
        return await this.daoService.getSearchProducts(filterParams, authContext).then(response => {
          if (response.ok) {return response.json();}
        }).then(data => {
          let productsToShow = data.results.map((product:any) => {
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
              isInCart: product.in_cart
            }
          });
  
          return {productsWithVariant: data.results, productsToShow: productsToShow, count: data.count, totalPages: data.total_pages};
        });
      }

      public async getTags(category: string, staticData: StaticData): Promise<{tag: string, count: number}[]> {
        return await this.daoService.getTags(category).then(response => {
          if (response.ok) {return response.json();}
        }).then(data => {
          let tags = data.map((product:any) => {
            return {
              tag: product[`title_${staticData.backendPostfix}`],
              count: product.number_of_views
            }
          });
  
          return tags;
        });
      }

      public async getSearchFilterFields(): Promise<{color: Color[], size: Size[], material: Material[]}> {
        return await this.daoService.getSearchFilterFields().then(response => {
            if (response.ok) {return response.json();}
          }).then(fields => fields);
      }
}
