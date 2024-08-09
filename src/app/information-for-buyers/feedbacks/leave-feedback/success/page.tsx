"use client"

import { InfoUrl } from "route-urls";

import { Success } from "components/Forms/Success";
import { useLocalization } from "contexts/LocalizationContext";

export default function SuccessPage() {
  const { staticData } = useLocalization();

  return (
    <>
      <Success
        title={staticData.info_for_buyers.feedbackSuccessPage.title}
        description={staticData.info_for_buyers.feedbackSuccessPage.description}
        buttonTitle={staticData.info_for_buyers.feedbackSuccessPage.buttonTitle}
        url={InfoUrl.getFeedbacks()}
      />
    </>
  );
}
