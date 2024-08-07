"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import StaticData from "../locals/dataInterface";
import data from "../locals/uk/data"
import local from 'next/font/local';

export interface LocalizationContextType {
  localization: string;
  setLocalization: (value: string) => void;
  staticData: any;
}

async function loadJSON(localization: string) {
    try {
      const module = await import(`../locals/${localization}/data.js`);
      return module.default;
    } catch (error) {
      console.error(`Error loading ${localization}/data.js:`, error);
      return null;
    }
  }

const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

interface LocalizationProviderProps {
  children: ReactNode;
}

export const LocalizationProvider = ({ children }: LocalizationProviderProps) => {
  const [localization, setLocalization] = useState<string>("");
  const [staticData, setStaticData] = useState<any>(data);

  useEffect(() => {
    const userLanguage = localStorage.getItem("TEPlocals") || navigator.language.split("-")[0] || "uk"
    setLocalization(userLanguage);
  }, [])

  useEffect(() => {
    async function fetchData() {
      const data: any = await loadJSON(localization);
      setStaticData(data);
    }
    if (localization !== "") {
      localStorage.setItem("TEPlocals", localization)
  
      fetchData();
    }
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
