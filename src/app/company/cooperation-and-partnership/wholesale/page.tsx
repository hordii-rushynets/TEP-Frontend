"use client"

import { ContentBlock } from "components/Company/ContentBlock";
import Conditions from "components/Company/Cooperation/Conditions";
import MainIMG from "components/Company/Cooperation/static/wholesale.png";
import { MainImageBlock } from "components/Company/MainImageBlock";
import Advantages from "components/Company/Cooperation/Advantages";
import { Container, Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export default function PrivateLabelsPage() {
  const { staticData } = useLocalization();

  return (
    <>
      <MainImageBlock image={MainIMG} title={staticData.company.cooperation.wholesale.text1} />
      <ContentBlock
        className={"pt-24"}
        image={""}
        title={staticData.company.cooperation.wholesale.text2}
        text={[
          staticData.company.cooperation.wholesale.text3
        ]}
        haveImage={false}
      />
      <Container>
        <Title size="2xl">{staticData.company.cooperation.wholesale.text4}:</Title>
      </Container>
      <Advantages />
      <Conditions />
    </>
  );
}
