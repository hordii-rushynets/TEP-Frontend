"use client"

import { Title } from "common/ui";
import { Socials } from "components/Socials";
import { useLocalization } from "contexts/LocalizationContext";

type AuthorDetailsProps = {
  author: string;
  date: string;
  socialLinks?: Socials;
};

export function AuthorDetails({
  author,
  date,
  socialLinks,
}: AuthorDetailsProps) {
  const { staticData } = useLocalization();

  return (
    <div
      className={
        "flex flex-col flex-wrap justify-between gap-x-4 gap-y-6 border-b border-tep_gray-200 pb-12 md:flex-row md:pb-8"
      }
    >
      <div className={"order-1"}>
        <div className={"mb-4 lg:font-extralight"}>{staticData.company.blog.authorDetails.text1}</div>
        <Title component={"h5"} size={"2xl"}>
          {author}
        </Title>
      </div>
      <div className={"order-3 flex gap-x-7 md:order-2"}>
        <div className={"flex-1"}>
          <div className={"mb-4 whitespace-nowrap lg:font-extralight"}>
          {staticData.company.blog.authorDetails.text2}
          </div>
          <div className={"whitespace-nowrap font-bold"}>{date}</div>
        </div>
        <div className={"flex-1"}>
          <div className={"mb-4 whitespace-nowrap lg:font-extralight"}>
          {staticData.company.blog.authorDetails.text3}
          </div>
          <div className={"whitespace-nowrap font-bold"}>{staticData.company.blog.authorDetails.text4}</div>
        </div>
      </div>
      <Socials
        links={socialLinks}
        className={
          "order-2 mb-6 md:order-3 md:mb-0 md:basis-full lg:hidden lg:basis-auto"
        }
      />
    </div>
  );
}
