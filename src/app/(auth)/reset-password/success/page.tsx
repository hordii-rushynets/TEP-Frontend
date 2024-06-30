import Link from "next/link";
import { AuthUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";

export default function ResetPasswordPage() {
  return (
    <Section className={"overflow-hidden"}>
      <Container>
        <div className={"mb-52 mt-40 md:mb-64 md:mt-52"}>
          <div className={"text-center md:text-left"}>
            <Title className={"mb-5 text-3xl md:max-w-[490px]"}>
              Ми отримали твій запит на скидання пароля
            </Title>
            <p className={"mb-12 text-sm md:max-w-[390px] lg:font-light"}>
              Перевір свою електронну пошту та дотримуйся інструкцій.
            </p>
            <Link
              href={AuthUrl.getSignIn()}
              className={"inline-block w-full md:w-auto"}
            >
              <Button fullWidth size={"large"}>
                Повернутись до входу
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
