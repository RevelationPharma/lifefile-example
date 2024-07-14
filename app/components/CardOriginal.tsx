import { clsx } from "clsx";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function CardOriginal({ children, className = "" }: CardProps) {
  return (
    <article
      className={clsx(
        "flex max-w-sm flex-col gap-6 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800",
        className,
      )}
    >
      {children}
    </article>
  );
}
