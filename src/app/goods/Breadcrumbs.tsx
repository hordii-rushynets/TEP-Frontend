"use client";

import { useParams, usePathname } from "next/navigation";
import { GoodsUrl, MainUrl } from "route-urls";

import { Breadcrumbs as BaseBreadcrumbs } from "common/ui";

export function Breadcrumbs() {
  const pathname = usePathname();
  const params = useParams();
  const slug = params.slug as string;

  const items = (() => {
    const base = [
      {
        name: "Головна",
        href: MainUrl.getHome(),
      },
      {
        name: "Товари",
        href: MainUrl.getGoods(),
      },
    ];

    switch (pathname) {
      case GoodsUrl.getInterior():
        return [
          ...base,
          {
            name: "Фото в інтер’єрі",
            href: GoodsUrl.getInterior(),
          },
        ];
      case GoodsUrl.getPillows():
        return [
          ...base,
          {
            name: "Подушки",
            href: GoodsUrl.getPillows(),
          },
        ];
      case `${GoodsUrl.getPillows()}/${slug}`:
        return [
          ...base,
          {
            name: "Подушки",
            href: `${GoodsUrl.getPillows()}/${slug}`,
          },
        ];
      case GoodsUrl.getBlankets():
        return [
          ...base,
          {
            name: "Ковдри",
            href: GoodsUrl.getBlankets(),
          },
        ];
      case `${GoodsUrl.getBlankets()}/${slug}`:
        return [
          ...base,
          {
            name: "Ковдри",
            href: `${GoodsUrl.getBlankets()}/${slug}`,
          },
        ];
      case GoodsUrl.getCovered():
        return [
          ...base,
          {
            name: "Покривала",
            href: GoodsUrl.getCovered(),
          },
        ];
      case `${GoodsUrl.getCovered()}/${slug}`:
        return [
          ...base,
          {
            name: "Покривала",
            href: `${GoodsUrl.getCovered()}/${slug}`,
          },
        ];
      case GoodsUrl.getLinens():
        return [
          ...base,
          {
            name: "Постільна білизна",
            href: GoodsUrl.getLinens(),
          },
        ];
      case `${GoodsUrl.getLinens()}/${slug}`:
        return [
          ...base,
          {
            name: "Постільна білизна",
            href: `${GoodsUrl.getLinens()}/${slug}`,
          },
        ];
      case GoodsUrl.getToppers():
        return [
          ...base,
          {
            name: "Наматрацники",
            href: GoodsUrl.getToppers(),
          },
        ];
      case `${GoodsUrl.getToppers()}/${slug}`:
        return [
          ...base,
          {
            name: "Наматрацники",
            href: `${GoodsUrl.getToppers()}/${slug}`,
          },
        ];
      case GoodsUrl.getSheets():
        return [
          ...base,
          {
            name: "Простирадла",
            href: GoodsUrl.getSheets(),
          },
        ];
      case `${GoodsUrl.getSheets()}/${slug}`:
        return [
          ...base,
          {
            name: "Простирадла",
            href: `${GoodsUrl.getSheets()}/${slug}`,
          },
        ];
      default:
        return [...base];
    }
  })();

  return <BaseBreadcrumbs items={items} className={"mb-12"} />;
}
