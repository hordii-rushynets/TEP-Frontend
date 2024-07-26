import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Article, ArticleDefault } from 'app/company/blog/interfaces'; 
import { ArticleService } from 'app/company/blog/services';


interface ArticlesContextType {
  articles: Article[];
  number_of_pages: number;
  refreshArticles: (page: string) => void;
}

const ArticlesContext = createContext<ArticlesContextType | undefined>(undefined);

interface ArticlesProviderProps {
  children: ReactNode;
}

const APIurl = process.env.NEXT_PUBLIC_API_URL

export function ArticlesProvider({ children }: ArticlesProviderProps) {
  const [articles, setArticles] = useState<Article[]>([ArticleDefault]);
  const [number_of_pages, setNumberOfPages] = useState(1);
  const articleService = new ArticleService();
  const refreshArticles = (page: string) => {
    articleService.getArticles(page).then(articles => {setArticles(articles.results); })
  }

  useEffect(() => {
    articleService.getArticles("1").then(articles => {setArticles(articles.results); setNumberOfPages(Math.ceil(articles.count/articles.results.length));})
  }, []);

  return (
    <ArticlesContext.Provider value={{ articles, refreshArticles, number_of_pages }}>
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
