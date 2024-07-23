"use client";

import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from "react";
import { FiCamera, FiUser } from "react-icons/fi";

import { ButtonBase, Loader } from "common/ui";

import { AccountService } from "app/account/services";
import { useAuth } from "contexts/AuthContext";

interface ChangeAvatarFormProps {
  profileImage: string;
  refresh: boolean;
  setRefresh: (b: boolean) => void;
}

export function ChangeAvatarForm({profileImage, refresh, setRefresh} : ChangeAvatarFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<StaticImageData | string>(profileImage);
  const accountService = new AccountService();
  const authContext = useAuth();

  useEffect(() => {
    setImage(profileImage);
  }, [profileImage]);

  return (
    <div className={"relative size-[184px]"}>
      <div
        className={
          "relative z-10 overflow-hidden rounded-full bg-tep_gray-200 pb-[100%]"
        }
      >
        {image && (
          <Image
            src={image}
            alt={"Avatar"}
            priority
            fill
            className={"z-10 select-none object-cover"}
            sizes="100vw, 50vw, 33vw"
          />
        )}
        <div
          className={
            "absolute left-0 top-0 z-0 flex h-full w-full items-center justify-center rounded-full bg-tep_gray-200"
          }
        >
          <FiUser className={"size-12"} />
        </div>
      </div>

      <ButtonBase
        component={"label"}
        className={{
          button:
            "absolute bottom-0 right-0 z-30 rounded-full bg-white p-3 transition-colors hover:text-tep_blue-500",
        }}
      >
        <input
          type={"file"}
          className={"hidden"}
          accept={"image/jpeg,image/png"}
          onChange={(e) => {
            const file = e.target.files?.[0];
            const formData = new FormData();
            file && formData.append("profile_picture", file);
            accountService.profileUpdate(formData, authContext).then(() => {
              setRefresh(!refresh);
            });
          }}
          onLoadedData={() => setIsLoading(false)}
          onLoadStart={() => setIsLoading(true)}
        />
        <FiCamera className={"size-6"} />
      </ButtonBase>

      {isLoading && (
        <div
          className={
            "absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center rounded-full bg-tep_gray-200"
          }
        >
          <Loader />
        </div>
      )}
    </div>
  );
}
