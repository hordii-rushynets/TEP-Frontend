import Conditions from "components/Company/Cooperation/Conditions";
import RedirectSection from "components/Company/Cooperation/RedirectSection";
import { CompanyUrl } from "route-urls";
import PrivateLabelsImage from "components/Company/Cooperation/static/private-labels.png";
import WhilesaleImage from "components/Company/Cooperation/static/wholesale.png";
import { Container, Title } from "common/ui";
import YouTubeEmbed from "components/Company/Cooperation/YouTubeEmbed";

export default function CooperationAndPartnershipPage() {
  return (
    <Container>
      <div className={"grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 my-[50px]"}>
        <RedirectSection photo={PrivateLabelsImage} title={"Приватні марки"} url={`${CompanyUrl.getCooperation()}/private-labels`}/>
        <RedirectSection photo={WhilesaleImage} title={"Гуртові продажі"} url={`${CompanyUrl.getCooperation()}/wholesale`}/>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 p-4">
          <Title>
            Хто ми
          </Title>
          <p className="text-sm my-[10px] font-light">Ми одна з найбільших  компаній домашнього текстилю в України<br/>
            Підприємство розташоване в безпечній частині України<br/>
            Маємо власне виробництво і сертифіковане, інноваційне обладнання<br/>
            Працюємо з 1996 року і маємо висококваліфіковану команду галузевих спеціалістів<br/>
            Використовуємо сучасні технології для забезпечення значних обсягів виробництва за дотримання високої якості продукції.<br/>
            Маємо сертифікацію OEKO-TEX Standard 100 - це система незалежних перевірок текстильної продукції на вміст шкідливих речовин.</p>
        </div>
        <div className="w-full lg:w-2/5 p-4 lg:ml-auto">
          <YouTubeEmbed videoId={"i-c9zJ1OH9A"} />
        </div>
      </div>
      <Conditions />
    </Container>
  );
}
