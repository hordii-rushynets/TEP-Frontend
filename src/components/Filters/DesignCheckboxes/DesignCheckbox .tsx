import { Switch } from "@headlessui/react";
import Image, { StaticImageData } from "next/image";
import { cn } from "utils/cn";

import { ColorCheckboxProps } from "components/Filters/ColorCheckboxes";

export function DesignCheckbox(
  props: ColorCheckboxProps & { image: StaticImageData },
) {
  const { checked, onChange, label, image, className = {} } = props;

  const {
    checkbox: checkboxClassName = "",
    label: labelClassName = "",
    wrapper,
  } = className;

  return (
    <div className={cn("flex flex-col items-center gap-y-4", wrapper)}>
      <Switch.Group>
        <Switch
          checked={checked}
          onChange={onChange}
          className={cn(
            `relative size-14 rounded-full outline-none`,
            {
              "border border-black": checked,
            },
            checkboxClassName,
          )}
        >
          <Image
            src={image}
            alt={""}
            fill
            className={"select-none object-cover"}
          />
        </Switch>
        {label && (
          <Switch.Label
            className={cn(
              "mt-0.5 cursor-pointer select-none break-words text-center text-sm lg:font-extralight",
              {
                "!font-bold": checked,
              },
              labelClassName,
            )}
          >
            {label}
          </Switch.Label>
        )}
      </Switch.Group>
    </div>
  );
}
