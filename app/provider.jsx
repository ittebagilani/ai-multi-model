import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { AppSidebar } from "./_components/AppSidebar";
import AppHeader from "./_components/AppHeader";
import { SidebarProvider } from "@/components/ui/sidebar";

function Provider({ children, ...props }) {
  return (
    <div>
      <NextThemesProvider {...props}>
        <SidebarProvider>
          <AppSidebar />
          <div className="w-full">
            <AppHeader />
            {children}
          </div>
        </SidebarProvider>
      </NextThemesProvider>
    </div>
  );
}

export default Provider;
