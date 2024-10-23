"use client"

import AnyQuestions from "common/AnyQuestions";
import { Container, Section, Title } from "common/ui";
import { ImageBlock } from "components/Company/ImageBlock";
import { MainImageBlock } from "components/Company/MainImageBlock";
import { AboutGiftCards } from "components/Services/Gifts/AboutGiftCards";
import { WantToBuy } from "components/Services/Gifts/WantToBuy";
import CoffeeIMG from "components/Services/Gifts/static/coffee.jpg";
import MainGiftsIMG from "components/Services/Gifts/static/gifts-image.jpg";
import { useLocalization } from "contexts/LocalizationContext";

export default function GiftsPage() {
  const { staticData } = useLocalization();

  return (
    <>
      <MainImageBlock image={MainGiftsIMG} title={staticData.services.giftsPage.text1} />
      <AboutGiftCards />
      <ImageBlock image={CoffeeIMG} />
      <Section>
        <Container>
          <div className={"py-24"}>
            <Title className={"mb-3.5"} size={"2xl"}>
            {staticData.services.giftsPage.text2}
            </Title>
            <ul
              className={
                "text-lg leading-[1.8] md:text-sm md:leading-relaxed lg:font-extralight"
              }
            >
              <li>
              {staticData.services.giftsPage.text3}
              </li>
              <li>
              {staticData.services.giftsPage.text4}
              </li>
              <li>
              {staticData.services.giftsPage.text5}
              </li>
              <li>{staticData.services.giftsPage.text6}</li>
              <li>
              {staticData.services.giftsPage.text7}
              </li>
              <li>
              {staticData.services.giftsPage.text8}
              </li>
              <li>{staticData.services.giftsPage.text9}</li>
            </ul>
          </div>
        </Container>
      </Section>
      <WantToBuy />
      <AnyQuestions title={staticData.services.giftsPage.anyQuestionsTitle} buttonSize={"large"} />
    </>
  );
}
