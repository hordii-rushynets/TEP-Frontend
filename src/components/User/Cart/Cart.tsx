"use client"

import Link from "next/link";
import { AuthUrl, MainUrl, PurchaseUrl } from "route-urls";
import { useState, useEffect } from "react";

import { Button, ButtonBase, Container, Section, Title } from "common/ui";

import { CartList } from "./CartList";
import { TotalPriceBlock } from "./TotalPriceBlock";

import { CartService } from "app/account/cart/services";
import { CartItem } from "app/account/cart/interfaces";
import { useAuth } from "contexts/AuthContext";
import { PostServiceProvider } from "contexts/PostServiceContext";

export function Cart() {
  const cartService = new CartService();
  const authContext = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartRefresh, setCartRefresh] = useState(false);

  useEffect(() => {
    cartService.getCart(authContext).then(items => setCartItems(items));
  }, [cartRefresh]);

  if (!cartItems.length) {
    return (
      <Section>
        <Container>
          <div className={"mt-8 md:mt-12"}>
            <Title className={"mb-2 text-3xl md:mb-1.5"}>Кошик</Title>
            <p className={"text-sm lg:font-extralight"}>
              {cartItems.length} товарів у кошику
            </p>
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
      <PostServiceProvider>
        <Container>
          <div className={"mb-40 mt-8 md:mt-12 lg:mb-64"}>
            <div className={"mb-12"}>
              <Title className={"mb-2 text-3xl md:mb-1.5"}>Кошик</Title>
              <p className={"text-sm lg:font-extralight"}>
                {cartItems.length} товарів у кошику
              </p>
            </div>
            <TotalPriceBlock
              hasTotalPrice={false}
              goods={cartItems}
            />
  
            <CartList goods={cartItems} cartRefresh={cartRefresh} setCartRefresh={setCartRefresh} trashAction={(id: number, authContext: any) => {cartService.deleteItemFromCart(id, authContext).then(() => {setCartRefresh(!cartRefresh)})}}/>
            <ButtonBase
              className={{
                button:
                  "mb-8 text-sm font-semibold underline underline-offset-2 transition-colors hover:text-tep_blue-500",
              }}
            >
              Видалити всі товари
            </ButtonBase>
            <div className={"flex flex-col"}>
              <TotalPriceBlock goods={cartItems}/>
              <Link href={PurchaseUrl.getAddress()} className={"self-end"}>
                <Button colorVariant={"black"} size={"super-large"}>
                  Оформити
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </PostServiceProvider>
    </Section>
  );
}
