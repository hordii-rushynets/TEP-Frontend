"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { InfoUrl } from "route-urls";

import AnyQuestions from "common/AnyQuestions";
import { Button, Container, Section, Title } from "common/ui";

import { OrderStatusStage } from "./OrderStatusStage";
import { TrackingForm } from "./TrackingForm";
import { Stage } from "app/purchase/interfaces";
import { useLocalization } from "contexts/LocalizationContext";
import { PurchaseService } from "app/purchase/services";

export default function Tracking() {
  const [stages, setStages] = useState<Stage[] | undefined>();
  const { localization, staticData } = useLocalization();

  const purchaseService = new PurchaseService();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    purchaseService.getTracking(queryParams.get('order_id') || "").then(stages => setStages(stages));
  }, []);

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
            <TrackingForm onSending={setStages} />
            {!!stages?.length && (
              <>
                <div className={"mt-24"}>
                  {stages.map((stage, Idx) => {
                    const isLast = Idx === stages.length - 1;
                    return (
                      <OrderStatusStage
                        key={stage?.status_uk}
                        isLast={isLast}
                        isDone={!isLast}
                        date={new Date(stage.update_date)}
                        label={stage[`status_${localization}` as keyof Stage]}
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
