import { forwardRef, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { IconButton, TextInput, TextInputProps } from "common/ui";

export const PasswordInput = forwardRef<HTMLInputElement, TextInputProps>(
  (props, ref) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
      <TextInput
        {...{
          ...props,
          type: isVisible ? "text" : "password",
        }}
        ref={ref}
        endAdornment={
          isVisible ? (
            <IconButton
              colorVariant={"empty"}
              onMouseUp={() => setIsVisible(false)}
            >
              <FiEyeOff
                className={
                  "size-6 text-tep_gray-700 transition-colors hover:text-tep_blue-500"
                }
              />
            </IconButton>
          ) : (
            <IconButton
              colorVariant={"empty"}
              onMouseDown={() => setIsVisible(true)}
            >
              <FiEye
                className={
                  "size-6 text-tep_gray-700 transition-colors hover:text-tep_blue-500"
                }
              />
            </IconButton>
          )
        }
      />
    );
  },
);

PasswordInput.displayName = "PasswordInput";
