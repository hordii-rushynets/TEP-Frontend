import AnyQuestions from "common/AnyQuestions";
import { Map } from "components/Company/Stores/Map";
import { StoresInfo } from "components/Company/Stores/StoresInfo";

export default function StoresPage() {
  return (
    <>
      <Map />
      <StoresInfo />
      <AnyQuestions className={"pb-16"} buttonSize={"large"} />
    </>
  );
}
