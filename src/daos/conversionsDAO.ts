export class ConversionsDAOService {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }

    public async sendConversion(body: Object): Promise<Response> {
      const response = await fetch(`${this.apiUrl}/api/account/meta-pixel/`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
      });
      return response;
    }
  }
  