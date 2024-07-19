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
        console.error('Failed to get cart items:', error);
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
        console.error('Failed to put item in the cart:', error);
        throw error;
      }
    }

    public async updateItemInCart(item_id: number, body: Object, authContext: any): Promise<void> {
      try {
        const response = await fetchWithAuth(`${this.apiUrl}/api/cart/item/${item_id}/`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(body),
        }, authContext);
      } catch (error) {
        console.error('Failed to update item in the cart:', error);
        throw error;
      }
    }

    public async deleteItemFromCart(item_id: number, authContext: any): Promise<void> {
      try {
        const response = await fetchWithAuth(`${this.apiUrl}/api/cart/item/${item_id}/`, {
          method: "DELETE",
        }, authContext);
      } catch (error) {
        console.error('Failed to delete item from the cart:', error);
        throw error;
      }
    }
  }
  