"use client";

import { createContext, useContext, useState } from "react";

export type BannerContext = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
};

const defaultBannerValues = {
  isOpen: false,
  setIsOpen: () => {},
};

const BannerContext = createContext<BannerContext>(defaultBannerValues);

export type BannerProviderProps = {
  children?: React.ReactNode;
};

export function BannerProvider(props: BannerProviderProps) {
  const { children } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <BannerContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </BannerContext.Provider>
  );
}

export function useBannerContext() {
  return useContext(BannerContext);
}
