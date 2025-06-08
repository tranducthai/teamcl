"use client";

import Link from "next/link";
import { Settings, LogOutIcon, MoreVerticalIcon, UserCircleIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar
} from "@/components/ui/sidebar";
import { Skeleton } from "@/components/ui/skeleton";
import { useSession } from "@/hooks/use-session";
import { getInitials, pickAvatarColor } from "@/lib/user-utils";
import { cn } from "@/lib/utils";

export default function NavUser() {
  const { isMobile, open } = useSidebar();
  const { user, loading, logout } = useSession();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className={cn(
                "flex items-center data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground transition-colors duration-200 ease-in-out",
                !open && "mb-2"
              )}
            >
              {loading ? (
                <Skeleton className="h-8 w-8 rounded-md" />
              ) : (
                <Avatar className="h-8 w-8 rounded-md overflow-hidden">
                  <AvatarImage
                    src={user?.avatar_url}
                    alt={user?.full_name}
                    className="object-cover"
                  />
                  <AvatarFallback className="rounded-md" style={pickAvatarColor(user?.full_name)}>
                    {getInitials(user?.full_name)}
                  </AvatarFallback>
                </Avatar>
              )}
              {loading && open && (
                <div className="space-y-1">
                  <Skeleton className="h-3 w-[150px] rounded-lg" />
                  <Skeleton className="h-3 w-[120px] rounded-lg" />
                </div>
              )}
              {!loading && (
                <>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-medium">{user?.full_name}</span>
                    <span className="truncate text-xs">{user?.email}</span>
                  </div>
                  <MoreVerticalIcon className="ml-auto size-4" />
                </>
              )}
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={10}
            onCloseAutoFocus={(e) => e.preventDefault()}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-md overflow-hidden">
                  <AvatarImage
                    src={user?.avatar_url}
                    alt={user?.full_name}
                    className="object-cover"
                  />
                  <AvatarFallback className="rounded-md" style={pickAvatarColor(user?.full_name)}>
                    {getInitials(user?.full_name)}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{user?.full_name}</span>
                  <span className="truncate text-xs text-muted-foreground">{user?.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href="/app/account">
                <DropdownMenuItem className="group focus:bg-prussian-blue focus:text-background transition-colors duration-200 ease-in-out">
                  <UserCircleIcon className="text-muted-foreground group-focus:text-background transition-colors duration-200 ease-in-out" />
                  Account
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem className="group focus:bg-prussian-blue focus:text-background transition-colors duration-200 ease-in-out">
                <Settings className="text-muted-foreground group-focus:text-background transition-colors duration-200 ease-in-out" />
                Settings
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onSelect={logout}
              className="group text-destructive focus:bg-destructive/75 focus:text-background transition-colors duration-200 ease-in-out"
            >
              <LogOutIcon className="text-destructive group-focus:text-background transition-colors duration-200 ease-in-out" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
