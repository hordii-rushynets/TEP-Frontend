"use client";

import { useState } from "react";
import { LuPenLine } from "react-icons/lu";

import { Button, Dialog } from "common/ui";

import { ChangeAvatarForm } from "./ChangeAvatarForm";
import { ChangePasswordForm } from "./ChangePasswordForm";
import { UserAccountForm } from "./UserAccountForm";

export default function UserAccount() {
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);

  return (
    <>
      <div>
        <div className={"mb-10 flex justify-between"}>
          <ChangeAvatarForm />
          <Button
            onClick={() => setIsPasswordOpen(true)}
            size={"small"}
            startIcon={<LuPenLine className={"size-4"} />}
            className={{ button: "hidden self-start md:flex" }}
          >
            Змінити пароль
          </Button>
        </div>
        <UserAccountForm />

        <Button
          onClick={() => setIsPasswordOpen(true)}
          size={"small"}
          startIcon={<LuPenLine className={"size-4"} />}
          className={{ button: "mt-12 md:hidden" }}
        >
          Змінити пароль
        </Button>
      </div>
      <Dialog
        open={isPasswordOpen}
        onClose={() => setIsPasswordOpen(false)}
        className={{
          contentWrapper:
            "top-[60%] h-full w-full max-w-full md:top-1/2 md:h-auto md:w-auto",
          content: "h-full",
        }}
      >
        <ChangePasswordForm
          onSubmit={() => {
            setIsPasswordOpen(false);
          }}
        />
      </Dialog>
    </>
  );
}
