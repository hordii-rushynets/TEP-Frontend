"use client"

import { Button, Container, Section, Title } from "common/ui";
import { ResetPasswordConfirmationForm } from "components/Auth/ResetPasswordConfirmationForm";
import { useNotificationContext } from "contexts/NotificationContext";
import { useLocalization } from "contexts/LocalizationContext";

const APIurl = process.env.NEXT_PUBLIC_API_URL;

export default function ResetPasswordConfirmationPage() {
  const { setIsOpen, setText } = useNotificationContext();
  const { staticData } = useLocalization();

  function SendCode() {
    fetch(`${APIurl}/api/account/password/forget/`, {
      method: 'POST',
      body: JSON.stringify({"email": localStorage.getItem("TEPemail")}),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        if (response.status === 201) {
            setText(staticData.auth.notifications.verificationCodeSend);
            setIsOpen(true);
        }
        else {
            return;
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <Section className={"overflow-hidden"}>
      <Container>
        <div
          className={
            "mb-40 mt-8 flex md:mt-20 md:gap-x-28 lg:mb-64 lg:mt-40 lg:gap-x-32"
          }
        >
          <div className={"hidden w-1/3 md:block lg:w-1/2"}>
            <Title className={"mb-5"}>{staticData.auth.resetpassword.success.text1}</Title>
            <p className={"text-sm md:mb-12 lg:mb-[72px] lg:font-light"}>
            {staticData.auth.resetpassword.success.text2}
            </p>
            <Button onClick={SendCode} size={"large"}>{staticData.auth.resetpassword.success.text3}</Button>
          </div>
          <div
            className={
              "block flex-1 shrink-0 basis-1/2 md:max-w-[500px] md:shrink"
            }
          >
            <div className={"mb-16 md:hidden"}>
              <Title className={"mb-12 text-3xl"}>
              {staticData.auth.resetpassword.success.text1}
              </Title>
              <p className={"mb-2 text-sm"}>
              {staticData.auth.resetpassword.success.text2}
              </p>
              <Button size={"large"}>{staticData.auth.resetpassword.success.text3}</Button>
            </div>
            <ResetPasswordConfirmationForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
