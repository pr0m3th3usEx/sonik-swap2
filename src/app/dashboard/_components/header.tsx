import { MenuIcon } from "lucide-react";
import Link from "next/link";
import Logo from "src/components/logo";
import { Button } from "src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";
import { SidebarTrigger } from "src/components/ui/sidebar";
import { cn } from "src/lib/utils/style";

type DashboardHeaderProps = {
  readonly navbarStyle: "sticky" | "scroll";
};

export default function DashboardHeader({ navbarStyle }: DashboardHeaderProps) {
  return (
    <header
      data-navbar-style={navbarStyle}
      className={cn(
        "flex py-2 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:py-2",
        // Handle sticky navbar style with conditional classes so blur, background, z-index, and rounded corners remain consistent across all SidebarVariant layouts.
        "data-[navbar-style=sticky]:bg-background/50 data-[navbar-style=sticky]:sticky data-[navbar-style=sticky]:top-0 data-[navbar-style=sticky]:z-50 data-[navbar-style=sticky]:overflow-hidden data-[navbar-style=sticky]:rounded-t-[inherit] data-[navbar-style=sticky]:backdrop-blur-md",
      )}
    >
      <div className="flex w-full items-center justify-between px-4 lg:px-4">
        <div className="flex items-center gap-1 lg:gap-2">
          <SidebarTrigger />
          <Link href="/">
            <Logo size="sm" />
          </Link>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" asChild>
              <div className="cursor-pointer bg-accent hover:bg-accent rounded-full! border-2 border-primary duration-700 shadow-md">
                <MenuIcon className="text-primary" />
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>My account</DropdownMenuItem>
            <DropdownMenuItem>Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
