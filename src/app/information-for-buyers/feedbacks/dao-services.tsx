import { fetchWithAuth } from "utils/helpers";
import { Feedback } from "./interfaces";

export class FeedbackDAOService {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }
  
    public async getFeedbacks(filters: {[key: string]: string}, authContext: any): Promise<Feedback[]> {
        const urlParams = new URLSearchParams(filters);

        try {
          const response = await fetchWithAuth(`${this.apiUrl}/api/store/feedback/?${urlParams}`, {}, authContext);
          if (!response.ok) {
            return []
          }
          const feedbacks: Feedback[] = await response.json();
          return feedbacks;
        } catch (error) {
          console.log('Failed to fetch feedbacks:', error);
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
          console.log('Failed to fetch feedbacks:', error);
          throw error;
        }
    }

    public async dislikeFeedback(id: number, authContext: any): Promise<number> {
        try {
          const response = await fetchWithAuth(`${this.apiUrl}/api/store/feedback/${id}/dislike/`, {
            method: 'POST',
          }, authContext);
          if (!response.ok && response.status !== 401) {
            throw new Error(`Error fetching feedbacks: ${response.statusText}`);
          }

          return response.status;

        } catch (error) {
          console.log('Failed to fetch feedbacks:', error);
          throw error;
        }
    }

    public async likeFeedback(id: number, authContext: any): Promise<number> {
      try {
        const response = await fetchWithAuth(`${this.apiUrl}/api/store/feedback/${id}/like/`, {
          method: 'POST',
        }, authContext);
        if (!response.ok && response.status !== 401) {
          throw new Error(`Error fetching feedbacks: ${response.statusText}`);
        }

        return response.status;


      } catch (error) {
        console.log('Failed to fetch feedbacks:', error);
        throw error;
      }
    }
  }
  