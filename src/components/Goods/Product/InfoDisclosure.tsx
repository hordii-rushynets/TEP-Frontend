"use client";

import { Feedback } from "app/goods/pillows/[slug]/page";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { cn } from "utils/cn";

import { Disclosure, DisclosureItem } from "common/Disclosure";
import { Title } from "common/ui";
import { FilterDialog } from "components/Filters/FilterDialog";

import { Article } from "./Article";

type InfoDisclosure = {
  feedbacks: Feedback[];
  packageDetails: {
    width: number;
    height: number;
    length: number;
    weight: number;
    packageCount: number;
    article: string;
  };
};

export function InfoDisclosure({ feedbacks, packageDetails }: InfoDisclosure) {
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isSizeOpen, setIsSizeOpen] = useState(false);

  const { height, length, packageCount, weight, width, article } =
    packageDetails;
  return (
    <>
      <div className={"mb-24 mt-[72px] max-w-full"}>
        <Disclosure>
          <DisclosureItem
            onClick={() => setIsInfoOpen(true)}
            trigger={
              <Title component={"h4"} size={"xl"}>
                Інформація про товар
              </Title>
            }
          />
          <DisclosureItem
            onClick={() => setIsSizeOpen(true)}
            trigger={
              <Title component={"h4"} size={"xl"}>
                Розмірна сітка
              </Title>
            }
          />
          {!!feedbacks.length && (
            <DisclosureItem
              trigger={
                <Title component={"h4"} size={"xl"}>
                  Відгуки
                </Title>
              }
            >
              <div className={"grid grid-cols-1 gap-5 sm:grid-cols-2"}>
                {feedbacks.map((feedback, Idx) => (
                  <div
                    key={Idx}
                    className={"rounded-[20px] bg-tep_gray-200 px-7 py-6"}
                  >
                    <div className={"mb-2 flex items-center justify-between"}>
                      <Title className={"!text-sm"}>{feedback.title}</Title>
                      <div
                        className={
                          "flex items-center gap-x-1 text-sm font-bold"
                        }
                      >
                        <FaStar className={"size-3"} />
                        <span>{feedback.rating}</span>
                      </div>
                    </div>
                    <p className={"text-xs font-light leading-none"}>
                      {feedback.description}
                    </p>
                  </div>
                ))}
              </div>
            </DisclosureItem>
          )}
        </Disclosure>
      </div>
      <FilterDialog open={isInfoOpen} onClose={() => setIsInfoOpen(false)}>
        <InfoSkeleton
          title={"Інформація про товар"}
          description={
            "Тканина із суміші бавовни й поліестеру дуже проста у догляді, адже менше мнеться й збігається. Підковдра з прихованими кнопками, завдяки яким ковдра не вибивається."
          }
        >
          <Disclosure>
            <DisclosureItem
              trigger={"Матеріали та догляд"}
              endIcon={<FiChevronDown className={"size-6"} />}
              className={{ triggerWrapper: "py-8 font-bold" }}
            >
              <div>
                <p className={"mb-5 text-sm lg:font-extralight"}>
                  65% бавовна, 35 % поліестер (100% з перероблених матеріалів)
                </p>
                <p className={"text-sm lg:font-extralight"}>
                  65% бавовна, 35 % поліестер (100% з перероблених матеріалів)
                  <br />
                  Машинне прання, макс. 60°C, стандартний режим.
                  <br />
                  Не відбілювати. Машинна сушка за стандартної температури
                  (макс. 80°C). Прасувати макс. за 150°C.
                  <br />
                  Не піддавати хімічному очищенню.
                </p>
              </div>
            </DisclosureItem>
            <DisclosureItem
              trigger={"Екологія та довкілля"}
              endIcon={<FiChevronDown className={"size-6"} />}
              className={{ triggerWrapper: "py-8 font-bold" }}
            >
              <p className={"text-sm lg:font-extralight"}>
                Використовуючи залишкові матеріали після виробництва матраців та
                подушок як наповнення для цього виробу, ми споживаємо менше
                сировини та зменшуємо наш вплив на клімат.
              </p>
            </DisclosureItem>
            <DisclosureItem
              trigger={"Упаковка"}
              endIcon={<FiChevronDown className={"size-6"} />}
              className={{ triggerWrapper: "py-8 font-bold" }}
            >
              <div>
                <p className={"mb-5 text-sm lg:font-extralight"}>
                  Ергоном подушка, для сну на боці/спині
                </p>
                <p className={"text-sm lg:font-extralight"}>Артикул номер</p>
                <Article
                  article={article}
                  className={"mb-6 inline-block bg-black"}
                />
                <p className={"flex flex-col text-sm lg:font-extralight"}>
                  <span>Ширина {width} см</span>
                  <span>Висота {height} см</span>
                  <span>Довжина {length} см</span>
                  <span>Вага {weight} кг</span>
                  <span>Упаковка {packageCount}</span>
                </p>
              </div>
            </DisclosureItem>
          </Disclosure>
        </InfoSkeleton>
      </FilterDialog>
      <FilterDialog open={isSizeOpen} onClose={() => setIsSizeOpen(false)}>
        <InfoSkeleton title={"Розмірна сітка"}>
          <Disclosure>
            <div className={"flex gap-x-2 py-8"}>
              <Title className={"basis-32"} component={"h6"} size={"base"}>
                Полуторний
              </Title>
              <div
                className={
                  "flex flex-1 flex-col gap-y-2 text-sm lg:font-extralight"
                }
              >
                <span>Підковдра</span>
                <span>Простирадло</span>
                <span>Наволочка</span>
              </div>
              <div
                className={
                  "flex flex-1 flex-col gap-y-2 text-sm lg:font-extralight"
                }
              >
                <span>215 х 150</span>
                <span>215 х 150</span>
                <span>70 х 70 (2 шт)</span>
              </div>
            </div>
            <div className={"flex gap-x-2 py-8"}>
              <Title component={"h6"} className={"basis-32"} size={"base"}>
                Двоспальний
              </Title>
              <div
                className={
                  "flex flex-1 flex-col gap-y-2 text-sm lg:font-extralight"
                }
              >
                <span>Підковдра</span>
                <span>Простирадло</span>
                <span>Наволочка</span>
              </div>
              <div
                className={
                  "flex flex-1 flex-col gap-y-2 text-sm lg:font-extralight"
                }
              >
                <span>215 х 180</span>
                <span>215 х 220</span>
                <span>70 х 70 (2 шт)</span>
              </div>
            </div>
            <div className={"flex gap-x-2 py-8"}>
              <Title className={"basis-32"} component={"h6"} size={"base"}>
                Євростандарт
              </Title>
              <div
                className={
                  "flex flex-1 flex-col gap-y-2 text-sm lg:font-extralight"
                }
              >
                <span>Підковдра</span>
                <span>Простирадло</span>
                <span>Наволочка</span>
              </div>
              <div
                className={
                  "flex flex-1 flex-col gap-y-2 text-sm lg:font-extralight"
                }
              >
                <span>215 х 200</span>
                <span>215 х 240</span>
                <span>70 х 70 (2 шт)</span>
              </div>
            </div>
            <div className={"flex gap-x-2 py-8"}>
              <Title className={"basis-32"} component={"h6"} size={"base"}>
                Сімейний
              </Title>
              <div
                className={
                  "flex flex-1 flex-col gap-y-2 text-sm lg:font-extralight"
                }
              >
                <span>Підковдра</span>
                <span>Простирадло</span>
                <span>Наволочка</span>
              </div>
              <div
                className={
                  "flex flex-1 flex-col gap-y-2 text-sm lg:font-extralight"
                }
              >
                <span>215 х 150 (2 шт)</span>
                <span>215 х 240</span>
                <span>70 х 70 (2 шт)</span>
              </div>
            </div>
          </Disclosure>
        </InfoSkeleton>
      </FilterDialog>
    </>
  );
}

export type InfoSkeletonProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
};

export function InfoSkeleton({
  children,
  title,
  description,
}: InfoSkeletonProps) {
  return (
    <div className={"flex h-full w-full flex-col md:pt-14"}>
      <Title
        size={"2xl"}
        className={cn("mb-3.5", { "mb-6 md:mb-24": !description })}
      >
        {title}
      </Title>
      {description && (
        <p className={"mb-[75px] text-sm font-extralight"}>{description}</p>
      )}
      <div className={"-mr-4 flex-1 overflow-y-scroll pr-4"}>{children}</div>
    </div>
  );
}
