"use client";

import { useState } from "react";
import { LuPenLine } from "react-icons/lu";

import { Button, Dialog } from "common/ui";

import { ChangeAvatarForm } from "./ChangeAvatarForm";
import { ChangePasswordForm } from "./ChangePasswordForm";
import { UserAccountForm } from "./UserAccountForm";

export interface User {
  email: string;
  first_name: string;
  id: number;
  last_name: string; 
  privacy_policy_accepted: boolean;
  phone_number: string;
  profile_picture: string;
}

export const UserDefaultValue : User = {
  email: "",
  first_name: "",
  id: 0,
  last_name: "",
  privacy_policy_accepted: false,
  phone_number: "",
  profile_picture: ""
}

export interface UserAccountProps {
  user: User;
}

export default function UserAccount({ user }: UserAccountProps) {
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);

  return (
    <>
      <div>
        <div className={"mb-10 flex justify-between"}>
          <ChangeAvatarForm profileImage={user.profile_picture}/>
          <Button
            onClick={() => setIsPasswordOpen(true)}
            size={"small"}
            startIcon={<LuPenLine className={"size-4"} />}
            className={{ button: "hidden self-start md:flex" }}
          >
            Змінити пароль
          </Button>
        </div>
        <UserAccountForm user={user}/>

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
