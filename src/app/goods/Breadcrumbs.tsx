"use client";

import { useParams, usePathname } from "next/navigation";
import { GoodsUrl, MainUrl } from "route-urls";

import { Breadcrumbs as BaseBreadcrumbs } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export function Breadcrumbs() {
  const pathname = usePathname();
  const params = useParams();
  const slug = params.slug as string;

  const { staticData } = useLocalization();

  const items = (() => {
    const base = [
      {
        name: staticData.goods.breadcrumbs.main,
        href: MainUrl.getHome(),
      },
      {
        name: staticData.goods.breadcrumbs.goods,
        href: MainUrl.getGoods(),
      },
    ];

    switch (pathname) {
      case GoodsUrl.getInterior():
        return [
          ...base,
          {
            name: staticData.goods.breadcrumbs.interior,
            href: GoodsUrl.getInterior(),
          },
        ];
      case GoodsUrl.getPillows():
        return [
          ...base,
          {
            name: staticData.goods.breadcrumbs.pillows,
            href: GoodsUrl.getPillows(),
          },
        ];
      case `${GoodsUrl.getPillows()}/${slug}`:
        return [
          ...base,
          {
            name: staticData.goods.breadcrumbs.pillows,
            href: `${GoodsUrl.getPillows()}/${slug}`,
          },
        ];
      case GoodsUrl.getBlankets():
        return [
          ...base,
          {
            name: staticData.goods.breadcrumbs.blankets,
            href: GoodsUrl.getBlankets(),
          },
        ];
      case `${GoodsUrl.getBlankets()}/${slug}`:
        return [
          ...base,
          {
            name: staticData.goods.breadcrumbs.blankets,
            href: `${GoodsUrl.getBlankets()}/${slug}`,
          },
        ];
      case GoodsUrl.getCovered():
        return [
          ...base,
          {
            name: staticData.goods.breadcrumbs.covered,
            href: GoodsUrl.getCovered(),
          },
        ];
      case `${GoodsUrl.getCovered()}/${slug}`:
        return [
          ...base,
          {
            name: staticData.goods.breadcrumbs.covered,
            href: `${GoodsUrl.getCovered()}/${slug}`,
          },
        ];
      case GoodsUrl.getLinens():
        return [
          ...base,
          {
            name: staticData.goods.breadcrumbs.linens,
            href: GoodsUrl.getLinens(),
          },
        ];
      case `${GoodsUrl.getLinens()}/${slug}`:
        return [
          ...base,
          {
            name: staticData.goods.breadcrumbs.linens,
            href: `${GoodsUrl.getLinens()}/${slug}`,
          },
        ];
      case GoodsUrl.getToppers():
        return [
          ...base,
          {
            name: staticData.goods.breadcrumbs.toppers,
            href: GoodsUrl.getToppers(),
          },
        ];
      case `${GoodsUrl.getToppers()}/${slug}`:
        return [
          ...base,
          {
            name: staticData.goods.breadcrumbs.toppers,
            href: `${GoodsUrl.getToppers()}/${slug}`,
          },
        ];
      case GoodsUrl.getSheets():
        return [
          ...base,
          {
            name: staticData.goods.breadcrumbs.sheets,
            href: GoodsUrl.getSheets(),
          },
        ];
      case `${GoodsUrl.getSheets()}/${slug}`:
        return [
          ...base,
          {
            name: staticData.goods.breadcrumbs.sheets,
            href: `${GoodsUrl.getSheets()}/${slug}`,
          },
        ];
      default:
        return [...base];
    }
  })();

  return <BaseBreadcrumbs items={items} className={"mb-12"} />;
}
