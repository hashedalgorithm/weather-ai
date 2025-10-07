import NavbarLanding from "@/components/navbar/navbar-landing.client";
import NavbarMenu from "@/components/navbar/navbar-menu.client";
import { NavigationMenu } from "@/components/ui/navigation-menu";

const Navbar = () => {
  return (
    <nav className="h-fit w-full bg-opacity-30 backdrop-blur-sm shadow-lg p-4 border-none flex justify-between sticky top-0">
      <NavigationMenu>
        <NavbarLanding />
      </NavigationMenu>
      <NavigationMenu>
        <NavbarMenu />
      </NavigationMenu>
    </nav>
  );
};

export default Navbar;
