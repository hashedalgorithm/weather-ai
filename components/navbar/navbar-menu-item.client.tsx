import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type NavbarMenuItemProps = ComponentPropsWithoutRef<"li"> & { href: string };

const NavbarMenuItem = ({
  title,
  children,
  href,
  ...props
}: NavbarMenuItemProps) => {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default NavbarMenuItem;
