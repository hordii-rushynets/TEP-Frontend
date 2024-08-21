import { getUserIP } from "utils/helpers";
import { CartDAOService } from "./dao-services";
import { Cart, CartItem } from "./interfaces";


export class CartService {
    private daoService: CartDAOService;

    constructor() {
        this.daoService = new CartDAOService(process.env.NEXT_PUBLIC_API_URL || "");
    }

    public async getCart(authContext: any): Promise<CartItem[]> {
        const ip = await getUserIP();
        return await this.daoService.getCart(ip, authContext);
    }

    public async putItemInCart(item: any, authContext: any): Promise<Response> {
      const ip = await getUserIP();
      const response = await this.daoService.putItemInCart(ip, item, authContext);
      return response;
    }

    public async updateItemInCart(item_id: number, body: Object, authContext: any): Promise<void> {
        const ip = await getUserIP();
        await this.daoService.updateItemInCart(ip, item_id, body, authContext);
    }

    public async deleteItemFromCart(item_id: number, authContext: any): Promise<void> {
        const ip = await getUserIP();
        await this.daoService.deleteItemFromCart(ip, item_id, authContext);
    }
}
