"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import StaticData from "../locals/dataInterface";

export interface LocalizationContextType {
  localization: string;
  setLocalization: (value: string) => void;
  staticData: StaticData | null;
}

async function loadJSON(localization: string) {
    try {
      const module = await import(`../locals/${localization}/data.json`);
      return module.default;
    } catch (error) {
      console.error(`Error loading ${localization}/data.json:`, error);
      return null;
    }
  }

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

interface LocalizationProviderProps {
  children: ReactNode;
}

export const LocalizationProvider = ({ children }: LocalizationProviderProps) => {
  const [localization, setLocalization] = useState<string>("ua");
  const [staticData, setStaticData] = useState<StaticData | null>(null);

  useEffect(() => {
      async function fetchData() {
        const data = await loadJSON(localization);
        setStaticData(data);
      }
  
      fetchData();
  }, [localization]);

  return (
    <LocalizationContext.Provider value={{ localization, setLocalization, staticData }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = (): LocalizationContextType => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error('useLocalization must be used within an LocalizationProvider');
  }
  return context;
};
