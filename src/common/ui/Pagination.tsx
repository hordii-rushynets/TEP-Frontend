import { clsx } from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { HTMLAttributes } from "react";
import { cn } from "utils/cn";
import { isNum } from "utils/js-types";

import { ButtonBase } from "common/ui";

export type PaginationProps = {
  total: number;
  activePage: number;
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export function Pagination(props: PaginationProps) {
  const { total = 1, activePage, className } = props;
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function getPageUrl(page: string | number) {
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("page", String(page));
    return `${pathname}?${newParams.toString()}`;
  }

  if (total <= 1) return null;
  return (
    <div className={cn("overflow-auto text-center", className)}>
      <nav className={"inline-flex gap-x-3 md:gap-x-4"}>
        <ul className={"flex gap-x-2"}>
          {getPaginationArray(total, activePage).map((page, idx) => {
            if (isNum(page)) {
              const disabled = page === activePage;

              return (
                <li key={page}>
                  <ButtonBase
                    component={disabled ? "button" : Link}
                    href={disabled ? undefined : getPageUrl(page)}
                    className={{
                      button: clsx(
                        "flex size-12 items-center justify-center rounded-full text-xl font-light transition-colors",
                        {
                          "bg-black text-white": page === activePage,
                          "hover:bg-tep_blue-500 hover:text-white":
                            page !== activePage,
                        },
                      ),
                    }}
                    disabled={disabled}
                  >
                    {page}
                  </ButtonBase>
                </li>
              );
            }

            return (
              <li
                key={`empty-${idx}`}
                className={
                  "w-6 self-end text-center text-lg tracking-widest text-gray-600"
                }
              >
                ...
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

function getPaginationArray(totalPages: number, activePage: number) {
  const pages = [...Array(totalPages)].map((_, i) => i + 1);
  if (pages.length <= 6) return pages;

  if (activePage <= 3) {
    return [...pages.slice(0, 4), "...", totalPages];
  }

  if (activePage >= totalPages - 2) {
    return [1, "...", ...pages.slice(totalPages - 4, totalPages)];
  }

  return [
    1,
    "...",
    ...pages.slice(activePage - 2, activePage + 1),
    "...",
    totalPages,
  ];
}
