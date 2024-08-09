"use client";

import { Disclosure, DisclosureItem } from "common/Disclosure";
import { Container, Section, Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";
import Link from "next/link";
import { InfoUrl, ServicesUrl } from "route-urls";

const content = [
  {
    links: [
      { url: ServicesUrl.getTracking() },
      { url: ServicesUrl.getDelivery() },
      { url: ServicesUrl.getGifts() },
    ],
  },
  {
    links: [
      { url: InfoUrl.getQuestionsAndAnswers() },
      { url: InfoUrl.getFAQ() },
      { url: InfoUrl.getProductReturn() },
      { url: InfoUrl.getContactUs()},
      { url: InfoUrl.getFeedbacks()},
      { url: InfoUrl.getCare()},
    ],
  }
];

export function UsefullInfo() {
  const { staticData } = useLocalization();

  return (
    <Section className={"mb-24"}>
      <Container>
        <div>
          <Title className={"mb-7"}>{staticData.home.usefulInfo.title}</Title>
          <Disclosure>
            {content.map((item, ind) => (
              <DisclosureItem
                key={ind}
                trigger={
                  <Title component={"h4"} size={"xl"}>
                    {staticData.home.usefulInfo.content[ind].title}
                  </Title>
                }
              >
                <ul className={"flex flex-col gap-y-[18px]"}>
                  {item.links.map((i, indx) => 
                    <li key={indx}>
                      <Link href={i.url} className={
                        "underline-offset-[3px] transition-colors hover:text-tep_blue-500 hover:underline"
                      }>{staticData.home.usefulInfo.content[ind].links[indx].text}
                      </Link>
                    </li>
                  )}
                </ul>
              </DisclosureItem>
            ))}
            <Link href={ServicesUrl.getGifts()}>
              <DisclosureItem
                key={staticData.home.usefulInfo.giftCards}
                trigger={
                  <Title component={"h4"} size={"xl"}>
                    {staticData.home.usefulInfo.giftCards}
                  </Title>
                }
              >
              </DisclosureItem>
              </Link>
          </Disclosure>
        </div>
      </Container>
    </Section>
  );
}
