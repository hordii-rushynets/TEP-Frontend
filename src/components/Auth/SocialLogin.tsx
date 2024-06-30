import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { ButtonBase } from "common/ui";

export type SocialLoginProps = {
  onGoogleClick?: () => void;
  onFBClick?: () => void;
};

export function SocialLogin({ onFBClick, onGoogleClick }: SocialLoginProps) {
  return (
    <>
      {onGoogleClick && (
        <ButtonBase
          onClick={() => onGoogleClick()}
          className={{
            button:
              "flex items-center justify-center gap-x-2.5 rounded-full border border-tep_gray-700/20 px-8 py-4 text-sm font-bold transition-colors hover:border-black",
          }}
        >
          <FcGoogle className={"size-4"} />
          <span>Продовжити з Google</span>
        </ButtonBase>
      )}
      {onFBClick && (
        <ButtonBase
          onClick={() => onFBClick()}
          className={{
            button:
              "group flex items-center justify-center gap-x-2.5 rounded-full bg-[#3B5998] px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-[#496bb5]",
          }}
        >
          <FaFacebookF className={"size-4"} />
          <span>Продовжити з Facebook</span>
        </ButtonBase>
      )}
    </>
  );
}
