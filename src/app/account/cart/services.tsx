import { CartDAOService } from "./dao-services";
import { Cart, CartItem } from "./interfaces";


export class CartService {
    private daoService: CartDAOService;

    constructor() {
        this.daoService = new CartDAOService(process.env.NEXT_PUBLIC_API_URL || "");
    }

    public async getCart(authContext: any): Promise<CartItem[]> {
        return await this.daoService.getCart(authContext);
    }

    public async putItemInCart(item: any, authContext: any): Promise<Response> {
      const response = await this.daoService.putItemInCart(item, authContext);
      return response;
    }

    public async deleteItemFromCart(item_id: number, authContext: any): Promise<void> {
        await this.daoService.deleteItemFromCart(item_id, authContext);
    }
}
