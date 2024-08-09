"use client"

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
import { Container, Section, Title } from "common/ui";
import { OrderStatusStage } from "components/Services/OrderStatusStage";
import Image from "next/image";
import { cn } from "utils/cn";
import { useLocalization } from "contexts/LocalizationContext";

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
  const { staticData } = useLocalization();

  return (
    <>
      <MainImageBlock image={MainIMG} title={staticData.company.cooperation.privatelabels.text1} />
      <ContentBlock
        className={"pt-24"}
        image={""}
        title={staticData.company.cooperation.privatelabels.text2}
        text={[
          staticData.company.cooperation.privatelabels.text3
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
                  }><span className={"font-bold text-xl"}>{staticData.company.cooperation.privatelabels.text4}:</span><br/><br/>
                  -{staticData.company.cooperation.privatelabels.text5}<br/><br/>
                  -{staticData.company.cooperation.privatelabels.text6}<br/><br/>
                  -{staticData.company.cooperation.privatelabels.text7}<br/><br/>
                  -{staticData.company.cooperation.privatelabels.text8}<br/><br/>
                  -{staticData.company.cooperation.privatelabels.text9}<br/><br/>
                  -{staticData.company.cooperation.privatelabels.text10}<br/><br/>
                  -{staticData.company.cooperation.privatelabels.text11}<br/>
                  {staticData.company.cooperation.privatelabels.text12}
                </p>
              </div>
            </div>
          </div>
        </div>
        <Title size="2xl">{staticData.company.cooperation.privatelabels.text13}:</Title>
        <div className={"mt-24"}>
          {stages.map((stage, Idx) => {
            const isLast = Idx === stages.length - 1;
            return (
              <OrderStatusStage
                key={stage?.label}
                isLast={isLast}
                isDone={stage.status}
                label={staticData.company.cooperation.privatelabels.stages[Idx]}
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
            <Title className={"mb-3.5"}>{staticData.company.cooperation.privatelabels.text14}:</Title>
            <p className={"mb-12 max-w-[324px] font-light"}>{staticData.company.cooperation.privatelabels.text15}<br/><br/>
            {staticData.company.cooperation.privatelabels.text16}</p>
            <Title className={"mb-3.5"}>{staticData.company.cooperation.privatelabels.text17}:</Title>
            <p className={"mb-12 max-w-[324px] font-light"}>{staticData.company.cooperation.privatelabels.text18}<br/><br/>
            {staticData.company.cooperation.privatelabels.text19}</p>
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
            <Title className={"mb-3.5"}>{staticData.company.cooperation.privatelabels.text20}:</Title>
            <p className={"mb-12 max-w-[442px] font-light"}>{staticData.company.cooperation.privatelabels.text21} <br/><br/>
            {staticData.company.cooperation.privatelabels.text22}  </p>
          </div>
        </div>
      </Section>
      <Conditions />
    </>
  );
}
