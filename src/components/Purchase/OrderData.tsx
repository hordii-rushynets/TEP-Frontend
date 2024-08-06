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
import { Error } from "app/purchase/interfaces";
import { useLocalization } from "contexts/LocalizationContext";
import { useNotificationContext } from "contexts/NotificationContext";

export function OrderData() {
  const cartService = new CartService();
  const authContext = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartRefresh, setCartRefresh] = useState(false);
  const router = useRouter();
  const { setIsOpen, setText } = useNotificationContext();

  const { addressForm, deliveryForm } = usePostService();
  const purchaseService = new PurchaseService();

  const deliveryValues = deliveryForm.getValues();
  if (deliveryValues.delivery_method === "" || deliveryValues.delivery_service === "") {
    router.push(PurchaseUrl.getDelivery());
  }

  const { localization } = useLocalization();

  useEffect(() => {
    cartService.getCart(authContext).then(items => setCartItems(items));
  }, [cartRefresh]);

  const [ errors, setErrors ] = useState<Error[]>([]);

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
      "weight": cartItems.reduce((acc, el) => acc + el?.product_variants?.weight, 0),
      "settlemen_type": "місто",
      "recipients_phone": addressValues.phoneNumber,
      "service_type": deliveryValues.delivery_method,
    }, deliveryValues.delivery_service, authContext).then(errors => {
      if (errors) {
        setErrors(errors);
      } else {
        router.push(PurchaseUrl.getPayment());
      }
    });
  }

  useEffect(() => {
    let pageToRedirect = PurchaseUrl.getDelivery();
    errors.forEach(error => {
      const errorMessage = {
        type: "manual", 
        message: error[localization as keyof Error]
      }

      switch (error.error) {
        case "city_error":
          pageToRedirect = PurchaseUrl.getAddress();
          addressForm.setError("city", errorMessage);
        case "recipient_branch_or_street_error":
          deliveryForm.setError("street", errorMessage);
        case "delivery_type_error":
          deliveryForm.setError("delivery_method", errorMessage);
        case "phone_number_error": 
          pageToRedirect = PurchaseUrl.getAddress();
          addressForm.setError("phoneNumber", errorMessage);
        case "person_error":
          pageToRedirect = PurchaseUrl.getAddress();
          addressForm.setError("firstName", errorMessage);
          addressForm.setError("lastName", errorMessage);
      }
    });

    if ( errors.length !== 0 ) {
      router.push(pageToRedirect)
    }
  }, [errors]);

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
            <div className={"sm:inline-block"}>
              <Button fullWidth colorVariant={"black"} size={"super-large"} onClick={SubmitParcel}>
                Зберегти та продовжити
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
