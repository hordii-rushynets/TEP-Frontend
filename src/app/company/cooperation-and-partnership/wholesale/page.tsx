import { ContentBlock } from "components/Company/ContentBlock";
import Conditions from "components/Company/Cooperation/Conditions";
import MainIMG from "components/Company/Cooperation/static/wholesale.png";
import { MainImageBlock } from "components/Company/MainImageBlock";
import Advantages from "components/Company/Cooperation/Advantages";
import { Container, Title } from "common/ui";

export default function PrivateLabelsPage() {
  return (
    <>
      <MainImageBlock image={MainIMG} title={"Гуртові продажі"} />
      <ContentBlock
        className={"pt-24"}
        image={""}
        title={"Про співпрацю"}
        text={[
          "Бренд перевірений часом – ТЕП, що відомий як якісний та доступний домашній текстиль на українському ринку. Ковдри, подушки або постільна білизна ТЕП є у кожній третій українській родині. ТЕП виник у момент заснування компанії в 1996 році і до сих пір є лідером ринку в Україні. ",
        ]}
        haveImage={false}
      />
      <Container>
        <Title size="2xl">Переваги працювати саме з нами:</Title>
      </Container>
      <Advantages />
      <Conditions />
    </>
  );
}
