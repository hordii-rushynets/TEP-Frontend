import { getUserIP } from "utils/helpers";
import { PurchaseDAOService } from "./dao-services";
import { Error, Stage, Warehouse } from "./interfaces";
import { type } from "ramda";

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
        if ( type(response) === "String") {
            const newWindow = window.open('', '_blank');

            if (newWindow) {
                newWindow.document.open();
                newWindow.document.write(response as string);
                newWindow.document.close(); 
            } else {
                console.error('Failed to open new window. Please check browser settings.');
            }
        }

        if (type(response) === "Array") {
            return response as Error[];
        }
    }
}
