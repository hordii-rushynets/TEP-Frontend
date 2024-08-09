"use client"

import Link from "next/link";
import { AuthUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";
import { ResetPasswordForm } from "components/Auth/ResetPasswordForm";
import { useLocalization } from "contexts/LocalizationContext";

export default function ResetPasswordPage() {
  const { staticData } = useLocalization();

  return (
    <Section className={"overflow-hidden"}>
      <Container>
        <div
          className={
            "mb-40 mt-8 flex md:mt-20 md:gap-x-28 lg:mb-64 lg:mt-40 lg:gap-x-32"
          }
        >
          <div className={"hidden w-1/3 md:block lg:w-1/2"}>
            <Title className={"mb-5"}>{staticData.auth.resetpassword.text1}</Title>
            <p className={"text-sm md:mb-12 lg:mb-[72px] lg:font-light"}>
              {staticData.auth.resetpassword.text2}
            </p>
            <Link href={AuthUrl.getSignIn()} className={"inline-block"}>
              <Button size={"large"}>{staticData.auth.resetpassword.text3}</Button>
            </Link>
          </div>
          <div
            className={
              "block flex-1 shrink-0 basis-1/2 md:max-w-[500px] md:shrink"
            }
          >
            <div className={"mb-16 md:hidden"}>
              <Title className={"mb-12 text-3xl"}>
              {staticData.auth.resetpassword.text1}
              </Title>
              <p className={"mb-2 text-sm"}>
              {staticData.auth.resetpassword.text2}
              </p>
              <Link
                href={AuthUrl.getSignIn()}
                className={
                  "inline-block text-sm font-bold underline underline-offset-2"
                }
              >
                {staticData.auth.resetpassword.text3}
              </Link>
            </div>
            <ResetPasswordForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
