import { useState } from "react";
import { AppSidebar } from "./app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

type LayoutType = {
  children: React.ReactNode;
};

const SIDEBAR_STORAGE_KEY = "sidebar-open";

const SIDEBAR_WIDTH_OPEN = "256px";
const SIDEBAR_WIDTH_COLLAPSED = "48px";

const Layout = ({ children }: LayoutType) => {
  const isDefaultSidebarOpen = localStorage.getItem(SIDEBAR_STORAGE_KEY);

  const [isSidebarOpen, setIsSidebarOpen] = useState(
    isDefaultSidebarOpen ?? true,
  );

  return (
    <SidebarProvider
      open={isSidebarOpen}
      onOpenChange={(open) => {
        localStorage.setItem(SIDEBAR_STORAGE_KEY, open);
        setIsSidebarOpen(open);
      }}
    >
      <div
        className="grid h-screen w-full"
        style={{
          gridTemplateColumns: isSidebarOpen
            ? `${SIDEBAR_WIDTH_OPEN} 1fr`
            : `${SIDEBAR_WIDTH_COLLAPSED} 1fr`,
          transition: "grid-template-columns 150ms ease-in-out",
        }}
      >
        <AppSidebar />
        <div className="flex max-h-screen min-w-0 flex-col">
          {/* <div className="absolute t-0 l-0 text-[700px] rotate-30 text-red-600 opacity-5 z-100">
            TEST
          </div> */}

          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;
