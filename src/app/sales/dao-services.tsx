import { ProductWithVariant } from "app/goods/[category]/page";

export class ProductForSaleDAOService {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }
  
    public async getProductsForSale(category: string): Promise<ProductWithVariant[]> {
      try {
        const response = await fetch(`${this.apiUrl}/api/store/products/?is_promotion=true&category_slug=${category}`);
        if (!response.ok) {
          throw new Error(`Error fetching articles: ${response.statusText}`);
        }
        const products: ProductWithVariant[] = await response.json();
        return products;
      } catch (error) {
        console.error('Failed to fetch articles:', error);
        throw error;
      }
    }
  }
  