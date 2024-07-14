import { NavLink } from "@remix-run/react";
import { NavigationLink } from "~/components/ui/link";
import { ModeToggle } from "~/components/ui/mode-toggle";

function NavLinks() {
  return (
    <>
      <NavigationLink to="/orders/create">Create Order</NavigationLink>
      <NavigationLink to="/orders/update-status">Update Status</NavigationLink>
      <NavigationLink to="/orders/update-shipping">Update Shipping</NavigationLink>
    </>
  );
}

export function Header() {
  return (
    <header className="relative flex-shrink-0 header-fade bg-lightBg dark:bg-neutral-950 top-0 flex h-16 items-center gap-4 border-b border-b-neutral-300 dark:border-b-neutral-700 bg-background px-4 md:px-6">
      <nav className="hidden flex-col gap-6 font-medium text-lg md:flex md:flex-row md:items-center lg:gap-6 md:gap-5 md:text-sm">
        <NavLink to="#" className="flex dark:text-white items-center gap-2 font-semibold text-lg md:text-base">
          <img
            alt={"Revelation Pharma"}
            className={"w-[160px] min-w-[72px] hover:scale-125 transition-transform"}
            src={"/logo-RevPharma.png"}
          />
          <span className="sr-only">Revelation Pharma</span>
        </NavLink>
        <NavLinks />
      </nav>

      <div className="flex w-full items-center justify-end gap-4 md:ml-auto lg:gap-4 md:gap-2">
        <ModeToggle />
      </div>
    </header>
  );
}
