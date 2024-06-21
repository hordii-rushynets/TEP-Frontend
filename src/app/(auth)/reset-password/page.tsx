import Link from "next/link";
import { AuthUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";
import { ResetPasswordForm } from "components/Auth/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <Section className={"overflow-hidden"}>
      <Container>
        <div
          className={
            "mb-40 mt-8 flex md:mt-20 md:gap-x-28 lg:mb-64 lg:mt-40 lg:gap-x-32"
          }
        >
          <div className={"hidden w-1/3 md:block lg:w-1/2"}>
            <Title className={"mb-5"}>Встановити новий пароль</Title>
            <p className={"text-sm md:mb-12 lg:mb-[72px] lg:font-light"}>
              Введіть свою адресу електронної пошти і ми надішлемо тобі новий
              пароль.
            </p>
            <Link href={AuthUrl.getSignIn()} className={"inline-block"}>
              <Button size={"large"}>Повернутись до входу</Button>
            </Link>
          </div>
          <div
            className={
              "block flex-1 shrink-0 basis-1/2 md:max-w-[500px] md:shrink"
            }
          >
            <div className={"mb-16 md:hidden"}>
              <Title className={"mb-12 text-3xl"}>
                Встановити новий пароль
              </Title>
              <p className={"mb-2 text-sm"}>
                Введіть свою адресу електронної пошти і ми надішлемо тобі новий
                пароль.
              </p>
              <Link
                href={AuthUrl.getSignIn()}
                className={
                  "inline-block text-sm font-bold underline underline-offset-2"
                }
              >
                Повернутись до входу
              </Link>
            </div>
            <ResetPasswordForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
