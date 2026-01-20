import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";
import { ThemeSwitch } from "./ThemeSwitch";

const NAV_LINKS = [
  { to: "#", label: "Laboratorium" },
  { to: "#", label: "Notatki" },
  { to: "#", label: "Narzędzia" },
] as const;

const NavigationBar = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "bg-background/80 backdrop-blur-md flex items-center justify-between border-b py-3 px-7",
        className,
      )}
      {...props}
    >
      <div className="flex items-center gap-2 text-md font-semibold">
        <div className="bg-foreground text-accent flex h-6 w-6 items-center justify-center rounded-xs text-sm">
          M
        </div>
        Mikołaj Chlasta
      </div>

      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList className="gap-5">
          {NAV_LINKS.map((link) => (
            <NavigationMenuItem key={link.to}>
              <StyledNavigationMenuLink to={link.to}>
                {link.label}
              </StyledNavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center justify-center gap-3 ">
        <ThemeSwitch />
        <Button> Kontakt</Button>
      </div>
    </div>
  );
};

const StyledNavigationMenuLink = ({
  children,
  to,
  className,
}: {
  children: React.ReactNode;
  to: string;
  className?: string;
}) => {
  return (
    <NavigationMenuLink
      asChild
      className={cn(
        "text-md font-medium opacity-60 transition-opacity hover:bg-transparent hover:opacity-100 focus:bg-transparent",
        className,
      )}
    >
      <Link to={to}>{children}</Link>
    </NavigationMenuLink>
  );
};

export default NavigationBar;
