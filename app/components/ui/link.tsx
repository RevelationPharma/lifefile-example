import { NavLink, type NavLinkProps } from "@remix-run/react";
import { clsx } from "clsx";
import type { ReactNode } from "react";
import { buttonVariants } from "~/components/ui/button";

export function BasicLink({ className = "", ...rest }: NavLinkProps) {
  return (
    <NavLink
      className={clsx(
        "text-blue-500 transition-colors hover:text-blue-700 dark:hover:text-blue-300 underline underline-offset-2 aria-current-page:text-blue-400 aria-current-page:no-underline aria-current-page:cursor-default",
        {
          [`${className}`]: true,
        },
      )}
      {...rest}
    />
  );
}

export function BasicLinkWithIcon({
  children,
  className,
  ...rest
}: Omit<NavLinkProps, "children"> & { children: ReactNode }) {
  return (
    <BasicLink className={className} {...rest}>
      <span className="flex items-center gap-2 justify-start">{children}</span>
    </BasicLink>
  );
}

export function NavigationLink({ className = "", ...rest }: NavLinkProps) {
  return (
    <NavLink
      className={({ isActive }) => {
        return clsx(buttonVariants({ variant: "ghost" }), {
          "bg-slate-200 dark:bg-slate-800 cursor-default": isActive,
          [`${className}`]: true,
        });
      }}
      {...rest}
    />
  );
}

export function NavLinkWithIcon({ children, ...rest }: Omit<NavLinkProps, "children"> & { children: ReactNode }) {
  return (
    <NavLink {...rest}>
      <span className="flex items-center gap-2 justify-center">{children}</span>
    </NavLink>
  );
}
