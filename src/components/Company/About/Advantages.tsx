import { cn } from "utils/cn";

import { Container, Section, Title } from "common/ui";

const content = [
  {
    text: "Оформлення замовлення на сайті та в додатку 24/7",
  },
  {
    text: "Допомога консультанти через чат або дзвінок",
  },
  {
    text: "Розрахуватися зручним для вас способом: Apple/Google Pay, Visa/Mastercard",
  },
  {
    text: "Можливість співпраці та бути нашим офіційним дистриб’ютором в Україні чи закордоном",
  },
  {
    text: "Наявна пропозиція франшизи ТЕП",
  },
  {
    text: "Сезонні, солодкі знижки. Чим вище сума закупівлі, тим істотніша знижка. Чим довша історія спільної роботи, тим вигідніші умови для співпрацію",
  },
  {
    text: "Швидка обробка та відправка замовлення",
  },
  {
    text: "Швидко повернути товар при наявності нарікань до його якості.",
  },
  {
    text: "Більше ніж 100+ різних дизайнів постільної білизни, інноваційні подушки та ковдри, наматрацники, простирадла"
  },
  {
    text: "ТЕП – це про любов до наших клієнтів та створення історій, де затишок, комфорт та здоров’я передусім."
  }
];

export default function Advantages() {
  return (
    <Section className={"mb-10 md:mb-24"}>
      <Container>
        <div>
          <Title className={"mb-20 text-3xl md:mb-24"}>Переваги: </Title>
          <div className={"pl-3"}>
            {content.map((el, Idx, arr) => (
              <div
                key={Idx}
                className={cn("min-h-[100px] pl-8 md:pl-12", {
                  "border-tep_blue-400/20 border-l-2 pb-12":
                    Idx < arr.length - 1,
                })}
              >
                <div
                  className={cn(
                    "relative -translate-y-6 text-5xl font-bold before:absolute before:-left-[33px] before:top-6 before:h-4 before:w-4 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-tep_blue-500 md:before:-left-[49px]",
                    {
                      "before:-left-[31px] before:h-6 before:w-6 md:before:-left-[47px]":
                        Idx === arr.length - 1,
                    },
                  )}
                >
                </div>
                <p
                  className={
                    "max-w-[818px] text-lg md:text-sm lg:font-extralight"
                  }
                >
                  {el.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
