
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useLocalization } from './LocalizationContext';
import { Filter } from 'components/Filters/ProductsFilters';

// Типи для категорій
export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  filters: Filter[];
}

export const DefaultCategory = {
  id: "",
  slug: "",
  title: "",
  description: "",
  image: "",
  filters: [],
}


// Тип для значення контексту
interface CategoriesContextType {
  categories: Category[];
}

// Створення контексту з початковим значенням
const CategoriesContext = createContext<CategoriesContextType | undefined>(undefined);

// Тип для провайдера контексту
interface CategoriesProviderProps {
  children: ReactNode;
}

const APIurl = process.env.NEXT_PUBLIC_API_URL

// Створення провайдера контексту
export function CategoriesProvider({ children }: CategoriesProviderProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const { staticData } = useLocalization();

  async function fetchCategories() {
    const res = await fetch(`${APIurl}/api/store/categories/`);
    const data = await res.json();
    setCategories(data.map((category: any) => ({
      id: category.id,
      slug: category.slug,
      title: category[`title_${staticData.backendPostfix}` || "title"],
      description: category[`description_${staticData.backendPostfix}` || "description"],
      image: category.image,
      filters: category.filter
    })));
  }

  // Завантаження категорій при завантаженні компонента
  useEffect(() => {
    fetchCategories();
  }, []);

  // Повернення провайдера контексту з передачею значення
  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
}

// Хук для використання контексту
export function useCategories() {
  const context = useContext(CategoriesContext);
  if (!context) {
    throw new Error('useCategories must be used within a CategoriesProvider');
  }
  return context;
}
