import Link from "next/link";
import { AuthUrl, UserUrl } from "route-urls";

import { Button, Container, Section, Title } from "common/ui";
import { AccountTabs } from "components/User/AccountTabs";
import UserAccount from "components/User/UserAccount";
import { UserAddressForm } from "components/User/UserAddressForm ";
import { UserBankCardForm } from "components/User/UserBankCardForm";
import { UserSettings } from "components/User/UserSettings";

const user = {
  name: "Тарас",
};

export default function AccountPage() {
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
              <Title className={"mb-3.5 text-3xl"}>Привіт, {user.name}!</Title>
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
