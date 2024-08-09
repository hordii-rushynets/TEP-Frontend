import { fetchWithAuth } from "utils/helpers";
import { Order } from "./interfaces";

export class OrderHistoryDAOService {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }

    public async getOrderHistory(authContext: any):Promise<Order[]> {
        const response = await fetchWithAuth("http://localhost:8000/api/post/orders/", {}, authContext);

        if (response.ok) {
            const data = await response.json();
            return data;
        }
        else {
            return [];
        }
    }
  }
  