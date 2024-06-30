"use client"

import { Button, Container, Section, Title } from "common/ui";
import { ResetPasswordConfirmationForm } from "components/Auth/ResetPasswordConfirmationForm";

function SendCode() {

}

export default function EmailConfirmationPage() {
  return (
    <Section className={"overflow-hidden"}>
      <Container>
        <div
          className={
            "mb-40 mt-8 flex md:mt-20 md:gap-x-28 lg:mb-64 lg:mt-40 lg:gap-x-32"
          }
        >
          <div className={"hidden w-1/3 md:block lg:w-1/2"}>
            <Title className={"mb-5"}>Ми отримали ваш запит на відновлення паролю</Title>
            <p className={"text-sm md:mb-12 lg:mb-[72px] lg:font-light"}>
              Перегляньте електронну пошту, вам повинен прийти код доступу
            </p>
            <Button onClick={SendCode} size={"large"}>Надіслати код повторно</Button>
          </div>
          <div
            className={
              "block flex-1 shrink-0 basis-1/2 md:max-w-[500px] md:shrink"
            }
          >
            <div className={"mb-16 md:hidden"}>
              <Title className={"mb-12 text-3xl"}>
              Ми отримали ваш запит на відновлення паролю
              </Title>
              <p className={"mb-2 text-sm"}>
              Перегляньте електронну пошту, вам повинен прийти код доступу
              </p>
              <Button size={"large"}>Надіслати код повторно</Button>
            </div>
            <ResetPasswordConfirmationForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
