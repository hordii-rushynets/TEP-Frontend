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
        console.error('Failed to update password:', error);
        throw error;
      }
    }

    public async profileUpdate(body: FormData, authContext: any): Promise<boolean> {
        try {
            const response = await fetchWithAuth(`${this.apiUrl}/api/account/profile/`, {
              method: "PATCH",
              body: body
            }, authContext);

            return response.ok;
          } catch (error) {
            console.error('Failed to update profile:', error);
            throw error;
          }
    }

    public async emailUpdateRequest(new_email: string, authContext: any): Promise<boolean> {
      try {
        const response = await fetchWithAuth(`${this.apiUrl}/api/account/update/email/request/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "new_email": new_email,
          })
        }, authContext);

        return response.ok;
      } catch (error) {
        console.error('Failed to update profile:', error);
        throw error;
      }
    }

    public async emailUpdateConfirm(new_email: string, code: string, authContext: any): Promise<boolean> {
      try {
        const response = await fetchWithAuth(`${this.apiUrl}/api/account/update/email/confirm/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "new_email": new_email,
            "code": code,
          })
        }, authContext);

        return response.ok;
      } catch (error) {
        console.error('Failed to update profile:', error);
        throw error;
      }
    }

    public async profileDelete(authContext: any): Promise<Response> {
      try {
        const response = await fetchWithAuth(`${this.apiUrl}/api/account/profile/`, {
          method: "DELETE",
        }, authContext);

        return response;
      } catch (error) {
        console.error('Failed to update profile:', error);
        throw error;
      }
    }
  }
  