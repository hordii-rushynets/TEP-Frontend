"use client"

import Conditions from "components/Company/Cooperation/Conditions";
import RedirectSection from "components/Company/Cooperation/RedirectSection";
import { CompanyUrl } from "route-urls";
import PrivateLabelsImage from "components/Company/Cooperation/static/private-labels.png";
import WhilesaleImage from "components/Company/Cooperation/static/wholesale.png";
import { Container, Title } from "common/ui";
import YouTubeEmbed from "components/Company/Cooperation/YouTubeEmbed";
import { useLocalization } from "contexts/LocalizationContext";

export default function CooperationAndPartnershipPage() {
  const { staticData } = useLocalization();

  return (
    <Container>
      <div className={"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 my-[50px]"}>
        <RedirectSection photo={PrivateLabelsImage} title={staticData.company.cooperation.text1} url={`${CompanyUrl.getCooperation()}/private-labels`}/>
        <RedirectSection photo={WhilesaleImage} title={staticData.company.cooperation.text2} url={`${CompanyUrl.getCooperation()}/wholesale`}/>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 p-4">
          <Title>
            {staticData.company.cooperation.text3}
          </Title>
          <p className="text-sm my-[10px] font-light">{staticData.company.cooperation.text4}<br/>
          {staticData.company.cooperation.text5}<br/>
          {staticData.company.cooperation.text6}<br/>
          {staticData.company.cooperation.text7}<br/>
          {staticData.company.cooperation.text8}<br/>
          {staticData.company.cooperation.text9}</p>
        </div>
        <div className="w-full lg:w-2/5 p-4 lg:ml-auto">
          <YouTubeEmbed videoId={"i-c9zJ1OH9A"} />
        </div>
      </div>
      <Conditions />
    </Container>
  );
}
