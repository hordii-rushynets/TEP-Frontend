import getIp from 'ipify';

export class ProductDAOService {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }
  
    public async viewProduct(productId: string): Promise<Response> {
      const realIp = await getIp();

      const response = await fetch(`${this.apiUrl}/api/store/products/`, {
        headers: { 
          REAL_IP: realIp,
        }
      });
      return response;
    }
  }
  