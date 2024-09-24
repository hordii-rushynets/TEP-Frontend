"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import ReactInputMask from "react-input-mask";
import { PurchaseUrl } from "route-urls";
import { getDefaults } from "utils/zod";
import { z } from "zod";

import {
  Button,
  FormCheckbox,
  FormSelectInput,
  FormTextInput,
  TextInput,
} from "common/ui";
import { QuestionTip } from "components/User/QuestionTip";
import { useLocalization } from "contexts/LocalizationContext";
import { PurchaseService } from "app/purchase/services";
import { usePostService } from "contexts/PostServiceContext";
import { CartService } from "app/account/cart/services";
import { useAuth } from "contexts/AuthContext";
import { CartItem } from "app/account/cart/interfaces";
import { Error } from "app/purchase/interfaces";

export function PaymentForm() {
  // const [cardNumber, setCardNumber] = useState("");
  // const [date, setDate] = useState("");
  // const [cvv, setCvv] = useState("");
  const { addressForm, deliveryForm } = usePostService();
  const purchaseService = new PurchaseService();
  const cartService = new CartService();
  const authContext = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartRefresh, setCartRefresh] = useState(false);
  
  const { staticData, localization } = useLocalization();

  const formSchema = z.object({
    payment_method: z
      .string()
      .min(1, staticData.forms.paymentError)
      .default(""),
    // add_card: z.boolean().default(true),
    // promo_code: z.string().default(""),
    comment: z.string().default(""),
  });
  
  type Form = z.infer<typeof formSchema>;

  const router = useRouter();

  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: getDefaults(formSchema),
  });

  useEffect(() => {
    cartService.getCart(authContext).then(items => setCartItems(items));
  }, [cartRefresh]);

  const deliveryValues = deliveryForm.getValues();
  if (deliveryValues.delivery_method === "" || deliveryValues.delivery_service === "") {
    router.push(PurchaseUrl.getDelivery());
  }

  const [ errors, setErrors ] = useState<Error[]>([]);

  const SubmitParcel = (data: Form) => {
    const addressValues = addressForm.getValues();
    const deliveryValues = deliveryForm.getValues();

    purchaseService.createParcel({
      "area_recipient": addressValues.region,
      "city_recipient": deliveryValues.delivery_service === "UkrPost" ? addressValues.postal : addressValues.city,
      "recipient_address": deliveryValues.delivery_method === "WarehouseDoors" || deliveryValues.delivery_method === "W2D" ? deliveryValues.street : deliveryValues.department,
      "recipient_house": deliveryValues.house,
      "recipient_float": deliveryValues.flat,
      "recipient_name": `${addressValues.lastName} ${addressValues.firstName}`,
      "description": data.comment || "TEST TEST TEST",
      "settlemen_type": "місто",
      "recipients_phone": addressValues.phoneNumber,
      "service_type": deliveryValues.delivery_method,
      "cart_item_ids": cartItems.map(item => item.id),
      "payment_method": data.payment_method,
    }, deliveryValues.delivery_service, authContext).then(errors => {
      if (errors) {
        setErrors(errors);
      } else {
        router.push(PurchaseUrl.getPayment());
      }
    });
  }

  useEffect(() => {
    let pageToRedirect = PurchaseUrl.getDelivery();
    errors.forEach(error => {
      const errorMessage = {
        type: "manual", 
        message: error[localization as keyof Error]
      }

      switch (error.error) {
        case "city_error":
          pageToRedirect = PurchaseUrl.getAddress();
          addressForm.setError("city", errorMessage);
        case "recipient_branch_or_street_error":
          deliveryForm.setError("street", errorMessage);
        case "delivery_type_error":
          deliveryForm.setError("delivery_method", errorMessage);
        case "phone_number_error": 
          pageToRedirect = PurchaseUrl.getAddress();
          addressForm.setError("phoneNumber", errorMessage);
        case "person_error":
          pageToRedirect = PurchaseUrl.getAddress();
          addressForm.setError("firstName", errorMessage);
          addressForm.setError("lastName", errorMessage);
      }
    });

    if ( errors.length !== 0 ) {
      router.push(pageToRedirect)
    }
  }, [errors]);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(SubmitParcel)} className={"max-w-[600px]"}>
        <div
          className={
            "mb-12 flex flex-col gap-y-6 border-b border-tep_gray-200 pb-24"
          }
        >
          <FormSelectInput
            fieldName={"payment_method"}
            label={staticData.purchase.paymentForm.text1}
            display={staticData.purchase.paymentForm.text2}
            options={[
              {
                label: staticData.purchase.paymentForm.text3,
                value: "ByCard",
              },
              {
                label: staticData.purchase.paymentForm.text4,
                value: "UponReceipt",
              },
            ]}
          />
          {/* {form.watch("payment_method") === "by_card" && (
            <div className={"flex flex-col gap-y-6 md:mb-4"}>
              <ReactInputMask
                mask={"9999 9999 9999 9999"}
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                alwaysShowMask
                autoComplete={"off"}
              >
                <TextInput label={staticData.purchase.paymentForm.text5} />
              </ReactInputMask>
              <div className={"flex flex-wrap gap-6"}>
                <ReactInputMask
                  mask={"99/99"}
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  autoComplete={"off"}
                >
                  <TextInput
                    placeholder={staticData.purchase.paymentForm.text6}
                    className={{
                      inputWrapper: "max-w-[184px]",
                    }}
                    label={staticData.purchase.paymentForm.text7}
                  />
                </ReactInputMask>
                <div className={"flex items-end gap-x-4"}>
                  <ReactInputMask
                    mask={"999"}
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    autoComplete={"off"}
                  >
                    <TextInput
                      className={{
                        inputWrapper: "max-w-[184px]",
                      }}
                      type={"password"}
                      placeholder={"•••"}
                      label={"CVV"}
                    />
                  </ReactInputMask>
                  <div className={"py-3.5 leading-[0]"}>
                    <QuestionTip
                      text={
                        staticData.purchase.paymentForm.text8
                      }
                    />
                  </div>
                </div>
              </div>
              <FormCheckbox
                fieldName={"add_card"}
                label={staticData.purchase.paymentForm.text9}
              />
            </div>
          )} */}

          {/* <FormTextInput
            fieldName={"promo_code"}
            label={staticData.purchase.paymentForm.text10}
            placeholder={staticData.purchase.paymentForm.text11}
          /> */}
          <FormTextInput
            multiline
            fieldName={"comment"}
            label={staticData.purchase.paymentForm.text12}
            placeholder={staticData.purchase.paymentForm.text13}
          />
        </div>
        <Button
          fullWidth
          className={{ button: "sm:w-auto" }}
          type={"submit"}
          size={"large"}
          colorVariant={"black"}
        >
          {staticData.purchase.paymentForm.text14}
        </Button>
      </form>
    </FormProvider>
  );
}
