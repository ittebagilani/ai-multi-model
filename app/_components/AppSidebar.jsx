"use client";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";

export function AppSidebar() {
  const { theme, setTheme } = useTheme();
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-3 ">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image
                src={"/logo.svg"}
                alt="logo"
                width={60}
                height={60}
                className="w-[40px] h-[40px]"
              />
              <h2 className="font-black text-xl">blended</h2>
            </div>
            <div>
              {theme == "light" ? (
                <Button
                  variant={"ghost"}
                  onClick={() => {
                    setTheme("dark");
                  }}
                >
                  <Sun />
                </Button>
              ) : (
                <Button
                  variant={"ghost"}
                  onClick={() => {
                    setTheme("light");
                  }}
                >
                  <Moon />
                </Button>
              )}
            </div>
          </div>
          <Button className="mt-7 w-full" size={"lg"}>
            + New Chat
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <div className="p-3">
            <h2 className="font-bold text-lg">Chat</h2>
            <p className="text-sm dark:text-gray-400 text-gray-500">
              Sign in to start chatting with multiple AI models.
            </p>
          </div>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-3 mb-10">
          <Button className={"w-full"} size={"lg"}>
            Sign In/Sign Up
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
