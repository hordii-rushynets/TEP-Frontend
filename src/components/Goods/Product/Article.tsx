import { HTMLAttributes } from "react";
import { cn } from "utils/cn";

export type ArticleProps = {
  article: string;
} & Pick<HTMLAttributes<HTMLElement>, "className">;

export function Article({ article, className }: ArticleProps) {
  return (
    <div
      className={cn(
        "rounded-full bg-tep_blue-400 px-4 py-1.5 text-[10px] font-light text-white",
        className,
      )}
    >
      {article}
    </div>
  );
}
