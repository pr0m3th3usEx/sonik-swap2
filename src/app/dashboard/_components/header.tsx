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
          {/* <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          /> */}
        </div>
        {/* <div className="flex items-center gap-2">
          <ToggleThemeButton />
          <Suspense fallback={<Skeleton className="h-8 w-8 rounded-full" />}>
            <AccountModeSwitcher />
          </Suspense>
        </div> */}
      </div>
    </header>
  );
}
