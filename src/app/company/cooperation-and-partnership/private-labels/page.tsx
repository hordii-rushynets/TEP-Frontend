import { ContentBlock } from "components/Company/ContentBlock";
import Conditions from "components/Company/Cooperation/Conditions";
import MainIMG from "components/Company/Cooperation/static/private-labels.png";
import ErasedImage from "components/Company/Cooperation/static/erased-image.png";
import CottonImage from "components/Company/Cooperation/static/cotton.png";
import PackingImage from "components/Company/Cooperation/static/private-labels-banner1.png";
import CertificateImage from "components/Company/Cooperation/static/private-labels-banner2.png";
import { ImageBlock } from "components/Company/ImageBlock";
import { MainImageBlock } from "components/Company/MainImageBlock";
import { ImageSquare } from "common/ImageSquare";
import { Button, Container, Section, Title } from "common/ui";
import { OrderStatusStage } from "components/Services/OrderStatusStage";
import Image from "next/image";
import { cn } from "utils/cn";
import Link from "next/link";

const stages = [
  {
    label: "Заявка на створення специфікацію продукту",
    status: true
  },
  {
    label: "Попередній прорахунок вартості",
    status: false
  },
  {
    label: "Погодження візуалу продукта та його упаквання",
    status: false
  },
  {
    label: "Узгодження замовлення",
    status: false
  },
  {
    label: "Внесення авансу",
    status: false
  },
  {
    label: "Запуск у виробництво",
    status: false
  },
  {
    label: "Замовлення прямує до складу ТЕП",
    status: false
  },
  {
    label: "Усі задоволенні",
    status: false
  },
]

export default function PrivateLabelsPage() {
  return (
    <>
      <MainImageBlock image={MainIMG} title={"Створення власної торгової марки"} />
      <ContentBlock
        className={"pt-24"}
        image={""}
        title={"Про співпрацю"}
        text={[
          "Текстильна компанія Balakkom пропонує виробництво виробів домашнього текстилю під вашою торговою маркою. Ми працюємо з уже готовими специфікаціями, та за потреби можемо розробити новий продукт для вашої товарної лінійки. Балакком відповідає за повний виробничий цикл та доставку. Зацікавлені у створенні власної торгової марки текстилю або шукаєте виробника з високими стандартами якості? Звертайтесь до нас за розробкою та виготовленням товарів за наданими специфікаціями. Ми вже виконуємо замовлення для брендів з Німеччини, Австрії, Франції, Нідерландів, Румунії, Саудівської Аравії, Білорусі, Молдови, Болгарії та Ізраїлю.",
        ]}
        haveImage={false}
      />
      <Container>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-7/12 p-4">
            <ImageBlock image={ErasedImage}/>
          </div>
          <div className="w-full lg:w-5/12 p-4 lg:ml-auto">
            <div
              className={
                "group relative mx-auto overflow-hidden rounded-3xl transition-shadow"
              }
            >
              <ImageSquare
                source={CottonImage}
                classes={{
                  image: "brightness-90",
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <p className={
                    "z-10 text-normal font-light text-white leading-tight"
                  }><span className={"font-bold text-xl"}>Пропонуємо виготовлення:</span><br/><br/>
                  -подушок<br/><br/>
                  -ковдр<br/><br/>
                  -постільної білизни<br/><br/>
                  -покривала<br/><br/>
                  -наматрацників<br/><br/>
                  -простирадла<br/><br/>
                  -розробка продукції по індивідуальному<br/>
                   замовленню клієнта
                </p>
              </div>
            </div>
          </div>
        </div>
        <Title size="2xl">Алгоритм взаємодії з клієнтом:</Title>
        <div className={"mt-24"}>
          {stages.map((stage, Idx) => {
            const isLast = Idx === stages.length - 1;
            return (
              <OrderStatusStage
                key={stage?.label}
                isLast={isLast}
                isDone={stage.status}
                label={stage.label}
              />
            );
          })}
        </div>
      </Container>
      <Section className={"flex flex-col lg:flex-row my-40"}>
        <div
          className={cn(
            "flex-1 py-[88px] text-white lg:pb-32 lg:pl-[86px] lg:pt-36 bg-[#2D5B73]",
          )}
        >
          <div
            className={
              "flex flex-col items-center text-center lg:items-start lg:text-left"
            }
          >
            <Title className={"mb-3.5"}>Мінімальна партія замовлення:</Title>
            <p className={"mb-12 max-w-[324px] font-light"}>1. Ковдри - від 100 шт. одного розміру та виду<br/><br/>
            2. Подушки, постільна білизна, простирадла, наматрацники, покривала - від 100 шт. одного розміру та виду</p>
            <Title className={"mb-3.5"}>Пакування:</Title>
            <p className={"mb-12 max-w-[324px] font-light"}>Можлива розробка власної етикетки та упаковки<br/><br/>
            Індивідуальна упаковка товару (сумка, туб-пакет, сумка-економ, коробка, ПВХ-пакування)</p>
          </div>
        </div>
        <div className={"relative h-[500px] lg:h-auto lg:basis-[55%]"}>
          <Image
            fill
            src={PackingImage}
            alt={"Background image"}
            className={"object-cover"}
            sizes="100vw, 50vw, 33vw"
          />
        </div>
      </Section>
      <Section className={"flex flex-col lg:flex-row my-40"}>
        <div className={"relative h-[500px] lg:h-auto lg:basis-[56%]"}>
          <Image
            fill
            src={CertificateImage}
            alt={"Background image"}
            className={"object-cover"}
            sizes="100vw, 50vw, 33vw"
          />
        </div>
        <div
          className={cn(
            "flex-1 py-[88px] text-white lg:pb-32 lg:pl-[86px] lg:pt-36 bg-[#2D5B73]",
          )}
        >
          <div
            className={
              "flex flex-col items-center text-center lg:items-start lg:text-left"
            }
          >
            <Title className={"mb-3.5"}>Сертифікати:</Title>
            <p className={"mb-12 max-w-[442px] font-light"}>Сучасні технології, новітнє устаткування та потужна команда висококваліфікованих спеціалістів дають змогу позиціонувати нас як надійного виробника якісної продукції. <br/><br/>
            Підтвердженням чого є наявність Сертифікату -Oeko-Tex  Standard 100. Компанія працює згідно стандартів погодженних Міністерством охорони здоров’я України: -ТУ У 30501814.002-99; -ТУ У 30501814.001-99; -ТУ У 17.4-30501814-005:2006. Перевірено на відповідність законодавству України  ДП “УКРМЕТРТЕСТСТАНДАРТ” 31.01.2024 року та внесено до книги обліку №105/000680/04.  </p>
          </div>
        </div>
      </Section>
      <Conditions />
    </>
  );
}
