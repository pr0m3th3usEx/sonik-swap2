import Link from "next/link";
import ProviderItem from "src/components/features/provider-sidebar/provider-item";
import Sidebar, { SidebarContent } from "src/components/ui/sidebar";

export default function ProviderSidebar() {
  const providers = ["spotify", "deezer"];

  return (
    <Sidebar variant="floating" collapsible="offcanvas" side="left">
      <SidebarContent className="sidebar">
        {providers.map((provider) => (
          <Link key={provider} href={`/dashboard/${provider}`} passHref>
            <ProviderItem
              providerName={provider}
              className="cursor-pointer transition-transform ease-in-out duration-200 hover:scale-90"
            />
          </Link>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
