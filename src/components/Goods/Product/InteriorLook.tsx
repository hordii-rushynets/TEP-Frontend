import Image from "next/image";

import { Title } from "common/ui";

import IMG1 from "./static/interier1.jpg";
import IMG2 from "./static/interier2.jpg";

export function InteriorLook() {
  return (
    <div className={"mb-24"}>
      <Title className={"mb-6"} size={"2xl"}>
        Вигляд в інтер’єрі
      </Title>
      <div className={"grid grid-cols-1 gap-6 lg:grid-cols-2"}>
        <div
          className={
            "relative overflow-hidden rounded-3xl pb-[100%] md:h-[300px] md:pb-0 lg:h-[616px]"
          }
        >
          <Image src={IMG1} fill alt={"Image"} className={"object-cover"} />
        </div>{" "}
        <div
          className={
            "relative overflow-hidden rounded-3xl pb-[100%] md:h-[300px] md:pb-0 lg:h-[616px]"
          }
        >
          <Image src={IMG2} fill alt={"Image"} className={"object-cover"} />
        </div>
      </div>
    </div>
  );
}
