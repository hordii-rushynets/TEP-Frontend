"use client";

import { useParams, usePathname } from "next/navigation";
import { InfoUrl, MainUrl } from "route-urls";

import { Breadcrumbs as BaseBreadcrumbs } from "common/ui";

import { qaa_categories } from "./questions-and-answers/_data";
import { useLocalization } from "contexts/LocalizationContext";

export function Breadcrumbs() {
  const pathname = usePathname();
  const params = useParams();
  const slug = params.slug as string;
  const { staticData } = useLocalization();

  const category = qaa_categories.find((c) => c.url === pathname)!;

  const items = (() => {
    const base = [
      {
        name: staticData.info_for_buyers.breadcrumbs.home,
        href: MainUrl.getHome(),
      },
      {
        name: staticData.info_for_buyers.breadcrumbs.infoForBuyers,
        href: MainUrl.getInfoForBuyers(),
      },
    ];

    switch (pathname) {
      case InfoUrl.getContactUs():
        return [
          ...base,
          {
            name: staticData.info_for_buyers.breadcrumbs.contactUs,
            href: InfoUrl.getContactUs(),
          },
        ];
      case InfoUrl.getContactUsRequest():
        return [
          ...base,
          {
            name: staticData.info_for_buyers.breadcrumbs.contactUs,
            href: InfoUrl.getContactUs(),
          },
          {
            name: staticData.info_for_buyers.breadcrumbs.leaveRequest,
            href: InfoUrl.getContactUsRequest(),
          },
        ];
      case `${InfoUrl.getContactUsRequest()}/success`:
        return [
          ...base,
          {
            name: staticData.info_for_buyers.breadcrumbs.contactUs,
            href: InfoUrl.getContactUs(),
          },
          {
            name: staticData.info_for_buyers.breadcrumbs.leaveRequest,
            href: InfoUrl.getContactUsRequest(),
          },
        ];
      case InfoUrl.getProductReturn():
        return [
          ...base,
          {
            name: staticData.info_for_buyers.breadcrumbs.productReturn,
            href: InfoUrl.getProductReturn(),
          },
        ];
      case InfoUrl.getQuestionsAndAnswers():
        return [
          ...base,
          {
            name: staticData.info_for_buyers.breadcrumbs.questionsAndAnswers,
            href: InfoUrl.getQuestionsAndAnswers(),
          },
        ];
      case InfoUrl.getQAACategory(slug):
        return [
          ...base,
          {
            name: staticData.info_for_buyers.breadcrumbs.questionsAndAnswers,
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
            name: staticData.info_for_buyers.breadcrumbs.care,
            href: InfoUrl.getCare(),
          },
        ];
      case InfoUrl.getFeedbacks():
        return [
          ...base,
          {
            name: staticData.info_for_buyers.breadcrumbs.feedbacks,
            href: InfoUrl.getFeedbacks(),
          },
        ];
      case InfoUrl.getLeaveFeedback():
        return [
          ...base,
          {
            name: staticData.info_for_buyers.breadcrumbs.feedbacks,
            href: InfoUrl.getFeedbacks(),
          },
          {
            name: staticData.info_for_buyers.breadcrumbs.leaveFeedback,
            href: InfoUrl.getLeaveFeedback(),
          },
        ];
      case `${InfoUrl.getLeaveFeedback()}/success`:
        return [
          ...base,
          {
            name: staticData.info_for_buyers.breadcrumbs.feedbacks,
            href: InfoUrl.getFeedbacks(),
          },
          {
            name: staticData.info_for_buyers.breadcrumbs.leaveFeedback,
            href: InfoUrl.getLeaveFeedback(),
          },
        ];
      default:
        return [...base];
    }
  })();

  return <BaseBreadcrumbs items={items} />;
}
