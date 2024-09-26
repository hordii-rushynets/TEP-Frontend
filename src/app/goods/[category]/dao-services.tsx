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

    public async getPopularProducts(ip: string, authContext: any): Promise<Response> {
      const response = await fetchWithAuth(`${this.apiUrl}/api/store/products/?ordering=-number_of_add_to_cart,-number_of_views`, {
        headers: {
          "Real-Ip": ip
        }
      }, authContext)
      .then(response => {
        if (response.status === 401) {
          return fetch(`${this.apiUrl}/api/store/products/?ordering=-number_of_add_to_cart,-number_of_views`, {
            headers: {
              "Real-Ip": ip
            }
          });
        }
        return response;
      });
      return response;
    }

    public async getRecommendedGoods(ip: string, authContext: any, product_slug = ""): Promise<Response> {
      const url = `${this.apiUrl}/api/store/recommendation/${product_slug}${product_slug ? "/" : ""}`
      const response = await fetchWithAuth(url, {
        headers: {
          "Real-Ip": ip
        }
      }, authContext).then(response => {
        if (response.status === 401) {
          return fetch(url, {
            headers: {
              "Real-Ip": ip
            }
          })
        }
        return response
      });
      return response;
    }

    public async getInspiration(): Promise<Response> {
      const response = await fetch(`${this.apiUrl}/api/store/inspiration-image/`);
      return response;
    }

    public async getFilterFields(category_slug: string): Promise<Response> {
      const response = await fetch(`${this.apiUrl}/api/store/categories-fields/${category_slug}/`);
      return response;
    }

    public async getNewProducts(category: string, authContext: any): Promise<Response> {
      const response = await fetchWithAuth(`${this.apiUrl}/api/store/products/?ordering=-last_modified&category_slug=${category}`, {}, authContext)
      return response;
    }
  }
  