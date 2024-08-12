import { fetchWithAuth } from "utils/helpers";
import { Error, Stage, Warehouse } from "./interfaces";

export class PurchaseDAOService {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }
  
    public async getWarehouses(service: string, city: string, district: string, region: string): Promise<Warehouse[]> {
        const response = await fetch(`${this.apiUrl}/api/post/get-warehouses/${service}/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "city_name": city,
                "region_name": region,
                "district_name": district
            })
        });
        if (response.ok) {
            return response.json();
        }
        return [];
    }

    public async getTracking(tracking_number: string): Promise<Stage[]> {
        const response = await fetch(`${this.apiUrl}/api/post/track-parcel/${tracking_number}/`);
        if (response.ok) {
            return response.json();
        }
        return [];
    }

    public async getDeliveryPrice(service: string, cost: number, city: string, weight: number): Promise<{cost: number | undefined}> {
        const response = await fetch(`${this.apiUrl}/api/post/calculate-delivery-cost/${service}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "city_recipient": city,
                "weight": weight,
                "cost": cost
            })
        });
        if (response.ok) {
            return response.json();
        }
        return {cost: undefined};
    }

    public async createParcel(body: Object, service: string, authContext: any): Promise<void | Error[]> {
        const response = await fetchWithAuth(`${this.apiUrl}/api/post/create-parcel/${service}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        }, authContext)
        if (!response.ok) {
            const errors: Error[] = await response.json();
            return errors;
        }
    }
  }
  