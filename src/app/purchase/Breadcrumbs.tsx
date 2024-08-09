"use client";

import { usePathname } from "next/navigation";
import { PurchaseUrl } from "route-urls";

import { PurchaseBreadcrumbs as BaseBreadcrumbs } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export function Breadcrumbs() {
  const pathname = usePathname();

  const { staticData } = useLocalization();

  const items = (() => {
    const stages = staticData.purchase.stages;
    switch (pathname) {
      case PurchaseUrl.getAddress():
        return {
          stages,
          index: 1,
        };

      case PurchaseUrl.getDelivery():
        return {
          stages,
          index: 2,
        };
      case PurchaseUrl.getOrderData():
        return {
          stages,
          index: 3,
        };
      case PurchaseUrl.getPayment():
        return {
          stages,
          index: 4,
        };
      case PurchaseUrl.getConfirmation():
        return {
          stages,
          index: 5,
        };
      default:
        return {
          stages,
          index: 5,
        };
    }
  })();

  return <BaseBreadcrumbs items={items} />;
}
