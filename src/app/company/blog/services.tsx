import { ArticleDAOService } from "./dao-services";
import { Article } from "./interfaces";


export class ArticleService {
    private daoService: ArticleDAOService;

    constructor() {
        this.daoService = new ArticleDAOService(process.env.NEXT_PUBLIC_API_URL || "");
    }

    public async getArticles(page: string): Promise<{count: number; next: string; previous: string; results: Article[]}> {
        return this.daoService.getArticles(page)
    }

    public async getArticle(slug: string): Promise<Article> {
        return this.daoService.getArticle(slug)
    }
}
