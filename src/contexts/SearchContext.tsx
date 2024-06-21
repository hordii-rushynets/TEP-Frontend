"use client";

import { createContext, useContext, useState } from "react";

export type SearchContext = {
  searchQuery: string;
  setSearchQuery: (v: string) => void;
};

const defaultSearchValues = {
  searchQuery: "",
  setSearchQuery: () => {},
};

const SearchContext = createContext<SearchContext>(defaultSearchValues);

export type SearchProviderProps = {
  children?: React.ReactNode;
};

export function SearchProvider(props: SearchProviderProps) {
  const { children } = props;
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  return useContext(SearchContext);
}
