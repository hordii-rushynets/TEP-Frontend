import type { Metadata } from "next";
import localFont from "next/font/local";

import { Banner } from "common/Banner";
import { CartNotification } from "common/CartNotification";
import { FavouriteNotification } from "common/FavouriteNotification";
import { AuthorizationNotification } from "common/AuthorizationNotification";
import { Notification } from "common/Notification";
import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { Providers } from "components/Providers";
import { Promocode10Percent } from "components/Purchase/Promocode10Percent";
import { Wholesale10K } from "components/Purchase/Wholesale10K";
import { Wholesale100K } from "components/Purchase/Wholesale100K";

import "@smastrom/react-rating/style.css";

import "../styles/globals.css";
import GoogleAnalytics from "components/GoogleAnalytics";
import GoogleTagManager from "components/GoogleTagManager";
import MetaPixel from "components/MetaPixel";

export const dynamic = "force-dynamic";

const mont = localFont({
  src: [
    {
      path: "../styles/fonts/Mont-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../styles/fonts/Mont-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../styles/fonts/Mont-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../styles/fonts/Mont-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../styles/fonts/Mont-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--mont",
});

export const metadata: Metadata = {
  title: {
    default: "ТЕП",
    template: "%s | ТЕП",
  },
  description: "ТЕП",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE,
    yandex: 'yandex',
    yahoo: 'yahoo',
    other: {
      me: ['my-email', 'my-link'],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang={"uk"}
      className={`${mont.variable} h-full scroll-smooth text-black`}
    >
      <GoogleTagManager />
      <GoogleAnalytics />
      <MetaPixel />
      <body className={"relative h-full"}>
        <Providers>
          {/* <Banner /> */}
          <Notification />
          <AuthorizationNotification />
          <CartNotification />
          <FavouriteNotification />
          {/* <Wholesale10K />
          <Wholesale100K />
          <Promocode10Percent /> */}
          <div className={"flex h-full flex-col"}>
            <Header />
            <main className={"relative flex-1 pt-[147px] md:pt-[95px]"}>
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
