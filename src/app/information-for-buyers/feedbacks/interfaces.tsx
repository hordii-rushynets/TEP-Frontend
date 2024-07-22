import { ProductWithVariant } from "app/goods/[category]/page";
import { User } from "components/User/UserAccount";

export interface Feedback {
    id: number;
    tep_user: User;
    product: ProductWithVariant;
    text: string;
    like_number: number;
    dislike_number: number;
    evaluation: number;
    feedback_images: FeedbackImage[];
}

export interface FeedbackImage {
    image: string;
    feedback: number;
}