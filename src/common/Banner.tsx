"use client";

import { Transition } from "@headlessui/react";
import { useEffect } from "react";
import { FiX } from "react-icons/fi";

import { Container, IconButton, Section, Title } from "common/ui";
import { useBannerContext } from "contexts/BannerContext";

export function Banner() {
  const { isOpen, setIsOpen } = useBannerContext();

  useEffect(() => {
    setIsOpen(true);
  }, [setIsOpen]);

  return (
    <Transition
      show={isOpen}
      enter={"transition duration-100 ease-out"}
      enterFrom={"opacity-0"}
      enterTo={"opacity-100"}
      leave={"transition duration-75 ease-out"}
      leaveFrom={"opacity-100"}
      leaveTo={"opacity-0"}
    >
      <Section
        className={
          "fixed top-[149px] z-[200] w-full bg-tep_blue-500 text-white md:top-[97px]"
        }
      >
        <Container>
          <div className={"py-12"}>
            <div className={"flex items-center justify-between"}>
              <Title size={"2xl"} component={"h5"} className={"mb-3.5"}>
                Шановні покупці!
              </Title>
              <IconButton
                onClick={() => setIsOpen(false)}
                className={{ button: "text-white hover:text-tep_gray-500" }}
                colorVariant={"empty"}
              >
                <FiX className={"size-6"} />
              </IconButton>
            </div>
            <p className={"text-sm lg:font-extralight"}>
              Під час карантину ми залишаємось доступними для вас 24/7.
              Замовляйте товари в інтернет-магазині та забирайте у пунктах
              видачі біля свого дому. Пункти видачі замовлень на пошті
              продовжують працювати у звичайному режимі. Дізнатися, як забрати
              своє замовлення можна за посиланням. Потрібного товару немає в
              наявності? Звернись за консультацією онлайн! Пиши на адресу
              support.tep@gmail.com
            </p>
          </div>
        </Container>
      </Section>
    </Transition>
  );
}
