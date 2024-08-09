"use client"

import Link from "next/link";
import { AuthUrl, UserUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";
import { AccountTabs } from "components/User/AccountTabs";
import UserAccount, { User, UserDefaultValue } from "components/User/UserAccount";
import { UserAddressForm } from "components/User/UserAddressForm ";
import { UserBankCardForm } from "components/User/UserBankCardForm";
import { UserSettings } from "components/User/UserSettings";
import { useRouter } from 'next/navigation';
import { useNotificationContext } from "contexts/NotificationContext";
import { useLocalization } from "contexts/LocalizationContext";

import { useState, useEffect } from "react";

import { fetchWithAuth } from "utils/helpers";
import { useAuth } from "contexts/AuthContext";
import { AccountService } from "./services";

const APIurl = process.env.NEXT_PUBLIC_API_URL

export default function AccountPage() {
  const [user, setUser] = useState<User>(UserDefaultValue);
  const router = useRouter();
  const { setIsOpen, setText } = useNotificationContext();
  const { staticData } = useLocalization();
  const authContext = useAuth();
  const [refresh, setRefresh] = useState(false);
  const accountService = new AccountService();

  const getUserInfo = () => {
    fetchWithAuth(`${APIurl}/api/account/profile/`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    }, authContext)
      .then(response => {
        if (response.status === 200) {
          return response.json();
        }
        if (response.status === 401) {
          setText(staticData.auth.notifications.unautorized);
          setIsOpen(true);
          router.push('/sign-in');
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

  useEffect(getUserInfo, [refresh]);

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
              <Title className={"mb-3.5 text-3xl"}>{staticData.account.text1} {user.first_name}!</Title>
              <p className={"text-sm lg:font-extralight"}>
              {staticData.account.text2}{" "}
                <Link
                  href={AuthUrl.getSignIn()}
                  className={
                    "underline underline-offset-2 transition-colors hover:text-tep_blue-500"
                  }
                  onClick={() => {accountService.logout(authContext)}}
                >
                  {staticData.account.text3}
                </Link>
              </p>
            </div>
            <Link href={UserUrl.getOrderHistory()}>
              <Button colorVariant={"black"} size={"large"}>
              {staticData.account.text4}
              </Button>
            </Link>
          </div>
          <AccountTabs
            tabsContent={[
              <>
                <UserAccount user={user} refresh={refresh} setRefresh={setRefresh}/>
              </>,
              <>
                <UserAddressForm user={user} refresh={refresh} setRefresh={setRefresh}/>
              </>,
              // <>
              //   {/* <UserBankCardForm /> */}
              // </>,
              <>
                <UserSettings user={user} refresh={refresh} setRefresh={setRefresh}/>
              </>,
            ]}
          />
        </div>
      </Container>
    </Section>
  );
}
