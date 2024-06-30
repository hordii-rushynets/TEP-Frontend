import Link from "next/link";
import { AuthUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";
import { AuthSlider } from "components/Auth/AuthSlider";
import { RegistrationForm } from "components/Auth/RegistrationForm";

export default function RegistrationPage() {
  return (
    <Section className={"overflow-hidden"}>
      <Container>
        <div className={"mb-40 mt-8 flex md:gap-x-28 md:pt-20 lg:gap-x-32"}>
          <div className={"hidden w-1/3 md:block lg:w-1/2"}>
            <Title className={"mb-5"}>Створити профіль</Title>
            <p className={"text-sm md:mb-8 lg:mb-12 lg:font-light"}>
              Якщо у Вас вже є профіль, ви можете увійти у Ваш обліковий запис.
            </p>
            <Link
              href={AuthUrl.getSignIn()}
              className={"inline-block md:mb-8 lg:mb-12"}
            >
              <Button
                size={"large"}
                fullWidth
                className={{ button: "lg:w-auto" }}
              >
                Увійти
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
              <Title className={"mb-12"}>Створити профіль</Title>
              <p className={"mb-2 text-sm"}>Вже є обліковий запис?</p>
              <Link
                href={AuthUrl.getSignIn()}
                className={
                  "inline-block text-sm font-bold underline underline-offset-2"
                }
              >
                Увійти
              </Link>
            </div>
            <RegistrationForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
