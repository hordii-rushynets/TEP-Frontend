import { StaticImageData } from "next/image";
import { cn } from "utils/cn";

import { ImageSquare } from "common/ImageSquare";
import { Tip } from "common/Tip";
import { Container, Section, Title } from "common/ui";

type LittleGridProps = {
  images: StaticImageData[] | string[];
  title?: string;
  description?: string;
  reversed?: boolean;
};

export function LittleGrid({
  images,
  title,
  description,
  reversed = false,
}: LittleGridProps) {
  return (
    <Section className={"mb-24 lg:mb-40"}>
      <Container>
        <Title size={"2xl"} className={"mb-3 md:mb-5"}>
          {title}
        </Title>
        <p className={"mb-7 text-sm md:mb-12"}>{description}</p>
        <div
          className={cn("flex flex-col gap-6 lg:flex-row", {
            "flex-col-reverse lg:flex-row-reverse": reversed,
          })}
        >
          <div className={"relative hidden flex-1 md:block"}>
            <ImageSquare
              classes={{
                wrapper: "md:min-h-[500px] md:pb-0 lg:pb-[100%] lg:min-h-auto",
              }}
              source={images[0]}
            />
            <Tip
              product={{
                id: "1",
                category: "pillows",
                title: "Velure",
                price: 1299,
                image: "",
              }}
              className={"absolute left-[20%] top-[35%]"}
            />
          </div>
          <div className={"flex flex-1 flex-col gap-6 md:flex-row"}>
            <div className={"flex flex-1 flex-col-reverse gap-6 md:flex-col"}>
              <ImageSquare
                source={images[1]}
                classes={{ wrapper: "lg:pb-0 lg:basis-1/3" }}
              />
              <ImageSquare
                source={images[2]}
                classes={{ wrapper: "lg:pb-0 lg:basis-2/3 pb-[160%]" }}
              />
            </div>
            <div className={"flex flex-1 flex-col gap-6"}>
              <ImageSquare
                source={images[3]}
                classes={{ wrapper: "lg:pb-0 lg:basis-2/3 pb-[160%]" }}
              />
              <ImageSquare
                source={images[4]}
                classes={{ wrapper: "lg:pb-0 lg:basis-1/3 hidden md:block" }}
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
