"use client";

import { FormEvent, useState } from "react";
import InputMask from "react-input-mask";

import { Button, TextInput, Title } from "common/ui";

import { QuestionTip } from "./QuestionTip";

export function UserBankCardForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // if(...) ...
    const data = {
      cardNumber: cardNumber.match(/\d/g)?.join(""),
      date,
      cvv,
    };
    data;
    setCardNumber("");
    setDate("");
    setCvv("");
    // TODO
    // ...
  }

  return (
    <form onSubmit={onSubmit} className={"max-w-[600px]"}>
      <Title size={"2xl"} className={"mb-7"}>
        Банківська картка
      </Title>
      <div className={"mb-[72px] flex flex-col justify-between gap-y-6"}>
        <InputMask
          mask={"9999 9999 9999 9999"}
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          alwaysShowMask
          autoComplete={"off"}
        >
          <TextInput label={"Номер банківської картки"} />
        </InputMask>
        <div className={"flex flex-wrap gap-6"}>
          <InputMask
            mask={"99/99"}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            autoComplete={"off"}
          >
            <TextInput
              placeholder={"мм/рр"}
              className={{
                inputWrapper: "max-w-[184px]",
              }}
              label={"Дійсний до"}
            />
          </InputMask>
          <div className={"flex items-end gap-x-4"}>
            <InputMask
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
            </InputMask>
            <div className={"py-3.5 leading-[0]"}>
              <QuestionTip
                text={
                  "CVV/CVC2 - це код безпеки вашої картки. Це три останні цифри в полі підпису на зворотному боці Вашої картки."
                }
              />
            </div>
          </div>
        </div>
      </div>
      <Button size={"large"} type={"submit"}>
        Додати нову картку
      </Button>
    </form>
  );
}
