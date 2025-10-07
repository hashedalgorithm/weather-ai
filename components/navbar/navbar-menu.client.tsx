"use client";

import NavbarThemeToggler from "@/components/navbar/navbar-theme-toggler.client";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const NavbarMenu = () => {
  return (
    <>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href={"/"} passHref>
              <p className="font-medium">Home</p>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href={"/shifts"} passHref>
              <p className="font-medium">Shifts</p>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavbarThemeToggler className="ml-4" />
      </NavigationMenuList>
    </>
  );
};

export default NavbarMenu;
