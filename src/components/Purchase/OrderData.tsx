"use client"

import Link from "next/link";
import { AuthUrl, MainUrl, PurchaseUrl } from "route-urls";

import { Button, ButtonBase, Container, Section, Title } from "common/ui";
import { CartList } from "components/User/Cart/CartList";
import { TotalPriceBlock } from "components/User/Cart/TotalPriceBlock";

import { CartService } from "app/account/cart/services";
import { CartItem } from "app/account/cart/interfaces";
import { useAuth } from "contexts/AuthContext";
import { useState, useEffect } from "react";
import { usePostService } from "contexts/PostServiceContext";
import { useRouter } from "next/navigation";
import { PurchaseService } from "app/purchase/services";

export function OrderData() {
  const cartService = new CartService();
  const authContext = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartRefresh, setCartRefresh] = useState(false);
  const router = useRouter();

  const { addressForm, deliveryForm } = usePostService();
  const purchaseService = new PurchaseService();

  const deliveryValues = deliveryForm.getValues();
  if (deliveryValues.delivery_method === "" || deliveryValues.delivery_service === "") {
    router.push(PurchaseUrl.getDelivery());
  }

  useEffect(() => {
    cartService.getCart(authContext).then(items => setCartItems(items));
  }, [cartRefresh]);

  const SubmitParcel = () => {
    const addressValues = addressForm.getValues();
    const deliveryValues = deliveryForm.getValues();

    purchaseService.createParcel({
      "area_recipient": addressValues.region,
      "city_recipient": addressValues.city,
      "recipient_address": deliveryValues.delivery_method === "WarehouseDoors" ? deliveryValues.street : deliveryValues.department,
      "recipient_house": deliveryValues.house,
      "recipient_float": deliveryValues.flat,
      "recipient_name": `${addressValues.firstName} ${addressValues.lastName}`,
      "description": "TEST TEST TEST",
      "cost": cartItems.reduce((acc, el) => acc + (el?.product_variants?.promotion ? el?.product_variants?.promo_price : el?.product_variants?.default_price) * el.quantity, 0) * 1.19,
      "weight": "5",
      "settlemen_type": "місто",
      "recipients_phone": addressValues.phoneNumber,
      "service_type": deliveryValues.delivery_method,
    }, deliveryValues.delivery_service);
  }

  if (!cartItems.length) {
    return (
      <Section>
        <Container>
          <div className={"mt-8 md:mt-12"}>
            <div
              className={
                "flex min-h-[75vh] flex-col  items-center justify-center"
              }
            >
              <div className={"pb-32 pt-24 lg:pb-48"}>
                <Title className={"mb-3.5 text-center text-3xl"}>
                  Кошик порожній
                </Title>
                <p
                  className={
                    "mb-12 max-w-[496px] text-center text-sm leading-normal lg:font-extralight"
                  }
                >
                  На жаль, твій кошик порожній. Але ще не пізно це виправити!
                  Увійдіть, щоб додати товари зі списку &quot;Улюблене&quot; або
                  перейдіть до списку товарів, щоб ознайомитись з асортиментом.
                </p>
                <div
                  className={
                    "flex flex-col gap-4 md:flex-row md:justify-center"
                  }
                >
                  {!authContext.isAuthenticated && <Link href={AuthUrl.getSignIn()}>
                    <Button
                      size={"super-large"}
                      fullWidth
                      colorVariant={"black"}
                    >
                      Увійти
                    </Button>
                  </Link>}
                  <Link href={MainUrl.getGoods()}>
                    <Button size={"large"} fullWidth>
                      Перейти до товарів
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section>
      <Container>
        <div className={"mb-40 pt-6 lg:mb-64 lg:pt-12"}>
          <Title size={"2xl"} className={"mb-11"}>
            Дані замовлення
          </Title>
          <TotalPriceBlock hasTotalPrice={false} goods={cartItems} />

          <CartList goods={cartItems} cartRefresh={cartRefresh} setCartRefresh={setCartRefresh} trashAction={(id: number, authContext: any) => {cartService.deleteItemFromCart(id, authContext).then(() => {setCartRefresh(!cartRefresh)})}} hasButton={false} />
          <ButtonBase
            className={{
              button:
                "mb-8 text-sm font-semibold underline underline-offset-2 transition-colors hover:text-tep_blue-500",
            }}
          >
            Видалити всі товари
          </ButtonBase>
          <div>
            <TotalPriceBlock goods={cartItems} />
            <Link href={PurchaseUrl.getPayment()} className={"sm:inline-block"}>
              <Button fullWidth colorVariant={"black"} size={"super-large"} onClick={SubmitParcel}>
                Зберегти та продовжити
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
