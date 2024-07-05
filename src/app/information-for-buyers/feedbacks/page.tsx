import Link from "next/link";
import { Suspense } from "react";
import { FiPlus } from "react-icons/fi";
import { InfoUrl } from "route-urls";
import { isStr } from "utils/js-types";

import { Button, Container, Loader, Section, Title } from "common/ui";
import FeedbacksFiltersWithCategories from "components/Info/Feedbacks/FeedbacksFiltersWithCategories";
import { FeedbacksList } from "components/Info/Feedbacks/FeedbacksList";

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

  return (
    <>
      <Section className={"mb-[70px] mt-12"}>
        <Container>
          <div
            className={
              "flex flex-col items-start justify-between gap-x-6 gap-y-5 md:flex-row md:items-center"
            }
          >
            <Title className={"text-3xl"}>Відгуки</Title>
            <Link href={InfoUrl.getLeaveFeedback()}>
              <Button
                size={"small"}
                startIcon={<FiPlus className={"mb-0.5 size-4 stroke-[3px]"} />}
              >
                Залишити відгук
              </Button>
            </Link>
          </div>
        </Container>
      </Section>
      <Suspense fallback={<Loader />}>
        <FeedbacksFiltersWithCategories />
      </Suspense>
      <Suspense>
        <FeedbacksList category={category as string} page={activePageNum} />
      </Suspense>
    </>
  );
}
