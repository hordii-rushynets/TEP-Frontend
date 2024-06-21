import { Container, Section } from ".";
import { clsx } from "clsx";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { FiChevronRight } from "react-icons/fi";
import { cn } from "utils/cn";

export type BreadcrumbsProps = {
  items: {
    name: string;
    href: string;
  }[];
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export function Breadcrumbs(props: BreadcrumbsProps) {
  const { items, className } = props;

  if (!items.length) return;

  return (
    <Section className={cn("bg-white", className)}>
      <Container>
        <ul
          className={
            "flex flex-wrap items-center gap-x-2 gap-y-1.5 border-b border-tep_gray-200 pb-6 pt-8 md:pt-12"
          }
        >
          {items.map((i, idx) => {
            const isLast = idx === items.length - 1;

            return (
              <li key={i.name}>
                <Link
                  href={i.href}
                  className={clsx(
                    "flex shrink-0 items-center gap-x-2 whitespace-nowrap text-sm font-light transition-colors",
                    {
                      "pointer-events-none": isLast,
                      "hover:text-tep_blue-500": !isLast,
                    },
                  )}
                >
                  {i.name}

                  {!isLast && <FiChevronRight className={"size-4"} />}
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
