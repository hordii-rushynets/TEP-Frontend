export class InteriorProductDAOService {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }

    public async getInspirationProducts(): Promise<Response> {
      const response = await fetch(`${this.apiUrl}/api/store/products/?limit=${process.env.NEXT_PUBLIC_PRODUCTS_LIMIT}`)
      return response;
    }
  }
  