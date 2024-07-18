export class ProductDAOService {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }
  
    public async viewProduct(productId: string): Promise<Response> {
      const response = await fetch(`${this.apiUrl}/api/store/products/increase_number_of_view/`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "id": productId
        })
      });
      return response;
    }

    public async getPopularProducts(): Promise<Response> {
      const response = await fetch(`${this.apiUrl}/api/store/products/?ordering=number_of_views`);
      return response;
    }
  }
  