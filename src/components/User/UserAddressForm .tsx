"use client";

import { useEffect, useState } from "react";

import { TextInput } from "common/ui";
import { User } from "./UserAccount";
import { AccountService } from "app/account/services";
import { useAuth } from "contexts/AuthContext";

export interface UserAccountProps {
  user: User;
  refresh: boolean;
  setRefresh: (b: boolean) => void;
}

export function UserAddressForm({ user, refresh, setRefresh }: UserAccountProps) {
  const [street, setStreet] = useState(user.address);
  const [city, setCity] = useState(user.city);
  const [region, setRegion] = useState(user.region);
  const [postal, setPostal] = useState(user.index);
  const [postalError, setPostalError] = useState(false);
  const accountService = new AccountService();
  const authContext = useAuth();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (Number(postal)) {
        setPostalError(false);
        const addressInfo = new FormData();
        addressInfo.append("address", street);
        addressInfo.append("city", city);
        addressInfo.append("region", region);
        addressInfo.append("index", postal);
        accountService.profileUpdate(addressInfo, authContext).then(success => {
          setRefresh(!refresh);
        })
      }
      else {
        setPostalError(true);
      }
    }, 500);

    return () => clearTimeout(timeout);
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
        {postalError && <span style={{color: "red", fontSize: "12px"}}>Будь ласка, введіть валідний поштовий індекс</span>}
      </div>
    </div>
  );
}
