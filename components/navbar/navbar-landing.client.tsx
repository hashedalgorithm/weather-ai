"use client";

import NavbarMenuItem from "@/components/navbar/navbar-menu-item.client";
import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/components/logo";

const NavbarLanding = () => {
  return (
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="focus:bg-transparent! bg-transparent! cursor-pointer">
          <Logo />
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] justify-start">
            <li className="row-span-3">
              <NavigationMenuLink asChild>
                <Link
                  className="bg-cover object-cover flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                  href="/"
                >
                  <div className="mt-4 mb-2 text-lg font-medium">
                    Weather AI
                  </div>
                  <p className="text-muted-foreground text-sm leading-tight">
                    My Personal Weather Advisor
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
            <NavbarMenuItem href="/docs" title="Introduction">
              Learn more about Vokabel Tracker and its features.
            </NavbarMenuItem>
            <NavbarMenuItem
              href="https://github.com/hashedalgorithm/vokabel-tracker"
              title="View Source"
            >
              Vokabel tracker is open-source and you can see its source here.
            </NavbarMenuItem>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  );
};

export default NavbarLanding;
