"use client";

import Link from "next/link";
import { useState } from "react";
import { InfoUrl } from "route-urls";

import AnyQuestions from "common/AnyQuestions";
import { Button, Container, Section, Title } from "common/ui";

import { OrderStatusStage } from "./OrderStatusStage";
import { TrackingForm } from "./TrackingForm";
import { useLocalization } from "contexts/LocalizationContext";

// function getOrderArticle(article: string) {...}

type OrderDeliveryStages = {
  label: string;
  date: Date;
  status: boolean;
};

const order_delivery_stages: OrderDeliveryStages[] = [
  {
    label: "Замовлення в обробці",
    date: new Date(),
    status: true,
  },
  {
    label: "Замовлення готове до відправки",
    date: new Date(),
    status: true,
  },
  {
    label: "Замовлення доставлено у відділення Нової пошти",
    date: new Date(),
    status: false,
  },
  {
    label: "Замовлення прибуло до вашого відділення",
    date: new Date(),
    status: false,
  },
  {
    label: "Замовлення доставлено",
    date: new Date(),
    status: false,
  },
  {
    label: "Замовлення протерміноване",
    date: new Date(),
    status: false,
  },
  {
    label: "Замовлення прямує до складу ТЕП",
    date: new Date(),
    status: false,
  },
  {
    label: "Замовлення прибуло до складу ТЕП",
    date: new Date(),
    status: false,
  },
];

export default function Tracking() {
  const [stages, setStages] = useState<OrderDeliveryStages[] | undefined>();
  const { staticData } = useLocalization();
  return (
    <>
      <Section className={"mb-24 lg:mb-40"}>
        <Container>
          <div className={"pt-8 md:pt-12"}>
            <div className={"mb-[72px]"}>
              <Title className={"mb-3.5 text-3xl"}>{staticData.services.tracking.title}</Title>
              <p
                className={
                  "max-w-[713px] text-sm leading-normal lg:font-extralight"
                }
              >
                {staticData.services.tracking.description}
              </p>
            </div>
            <TrackingForm onSending={() => setStages(order_delivery_stages)} />
            {!!stages?.length && (
              <>
                <div className={"mt-24"}>
                  {stages.map((stage, Idx) => {
                    const isLast = Idx === stages.length - 1;
                    return (
                      <OrderStatusStage
                        key={stage?.label}
                        isLast={isLast}
                        isDone={stage.status}
                        date={stage.date}
                        label={stage.label}
                      />
                    );
                  })}
                </div>
                <Link
                  href={InfoUrl.getLeaveFeedback()}
                  className={"mt-7 inline-block md:ml-7"}
                >
                  <Button size={"large"}>{staticData.services.tracking.leaveFeedback}</Button>
                </Link>
              </>
            )}
          </div>
        </Container>
      </Section>
      <AnyQuestions />
    </>
  );
}
