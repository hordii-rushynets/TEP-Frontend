"use client"

import AnyQuestions from "common/AnyQuestions";
import { Map } from "components/Company/Stores/Map";
import { StoresInfo } from "components/Company/Stores/StoresInfo";
import { useLocalization } from "contexts/LocalizationContext";

export default function StoresPage() {
  const { staticData } = useLocalization();

  return (
    <>
      <Map />
      <StoresInfo />
      <AnyQuestions title={staticData.company.stores.anyQuestionTitle} className={"pb-16"} buttonSize={"large"} />
    </>
  );
}
