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

export default function Page() {
  return (
    <>
      <MainImageBlock image={MainIMG} title={"Бренд ТЕП"} />
      <ContentBlock
        className={"py-32"}
        text={[
          "Наша місія - нести затишок і тепло в дім – місце, де комфортно та можна бути собою. Назва ТЕП походить від слова \"тепло\" (укр.). Наші цінності: тепло рідного дому, вдячність, сім’я, здоров’я, турбота та гармонія.",
        ]}
        title={"Місія та бренд ідея"}
        image={MissionIMG}
      />
      <OurHistory />
      <ImageBlock
        className={"mb-24"}
        size={"large"}
        image={DreamsIMG}
        description={
          "Будь собою та поводься справжньо, здійснюй будь-які мрії, ти зможеш і ніхто тебе не зупинить. Постіль — місце сили для справжнього тебе із власними мріями!"
        }
      />
      <ContentBlock
        className={"mb-24"}
        title={"Наші цілі та мрії"}
        text={[
          "Ми дбаємо про те, щоб створювати для клієнта найкомфортніші умови відпочинку. Наша мета — допомогти нашому аватару створити найліпше місце відпочинку, в якому людина зможе відчути себе справжньою та наповненою силю Ми хочемо, щоб ви любили, насолоджувалися життям, здійснювали мрії та були щасливі.",
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
        title={"Виробництво"}
        text={[
          "Досвідчені працівники Balakkom дійсно люблять домашній текстиль. Ми піклуємось про екологічність продукції, що виготовляємо, і маємо сертифікацію OEKO-TEX Standard 100. Балакком використовує безпечні технології виробництва та сучасне устаткування. Для нас важливе самопочуття і добробут кожного клієнта та працівника. Ми підтримуємо відповідальне виробництво і споживання, а наші вироби – довговічні і стійкі до зношування. Турбота про довкілля та думка про майбутні покоління дають нам наснагу і натхнення розвиватись безпечно та відповідально, впроваджуючи нові тенденції сталого розвитку.",
        ]}
        image={ProductionIMG}
      />
      <Technologies />
    </>
  );
}
