import { Container, Section } from "common/ui";
import { CooperationRequestForm } from "components/Forms/CooperationRequestForm";

export default function LeaveARequestPage() {
  return (
    <Section className={"pb-40 pt-12 lg:pb-64"}>
      <Container>
        <div className={"max-w-[600px]"}>
          <CooperationRequestForm />
        </div>
      </Container>
    </Section>
  );
}
