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
      <div className="">
        <div className="flex items-center gap-3 w-full justify-center mt-5">
          <Image src={"/logo.svg"} alt="logo" width={40} height={40} />
          <h2 className="font-bold text-2xl">Video Gen</h2>
        </div>
        <h2 className="text-lg text-gray-400 text-center mt-3">Ai Short Video Generator</h2>
      </div>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSiderbar;
