"use client";

import { usePathname } from "next/navigation";
import { MainUrl, ServicesUrl } from "route-urls";

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
        name: "Послуги",
        href: MainUrl.getServices(),
      },
    ];

    switch (pathname) {
      case ServicesUrl.getGifts():
        return [
          ...base,
          {
            name: "Подарункові картки",
            href: ServicesUrl.getGifts(),
          },
        ];
      case ServicesUrl.getDelivery():
        return [
          ...base,
          {
            name: "Послуги доставки",
            href: ServicesUrl.getDelivery(),
          },
        ];
      case ServicesUrl.getTracking():
        return [];
      default:
        return [...base];
    }
  })();

  return <BaseBreadcrumbs items={items} />;
}
