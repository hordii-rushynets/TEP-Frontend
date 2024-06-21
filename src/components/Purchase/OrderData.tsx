import Link from "next/link";
import { PurchaseUrl } from "route-urls";

import { Button, ButtonBase, Container, Section, Title } from "common/ui";
import { CartList } from "components/User/Cart/CartList";
import { TotalPriceBlock } from "components/User/Cart/TotalPriceBlock";
import { orders } from "components/User/OrderHistory/OrderHistory";

const goods = orders[0].products;

export function OrderData() {
  return (
    <Section>
      <Container>
        <div className={"mb-40 pt-6 lg:mb-64 lg:pt-12"}>
          <Title size={"2xl"} className={"mb-11"}>
            Дані замовлення
          </Title>
          <TotalPriceBlock hasTotalPrice={false} goods={goods} />

          <CartList goods={goods} hasButton={false} />
          <ButtonBase
            className={{
              button:
                "mb-8 text-sm font-semibold underline underline-offset-2 transition-colors hover:text-tep_blue-500",
            }}
          >
            Видалити всі товари
          </ButtonBase>
          <div>
            <TotalPriceBlock goods={goods} />
            <Link href={PurchaseUrl.getPayment()} className={"sm:inline-block"}>
              <Button fullWidth colorVariant={"black"} size={"super-large"}>
                Зберегти та продовжити
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
