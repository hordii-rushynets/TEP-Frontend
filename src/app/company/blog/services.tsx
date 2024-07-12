import { ArticleDAOService } from "./dao-services";
import { Article } from "./interfaces";


export class ArticleService {
    private daoService: ArticleDAOService;

    constructor() {
        this.daoService = new ArticleDAOService(process.env.NEXT_PUBLIC_API_URL);
    }

    public async getArticles(): Promise<Article[]> {
        return this.daoService.getArticles()
    }
}
