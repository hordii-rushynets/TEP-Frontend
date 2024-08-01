"use client"

import Link from "next/link";
import { AuthUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";
import { LoginForm } from "components/Auth/LoginForm";
import { useLocalization } from "contexts/LocalizationContext";

export default function CheckOut() {
  const {staticData} = useLocalization();

  return (
    <Section>
      <Container>
        <div className={"pb-48 pt-8 md:pt-12"}>
          <Title className={"mb-3 text-3xl md:mb-[72px] lg:mb-16"}>
            {staticData.auth.checkout.text1}
          </Title>
          <div className={"flex justify-between gap-x-28"}>
            <div className={"flex-1 "}>
              <Title
                component={"h4"}
                size={"2xl"}
                className={"mb-5 hidden md:block"}
              >
                {staticData.auth.checkout.text2}
              </Title>
              <p
                className={
                  "mb-32 max-w-[250px] text-sm md:mb-12 lg:mb-[72px] lg:max-w-[500px] lg:font-extralight"
                }
              >
                {staticData.auth.checkout.text3}
              </p>
              <div className={"flex flex-col gap-y-6 md:items-start"}>
                <Link href={AuthUrl.getSignIn()} className={"md:hidden"}>
                  <Button
                    size={"super-large"}
                    colorVariant={"black"}
                    fullWidth
                    className={"sm:w-auto"}
                  >
                    {staticData.auth.checkout.text4}
                  </Button>
                </Link>
                <Link href={AuthUrl.getSignUp()}>
                  <Button size={"large"} fullWidth className={"sm:w-auto"}>
                  {staticData.auth.checkout.text5}
                  </Button>
                </Link>
              </div>
            </div>
            <div className={"hidden w-full max-w-[500px] md:block"}>
              <Title
                component={"h4"}
                size={"2xl"}
                className={"mb-5 hidden md:block"}
              >
                {staticData.auth.checkout.text6}
              </Title>
              <LoginForm />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
