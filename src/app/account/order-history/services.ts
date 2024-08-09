import { OrderHistoryDAOService } from "./dao-services";
import { Order } from "./interfaces";


export class OrderHistoryService {
    private daoService: OrderHistoryDAOService;

    constructor() {
        this.daoService = new OrderHistoryDAOService(process.env.NEXT_PUBLIC_API_URL || "");
    }

    public async getOrderHistory(authContext: any): Promise<Order[]> {
        return await this.daoService.getOrderHistory(authContext);
    }
}
