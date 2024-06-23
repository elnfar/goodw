import {  Calendar, CalendarHeartIcon, ChefHatIcon, Folder, HelpCircle, Layout, LayoutDashboardIcon, LayoutGrid, LucideLayoutDashboard, MailIcon, Monitor, MonitorCheckIcon, PlayCircle, Settings, SquarePen, StarIcon, Timer, TimerIcon, TvIcon, Users, VideoIcon } from "lucide-react";


type Submenu = {
    href: string;
    label: string;
    active: boolean;
  };
  
  

type Menu = {
    href: string;
    label: string;
    active: boolean;
    icon: any;
    submenus: Submenu[];
  };
  
  type Group = {
    groupLabel: string;
    menus: Menu[];
  };
  


export function getMenuList(pathname: string): Group[] {
    return [
      {
        groupLabel: "",
        menus: [
          {
            href: "/dashboard",
            label: "Dashboard",
            active: pathname.includes("/dashboard"),
            icon: LayoutGrid,
            submenus: []
          }
        ]
      },
      {
        groupLabel: "Manage",
        menus: [
          {
            href: "",
            label: "Media",
            active: pathname.includes("/media"),
            icon: SquarePen,
            submenus: [
              {
                href: "/media",
                label: "Images",
                active: pathname === "/media"
              },
              {
                href: "/media",
                label: "Videos",
                active: pathname === "/media"
              }
            ]
          },
          {
            href: "/playlists",
            label: "Playlists",
            active: pathname.includes("/playlists"),
            icon: VideoIcon,
            submenus: []
          },
          {
            href: "/schedules",
            label: "Schedules",
            active: pathname.includes("/schedules"),
            icon: Timer,
            submenus: []
          },
          {
            href: "/monitors",
            label: "Monitors",
            active: pathname.includes("/monitors"),
            icon: MonitorCheckIcon,
            submenus: []
          }
        ]
      },
      {
        groupLabel: "Settings",
        menus: [
          {
            href: "/users",
            label: "Users",
            active: pathname.includes("/users"),
            icon: Users,
            submenus: []
          },
          {
            href: "/account",
            label: "Account",
            active: pathname.includes("/account"),
            icon: Settings,
            submenus: []
          }
        ]
      }
    ];
  }