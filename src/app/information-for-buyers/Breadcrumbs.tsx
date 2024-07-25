"use client";

import { useParams, usePathname } from "next/navigation";
import { InfoUrl, MainUrl } from "route-urls";

import { Breadcrumbs as BaseBreadcrumbs } from "common/ui";

import { qaa_categories } from "./questions-and-answers/_data";

export function Breadcrumbs() {
  const pathname = usePathname();
  const params = useParams();
  const slug = params.slug as string;

  const category = qaa_categories.find((c) => c.url === pathname)!;

  const items = (() => {
    const base = [
      {
        name: "Головна",
        href: MainUrl.getHome(),
      },
      {
        name: "Інформація для покупців",
        href: MainUrl.getInfoForBuyers(),
      },
    ];

    switch (pathname) {
      case InfoUrl.getContactUs():
        return [
          ...base,
          {
            name: "Зв’яжись з нами",
            href: InfoUrl.getContactUs(),
          },
        ];
      case InfoUrl.getContactUsRequest():
        return [
          ...base,
          {
            name: "Зв’яжись з нами",
            href: InfoUrl.getContactUs(),
          },
          {
            name: "Залишити заявку",
            href: InfoUrl.getContactUsRequest(),
          },
        ];
      case `${InfoUrl.getContactUsRequest()}/success`:
        return [
          ...base,
          {
            name: "Зв’яжись з нами",
            href: InfoUrl.getContactUs(),
          },
          {
            name: "Залишити заявку",
            href: InfoUrl.getContactUsRequest(),
          },
        ];
      case InfoUrl.getProductReturn():
        return [
          ...base,
          {
            name: "Повернення товару",
            href: InfoUrl.getProductReturn(),
          },
        ];
      case InfoUrl.getQuestionsAndAnswers():
        return [
          ...base,
          {
            name: "Питання та відповіді",
            href: InfoUrl.getQuestionsAndAnswers(),
          },
        ];
      case InfoUrl.getQAACategory(slug):
        return [
          ...base,
          {
            name: "Питання та відповіді",
            href: InfoUrl.getQuestionsAndAnswers(),
          },
          {
            name: "",
            href: InfoUrl.getQAACategory(slug),
          },
        ];
      case InfoUrl.getCare():
        return [
          ...base,
          {
            name: "Догляд за продукцією",
            href: InfoUrl.getCare(),
          },
        ];
      case InfoUrl.getFeedbacks():
        return [
          ...base,
          {
            name: "Відгуки",
            href: InfoUrl.getFeedbacks(),
          },
        ];
      case InfoUrl.getLeaveFeedback():
        return [
          ...base,
          {
            name: "Відгуки",
            href: InfoUrl.getFeedbacks(),
          },
          {
            name: "Залишити відгук",
            href: InfoUrl.getLeaveFeedback(),
          },
        ];
      case `${InfoUrl.getLeaveFeedback()}/success`:
        return [
          ...base,
          {
            name: "Відгуки",
            href: InfoUrl.getFeedbacks(),
          },
          {
            name: "Залишити відгук",
            href: InfoUrl.getLeaveFeedback(),
          },
        ];
      default:
        return [...base];
    }
  })();

  return <BaseBreadcrumbs items={items} />;
}
