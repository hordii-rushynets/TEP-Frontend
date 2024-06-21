import AnyQuestions from "common/AnyQuestions";
import { Container, Section, Title } from "common/ui";
import { ImageBlock } from "components/Company/ImageBlock";
import { MainImageBlock } from "components/Company/MainImageBlock";
import { AboutGiftCards } from "components/Services/Gifts/AboutGiftCards";
import { WantToBuy } from "components/Services/Gifts/WantToBuy";
import CoffeeIMG from "components/Services/Gifts/static/coffee.jpg";
import MainGiftsIMG from "components/Services/Gifts/static/gifts-image.jpg";

export default function GiftsPage() {
  return (
    <>
      <MainImageBlock image={MainGiftsIMG} title={"Подарункові картки"} />
      <AboutGiftCards />
      <ImageBlock image={CoffeeIMG} />
      <Section>
        <Container>
          <div className={"py-24"}>
            <Title className={"mb-3.5"} size={"2xl"}>
              Вже маєш подарункову картку?
            </Title>
            <ul
              className={
                "text-lg leading-[1.8] md:text-sm md:leading-relaxed lg:font-extralight"
              }
            >
              <li>
                - На картку можна зарахувати будь-яку суму від 100 до 15000
                гривень.
              </li>
              <li>
                - Карткою можна користуватися поки вся сума не буде витрачена.
              </li>
              <li>
                - Термін придатності подарункової картки становить 3 роки.
              </li>
              <li>- ТЕП не може замінити втрачену або викрадену картку.</li>
              <li>
                - Кошти за товари, оплачені подарунковою картою, повертаються
                виключно на карту відшкодування ТЕП.
              </li>
              <li>
                - Подарункову карту можна використаи виключно у фізичному
                магазині ТЕП на території України.
              </li>
              <li>- Подарункова карта не підлягає поверненню.</li>
            </ul>
          </div>
        </Container>
      </Section>
      <WantToBuy />
      <AnyQuestions buttonSize={"large"} />
    </>
  );
}
