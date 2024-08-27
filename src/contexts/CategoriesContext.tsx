
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocalization } from './LocalizationContext';
import { DynamicFilter } from 'components/Filters/ProductsFilters';

export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  filter: DynamicFilter[];
}

export const DefaultCategory = {
  id: "",
  slug: "",
  title: "",
  description: "",
  image: "",
  filter: [],
}

interface CategoriesContextType {
  categories: Category[];
}

const CategoriesContext = createContext<CategoriesContextType | undefined>(undefined);

interface CategoriesProviderProps {
  children: ReactNode;
}

const APIurl = process.env.NEXT_PUBLIC_API_URL

export function CategoriesProvider({ children }: CategoriesProviderProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const { localization } = useLocalization();

  async function fetchCategories() {
    const res = await fetch(`${APIurl}/api/store/categories/`);
    const data = await res.json();
    setCategories(data.map((category: any) => {
      return {
      id: category.id,
      slug: category.slug,
      title: category[`title_${localization}`],
      description: category[`description_${localization}`],
      image: category.image,
      filters: category.filter
    }}));
  }

  useEffect(() => {
    fetchCategories();
  }, [localization]);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
}

export function useCategories() {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error('useCategories must be used within a CategoriesProvider');
  }
  return context;
}
