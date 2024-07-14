import { NavLink, useNavigate } from "@remix-run/react";
import { AreaChart, CircleUser, HardDriveDownload, LogOut, Menu } from "lucide-react";
import { Button, ButtonWithIcon } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { NavigationLink } from "~/components/ui/link";
import { ModeToggle } from "~/components/ui/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import type { User } from "~/services/auth.server";
import { isSuperAdmin } from "~/utils/isSuperAdmin";

function NavLinks() {
  return (
    <>
      <NavigationLink to="/scheduled-reports">Scheduled Reports</NavigationLink>
      <NavigationLink to="/organizations">Organizations</NavigationLink>
      <NavigationLink to="/pharmacies">Pharmacies</NavigationLink>
      <NavigationLink to="/emails/history">Emails</NavigationLink>
    </>
  );
}

async function handleExport() {
  const response = await fetch("/api/export-db", {
    method: "POST",
  });

  if (response.ok) {
    const result = await response.json();

    const downloadCSV = (csvContent: string, fileName: string) => {
      const blob = new Blob([csvContent], { type: "text/csv" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(url);
    };

    downloadCSV(result.orgsCSV, "orgs.csv");
    downloadCSV(result.scheduledReportsCSV, "scheduled_reports.csv");
    alert("Database exported successfully!");
  } else {
    const result = await response.json();
    alert(`Failed to export database: ${result.error}`);
  }
}

interface AuthenticatedHeaderProps {
  environment?: string;
  user?: User;
}

export function AuthenticatedHeader({ environment, user }: AuthenticatedHeaderProps) {
  const navigate = useNavigate();
  const showDbDownload = isSuperAdmin(user);

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
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 font-medium text-lg">
            <NavLinks />
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex w-full items-center justify-end gap-4 md:ml-auto lg:gap-4 md:gap-2">
        <ModeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full h-7 w-7">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {showDbDownload && (
              <DropdownMenuItem>
                <ButtonWithIcon variant="ghost" onClick={handleExport}>
                  <HardDriveDownload size={16} />
                  Export Database
                </ButtonWithIcon>
              </DropdownMenuItem>
            )}
            <DropdownMenuItem>
              <ButtonWithIcon className={"w-full"} variant={"ghost"} onClick={() => navigate("/trigger-report")}>
                <AreaChart size={16} />
                Trigger Report
              </ButtonWithIcon>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ButtonWithIcon className={"w-full"} variant="destructiveGhost" onClick={() => navigate("/logout")}>
                <LogOut size={16} />
                Log Out
              </ButtonWithIcon>
            </DropdownMenuItem>
            <pre
              className={"text-xs text-neutral-400 dark:text-neutral-500 text-center py-2"}
              title={`Environment: ${environment}`}
            >
              {environment ?? "development"}
            </pre>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
