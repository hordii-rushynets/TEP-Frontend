"use client";

import { useState } from "react";

import { Button, SelectInput, Title } from "common/ui";

const date = new Date();

const months = [
  { value: "January", label: "Січень" },
  { value: "February", label: "Лютий" },
  { value: "March", label: "Березень" },
  { value: "April", label: "Квітень" },
  { value: "May", label: "Травень" },
  { value: "June", label: "Червень" },
  { value: "July", label: "Липень" },
  { value: "August", label: "Серпень" },
  { value: "September", label: "Вересень" },
  { value: "October", label: "Жовтень" },
  { value: "November", label: "Листопад" },
  { value: "December", label: "Грудень" },
];

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
  const [day, setDay] = useState(date.getDate().toString());
  const [month, setMonth] = useState(months[date.getMonth()].value);
  const [year, setYear] = useState(date.getFullYear().toString());

  const daysArr = getAllDaysInMonth(
    months.findIndex((m) => m.value === month) + 1,
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
        День народження
      </Title>
      <div
        className={
          "mb-16 flex flex-wrap items-center justify-center gap-6 md:mb-28 md:flex-nowrap"
        }
      >
        <SelectInput
          label={"День"}
          display={"День"}
          value={day}
          onChange={setDay}
          options={daysArr}
          className={{ wrapper: "order-1 flex-1 basis-1/3" }}
        />
        <SelectInput
          label={"Місяць"}
          display={"Місяць"}
          value={month}
          onChange={setMonth}
          options={months}
          className={{ wrapper: "order-3 basis-full md:order-2" }}
        />
        <SelectInput
          label={"Рік"}
          display={"Рік"}
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
          onSubmit([day, months.find((m) => m.value === month)!.label, year])
        }
      >
        Змінити
      </Button>
    </div>
  );
}
