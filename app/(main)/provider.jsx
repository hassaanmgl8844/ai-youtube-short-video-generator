import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";
import AppSiderbar from "./_components/AppSiderbar";
import AppHeader from "./_components/AppHeader";

const DashboardProvider = ({ children }) => {
  return (
    <SidebarProvider>
      <AppSiderbar />
      <div className="w-full">
        <AppHeader />
        {children}
      </div>
    </SidebarProvider>
  );
};

export default DashboardProvider;
