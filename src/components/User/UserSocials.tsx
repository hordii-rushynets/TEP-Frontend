import { useLocalization } from "contexts/LocalizationContext";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export type UserSocialsProps = {
  googleLink?: string;
  fbLink?: string;
};

export function UserSocials({ fbLink, googleLink }: UserSocialsProps) {
  const { staticData } = useLocalization();

  return (
    <div>
      <label className={"mb-2 block text-sm text-black lg:font-extralight"}>
        {staticData.account.userSocials}
      </label>
      <div className={"mg:gap-x-8 flex flex-nowrap gap-x-4 sm:gap-x-7"}>
        {googleLink && (
          <Link
            target={"_blank"}
            href={googleLink}
            className={
              "flex flex-1 items-center justify-center gap-x-2.5 rounded-full border border-tep_gray-700/20 px-4 py-4 text-sm font-bold transition-colors hover:border-black"
            }
          >
            <FcGoogle className={"size-4"} />
            <span>Google</span>
          </Link>
        )}
        {fbLink && (
          <Link
            target={"_blank"}
            href={fbLink}
            className={
              "flex flex-1 items-center justify-center gap-x-2.5 rounded-full border border-tep_gray-700/20 px-4 py-4 text-sm font-bold transition-colors hover:border-black"
            }
          >
            <FaFacebookF className={"size-4 text-[#496bb5]"} />
            <span>Facebook</span>
          </Link>
        )}
      </div>
    </div>
  );
}
