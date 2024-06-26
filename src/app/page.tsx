import { BackStickyButton } from "components/BackStickyButton";
import { HelpButton } from "components/HelpButton";
import { AllAboutTep } from "components/Home/AllAboutTep/AllAboutTep";
import { Hero } from "components/Home/Hero";
import { Inspiration } from "components/Home/Inspiration/Inspiration";
import { MoreOffers } from "components/Home/MoreOffers/MoreOffers";
import { Popular } from "components/Home/Popular/Popular";
import { Presentation } from "components/Home/Presentation";
import { Recomendations } from "components/Home/Recomendations/Recomendations";
import { UsefullInfo } from "components/Home/UsefullInfo";
import { WithColorFillingBlock } from "components/WithColorFillingBlock";

export default function Home() {
  return (
    <>
      <Hero />
      <Presentation />
      <Recomendations />
      <MoreOffers />
      <WithColorFillingBlock />
      <Popular />
      <UsefullInfo />
      <AllAboutTep />
      <Inspiration />
      <BackStickyButton />
      <HelpButton />
    </>
  );
}
