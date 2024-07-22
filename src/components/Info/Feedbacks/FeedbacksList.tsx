import { Container, Pagination, Section } from "common/ui";

import { FeedbackCard } from "./FeedbackCard";
import { Feedback } from "app/information-for-buyers/feedbacks/interfaces";

type FeedbacksListProps = {
  category: string;
  page: number;
  feedbacks: Feedback[];
};

export function FeedbacksList({ page, feedbacks }: FeedbacksListProps) {
  // category param for fetching
  return (
    <Section className={"mb-24 lg:mb-40"}>
      <Container>
        <div>
          <div className={"mb-[72px] flex flex-col gap-10 lg:mb-16"}>
            {feedbacks.slice(page*10 - 10,page*10).map((feedback) => (
              <FeedbackCard key={feedback.id} feedback={feedback} />
            ))}
          </div>
          <Pagination activePage={page} total={Math.ceil(feedbacks.length/10)} />
        </div>
      </Container>
    </Section>
  );
}
