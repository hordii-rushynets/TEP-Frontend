"use client"

import Link from "next/link";
import { AuthUrl, UserUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";
import { AccountTabs } from "components/User/AccountTabs";
import UserAccount from "components/User/UserAccount";
import { UserAddressForm } from "components/User/UserAddressForm ";
import { UserBankCardForm } from "components/User/UserBankCardForm";
import { UserSettings } from "components/User/UserSettings";

import { useState, useEffect } from "react";

import { fetchWithAuth } from "utils/helpers";
import { useAuth } from "contexts/AuthContext";

const APIurl = process.env.NEXT_PUBLIC_API_URL

interface User {
  email: string;
  first_name: string;
  id: number;
  last_name: string; 
  policy: boolean;
  wantInfo: boolean;
  wholesale: boolean;
}

const UserDefaultValue : User = {
  email: "",
  first_name: "",
  id: 0,
  last_name: "",
  policy: false,
  wantInfo: false,
  wholesale: false,
}

export default function AccountPage() {
  const [user, setUser] = useState<User>(UserDefaultValue);

  const authContext = useAuth();

  const getUserInfo = () => {
    fetchWithAuth(`${APIurl}/api/account/profile/get/`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    }, authContext)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        else {
          return;
        }
      })
      .then(data => {
        data && setUser(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  useEffect(getUserInfo, []);

  return (
    <Section>
      <Container>
        <div>
          <div
            className={
              "mb-6 flex flex-col justify-between gap-y-10 pb-12 pt-8 md:flex-row md:pt-12"
            }
          >
            <div>
              <Title className={"mb-3.5 text-3xl"}>Привіт, {user.first_name}!</Title>
              <p className={"text-sm lg:font-extralight"}>
                Бажаєш змінити обліковий запис?{" "}
                <Link
                  href={AuthUrl.getSignIn()}
                  className={
                    "underline underline-offset-2 transition-colors hover:text-tep_blue-500"
                  }
                >
                  Змінити
                </Link>
              </p>
            </div>
            <Link href={UserUrl.getOrderHistory()}>
              <Button colorVariant={"black"} size={"large"}>
                Історія покупок
              </Button>
            </Link>
          </div>
          <AccountTabs
            tabsContent={[
              <>
                <UserAccount />
              </>,
              <>
                <UserAddressForm />
              </>,
              <>
                <UserBankCardForm />
              </>,
              <>
                <UserSettings />
              </>,
            ]}
          />
        </div>
      </Container>
    </Section>
  );
}
