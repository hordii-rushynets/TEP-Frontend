import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Article, ArticleDefault } from 'app/company/blog/interfaces'; 
import { ArticleService } from 'app/company/blog/services';


// Тип для значення контексту
interface ArticlesContextType {
  articles: Article[];
}

// Створення контексту з початковим значенням
const ArticlesContext = createContext<ArticlesContextType | undefined>(undefined);

// Тип для провайдера контексту
interface ArticlesProviderProps {
  children: ReactNode;
}

const APIurl = process.env.NEXT_PUBLIC_API_URL

// Створення провайдера контексту
export function ArticlesProvider({ children }: ArticlesProviderProps) {
  const [articles, setArticles] = useState<Article[]>([ArticleDefault]);
  const articleService = new ArticleService();

  // Завантаження категорій при завантаженні компонента
  useEffect(() => {
    articleService.getArticles().then(articles => {setArticles(articles)})
  }, []);

  // Повернення провайдера контексту з передачею значення
  return (
    <ArticlesContext.Provider value={{ articles }}>
      {children}
    </ArticlesContext.Provider>
  );
}

// Хук для використання контексту
export function useArticles() {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error('useArticles must be used within a ArticlesProvider');
  }
  return context;
}
