import { Container, Section, Title } from "common/ui";

const advantages = [
  {
    description:
      "Широкий асортимент продукції, який постійно поновлюється новинками (слідкуємо за тенденціями моди на ринку)",
  },
  {
    description:
      "За Вами закріплюється персональний менеджер, який надасть всю необхідну інформацію і допоможе зробити замовлення",
  },
  {
    description:
      "Додаємо Вас у спільноту Viber, де Ви своєчасно дізнаєтесь про всі новинки, акції та спеціальні пропозиції",
  },
  {
    description:
      "Зручно зробити онлайн  замовлення через додаток “ТЕП”, маючи доступ до наявного товару на складах в реальному часі",
  },
  {
    description:
      "Вартість товарів нижча від -40% від роздрібної ціни на нашому сайті або роздрібному магазині",
  },
  {
    description:
      "Безкоштовна доставка Укрпоштою (при замовленні від 7 тис. грн) ",
  },
  {
    description:
      "Продукція виготовляється згідно стандартів якості, за ретельно спланованим виробничим процесом. На кожному етапі проходить контроль якості",
  },
];

export default function Advantages() {
  return (
    <Section className={"pb-[68px] pt-24 md:py-24"}>
      <Container>
      <div className="flex flex-wrap gap-x-6 gap-y-10 md:gap-y-[72px] justify-center">
        {advantages.map((advantage, Idx) => (
          <div key={Idx} className="flex flex-1 min-w-[calc(33%-24px)] max-w-[calc(33%-24px)] gap-x-6">
            <div className="flex size-20 shrink-0 items-center justify-center rounded-full bg-tep_blue-500 text-2xl font-bold text-white">
              {Idx + 1}
            </div>
            <div>
              <p className="max-w-72 text-lg md:text-sm lg:font-extralight">
                {advantage.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      </Container>
    </Section>
  );
}
