"use client";

import { usePathname } from "next/navigation";
import { MainUrl, ServicesUrl } from "route-urls";

import { Breadcrumbs as BaseBreadcrumbs } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export function Breadcrumbs() {
  const pathname = usePathname();

  const { staticData } = useLocalization();

  const items = (() => {
    const base = [
      {
        name: staticData.services.breadcrumbs.home,
        href: MainUrl.getHome(),
      },
      {
        name: staticData.services.breadcrumbs.services,
        href: MainUrl.getServices(),
      },
    ];

    switch (pathname) {
      case ServicesUrl.getGifts():
        return [
          ...base,
          {
            name: staticData.services.breadcrumbs.gifts,
            href: ServicesUrl.getGifts(),
          },
        ];
      case ServicesUrl.getDelivery():
        return [
          ...base,
          {
            name: staticData.services.breadcrumbs.delivery,
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
