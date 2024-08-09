"use client"

import { Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export function BlogPlan() {
  const { staticData } = useLocalization();

  return (
    <div className={"mb-24 mt-12 bg-tep_gray-200 px-6 py-10 md:mt-16 md:px-10"}>
      <Title className={"mb-6 md:mb-4"}>{staticData.company.blog.blogPlan.text1}</Title>
      <ol
        className={
          "list flex list-inside list-decimal flex-col gap-y-2.5 pl-1 text-lg font-light md:text-xl"
        }
      >
        <li>{staticData.company.blog.blogPlan.text2}</li>
        <li>{staticData.company.blog.blogPlan.text3}</li>
        <li>{staticData.company.blog.blogPlan.text4}</li>
        <li>{staticData.company.blog.blogPlan.text5}</li>
        <li>{staticData.company.blog.blogPlan.text6}</li>
      </ol>
    </div>
  );
}
