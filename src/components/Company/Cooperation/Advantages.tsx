import { Container, Section, Title } from "common/ui";

const advantages = [
  {
    title: "Перевага",
    description:
      "Ми починали як невелика чернівецька компанія, що відправляє поштою замовлення через каталог і стали одним із найбільш відомих в Україні брендів текстильних товарів",
  },
  {
    title: "Перевага",
    description:
      "Ми починали як невелика чернівецька компанія, що відправляє поштою замовлення через каталог і стали одним із найбільш відомих в Україні брендів текстильних товарів",
  },
  {
    title: "Перевага",
    description:
      "Ми починали як невелика чернівецька компанія, що відправляє поштою замовлення через каталог і стали одним із найбільш відомих в Україні брендів текстильних товарів",
  },
];

export default function Advantages() {
  return (
    <Section className={"pb-[68px] pt-24 md:py-24"}>
      <Container>
        <div
          className={
            "flex flex-col gap-x-6 gap-y-10 md:gap-y-[72px] lg:flex-row"
          }
        >
          {advantages.map((advantage, Idx) => (
            <div key={Idx} className={"flex flex-1 gap-x-6"}>
              <div
                className={
                  "flex size-20 shrink-0 items-center justify-center rounded-full bg-tep_blue-500 text-2xl font-bold text-white"
                }
              >
                0{Idx + 1}
              </div>
              <div>
                <Title size={"2xl"} className={"mb-2"}>
                  {advantage.title}
                </Title>
                <p className={"max-w-72 text-lg md:text-sm lg:font-extralight"}>
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
