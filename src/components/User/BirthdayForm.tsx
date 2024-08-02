"use client";

import { useState } from "react";

import { Button, SelectInput, Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

const date = new Date();

const getAllDaysInMonth = (month: number, year: number) =>
  Array.from(
    { length: new Date(year, month, 0).getDate() },
    (_, i) => new Date(year, month - 1, i + 1),
  ).map((day) => day.getDate());

const years = [...Array(date.getFullYear() - 1970)].map((_, Idx) =>
  (1970 + (Idx + 1)).toString(),
);

export type BirthdayFormProps = {
  onSubmit: (value: string[]) => void;
};

export function BirthdayForm({ onSubmit }: BirthdayFormProps) {
  const {staticData} = useLocalization();

  const [day, setDay] = useState(date.getDate().toString());
  const [month, setMonth] = useState(staticData.account.birthdayForm.months[date.getMonth()].value);
  const [year, setYear] = useState(date.getFullYear().toString());

  const daysArr = getAllDaysInMonth(
    staticData.account.birthdayForm.months.findIndex((m: {value: string, label: string}) => m.value === month) + 1,
    parseInt(year),
  ).map((d) => ({
    label: d.toString(),
    value: d.toString(),
  }));

  return (
    <div
      className={
        "overflow-hidden px-6 pt-[72px] md:w-[700px] md:px-24 md:py-10"
      }
    >
      <Title size={"2xl"} className={"mb-11 md:text-center"}>
        {staticData.account.birthdayForm.text1}
      </Title>
      <div
        className={
          "mb-16 flex flex-wrap items-center justify-center gap-6 md:mb-28 md:flex-nowrap"
        }
      >
        <SelectInput
          label={staticData.account.birthdayForm.text2}
          display={staticData.account.birthdayForm.text2}
          value={day}
          onChange={setDay}
          options={daysArr}
          className={{ wrapper: "order-1 flex-1 basis-1/3" }}
        />
        <SelectInput
          label={staticData.account.birthdayForm.text3}
          display={staticData.account.birthdayForm.text3}
          value={month}
          onChange={setMonth}
          options={staticData.account.birthdayForm.months}
          className={{ wrapper: "order-3 basis-full md:order-2" }}
        />
        <SelectInput
          label={staticData.account.birthdayForm.text4}
          display={staticData.account.birthdayForm.text4}
          value={year}
          onChange={setYear}
          options={years.map((y) => ({
            label: y,
            value: y,
          }))}
          className={{ wrapper: "order-2 flex-1 basis-1/3 md:order-3" }}
        />
      </div>
      <Button
        fullWidth
        className={{ button: "mx-auto block md:w-auto" }}
        size={"super-large"}
        colorVariant={"black"}
        onClick={() =>
          onSubmit([day, staticData.account.birthdayForm.months.find((m: { label: string, value: string }) => m.value === month)!.value, year])
        }
      >
        {staticData.account.birthdayForm.text5}
      </Button>
    </div>
  );
}
