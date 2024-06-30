import { ContentBlock } from "components/Company/ContentBlock";
import Advantages from "components/Company/Cooperation/Advantages";
import Conditions from "components/Company/Cooperation/Conditions";
import AboutCoIMG from "components/Company/Cooperation/static/about-cooperation.jpg";
import AdvantageIMG from "components/Company/Cooperation/static/advantage.jpg";
import MainIMG from "components/Company/Cooperation/static/cooperation.jpg";
import WhoWeAreIMG from "components/Company/Cooperation/static/who-we-are.jpg";
import { ImageBlock } from "components/Company/ImageBlock";
import { MainImageBlock } from "components/Company/MainImageBlock";

export default function CooperationAndPartnershipPage() {
  return (
    <>
      <MainImageBlock image={MainIMG} title={"Співпраця та партнерство"} />
      <ContentBlock
        className={"pt-24"}
        image={AboutCoIMG}
        title={"Про співпрацю"}
        text={[
          "Ми починали як невелика чернівецька компанія, що відправляє поштою замовлення через каталог і стали одним із найбільш відомих в Україні брендів текстильних товарів. Сьогодні у різних країнах починають працювати магазини ТЕП, і ми плануємо збільшити цю кількість. Дізнайтесь більше про нашу захопливу історію – з самого початку до сьогодення. Ми починали як невелика чернівецька компанія, що відправляє поштою замовлення через каталог і стали одним із найбільш відомих в Україні брендів текстильних товарів. Сьогодні у різних країнах починають працювати магазини ТЕП, і ми плануємо збільшити цю кількість. Дізнайтесь більше про нашу захопливу історію – з самого початку до сьогодення.",
        ]}
      />
      <Advantages />
      <ImageBlock image={AdvantageIMG} />
      <ContentBlock
        className={"pt-24"}
        image={WhoWeAreIMG}
        title={"Хто ми"}
        text={[
          "Ми починали як невелика чернівецька компанія, що відправляє поштою замовлення через каталог і стали одним із найбільш відомих в Україні брендів текстильних товарів. Сьогодні у різних країнах починають працювати магазини ТЕП, і ми плануємо збільшити цю кількість. Дізнайтесь більше про нашу захопливу історію – з самого початку до сьогодення. Ми починали як невелика чернівецька компанія, що відправляє поштою замовлення через каталог і стали одним із найбільш відомих в Україні брендів текстильних товарів. Сьогодні у різних країнах починають працювати магазини ТЕП, і ми плануємо збільшити цю кількість. Дізнайтесь більше про нашу захопливу історію – з самого початку до сьогодення.",
        ]}
      />
      <Conditions />
    </>
  );
}
