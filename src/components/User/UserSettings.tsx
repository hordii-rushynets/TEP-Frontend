"use client";

import { useEffect, useState } from "react";

import { Button, Checkbox, Dialog, Title } from "common/ui";

import { DeleteAccountConfirm } from "./DeleteAccountConfirm";

import { useNotificationContext } from "contexts/NotificationContext";
import { fetchWithAuth } from "utils/helpers";
import { useAuth } from "contexts/AuthContext";
import { useRouter } from 'next/navigation';
import { MainUrl } from "route-urls";
import { AccountService } from "app/account/services";
import { UserAccountProps } from "./UserAccount";

export function UserSettings({ user, refresh, setRefresh }: UserAccountProps) {
  const [byEmail, setByEmail] = useState(user.email_communication);
  const [bySMS, setBySMS] = useState(user.phone_communication);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const { setIsOpen, setText } = useNotificationContext();
  const authContext = useAuth();

  const router = useRouter();
  const accountService = new AccountService();

  function DeleteAccount() {
    accountService.profileDelete(authContext)
      .then(response => {
        if (response.ok) {
            authContext.logout();
            setText("Ваш акаунт успішно видалено!");
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
    // TODO send data
  }, [byEmail, bySMS]);

  return (
    <>
      <div className={"max-w-[496px]"}>
        <div className={"mb-24"}>
          <Title component={"h5"} size={"xl"} className={"mb-1.5"}>
            Спосіб комунікації
          </Title>
          <p className={"mb-3 text-sm leading-normal lg:font-extralight"}>
            Отримання пропозицій і новин
            <br />
            через:
          </p>
          <div className={"flex flex-col gap-y-6"}>
            <Checkbox
              label={"Електронна пошта"}
              checked={byEmail}
              onChange={setByEmail}
            />
            <Checkbox label={"СМС"} checked={bySMS} onChange={setBySMS} />
          </div>
        </div>
        <div>
          <Title component={"h5"} size={"xl"} className={"mb-1.5"}>
            Видалити профіль
          </Title>
          <p className={"mb-8 text-sm leading-normal lg:font-extralight"}>
            Ви можете видалити свій обліковий запис ТЕП у будь-який момент. Це
            призведе до видалення профілю та пов&apos;язаної з ним інформації.
          </p>
          <Button onClick={() => setIsConfirmOpen(true)} size={"large"}>
            Видалити профіль
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
