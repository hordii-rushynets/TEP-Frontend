import StaticData from "locals/dataInterface";
import { ProductDAOService } from "./dao-services";
import { ProductToShow } from "./page";

function filterExpiredProducts(viewedProducts: {id: string, expiry: number}[]):{id: string, expiry: number}[]{
    const now = new Date().getTime();

    return viewedProducts.filter((product: { id: string, expiry: number }) => {
        return product.expiry > now;
      });
}

export class ProductService {
    private daoService: ProductDAOService;

    constructor() {
        this.daoService = new ProductDAOService(process.env.NEXT_PUBLIC_API_URL || "");
    }

    public async viewProduct(productId: string): Promise<void> {
        let viewedProducts = JSON.parse(localStorage.getItem('viewedProductsTEP') || '[]');
        viewedProducts = filterExpiredProducts(viewedProducts);
        const now = new Date();
        const expiry = now.getTime() + 7 * 24 * 60 * 60 * 1000;

        if (!viewedProducts.some((product: { id: string, expiry: number }) => product.id === productId)) {
          const response = await this.daoService.viewProduct(productId);
          if (response.ok) {
            viewedProducts.push({ id: productId, expiry: expiry });
            localStorage.setItem('viewedProducts', JSON.stringify(viewedProducts));
          }
        }
    }

    public async getPopularProducts(staticData: StaticData): Promise<ProductToShow[]> {
      return await this.daoService.getPopularProducts().then(response => {
        if (response.ok) {return response.json();}
      }).then(data => {
        let productsToShow = data.map((product:any) => {
          let productVariant = product.product_variants[0];

          return {
            id: product.slug,
            title: product[`title_${staticData.backendPostfix}` || "title"],
            category_slug: product.category.slug,
            category_title: product.category[`title_${staticData.backendPostfix}` || "title"],
            image: productVariant.main_image || "",
            price: productVariant.default_price,
            isSale: productVariant.promotion,
            salePrice: productVariant.promo_price,
            number_of_views: product.number_of_views,
            date: new Date(product.last_modified)
          }
        });

        return productsToShow;
      });
    }
}