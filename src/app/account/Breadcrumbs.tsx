"use client";

import { usePathname } from "next/navigation";
import { MainUrl, UserUrl } from "route-urls";

import { Breadcrumbs as BaseBreadcrumbs } from "common/ui";

export function Breadcrumbs() {
  const pathname = usePathname();

  const items = (() => {
    const base = [
      {
        name: "Головна",
        href: MainUrl.getHome(),
      },
      {
        name: "Профіль",
        href: UserUrl._getRoot(),
      },
    ];

    switch (pathname) {
      case UserUrl.getOrderHistory():
        return [
          ...base,
          {
            name: "Історія замовлень",
            href: UserUrl.getOrderHistory(),
          },
        ];

      default:
        return [];
    }
  })();

  return <BaseBreadcrumbs items={items} />;
}
