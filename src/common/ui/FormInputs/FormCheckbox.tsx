import { Controller, FieldValues, Path, useFormContext } from "react-hook-form";

import { Checkbox, CheckboxProps } from "common/ui";

export type FormCheckboxProps<T> = {
  fieldName: Path<T>;
} & Omit<CheckboxProps, "checked" | "onChange">;

export function FormCheckbox<T extends FieldValues>(
  props: FormCheckboxProps<T>
) {
  const { fieldName, ...checkboxProps } = props;
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field }) => {
        const { value, onChange } = field;

        return (
          <Checkbox
            checked={value ?? false}
            onChange={onChange}
            {...checkboxProps}
          />
        );
      }}
    />
  );
}
