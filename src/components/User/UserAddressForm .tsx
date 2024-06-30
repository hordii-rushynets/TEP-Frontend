"use client";

import { useEffect, useState } from "react";

import { TextInput } from "common/ui";

export function UserAddressForm() {
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [region, setRegion] = useState("");
  const [postal, setPostal] = useState("");

  useEffect(() => {
    const data = { street, city, region, postal };
    data;
    // TODO send data
  }, [street, city, region, postal]);

  return (
    <div className={"max-w-[600px]"}>
      <div className={"flex flex-col gap-y-6"}>
        <TextInput
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          label={"Адреса"}
          placeholder={"Адреса"}
        />
        <TextInput
          value={city}
          onChange={(e) => setCity(e.target.value)}
          label={"Місто"}
          placeholder={"Місто"}
        />
        <TextInput
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          label={"Область"}
          placeholder={"Область"}
        />
        <TextInput
          value={postal}
          onChange={(e) => setPostal(e.target.value)}
          label={"Індекс"}
          placeholder={"Індекс"}
        />
      </div>
    </div>
  );
}
