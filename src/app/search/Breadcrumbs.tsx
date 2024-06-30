import { MainUrl } from "route-urls";

import { Breadcrumbs as BaseBreadcrumbs } from "common/ui";

export function Breadcrumbs() {
  return (
    <BaseBreadcrumbs
      items={[
        {
          name: "Головна",
          href: MainUrl.getHome(),
        },
        {
          name: "Результати пошуку",
          href: MainUrl.getSearch(),
        },
      ]}
    />
  );
}
