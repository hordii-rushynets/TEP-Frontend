"use client";

import { createContext, useContext, useState } from "react";

export type FavouriteContext = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  title: string;
  setTitle: (v: string) => void;
};

const defaultFavouriteValues = {
  isOpen: false,
  setIsOpen: () => {},
  title: "",
  setTitle: () => {},
};

const FavouriteContext = createContext<FavouriteContext>(
  defaultFavouriteValues,
);

export type FavouriteProviderProps = {
  children?: React.ReactNode;
};

export function FavouriteProvider(props: FavouriteProviderProps) {
  const { children } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle] = useState("");

  return (
    <FavouriteContext.Provider
      value={{
        isOpen,
        title,
        setIsOpen,
        setTitle,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}

export function useFavouriteContext() {
  return useContext(FavouriteContext);
}
