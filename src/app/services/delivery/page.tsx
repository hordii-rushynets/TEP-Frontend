import AnyQuestions from "common/AnyQuestions";
import { Container, Section, Title } from "common/ui";
import { MainImageBlock } from "components/Company/MainImageBlock";
import { NovaPost } from "components/Services/Delivery/NovaPost";
import DeliveryIMG from "components/Services/Delivery/static/delivery.jpg";

export default function Page() {
  return (
    <>
      <MainImageBlock image={DeliveryIMG} title={"Послуги доставки"} />
      <Section>
        <Container>
          <div className={"pb-16 pt-24 md:pb-24"}>
            <Title className={"mb-6 text-3xl md:text-2xl"}>Про послуги</Title>
            <p
              className={
                "max-w-[613px] text-lg leading-normal md:text-sm lg:max-w-[812px] lg:font-extralight"
              }
            >
              Більшість наших товарів мають пласку упаковку, а їхній дизайн
              дозволяє легко транспортувати їх самотужки. Втім, якщо бажаєш
              скористатися послугами доставки, обери один із зручних варіантів.
            </p>
          </div>
        </Container>
      </Section>
      <NovaPost />
      <AnyQuestions className={"lg:pb-40"} />
    </>
  );
}
