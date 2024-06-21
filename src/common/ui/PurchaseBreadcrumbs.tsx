import { Container, Section } from ".";
import { HTMLAttributes } from "react";
import { cn } from "utils/cn";

export type PurchaseBreadcrumbsProps = {
  items: {
    stages: string[];
    index: number;
  };
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export function PurchaseBreadcrumbs(props: PurchaseBreadcrumbsProps) {
  const { items, className } = props;
  return (
    <Section className={cn("overflow-hidden bg-white", className)}>
      <Container>
        <ul
          className={
            "flex items-center gap-x-8 overflow-x-scroll border-b border-tep_gray-200 pb-12 md:pb-6"
          }
        >
          {items.stages.map((stage, Idx) => {
            const isPrev = Idx < items.index;

            return (
              <li key={stage} className={"flex items-center gap-x-4"}>
                <span
                  className={cn(
                    "flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-black bg-white font-bold",
                    {
                      "bg-black text-white": isPrev,
                    },
                  )}
                >
                  {Idx + 1}
                </span>
                <span className={"whitespace-nowrap lg:font-extralight"}>
                  {stage}
                </span>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
