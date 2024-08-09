"use client";

import { useEffect, useState } from "react";

import { Container, Section, SelectInput, Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

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


export function StoresInfo() {
  const [city, setSity] = useState("");
  const [street, setStreet] = useState("");
  const { staticData } = useLocalization();

  useEffect(() => {
    if (city)
      setStreet(
        staticData.company.stores.storesInfo.stores.find((c: CityStores) => c.city === city)?.stores[0].address.street ?? "",
      );
  }, [city]);

  const currentStore = staticData.company.stores.storesInfo.stores
    .find((c: CityStores) => c.city === city)
    ?.stores.find((s: StoreAddress) => s.address.street === street);

  return (
    <Section>
      <Container>
        <div className={"mb-24 md:mb-40"}>
          <Title size={"2xl"} className={"mb-3 md:mb-3.5"}>
            {staticData.company.stores.storesInfo.text1}
          </Title>
          <p
            className={
              "mb-7 max-w-[704px] text-sm leading-normal lg:mb-12 lg:font-extralight"
            }
          >
            {staticData.company.stores.storesInfo.text2}
          </p>

          <div className={"mb-16 flex max-w-[392px] flex-col gap-y-6"}>
            <SelectInput
              label={staticData.company.stores.storesInfo.text3}
              display={staticData.company.stores.storesInfo.text4}
              value={city}
              options={staticData.company.stores.storesInfo.stores.map((s: CityStores) => ({ value: s.city, label: s.city }))}
              onChange={setSity}
            />
            <SelectInput
              label={staticData.company.stores.storesInfo.text5}
              display={staticData.company.stores.storesInfo.text6}
              value={street}
              options={
                staticData.company.stores.storesInfo.stores
                  .find((c: CityStores) => c.city === city)
                  ?.stores.map((a: StoreAddress) => ({
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
                  {staticData.company.stores.storesInfo.text5}
                </Title>
                <p className={"text-sm lg:font-extralight"}>
                {staticData.company.stores.storesInfo.text7}:
                </p>
                <div className={"text-sm leading-normal lg:font-extralight"}>
                  <p>{currentStore.address.street}</p>
                  <p>{city}, {staticData.company.stores.storesInfo.text8}, {currentStore.address.postalCode},</p>
                  {currentStore.address.mall && (
                    <p>{currentStore.address.mall}</p>
                  )}
                </div>
              </div>
              <div className={"flex flex-col gap-y-6"}>
                <Title component={"h6"} size={"lg"} className={"lg:font-light"}>
                  {staticData.company.stores.storesInfo.text9}
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
