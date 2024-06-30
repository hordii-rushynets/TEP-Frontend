"use client";

import { createContext, useContext, useState } from "react";

export type CompareContext = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
};

const defaultCompareValues = {
  isOpen: false,
  setIsOpen: () => {},
};

const CompareContext = createContext<CompareContext>(defaultCompareValues);

export type CompareProviderProps = {
  children?: React.ReactNode;
};

export function CompareProvider(props: CompareProviderProps) {
  const { children } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <CompareContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompareContext() {
  return useContext(CompareContext);
}
