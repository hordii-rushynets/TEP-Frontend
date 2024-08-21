import { getUserIP } from "utils/helpers";
import { PurchaseDAOService } from "./dao-services";
import { Error, Stage, Warehouse } from "./interfaces";

export class PurchaseService {
    private daoService: PurchaseDAOService;

    constructor() {
        this.daoService = new PurchaseDAOService(process.env.NEXT_PUBLIC_API_URL || "");
    }

    public async getWarehouses(service: string, city: string, district: string, region: string): Promise<Warehouse[]> {
        const data = await this.daoService.getWarehouses(service, city, district, region);
        return data;
    }

    public async getTracking(tracking_number: string): Promise<Stage[]> {
        const data = await this.daoService.getTracking(tracking_number);
        return data;
    }

    public async getDeliveryPrice(service: string, cost: number, city: string, weight: number): Promise<number | undefined> {
        const data = await this.daoService.getDeliveryPrice(service, cost, city, weight);
        return data.cost;
    }

    public async createParcel(body: Object, service: string, authContext: any): Promise<void | Error[]> {
        const ip = await getUserIP();
        const response = await this.daoService.createParcel(ip, body, service, authContext);
        if (response) {
            return response;
        }
    }
}
