import { fetchWithAuth } from "utils/helpers";

export class SearchDAOService {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }

    public async getSearchProducts(filterParams: {[key: string]: string}, authContext: any): Promise<Response> {
      const urlParams = new URLSearchParams(filterParams);
      const response = await fetchWithAuth(`${this.apiUrl}/api/store/products/?${urlParams}`, {}, authContext).then(response => {
        if (response.status === 401) {
          return fetch(`${this.apiUrl}/api/store/products/?${urlParams}`)
        }
        return response
      })
      return response;
    }

    public async getTags(category: string): Promise<Response> {
      const response = await fetch(`${this.apiUrl}/api/store/products/?category_slug=${category}`);
      return response;
    }

    public async getSearchFilterFields(): Promise<Response> {
      const response = await fetch(`${this.apiUrl}/api/store/full-data/`);
      return response;
    }
  }
  