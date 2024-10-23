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
          name: staticData.sales.breadcrumbs.main,
          href: MainUrl.getHome(),
        },
        {
          name: staticData.sales.breadcrumbs.sales,
          href: MainUrl.getSales(),
        },
      ]}
    />
  );
}
