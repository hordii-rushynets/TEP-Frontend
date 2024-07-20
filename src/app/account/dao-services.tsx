import { fetchWithAuth } from "utils/helpers";

export class AccountDAOService {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }

    public async passwordUpdate(old_password: string, new_password: string, oldPasswordIncorrectAction: () => void, authContext: any): Promise<boolean> {
      try {
        const response = await fetchWithAuth(`${this.apiUrl}/api/account/password/reset/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "old_password": old_password,
            "new_password": new_password
          })
        }, authContext);
        if (response.status === 400) {
            oldPasswordIncorrectAction();
        }
        return response.ok;
      } catch (error) {
        console.error('Failed to delete item from the cart:', error);
        throw error;
      }
    }
  }
  