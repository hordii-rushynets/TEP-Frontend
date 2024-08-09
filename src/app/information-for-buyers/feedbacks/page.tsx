"use client"

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { InfoUrl } from "route-urls";
import { isStr } from "utils/js-types";

import { Button, Container, Loader, Section, Title } from "common/ui";
import FeedbacksFiltersWithCategories from "components/Info/Feedbacks/FeedbacksFiltersWithCategories";
import { FeedbacksList } from "components/Info/Feedbacks/FeedbacksList";
import { Feedback } from "./interfaces";
import { FeedbackService } from "./services";
import { useAuth } from "contexts/AuthContext";
import { useLocalization } from "contexts/LocalizationContext";

export type SearchParams = {
  [key: string]: string | string[] | undefined;
};
export default function FeedbacksPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { category, page } = searchParams;

  let activePageNum = 1;
  if (isStr(page)) activePageNum = parseInt(page);

  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [refresh, setRefresh] = useState(false);
  const feedbackService = new FeedbackService();
  const authContext = useAuth();
  const { staticData } = useLocalization();

  const handleRefresh = () => {
    setRefresh(!refresh);
  }

  useEffect(() => {
    feedbackService.getFeedbacks({"category": category?.toString() || ""}, authContext).then(data => setFeedbacks(data));
  }, [category, refresh]);

  return (
    <>
      <Section className={"mb-[70px] mt-12"}>
        <Container>
          <div
            className={
              "flex flex-col items-start justify-between gap-x-6 gap-y-5 md:flex-row md:items-center"
            }
          >
            <Title className={"text-3xl"}>{staticData.info_for_buyers.feedbacksPage.title}</Title>
            <Link href={InfoUrl.getLeaveFeedback()}>
              <Button
                size={"small"}
                startIcon={<FiPlus className={"mb-0.5 size-4 stroke-[3px]"} />}
              >
                {staticData.info_for_buyers.feedbacksPage.leaveFeedback}
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
      <Suspense fallback={<Loader />}>
        <FeedbacksFiltersWithCategories />
      </Suspense>
      <Suspense>
        <FeedbacksList category={category as string} page={activePageNum} feedbacks={feedbacks} refresh={handleRefresh}/>
      </Suspense>
    </>
  );
}
