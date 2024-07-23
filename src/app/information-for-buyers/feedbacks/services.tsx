import StaticData from "locals/dataInterface";
import { FeedbackDAOService } from "./dao-services";
import { Feedback } from "./interfaces";

export class FeedbackService {
    private daoService: FeedbackDAOService;

    constructor() {
        this.daoService = new FeedbackDAOService(process.env.NEXT_PUBLIC_API_URL || "");
    }

    public async getFeedbacks(filters: {[key: string]: string}, authContext: any): Promise<Feedback[]> {
        return await this.daoService.getFeedbacks(filters, authContext);
    }

    public async postFeedback(body: FormData, authContext: any): Promise<boolean> {
        return await this.daoService.postFeedback(body, authContext);
    }

    public async dislikeFeedback(id: number, authContext: any): Promise<void> {
        return await this.daoService.dislikeFeedback(id, authContext);
    }

    public async likeFeedback(id: number, authContext: any): Promise<void> {
        return await this.daoService.likeFeedback(id, authContext);
    }
}
