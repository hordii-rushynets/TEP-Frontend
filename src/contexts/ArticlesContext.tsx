import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Article, ArticleDefault } from 'app/company/blog/interfaces'; 
import { ArticleService } from 'app/company/blog/services';


interface ArticlesContextType {
  articles: Article[];
}

const ArticlesContext = createContext<ArticlesContextType | undefined>(undefined);

interface ArticlesProviderProps {
  children: ReactNode;
}

const APIurl = process.env.NEXT_PUBLIC_API_URL

export function ArticlesProvider({ children }: ArticlesProviderProps) {
  const [articles, setArticles] = useState<Article[]>([ArticleDefault]);
  const articleService = new ArticleService();

  useEffect(() => {
    articleService.getArticles().then(articles => {setArticles(articles)})
  }, []);

  return (
    <ArticlesContext.Provider value={{ articles }}>
      {children}
    </ArticlesContext.Provider>
  );
}

export function useArticles() {
  const context = useContext(ArticlesContext);
  if (!context) {
    throw new Error('useArticles must be used within a ArticlesProvider');
  }
  return context;
}
