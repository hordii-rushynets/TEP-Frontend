import { ProductWithVariant } from "app/goods/[category]/page";
import { fetchWithAuth } from "utils/helpers";

export class ProductForSaleDAOService {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }
  
    public async getProductsForSale(category: string, authContext: any): Promise<ProductWithVariant[]> {
      try {
        const response = await fetchWithAuth(`${this.apiUrl}/api/store/products/?is_promotion=true&category_slug=${category}`, {}, authContext).then(response => {
          if (response.status === 401) {
            return fetch(`${this.apiUrl}/api/store/products/?is_promotion=true&category_slug=${category}`)
          }
          return response
        });
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
  