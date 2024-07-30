"use client";

import { useEffect, useState } from "react";

import { Container, Section, SelectInput, Title } from "common/ui";

export type StoreAddress = {
  id: string;
  address: {
    street: string;
    mall?: string;
    postalCode: string;
  };
  schedule: string;
  workingHours: string;
};

export type CityStores = {
  id: string;
  city: string;
  stores: StoreAddress[];
};

export const stores = [
  {
    id: "1",
    city: "Киів",
    stores: [
      {
        id: "1.1",
        address: {
          street: "проспект Степана Бандери, 36",
          mall: "Blockbuster Mall",
          postalCode: "04073",
        },
        schedule: "Понеділок - неділя",
        workingHours: "10:00 - 22:00",
      },
      {
        id: "1.2",
        address: {
          street: "проспект Степана Бандери, 6",
          mall: "Lavina Mall",
          postalCode: "04073",
        },
        schedule: "Понеділок - неділя",
        workingHours: "10:00 - 21:00",
      },
      {
        id: "1.3",
        address: {
          street: "проспект Лесі Українки, 36",
          postalCode: "04073",
        },
        schedule: "Понеділок - субота",
        workingHours: "9:00 - 23:00",
      },
    ],
  },
  {
    id: "2",
    city: "Львів",
    stores: [
      {
        id: "2.1",
        address: {
          street: "проспект Свободи, 9",
          mall: "Blockbuster Mall",
          postalCode: "04073",
        },
        schedule: "Понеділок - неділя",
        workingHours: "10:00 - 22:00",
      },
      {
        id: "2.2",
        address: {
          street: "проспект Степана Бандери, 6",
          mall: "Lavina Mall",
          postalCode: "04073",
        },
        schedule: "Понеділок - неділя",
        workingHours: "10:00 - 21:00",
      },
      {
        id: "2.3",
        address: {
          street: "проспект Лесі Українки, 36",
          postalCode: "04073",
        },
        schedule: "Понеділок - субота",
        workingHours: "9:00 - 23:00",
      },
    ],
  },
  {
    id: "3",
    city: "Хмельницький",
    stores: [
      {
        id: "3.1",
        address: {
          street: "проспект Свободи, 9",
          mall: "Blockbuster Mall",
          postalCode: "04073",
        },
        schedule: "Понеділок - неділя",
        workingHours: "10:00 - 22:00",
      },
      {
        id: "3.2",
        address: {
          street: "проспект Степана Бандери, 6",
          mall: "Lavina Mall",
          postalCode: "04073",
        },
        schedule: "Понеділок - неділя",
        workingHours: "10:00 - 21:00",
      },
    ],
  },
  {
    id: "4",
    city: "Чернівці",
    stores: [
      {
        id: "4.1",
        address: {
          street: "проспект Свободи, 9",
          mall: "Blockbuster Mall",
          postalCode: "04073",
        },
        schedule: "Понеділок - неділя",
        workingHours: "10:00 - 22:00",
      },
    ],
  },
  {
    id: "5",
    city: "Одеса",
    stores: [
      {
        id: "5.1",
        address: {
          street: "проспект Свободи, 9",
          mall: "Blockbuster Mall",
          postalCode: "04073",
        },
        schedule: "Понеділок - неділя",
        workingHours: "10:00 - 22:00",
      },
      {
        id: "5.2",
        address: {
          street: "проспект Степана Бандери, 6",
          mall: "Lavina Mall",
          postalCode: "04073",
        },
        schedule: "Понеділок - неділя",
        workingHours: "10:00 - 21:00",
      },
      {
        id: "5.3",
        address: {
          street: "проспект Лесі Українки, 36",
          postalCode: "04073",
        },
        schedule: "Понеділок - субота",
        workingHours: "9:00 - 23:00",
      },
      {
        id: "5.4",
        address: {
          street: "проспект Степана Бандери, 123",
          mall: "Lavina Mall",
          postalCode: "04073",
        },
        schedule: "Понеділок - неділя",
        workingHours: "10:00 - 21:00",
      },
      {
        id: "5.5",
        address: {
          street: "проспект Лесі Українки, 3",
          postalCode: "04073",
        },
        schedule: "Понеділок - субота",
        workingHours: "9:00 - 23:00",
      },
    ],
  },
  {
    id: "6",
    city: "Дніпро",
    stores: [
      {
        id: "6.1",
        address: {
          street: "проспект Свободи, 9",
          mall: "Blockbuster Mall",
          postalCode: "04073",
        },
        schedule: "Понеділок - неділя",
        workingHours: "10:00 - 22:00",
      },
      {
        id: "6.2",
        address: {
          street: "проспект Степана Бандери, 6",
          mall: "Lavina Mall",
          postalCode: "04073",
        },
        schedule: "Понеділок - неділя",
        workingHours: "10:00 - 21:00",
      },
    ],
  },
  {
    id: "7",
    city: "Харків",
    stores: [
      {
        id: "7.1",
        address: {
          street: "проспект Свободи, 9",
          mall: "Blockbuster Mall",
          postalCode: "04073",
        },
        schedule: "Понеділок - неділя",
        workingHours: "10:00 - 22:00",
      },
      {
        id: "7.2",
        address: {
          street: "проспект Степана Бандери, 6",
          mall: "Lavina Mall",
          postalCode: "04073",
        },
        schedule: "Понеділок - неділя",
        workingHours: "10:00 - 21:00",
      },
      {
        id: "7.3",
        address: {
          street: "проспект Лесі Українки, 36",
          postalCode: "04073",
        },
        schedule: "Понеділок - субота",
        workingHours: "9:00 - 23:00",
      },
    ],
  },
];

export function StoresInfo() {
  const [city, setSity] = useState("");
  const [street, setStreet] = useState("");

  useEffect(() => {
    if (city)
      setStreet(
        stores.find((c) => c.city === city)?.stores[0].address.street ?? "",
      );
  }, [city]);

  const currentStore = stores
    .find((c) => c.city === city)
    ?.stores.find((s) => s.address.street === street);

  return (
    <Section>
      <Container>
        <div className={"mb-24 md:mb-40"}>
          <Title size={"2xl"} className={"mb-3 md:mb-3.5"}>
            Тут ви можете знайти магазин з товарами ТЕП
          </Title>
          <p
            className={
              "mb-7 max-w-[704px] text-sm leading-normal lg:mb-12 lg:font-extralight"
            }
          >
            Ми починали як невелика чернівецька компанія, що відправляє поштою
            замовлення через каталог і стали одним із найбільш відомих в Україні
            брендів текстильних товарів. Сьогодні у різних країнах починають
            працювати магазини ТЕП, і ми плануємо збільшити цю кількість.
            Дізнайтесь більше про нашу захопливу історію – з самого початку до
            сьогодення.
          </p>

          <div className={"mb-16 flex max-w-[392px] flex-col gap-y-6"}>
            <SelectInput
              label={"Місто"}
              display={"Обрати місто"}
              value={city}
              options={stores.map((s) => ({ value: s.city, label: s.city }))}
              onChange={setSity}
            />
            <SelectInput
              label={"Адреса"}
              display={"Обрати адресу"}
              value={street}
              options={
                stores
                  .find((c) => c.city === city)
                  ?.stores.map((a) => ({
                    value: a.address.street,
                    label: a.address.street,
                  })) ?? []
              }
              onChange={setStreet}
            />
          </div>
          {currentStore && (
            <div className={"flex flex-col gap-x-8 gap-y-14 md:flex-row"}>
              <div className={"flex flex-col gap-y-6"}>
                <Title component={"h6"} size={"lg"} className={"lg:font-light"}>
                  Адреса
                </Title>
                <p className={"text-sm lg:font-extralight"}>
                  Магазин ТЕП знаходиться за адресою:
                </p>
                <div className={"text-sm leading-normal lg:font-extralight"}>
                  <p>{currentStore.address.street}</p>
                  <p>Київ, Україна, {currentStore.address.postalCode},</p>
                  {currentStore.address.mall && (
                    <p>{currentStore.address.mall}</p>
                  )}
                </div>
              </div>
              <div className={"flex flex-col gap-y-6"}>
                <Title component={"h6"} size={"lg"} className={"lg:font-light"}>
                  Графік роботи
                </Title>
                <div className={"text-sm leading-normal lg:font-extralight"}>
                  <p>{currentStore.schedule}</p>
                  <p>{currentStore.workingHours}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
