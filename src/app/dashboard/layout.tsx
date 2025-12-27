import ProviderSidebar from "./_components/provider-sidebar";
import DashboardHeader from "./_components/header";
import Background from "src/components/background";
import SidebarProvider from "src/components/providers/sidebar-provider";
import { SidebarInset } from "src/components/ui/sidebar";
import { cn } from "src/lib/utils/style";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Background className="z-1" />
      <ProviderSidebar />

      <SidebarInset
        data-content-layout="centered"
        className={cn(
          "data-[content-layout=centered]:ml-auto! data-[content-layout=centered]:max-w-screen-2xl",
          "md:peer-data-[variant=floating]:peer-data-[state=collapsed]:ml-2! md:peer-data-[variant=floating]:peer-data-[state=expanded]:ml-[calc(var(--sidebar-width)+var(--spacing)+1rem)]!",
          // Adds right margin for inset sidebar in centered layout up to 113rem.
          // On wider screens with collapsed sidebar, removes margin and sets margin auto for alignment.
          "max-[1808px]:peer-data-[variant=inset]:mr-2! min-[1616px]:peer-data-[variant=inset]:peer-data-[state=collapsed]:mr-auto!",
          "bg-transparent! z-1",
        )}
      >
        <DashboardHeader navbarStyle="scroll" />
        <div className="h-full p-4 md:p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
