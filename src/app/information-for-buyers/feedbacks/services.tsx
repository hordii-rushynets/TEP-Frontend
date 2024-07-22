import StaticData from "locals/dataInterface";
import { FeedbackDAOService } from "./dao-services";
import { Feedback } from "./interfaces";

export class FeedbackService {
    private daoService: FeedbackDAOService;

    constructor() {
        this.daoService = new FeedbackDAOService(process.env.NEXT_PUBLIC_API_URL || "");
    }

    public async getFeedbacks(filters: {[key: string]: string}): Promise<Feedback[]> {
        return await this.daoService.getFeedbacks(filters);
    }
}
