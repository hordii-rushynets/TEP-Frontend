import { Cart, CartItem } from "./interfaces";
import { fetchWithAuth } from "utils/helpers";

export class CartDAOService {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }
  
    public async getCart(ip: string, authContext: any): Promise<CartItem[]> {
      try {
        const response = await fetchWithAuth(`${this.apiUrl}/api/cart/item/`, {
          method: "GET",
          headers: {
            'Real-Ip': ip,
          }
        }, authContext);
        const cartItems = response.json();
        return cartItems;
      } catch (error) {
        console.error('Failed to get cart items:', error);
        throw error;
      }
    }

    public async putItemInCart(ip: string, item: any, authContext: any): Promise<Response> {
      try {
        const response = await fetchWithAuth(`${this.apiUrl}/api/cart/item/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Real-Ip': ip,
          },
          body: JSON.stringify(item)
        }, authContext);
        return response;
      } catch (error) {
        console.error('Failed to put item in the cart:', error);
        throw error;
      }
    }

    public async updateItemInCart(ip: string, item_id: number, body: Object, authContext: any): Promise<void> {
      try {
        const response = await fetchWithAuth(`${this.apiUrl}/api/cart/item/${item_id}/`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            'Real-Ip': ip,
          },
          body: JSON.stringify(body),
        }, authContext);
      } catch (error) {
        console.error('Failed to update item in the cart:', error);
        throw error;
      }
    }

    public async deleteItemFromCart(ip: string, item_id: number, authContext: any): Promise<void> {
      try {
        const response = await fetchWithAuth(`${this.apiUrl}/api/cart/item/${item_id}/`, {
          method: "DELETE",
          headers: {
            'Real-Ip': ip,
          }
        }, authContext);
      } catch (error) {
        console.error('Failed to delete item from the cart:', error);
        throw error;
      }
    }
  }
  