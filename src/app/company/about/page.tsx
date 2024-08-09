"use client"

import { OurHistory } from "components/Company/About/OurHistory";
import Technologies from "components/Company/About/Technologies";
import Advantages from "components/Company/About/Advantages";
import AdvantagesIMG from "components/Company/About/static/advantages.jpg";
import DreamsIMG from "components/Company/About/static/dreams.jpg";
import GoalsIMG from "components/Company/About/static/goals.jpg";
import MainIMG from "components/Company/About/static/main-about.jpg";
import MissionIMG from "components/Company/About/static/mission.jpg";
import ProductionIMG from "components/Company/About/static/production.jpg";
import { ContentBlock } from "components/Company/ContentBlock";
import { ImageBlock } from "components/Company/ImageBlock";
import { MainImageBlock } from "components/Company/MainImageBlock";
import { useLocalization } from "contexts/LocalizationContext";

export default function Page() {
  const { staticData } = useLocalization();

  return (
    <>
      <MainImageBlock image={MainIMG} title={staticData.company.about.text1} />
      <ContentBlock
        className={"py-32"}
        text={[
          staticData.company.about.text2
        ]}
        title={staticData.company.about.text3}
        image={MissionIMG}
      />
      <OurHistory />
      <ImageBlock
        className={"mb-24"}
        size={"large"}
        image={DreamsIMG}
        description={
          staticData.company.about.text4
        }
      />
      <ContentBlock
        className={"mb-24"}
        title={staticData.company.about.text5}
        text={[
          staticData.company.about.text6
        ]}
        image={GoalsIMG}
      />
      <Advantages />
      <ImageBlock
        className={"mb-24"}
        size={"small"}
        image={AdvantagesIMG}
        description={
          ""
        }
      />
      <ContentBlock
        className={"mb-24 lg:mb-40"}
        title={staticData.company.about.text7}
        text={[
          staticData.company.about.text8
        ]}
        image={ProductionIMG}
      />
      <Technologies />
    </>
  );
}
