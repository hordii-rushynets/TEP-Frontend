import { Article } from "./interfaces";

export class ArticleDAOService {
    private apiUrl: string;
  
    constructor(apiUrl: string) {
      this.apiUrl = apiUrl;
    }
  
    public async getArticles(): Promise<Article[]> {
      try {
        const response = await fetch(`${this.apiUrl}/api/blog/posts/`);
        if (!response.ok) {
          throw new Error(`Error fetching articles: ${response.statusText}`);
        }
        const articles: Article[] = await response.json();
        return articles;
      } catch (error) {
        console.error('Failed to fetch articles:', error);
        throw error;
      }
    }
  }
  