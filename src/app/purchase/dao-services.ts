import { fetchWithAuth } from "utils/helpers";
import { Stage, Warehouse } from "./interfaces";

export class PurchaseDAOService {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }
  
    public async getWarehouses(service: string, city: string): Promise<Warehouse[]> {
        const response = await fetch(`${this.apiUrl}/api/post/get-warehouses/${service}/${city}/`);
        if (response.ok) {
            return response.json();
        }
        return [];
    }

    public async getTracking(service: string, tracking_number: string): Promise<Stage[]> {
        const response = await fetch(`${this.apiUrl}/api/post/track-parcel/${service}/${tracking_number}/`);
        if (response.ok) {
            return response.json();
        }
        return [];
    }

    public async getDeliveryPrice(service: string, cost: number, city: string): Promise<{cost: number | undefined}> {
        const response = await fetch(`${this.apiUrl}/api/post/calculate-delivery-cost/${service}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "city_recipient": city,
                "weight": "5",
                "cost": cost
            })
        });
        if (response.ok) {
            return response.json();
        }
        return {cost: undefined};
    }

    public async createParcel(body: Object, service: string): Promise<void> {
        const response = await fetch(`${this.apiUrl}/api/post/create-parcel/${service}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
    }
  }
  