import type { HTMLProps, ReactNode } from "react";

export function CenteredSkinnyLayout({
  children,
  className,
  ...divProps
}: HTMLProps<HTMLDivElement> & { className?: string }) {
  return (
    <div className={`mx-auto flex w-full max-w-sm flex-col gap-10 px-4 pt-8 pb-8 ${className}`} {...divProps}>
      {children}
    </div>
  );
}
