import Link from "next/link";
import { HTMLAttributes } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { cn } from "utils/cn";

import { IconButton } from "common/ui";

export type Socials = {
  instagram?: string;
  facebook?: string;
  youtube?: string;
  pinterest?: string;
  linkedin?: string;
  tiktok?: string;
};

type SocialsProps = {
  links?: Socials;
} & Pick<HTMLAttributes<HTMLElement>, "className">;
export function Socials({ links, className }: SocialsProps) {
  if (!links) return;
  const { facebook, instagram, linkedin, pinterest, youtube, tiktok } = links;
  return (
    <div className={cn("flex gap-x-2", className)}>
      {instagram && (
        <Link target={"_blank"} href={instagram}>
          <IconButton>
            <FiInstagram />
          </IconButton>
        </Link>
      )}
      {facebook && (
        <Link target={"_blank"} href={facebook}>
          <IconButton className={{ button: "items-end" }}>
            <FaFacebookF className={"size-5"} />
          </IconButton>
        </Link>
      )}
      {youtube && (
        <Link target={"_blank"} href={youtube}>
          <IconButton>
            <FaYoutube />
          </IconButton>
        </Link>
      )}
      {pinterest && (
        <Link target={"_blank"} href={pinterest}>
          <IconButton className={{ button: "items-end" }}>
            <FaPinterestP className={"size-5"} />
          </IconButton>
        </Link>
      )}
      {linkedin && (
        <Link target={"_blank"} href={linkedin}>
          <IconButton>
            <FaLinkedinIn />
          </IconButton>
        </Link>
      )}
      {tiktok && (
        <Link target={"_blank"} href={tiktok}>
          <IconButton>
            <FaTiktok />
          </IconButton>{" "}
        </Link>
      )}
    </div>
  );
}
