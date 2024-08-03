"use client";

import { useRouter } from "next/navigation";
import { FormProvider } from "react-hook-form";
import { PurchaseUrl } from "route-urls";

import { Button, FormSelectInput, FormTextInput } from "common/ui";
import { DeliveryForm as DeliveryFormType, usePostService } from "contexts/PostServiceContext";
import { useEffect, useState } from "react";
import { PurchaseService } from "app/purchase/services";
import { Warehouse } from "app/purchase/interfaces";
import { useLocalization } from "contexts/LocalizationContext";

export function DeliveryForm() {
  const router = useRouter();
  const { addressForm, deliveryForm } = usePostService();
  const purchaseService = new PurchaseService();
  const [warehouses, setWarehouses] = useState<Warehouse[]>([]);
  const { localization } = useLocalization();

  useEffect(() => {
    const city = addressForm.getValues().city;
    const service = deliveryForm.getValues().delivery_service;
    if (city !== "" && service !== "") {
      purchaseService.getWarehouses(service, city).then(warehouses => setWarehouses(warehouses))
    }
    else if (city === "") {
      addressForm.setError("city", { type: "manual", message: "Обовязково вкажіть місто" });
      router.push(PurchaseUrl.getAddress());
    }
  }, [deliveryForm.watch("delivery_service"), addressForm.watch("city")]);

  function onSubmit(data: DeliveryFormType) {
    let validation = true;

    if (data.delivery_method === "WarehouseDoors") {
      if (data.street === "") {
        deliveryForm.setError("street", {type: "manual", message: "Обов'язково вкажіть вулицю"})
        validation = false;
      }
      if (data.house === "") {
        deliveryForm.setError("house", {type: "manual", message: "Обов'язково вкажіть номер будинку"})
        validation = false;
      }
      else if (isNaN(parseInt(data.house)) || parseInt(data.house) <= 0) {
        deliveryForm.setError("house", {type: "manual", message: "Вкажіть справжній номер будинку"})
        validation = false;
      }
      if (data.flat !== "" && (isNaN(parseInt(data.flat)) || parseInt(data.flat) <= 0)) {
        deliveryForm.setError("flat", {type: "manual", message: "Вкажіть справжній номер квартири"})
        validation = false;
      }
    }

    if (validation) {
      router.push(PurchaseUrl.getOrderData());
    }
  }

  return (
    <FormProvider {...deliveryForm}>
      <form onSubmit={deliveryForm.handleSubmit(onSubmit)} className={"max-w-[600px]"}>
        <div
          className={
            "mb-12 flex flex-col gap-y-6 border-b border-tep_gray-200 pb-24"
          }
        >
          <FormSelectInput
            fieldName={"delivery_service"}
            label={"Служба доставки"}
            display={"Оберіть службу"}
            options={[
              {
                label: "Укр Пошта",
                value: "UkrPost",
              },
              {
                label: "Нова Пошта",
                value: "NovaPost",
              },
            ]}
          />
          <FormSelectInput
            fieldName={"delivery_method"}
            label={"Спосіб доставки"}
            display={"Оберіть спосіб"}
            options={[
              {
                label:
                  deliveryForm.watch("delivery_service") === "NovaPost"
                    ? "Відділення Нової пошти"
                    : "Відділення Укр пошти",
                value: "WarehouseWarehouse",
              },
              {
                label:
                  deliveryForm.watch("delivery_service") === "NovaPost"
                    ? "Кур’єр Нової Пошти"
                    : "Кур’єр Укр Пошти",
                value: "WarehouseDoors",
              },
            ]}
          />
          {deliveryForm.watch("delivery_method") === "WarehouseWarehouse" && (
            <FormSelectInput
              fieldName={"department"}
              label={"Номер відділення"}
              display={"Оберіть номер відділення"}
              options={warehouses.map(warehouse => ({
                label: warehouse[`description_${localization}` as keyof Warehouse],
                value: warehouse.number
              }))}
            />
          )}
          {deliveryForm.watch("delivery_method") === "WarehouseDoors" && (
            <>
            <FormTextInput
              fieldName={"street"}
              label={"Вулиця"}
              placeholder={"Ваша вулиця (введіть тільки назву, наприклад \"Залізняка\")"}
            />
            <FormTextInput
              fieldName={"house"}
              label={"Номер будинку"}
              placeholder={"Номер вашого будинку"}
            />
            <FormTextInput
              fieldName={"flat"}
              label={"Номер квартири"}
              placeholder={"Номер вашої квартири"}
            />
            </>
          )}
        </div>
        <Button
          fullWidth
          className={{ button: "sm:w-auto" }}
          type={"submit"}
          size={"large"}
          colorVariant={"black"}
        >
          Зберегти та продовжити
        </Button>
      </form>
    </FormProvider>
  );
}
