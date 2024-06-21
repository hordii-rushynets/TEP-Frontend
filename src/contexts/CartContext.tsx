"use client";

import { createContext, useContext, useState } from "react";

export type CartContext = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  title: string;
  setTitle: (v: string) => void;
};

const defaultCartValues = {
  isOpen: false,
  setIsOpen: () => {},
  title: "",
  setTitle: () => {},
};

const CartContext = createContext<CartContext>(defaultCartValues);

export type CartProviderProps = {
  children?: React.ReactNode;
};

export function CartProvider(props: CartProviderProps) {
  const { children } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState("");

  return (
    <CartContext.Provider
      value={{
        isOpen,
        title,
        setIsOpen,
        setTitle,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
