import { fetchWithAuth } from "utils/helpers";
import { Feedback } from "./interfaces";

export class FeedbackDAOService {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }
  
    public async getFeedbacks(filters: {[key: string]: string}): Promise<Feedback[]> {
        const urlParams = new URLSearchParams(filters);

        try {
          const response = await fetch(`${this.apiUrl}/api/store/feedback/?${urlParams}`);
          if (!response.ok) {
            throw new Error(`Error fetching feedbacks: ${response.statusText}`);
          }
          const feedbacks: Feedback[] = await response.json();
          return feedbacks;
        } catch (error) {
          console.error('Failed to fetch feedbacks:', error);
          throw error;
        }
    }

    public async postFeedback(body: FormData, authContext: any): Promise<boolean> {
        try {
          const response = await fetchWithAuth(`${this.apiUrl}/api/store/feedback/`, {
            method: 'POST',
            body: body,
          }, authContext);
          return response.ok;

        } catch (error) {
          console.error('Failed to fetch feedbacks:', error);
          throw error;
        }
    }
  }
  