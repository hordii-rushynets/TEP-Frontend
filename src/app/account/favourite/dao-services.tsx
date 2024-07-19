import { ProductWithVariant } from "app/goods/[category]/page";
import { fetchWithAuth } from "utils/helpers";

export class FavouriteDAOService {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }
  
    public async getFavourites(authContext: any, dontAuthAction: () => void): Promise<ProductWithVariant[] | undefined> {
      try {
        const response = await await fetchWithAuth(`${this.apiUrl}/api/store/products/favorite/`, {}, authContext)
        if (response.status === 401) {
          dontAuthAction();
          return [];
        }
        if (!response.ok) {
          throw new Error("Failed to fetch favourite products");
        }
        return response.json();
  
      } catch (error) {
        console.log(error);
      }
    }
      

    public async markFavourite(product_id: string, is_favourite: boolean, authContext: any, dontAuthAction: () => void): Promise<void> {
      try {
        const response = await fetchWithAuth(`${this.apiUrl}/api/store/products/favorite/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
              "id": product_id,
              "favorite": is_favourite
            })
          }, authContext);
        if (response.status === 401) {
          dontAuthAction();
        }
        if (!response.ok) {
          throw new Error("Failed to fetch favourite products");
        }
  
      } catch (error) {
        console.log(error);
      }
    }

    public async deleteAllFavourite(authContext: any, dontAuthAction: () => void): Promise<void> {
        try {
          const response = await fetchWithAuth(`${this.apiUrl}/api/store/products/favorite/remove/`, {
              method: "DELETE",
            }, authContext);
          if (response.status === 401) {
            dontAuthAction();
          }
          if (!response.ok) {
            throw new Error("Failed to fetch favourite products");
          }
    
        } catch (error) {
          console.log(error);
        }
      }
  }
  