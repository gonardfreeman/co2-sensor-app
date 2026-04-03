import { Microchip } from "lucide-react";
import { Link, NavLink } from "react-router";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/features/header/components/mode-toggle";

import { BleToggle } from "./components/ble-toggle";
import { HOME_LINK_CLS } from "./constants/classes";

export function Header() {
  return (
    <header className="bg-background sticky top-0 z-50 w-full">
      <div className="3xl:fixed:px-0 mx-auto w-full px-6">
        <div className="3xl:fixed:container flex h-(--header-height) items-center **:data-[slot=separator]:h-4!">
          <Link to="/" className={HOME_LINK_CLS}>
            <Microchip />
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <NavLink to="/history" end>
                    History
                  </NavLink>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
            <BleToggle />
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
