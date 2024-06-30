import Link from "next/link";
import { AuthUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";
import { AuthSlider } from "components/Auth/AuthSlider";
import { LoginForm } from "components/Auth/LoginForm";

export default function LoginPage() {
  return (
    <Section className={"overflow-hidden"}>
      <Container>
        <div className={"mb-40 mt-8 flex md:gap-x-28 md:pt-20 lg:gap-x-32"}>
          <div className={"hidden w-1/3 md:block lg:w-1/2"}>
            <Title className={"mb-5"}>
              Увійдіть до свого особистого кабінету
            </Title>
            <p className={"text-sm md:mb-8 lg:mb-12 lg:font-light"}>
              Увійдіть або зареєструйтеся до магазину ТЕП, щоб скористатися
              персональними пропозиціями!
            </p>
            <Link
              href={AuthUrl.getSignUp()}
              className={"inline-block md:mb-8 lg:mb-12"}
            >
              <Button
                size={"large"}
                fullWidth
                className={{ button: "lg:w-auto" }}
              >
                Створити обліковий запис
              </Button>
            </Link>
            <AuthSlider />
          </div>
          <div
            className={
              "block flex-1 shrink-0 basis-1/2 md:max-w-[500px] md:shrink"
            }
          >
            <div className={"mb-16 md:hidden"}>
              <Title className={"mb-12"}>
                Увійдіть до свого особистого кабінету
              </Title>
              <p className={"mb-2 text-sm"}>Ще не має облікового запису?</p>
              <Link
                href={AuthUrl.getSignUp()}
                className={
                  "inline-block text-sm font-bold underline underline-offset-2"
                }
              >
                Створити обліковий запис
              </Link>
            </div>
            <LoginForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
