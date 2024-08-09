"use client"

import { useState, useEffect } from "react";

import { Button, Container, Section, Title } from "common/ui";
import { EmailConfirmationForm } from "components/Auth/EmailConfirmationForm";
import { useNotificationContext } from "contexts/NotificationContext";
import { useLocalization } from "contexts/LocalizationContext";
import { AccountService } from "../services";
import { useAuth } from "contexts/AuthContext";

export default function EmailConfirmationPage() {
  const { setIsOpen, setText } = useNotificationContext();
  const { staticData } = useLocalization();
  const accountService = new AccountService();
  const authContext = useAuth();

  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (cooldown > 0) {
      timer = setTimeout(() => {
        setCooldown(cooldown - 1);
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [cooldown]);

  function SendCode() {
    cooldown === 0 && accountService.emailUpdateRequest(localStorage.getItem("TEPemail") || "", authContext).then(success => {
      if (success) {
        setText(staticData.auth.notifications.verificationCodeSend);
        setIsOpen(true);
      }
      else {
        setText(staticData.account.emailconfirmation.text1);
        setIsOpen(true);
      }
      setCooldown(60);
    })
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
            <Title className={"mb-5"}>{staticData.account.emailconfirmation.text2}</Title>
            <p className={"text-sm md:mb-12 lg:mb-[72px] lg:font-light"}>
            {staticData.account.emailconfirmation.text3}
            </p>
            <Button onClick={SendCode} size={"large"}>{staticData.account.emailconfirmation.text4}</Button>
            {cooldown !== 0 && <p className={"text-sm md:mb-12 lg:mb-[72px] lg:font-light"} style={{color: "red"}}>
            {staticData.account.emailconfirmation.text5} {cooldown} {staticData.account.emailconfirmation.text6}
            </p>}
          </div>
          <div
            className={
              "block flex-1 shrink-0 basis-1/2 md:max-w-[500px] md:shrink"
            }
          >
            <div className={"mb-16 md:hidden"}>
              <Title className={"mb-12 text-3xl"}>
              {staticData.account.emailconfirmation.text2}
              </Title>
              <p className={"mb-2 text-sm"}>
              {staticData.account.emailconfirmation.text3}
              </p>
              <Button onClick={SendCode} size={"large"}>{staticData.account.emailconfirmation.text4}</Button>
              {cooldown !== 0 && <p className={"mb-2 text-sm"} style={{color: "red"}}>
              {staticData.account.emailconfirmation.text5} {cooldown} {staticData.account.emailconfirmation.text6}
              </p>}
            </div>
            <EmailConfirmationForm updating={true}/>
          </div>
        </div>
      </Container>
    </Section>
  );
}
