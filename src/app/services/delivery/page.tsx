import AnyQuestions from "common/AnyQuestions";
import { Container, Section, Title } from "common/ui";
import { MainImageBlock } from "components/Company/MainImageBlock";
import { NovaPost } from "components/Services/Delivery/NovaPost";
import DeliveryIMG from "components/Services/Delivery/static/delivery.jpg";
import { UkrPost } from "components/Services/Delivery/UkrPost";

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
              Доставка по Україні здійснюється транспортними компаніями Нова Пошта та Укрпошта.<br/>
            Послуги за доставку замовлення сплачує покупець, згідно з тарифами компанії перевізника. <br/>
            Відправлення товару відбувається протягом 1-3 робочих днів з мoменту оформлення замовлення. <br/>
            Доставка замовлення займає від 1-3 робочих днів при виборі доставки у відділення компаніі перевізника, та до 5 робочих днів - при замовленні кур'єрської доставки транспортної компанії. З нашого боку ми зробимо усе можливе, щоб доставити ваше замовлення якнайшвидше.<br/>
            Якщо загальна вартість замовлення складає 3500 грн, доставкадо відділення Нової пошти та Укрпошти здійснюється безкоштовно (за умови повної оплати замовлення).<br/>
            </p>
          </div>
        </Container>
      </Section>
      <NovaPost />
      <UkrPost />
      <AnyQuestions className={"lg:pb-40"} />
    </>
  );
}
