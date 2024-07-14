import { clsx } from "clsx";
import React, { type ReactNode } from "react";

const TypographyH1 = React.forwardRef<HTMLHeadingElement, { children: ReactNode; className?: string }>(
  ({ children, className = "" }, ref) => {
    return (
      <h1 ref={ref} className={clsx("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl", className)}>
        {children}
      </h1>
    );
  },
);
TypographyH1.displayName = "TypographyH1";

const TypographyH2 = React.forwardRef<HTMLHeadingElement, { children: ReactNode; className?: string }>(
  ({ children, className = "" }, ref) => {
    return (
      <h2
        ref={ref}
        className={clsx("scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0", className)}
      >
        {children}
      </h2>
    );
  },
);
TypographyH2.displayName = "TypographyH2";

const TypographyH3 = React.forwardRef<HTMLHeadingElement, { children: ReactNode; className?: string }>(
  ({ children, className = "" }, ref) => {
    return (
      <h3 ref={ref} className={clsx("scroll-m-20 text-2xl font-semibold tracking-tight", className)}>
        {children}
      </h3>
    );
  },
);
TypographyH3.displayName = "TypographyH3";

const TypographyH4 = React.forwardRef<HTMLHeadingElement, { children: ReactNode; className?: string }>(
  ({ children, className = "" }, ref) => {
    return (
      <h4 ref={ref} className={clsx("scroll-m-20 text-xl font-semibold tracking-tight", className)}>
        {children}
      </h4>
    );
  },
);
TypographyH4.displayName = "TypographyH4";

export { TypographyH1, TypographyH2, TypographyH3, TypographyH4 };
