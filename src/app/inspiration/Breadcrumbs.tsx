"use client"

import { MainUrl } from "route-urls";

import { Breadcrumbs as BaseBreadcrumbs } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export function Breadcrumbs() {
  const { staticData } = useLocalization();

  return (
    <BaseBreadcrumbs
      items={[
        {
          name: staticData.inspiration.breadcrumbs.home,
          href: MainUrl.getHome(),
        },
        {
          name: staticData.inspiration.breadcrumbs.inspiration,
          href: MainUrl.getInspiration(),
        },
      ]}
    />
  );
}
