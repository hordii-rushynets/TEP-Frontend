"use client";

import { Disclosure, DisclosureItem } from "common/Disclosure";
import { Container, Section, Title } from "common/ui";
import Link from "next/link";
import { InfoUrl, ServicesUrl } from "route-urls";

const content = [
  {
    title: "Послуги",
    links: [
      { url: ServicesUrl.getTracking(), text: "Відстежити замовлення" },
      { url: ServicesUrl.getDelivery(), text: "Послуги доставки" },
      { url: ServicesUrl.getGifts(), text: "Подарункові картки" },
    ],
  },
  {
    title: "Інформація для покупців",
    links: [
      { url: InfoUrl.getQuestionsAndAnswers(), text: "Питання та відповіді" },
      { url: InfoUrl.getFAQ(), text: "Інформація для покупців" },
      { url: InfoUrl.getProductReturn(), text: "Повернення товару" },
      { url: InfoUrl.getContactUs(), text: "Зв’язатись з нами" },
      { url: InfoUrl.getFeedbacks(), text: "Відгуки" },
      { url: InfoUrl.getCare(), text: "Догляд" },
    ],
  }
];

export function UsefullInfo() {
  return (
    <Section className={"mb-24"}>
      <Container>
        <div>
          <Title className={"mb-7"}>Корисна інформація</Title>
          <Disclosure>
            {content.map((item) => (
              <DisclosureItem
                key={item.title}
                trigger={
                  <Title component={"h4"} size={"xl"}>
                    {item.title}
                  </Title>
                }
              >
                <ul className={"flex flex-col gap-y-[18px]"}>
                  {item.links.map(i => 
                    <li>
                      <Link href={i.url} className={
                        "underline-offset-[3px] transition-colors hover:text-tep_blue-500 hover:underline"
                      }>{i.text}
                      </Link>
                    </li>
                  )}
                </ul>
              </DisclosureItem>
            ))}
            <Link href={ServicesUrl.getGifts()}>
              <DisclosureItem
                key={"Подарункові картки"}
                trigger={
                  <Title component={"h4"} size={"xl"}>
                    Подарункові картки
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
