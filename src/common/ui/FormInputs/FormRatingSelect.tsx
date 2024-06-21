import { path } from "ramda";
import {
  Controller,
  FieldError,
  FieldValues,
  Path,
  useFormContext,
} from "react-hook-form";

import { RatingSelect, RatingSelectProps } from "common/ui";

export type FormRatingSelectProps<T> = {
  fieldName: Path<T>;
} & Omit<RatingSelectProps, "value" | "onChange">;

export function FormRatingSelect<T extends FieldValues>(
  props: FormRatingSelectProps<T>,
) {
  const { fieldName, ...ratingProps } = props;
  const { control } = useFormContext<T>();

  return (
    <Controller
      name={fieldName}
      control={control}
      render={({ field, formState: { errors } }) => {
        const { value, onChange } = field;
        const error = path<FieldError>(fieldName.split("."), errors);

        return (
          <RatingSelect
            value={value ?? 0}
            onChange={onChange}
            {...ratingProps}
            error={!!error}
            helperText={error?.message}
          />
        );
      }}
    />
  );
}
