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
          name: staticData.novelty.breadcrumbs.home,
          href: MainUrl.getHome(),
        },
        {
          name: staticData.novelty.breadcrumbs.novelty,
          href: MainUrl.getNovelty(),
        },
      ]}
    />
  );
}
