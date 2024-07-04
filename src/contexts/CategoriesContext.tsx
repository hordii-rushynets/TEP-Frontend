
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Типи для категорій
export interface Category {
  id: number;
  slug: string;
  title_uk: string;
  title_en: string;
  description_uk: string;
  description_en: string;
  image: string;
}

export const DefaultCategory = {
  id: 0,
  slug: "",
  title_uk: "",
  title_en: "",
  description_uk: "",
  description_en: "",
  image: ""
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

  async function fetchCategories() {
    const res = await fetch(`${APIurl}/api/store/categories/`);
    const data = await res.json();
    setCategories(data);
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
