import { ProductDAOService } from "./dao-services";

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
}
