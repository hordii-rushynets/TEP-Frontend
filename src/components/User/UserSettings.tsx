"use client";

import { useEffect, useState } from "react";

import { Button, Checkbox, Dialog, Title } from "common/ui";

import { DeleteAccountConfirm } from "./DeleteAccountConfirm";

import { useNotificationContext } from "contexts/NotificationContext";
import { useAuth } from "contexts/AuthContext";
import { useRouter } from 'next/navigation';
import { MainUrl } from "route-urls";
import { AccountService } from "app/account/services";
import { UserAccountProps } from "./UserAccount";
import { useLocalization } from "contexts/LocalizationContext";

export function UserSettings({ user, refresh, setRefresh }: UserAccountProps) {
  const [byEmail, setByEmail] = useState(user.email_communication);
  const [bySMS, setBySMS] = useState(user.phone_communication);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const { setIsOpen, setText } = useNotificationContext();
  const authContext = useAuth();

  const router = useRouter();
  const accountService = new AccountService();

  const { staticData } = useLocalization();

  function DeleteAccount() {
    accountService.profileDelete(authContext)
      .then(response => {
        if (response.ok) {
            authContext.logout();
            setText(staticData.account.userSettings.text1);
            setIsOpen(true);
            router.push(MainUrl.getHome());
        }
        else {
            return;
        }
      })
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      const communicationInfo = new FormData();
      communicationInfo.append("phone_communication", bySMS.toString());
      communicationInfo.append("email_communication", byEmail.toString());
      accountService.profileUpdate(communicationInfo, authContext).then(success => {
        setRefresh(!refresh);
      })
    }, 500);
  }, [byEmail, bySMS]);

  return (
    <>
      <div className={"max-w-[496px]"}>
        <div className={"mb-24"}>
          <Title component={"h5"} size={"xl"} className={"mb-1.5"}>
            {staticData.account.userSettings.text2}
          </Title>
          <p className={"mb-3 text-sm leading-normal lg:font-extralight"}>
          {staticData.account.userSettings.text3}
            <br />
            {staticData.account.userSettings.text4}
          </p>
          <div className={"flex flex-col gap-y-6"}>
            <Checkbox
              label={staticData.account.userSettings.text5}
              checked={byEmail}
              onChange={setByEmail}
            />
            {/* <Checkbox label={staticData.account.userSettings.text6} checked={bySMS} onChange={setBySMS} /> */}
          </div>
        </div>
        <div>
          <Title component={"h5"} size={"xl"} className={"mb-1.5"}>
            {staticData.account.userSettings.text7}
          </Title>
          <p className={"mb-8 text-sm leading-normal lg:font-extralight"}>
          {staticData.account.userSettings.text8}
          </p>
          <Button onClick={() => setIsConfirmOpen(true)} size={"large"}>
          {staticData.account.userSettings.text7}
          </Button>
        </div>
      </div>
      <Dialog
        open={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        className={{
          contentWrapper: "w-full md:w-auto",
        }}
      >
        <DeleteAccountConfirm
          onClick={() => {
            setIsConfirmOpen(false);
            DeleteAccount();
          }}
        />
      </Dialog>
    </>
  );
}
