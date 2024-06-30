import { Container, Section } from "common/ui";
import { FeedbackForm } from "components/Forms/FeedbackForm";

export default function LeaveFeedbackPage() {
  return (
    <>
      <Section className={"mb-40 mt-12 lg:mb-64"}>
        <Container>
          <div>
            <FeedbackForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
