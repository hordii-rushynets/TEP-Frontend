import { PurchaseDAOService } from "./dao-services";
import { Error, Stage, Warehouse } from "./interfaces";

export class PurchaseService {
    private daoService: PurchaseDAOService;

    constructor() {
        this.daoService = new PurchaseDAOService(process.env.NEXT_PUBLIC_API_URL || "");
    }

    public async getWarehouses(service: string, city: string): Promise<Warehouse[]> {
        const data = await this.daoService.getWarehouses(service, city);
        return data;
    }

    public async getTracking(service: string, tracking_number: string): Promise<Stage[]> {
        const data = await this.daoService.getTracking(service, tracking_number);
        return data;
    }

    public async getDeliveryPrice(service: string, cost: number, city: string, weight: number): Promise<number | undefined> {
        const data = await this.daoService.getDeliveryPrice(service, cost, city, weight);
        return data.cost;
    }

    public async createParcel(body: Object, service: string, authContext: any): Promise<void | Error[]> {
        const response = await this.daoService.createParcel(body, service, authContext);
        if (response) {
            return response;
        }
    }
}
