import { Cart, CartItem } from "./interfaces";
import { fetchWithAuth } from "utils/helpers";

export class CartDAOService {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }
  
    public async getCart(authContext: any): Promise<CartItem[]> {
      try {
        const response = await fetchWithAuth(`${this.apiUrl}/api/cart/item/`, {}, authContext);
        const cartItems = response.json();
        return cartItems;
      } catch (error) {
        console.error('Failed to fetch articles:', error);
        throw error;
      }
    }

    public async putItemInCart(item: any, authContext: any): Promise<Response> {
      try {
        const response = await fetchWithAuth(`${this.apiUrl}/api/cart/item/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(item)
        }, authContext);
        return response;
      } catch (error) {
        console.error('Failed to fetch articles:', error);
        throw error;
      }
    }

    public async deleteItemFromCart(item_id: number, authContext: any): Promise<void> {
      try {
        const response = await fetchWithAuth(`${this.apiUrl}/api/cart/item/${item_id}/`, {
          method: "DELETE",
        }, authContext);
      } catch (error) {
        console.error('Failed to fetch articles:', error);
        throw error;
      }
    }
  }
  