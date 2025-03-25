import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Image from "next/image";

const AppSiderbar = () => {
  return (
    <Sidebar>
      <SidebarHeader />
      <Image src={'/logo.svg'} alt="logo" width={40} height={40} />
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSiderbar;
