import { Article } from "./interfaces";

export class ArticleDAOService {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }
  
    public async getArticles(page: string): Promise<{count: number; next: string; prvious: string; results: Article[]}> {
      try {
        const response = await fetch(`${this.apiUrl}/api/blog/posts/?page=${page}`);
        if (!response.ok) {
          throw new Error(`Error fetching articles: ${response.statusText}`);
        }
        const articles: {count: number; next: string; prvious: string; results: Article[]} = await response.json();
        return articles;
      } catch (error) {
        console.error('Failed to fetch articles:', error);
        throw error;
      }
    }
}
  