import { HTMLAttributes } from "react";
import { cn } from "utils/cn";

import { Container, Section, Title } from "common/ui";

import { ImageBlock, ImageBlockProps } from "./ImageBlock";

export type ContentBlockProps = {
  title?: string;
  text: string[];
  haveImage?: boolean;
} & ImageBlockProps &
  Pick<HTMLAttributes<HTMLElement>, "className">;

export function ContentBlock({
  title = "",
  text = [],
  className = "",
  haveImage = true,
  ...props
}: ContentBlockProps) {
  return (
    <Section className={cn(className)}>
      <Container>
        <div>
          {title && (
            <Title className={"mb-5 text-3xl md:mb-3.5"}>{title}</Title>
          )}
          <div
            className={
              "flex max-w-[818px] flex-col gap-y-4 pb-9 text-lg md:pb-20 md:text-sm lg:font-extralight"
            }
          >
            {text.map((el, Idx) => (
              <p key={Idx}>{el}</p>
            ))}
          </div>
        </div>
      </Container>
      {haveImage && <ImageBlock {...props} />}
    </Section>
  );
}
