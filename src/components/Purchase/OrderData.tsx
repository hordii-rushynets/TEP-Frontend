"use client"

import Link from "next/link";
import { PurchaseUrl } from "route-urls";

import { Button, ButtonBase, Container, Section, Title } from "common/ui";
import { CartList } from "components/User/Cart/CartList";
import { TotalPriceBlock } from "components/User/Cart/TotalPriceBlock";

import { CartService } from "app/account/cart/services";
import { CartItem } from "app/account/cart/interfaces";
import { useAuth } from "contexts/AuthContext";
import { useState, useEffect } from "react";

export function OrderData() {
  const cartService = new CartService();
  const authContext = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartRefresh, setCartRefresh] = useState(false);

  useEffect(() => {
    cartService.getCart(authContext).then(items => setCartItems(items));
  }, [cartRefresh]);

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
