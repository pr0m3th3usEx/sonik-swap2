import Sidebar, { SidebarContent } from "src/components/ui/sidebar";

export default function ProviderSidebar() {
  return (
    <Sidebar variant="floating" collapsible="offcanvas" side="left">
      <SidebarContent className="sidebar">Test</SidebarContent>
    </Sidebar>
  );
}
