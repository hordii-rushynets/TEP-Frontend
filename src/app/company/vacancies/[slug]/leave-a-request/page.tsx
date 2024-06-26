import { Container, Section } from "common/ui";
import { VacancyRequestForm } from "components/Forms/VacancyRequestForm";

export default function LeaveARequestPage() {
  return (
    <Section className={"pb-40 pt-12 lg:pb-64"}>
      <Container>
        <div className={"max-w-[600px]"}>
          <VacancyRequestForm />
        </div>
      </Container>
    </Section>
  );
}
