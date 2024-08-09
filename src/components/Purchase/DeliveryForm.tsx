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
  const { localization, staticData } = useLocalization();

  useEffect(() => {
    const city = addressForm.getValues().city;
    const service = deliveryForm.getValues().delivery_service;
    if (city !== "" && service !== "") {
      purchaseService.getWarehouses(service, city).then(warehouses => setWarehouses(warehouses))
    }
    else if (city === "") {
      addressForm.setError("city", { type: "manual", message: staticData.forms.cityError });
      router.push(PurchaseUrl.getAddress());
    }
  }, [deliveryForm.watch("delivery_service"), addressForm.watch("city")]);

  function onSubmit(data: DeliveryFormType) {
    let validation = true;

    if (data.delivery_method === "WarehouseDoors") {
      if (data.street === "") {
        deliveryForm.setError("street", {type: "manual", message: staticData.forms.streetError})
        validation = false;
      }
      if (data.house === "") {
        deliveryForm.setError("house", {type: "manual", message: staticData.forms.houseNoneError})
        validation = false;
      }
      else if (isNaN(parseInt(data.house)) || parseInt(data.house) <= 0) {
        deliveryForm.setError("house", {type: "manual", message: staticData.forms.houseValidationError})
        validation = false;
      }
      if (data.flat !== "" && (isNaN(parseInt(data.flat)) || parseInt(data.flat) <= 0)) {
        deliveryForm.setError("flat", {type: "manual", message: staticData.forms.flatValidationError})
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
            label={staticData.purchase.deliveryForm.text1}
            display={staticData.purchase.deliveryForm.text2}
            options={[
              {
                label: staticData.purchase.deliveryForm.text3,
                value: "UkrPost",
              },
              {
                label: staticData.purchase.deliveryForm.text4,
                value: "NovaPost",
              },
            ]}
          />
          <FormSelectInput
            fieldName={"delivery_method"}
            label={staticData.purchase.deliveryForm.text5}
            display={staticData.purchase.deliveryForm.text6}
            options={[
              {
                label:
                  deliveryForm.watch("delivery_service") === "NovaPost"
                    ? staticData.purchase.deliveryForm.text7
                    : staticData.purchase.deliveryForm.text8,
                value: deliveryForm.watch("delivery_service") === "NovaPost" ? "WarehouseWarehouse" : "W2W",
              },
              {
                label:
                  deliveryForm.watch("delivery_service") === "NovaPost"
                    ? staticData.purchase.deliveryForm.text9
                    : staticData.purchase.deliveryForm.text10,
                value: deliveryForm.watch("delivery_service") === "NovaPost" ? "WarehouseDoors" : "W2D",
              },
            ]}
          />
          {deliveryForm.watch("delivery_method") === "WarehouseWarehouse" && (
            <FormSelectInput
              fieldName={"department"}
              label={staticData.purchase.deliveryForm.text11}
              display={staticData.purchase.deliveryForm.text12}
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
              label={staticData.deliveryForm.streetLabel}
              placeholder={staticData.deliveryForm.streetPlaceholder}
            />
            <FormTextInput
              fieldName={"house"}
              label={staticData.deliveryForm.houseLabel}
              placeholder={staticData.deliveryForm.streetPlaceholder}
            />
            <FormTextInput
              fieldName={"flat"}
              label={staticData.deliveryForm.flatLabel}
              placeholder={staticData.deliveryForm.streetPlaceholder}
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
          {staticData.purchase.deliveryForm.text15}
        </Button>
      </form>
    </FormProvider>
  );
}
