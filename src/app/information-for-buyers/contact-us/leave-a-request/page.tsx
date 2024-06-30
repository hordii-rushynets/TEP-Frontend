import { Container, Section } from "common/ui";
import { ContactUsRequestForm } from "components/Forms/ContactUsRequestForm";

export default function LeaveARequestPage() {
  return (
    <Section className={"pb-40 pt-12 lg:pb-64"}>
      <Container>
        <div className={"max-w-[600px]"}>
          <ContactUsRequestForm />
        </div>
      </Container>
    </Section>
  );
}
