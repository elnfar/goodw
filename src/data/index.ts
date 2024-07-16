import {  AlignVerticalJustifyCenterIcon,  LayoutGrid,  SatelliteIcon,  Settings, SquarePen, StarIcon, Timer, TimerIcon, TvIcon, User, Users, VideoIcon } from "lucide-react";


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
            href: "/projects",
            label: "Projects",
            active: pathname.includes("/projects"),
            icon: SquarePen,
            submenus:[],
          },
          {
            href: "/issues",
            label: "My issues",
            active: pathname.includes("/issues"),
            icon: SatelliteIcon,
            submenus: []
          },
          {
            href: "/activity",
            label: "Activity",
            active: pathname.includes("/activity"),
            icon: Timer,
            submenus: []
          },
          {
            href: "/team",
            label: "Team",
            active: pathname.includes("/team"),
            icon: AlignVerticalJustifyCenterIcon,
            submenus: []
          }
        ]
      },
      {
        groupLabel: "Settings",
        menus: [
          {
            href: "/account",
            label: "Account",
            active: pathname.includes("/account"),
            icon: User,
            submenus: []
          },
          {
            href: "/preferences",
            label: "Preferences",
            active: pathname.includes("/preferences"),
            icon: Settings,
            submenus: []
          }
        ]
      }
    ];
  }