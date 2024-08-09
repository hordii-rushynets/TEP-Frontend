"use client";

import { usePathname } from "next/navigation";
import { MainUrl, UserUrl } from "route-urls";

import { Breadcrumbs as BaseBreadcrumbs } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export function Breadcrumbs() {
  const pathname = usePathname();
  const { staticData } = useLocalization();

  const items = (() => {
    const base = [
      {
        name: staticData.account.breadcrumbs.text1,
        href: MainUrl.getHome(),
      },
      {
        name: staticData.account.breadcrumbs.text2,
        href: UserUrl._getRoot(),
      },
    ];

    switch (pathname) {
      case UserUrl.getOrderHistory():
        return [
          ...base,
          {
            name: staticData.account.breadcrumbs.text3,
            href: UserUrl.getOrderHistory(),
          },
        ];

      default:
        return [];
    }
  })();

  return <BaseBreadcrumbs items={items} />;
}
