import { AlignVerticalJustifyCenterIcon, LayoutGrid, SatelliteIcon, Settings, SquarePen, Timer, User } from "lucide-react";

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

export function getMenuList(pathname: string, workplaceSlug: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: `/${workplaceSlug}/dashboard`, // Adjusted to exclude (dashboard)
          label: "Dashboard",
          active: pathname.includes("/projects"),
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "Manage",
      menus: [
        {
          href: `/${workplaceSlug}/projects`,
          label: "Projects",
          active: pathname.includes("/projects"),
          icon: SquarePen,
          submenus: []
        },
        {
          href: `/${workplaceSlug}/issues`,
          label: "My issues",
          active: pathname.includes("/issues"),
          icon: SatelliteIcon,
          submenus: []
        },
        {
          href: `/${workplaceSlug}/activity`,
          label: "Activity",
          active: pathname.includes("/activity"),
          icon: Timer,
          submenus: []
        },
        {
          href: `/${workplaceSlug}/team`,
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
          href: `/${workplaceSlug}/account`,
          label: "Account",
          active: pathname.includes("/account"),
          icon: User,
          submenus: []
        },
        {
          href: `/${workplaceSlug}/preferences`,
          label: "Preferences",
          active: pathname.includes("/preferences"),
          icon: Settings,
          submenus: []
        }
      ]
    }
  ];
}
