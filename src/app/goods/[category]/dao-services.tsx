import { fetchWithAuth } from "utils/helpers";

export class ProductDAOService {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }
  
    public async viewProduct(productId: string): Promise<Response> {
      const response = await fetch(`${this.apiUrl}/api/store/products/increase_number_of_view/`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "id": productId
        })
      });
      return response;
    }

    public async getPopularProducts(authContext: any): Promise<Response> {
      const response = await fetchWithAuth(`${this.apiUrl}/api/store/products/?ordering=-number_of_add_to_cart,-number_of_views`, {}, authContext)
      .then(response => {
        if (response.status === 401) {
          return fetch(`${this.apiUrl}/api/store/products/?ordering=-number_of_add_to_cart,-number_of_views`);
        }
        return response;
      });
      return response;
    }

    public async getRecommendedGoods(authContext: any, product_slug = ""): Promise<Response> {
      const url = `${this.apiUrl}/api/store/recommendation/${product_slug}${product_slug ? "/" : ""}`
      const response = await fetchWithAuth(url, {}, authContext).then(response => {
        if (response.status === 401) {
          return fetch(url)
        }
        return response
      });
      return response;
    }

    public async getInspiration(): Promise<Response> {
      const response = await fetch(`${this.apiUrl}/api/store/inspiration-image/`);
      return response;
    }
  }
  