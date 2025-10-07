"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { ComponentPropsWithRef, MouseEventHandler } from "react";

type NavbarThemeTogglerProps = ComponentPropsWithRef<"button">;

const NavbarThemeToggler = (props: NavbarThemeTogglerProps) => {
  const { setTheme, resolvedTheme } = useTheme();

  const handleOnClickThemeToggler: MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    e.preventDefault();

    if (resolvedTheme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <Button variant="outline" onClick={handleOnClickThemeToggler} {...props}>
      {resolvedTheme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
};

export default NavbarThemeToggler;
