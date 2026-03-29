import { NavLink, Link } from "react-router";
import { Microchip } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full">
      <div className="3xl:fixed:px-0 mx-auto w-full px-6">
        <div className="3xl:fixed:container flex h-(--header-height) items-center **:data-[slot=separator]:h-4!">
          <Link
            to="/"
            className="shrink-0 items-center justify-center outline-none select-none lg:flex"
          >
            <Microchip />
          </Link>
          <nav className="hidden items-center gap-0 lg:flex">
            <NavLink to="/history" end>
              History
            </NavLink>
          </nav>
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
