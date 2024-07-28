"use client";

import { ProductWithVariant } from "app/goods/[category]/page";
import { createContext, useContext, useEffect, useState } from "react";

const APIurl = process.env.NEXT_PUBLIC_API_URL;

export type CompareContext = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  addProduct: (id: string) => void;
  removeProduct: (id: string) => void;
  products: ProductWithVariant[];
  isInCompare: (id: string) => boolean;
};

const defaultCompareValues = {
  isOpen: false,
  setIsOpen: () => {},
  addProduct: () => {},
  removeProduct: () => {},
  products: [],
  isInCompare: () => false,
};
 
const CompareContext = createContext<CompareContext>(defaultCompareValues);

export type CompareProviderProps = {
  children?: React.ReactNode;
};

export function CompareProvider(props: CompareProviderProps) {
  const { children } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductWithVariant[]>([]);
  const [ids, setIds] = useState<string[]>([]);

  const addProduct = (id: string) => {
    if (!ids.includes(id)) {
      setIds([...ids].concat(id));
    }
  }

  const removeProduct = (id: string) => {
    setIds([...ids].filter(Id => Id !== id));
  }

  const isInCompare = (id: string) => {
    return ids.includes(id)
  }

  useEffect(() => {
    if (ids.length !== 0) {
      fetch(`${APIurl}/api/store/compare/?ids=${ids.join(",")}`).then(
        response => {
          if (response.ok) { 
            return response.json();
          }
          else {
            throw new Error("Error fetching compare products " + response.statusText);
          }
        }
      ).then(
        products => {
          setProducts(products);
        }
      );
    }
    else {
      setProducts([]);
      setIsOpen(false);
    }

  }, [ids]);

  return (
    <CompareContext.Provider
      value={{
        isOpen,
        setIsOpen,
        addProduct,
        removeProduct,
        products,
        isInCompare,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompareContext() {
  return useContext(CompareContext);
}
