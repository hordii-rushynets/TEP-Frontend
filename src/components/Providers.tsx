"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NextAdapterApp from "next-query-params/app";
import { QueryParamProvider } from "use-query-params";

import { BannerProvider } from "contexts/BannerContext";
import { CartProvider } from "contexts/CartContext";
import { CompareProvider } from "contexts/CompareContext";
import { FavouriteProvider } from "contexts/FavouriteContext";
import { SearchProvider } from "contexts/SearchContext";
import { AuthNotificationProvider } from "contexts/AuthNotificationContext";
import { NotificationProvider } from "contexts/NotificationContext";
import { AuthProvider } from "contexts/AuthContext";
import { LocalizationProvider } from "contexts/LocalizationContext";
import { CategoriesProvider } from "contexts/CategoriesContext";

export type ContextProvidersProps = {
  children: React.ReactNode;
};

export function Providers(props: ContextProvidersProps) {
  const client = new QueryClient();
  const { children } = props;
  return (
    <QueryParamProvider adapter={NextAdapterApp}>
      <QueryClientProvider client={client}>
        <LocalizationProvider>
          <NotificationProvider>
            <AuthNotificationProvider>
              <SearchProvider>
                <BannerProvider>
                  <FavouriteProvider>
                    <CompareProvider>
                      <AuthProvider>
                        <CartProvider>
                          <CategoriesProvider>
                            {children}
                          </CategoriesProvider>
                        </CartProvider>
                      </AuthProvider>
                    </CompareProvider>
                  </FavouriteProvider>
                </BannerProvider>
              </SearchProvider>
            </AuthNotificationProvider>
          </NotificationProvider>
        </LocalizationProvider>
      </QueryClientProvider>
    </QueryParamProvider>
  );
}
