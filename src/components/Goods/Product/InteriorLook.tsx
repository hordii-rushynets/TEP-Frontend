import Image from "next/image";

import { Title } from "common/ui";
import { useLocalization } from "contexts/LocalizationContext";

export function InteriorLook({images}: {images: {image: string}[]}) {
  const { staticData } = useLocalization();

  return (
    <div className={"mb-24"}>
      <Title className={"mb-6"} size={"2xl"}>
        {staticData.goods.interiorLook}
      </Title>
      <div className={"grid grid-cols-1 gap-6 lg:grid-cols-2"}>
        {images.map(i => 
        <div
          className={
            "relative overflow-hidden rounded-3xl pb-[100%] md:h-[300px] md:pb-0 lg:h-[616px]"
          }
        >
          <Image src={i.image} fill alt={"Image"} className={"object-cover"} sizes="100vw, 50vw, 33vw"/>
        </div>
        )}
      </div>
    </div>
  );
}
