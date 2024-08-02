"use client";

import { useState } from "react";
import { LuPenLine } from "react-icons/lu";

import { Button, Dialog } from "common/ui";

import { ChangeAvatarForm } from "./ChangeAvatarForm";
import { ChangePasswordForm } from "./ChangePasswordForm";
import { UserAccountForm } from "./UserAccountForm";
import { useLocalization } from "contexts/LocalizationContext";

export interface User {
  email: string;
  first_name: string;
  id: number;
  last_name: string; 
  birth_date: string;
  privacy_policy_accepted: boolean;
  phone_number: string;
  profile_picture: string;
  address: string;
  region: string;
  city: string;
  index: string;
  phone_communication: boolean;
  email_communication: boolean;
}

export const UserDefaultValue : User = {
  email: "",
  first_name: "",
  id: 0,
  last_name: "",
  birth_date: "",
  privacy_policy_accepted: false,
  phone_number: "",
  profile_picture: "",
  address: "",
  region: "",
  city: "",
  index: "",
  phone_communication: false,
  email_communication: false
}

export interface UserAccountProps {
  user: User;
  refresh: boolean;
  setRefresh: (b: boolean) => void;
}

export default function UserAccount({ user, refresh, setRefresh }: UserAccountProps) {
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);

  const { staticData } = useLocalization();

  return (
    <>
      <div>
        <div className={"mb-10 flex justify-between"}>
          <ChangeAvatarForm profileImage={user.profile_picture} refresh={refresh} setRefresh={setRefresh}/>
          <Button
            onClick={() => setIsPasswordOpen(true)}
            size={"small"}
            startIcon={<LuPenLine className={"size-4"} />}
            className={{ button: "hidden self-start md:flex" }}
          >
            {staticData.account.userAccount.text1}
          </Button>
        </div>
        <UserAccountForm user={user} refresh={refresh} setRefresh={setRefresh}/>

        <Button
          onClick={() => setIsPasswordOpen(true)}
          size={"small"}
          startIcon={<LuPenLine className={"size-4"} />}
          className={{ button: "mt-12 md:hidden" }}
        >
          {staticData.account.userAccount.text1}
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
