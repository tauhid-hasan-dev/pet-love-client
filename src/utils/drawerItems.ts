import { DrawerItem, UserRole } from "@/types";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PetsIcon from "@mui/icons-material/Pets";

import { USER_ROLE } from "@/app/constants/role";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  const defaultMenus = [
    {
      title: "Profile",
      path: `${role}/profile`,
      icon: PersonIcon,
    },
    {
      title: "Change Password",
      path: `change-password`,
      icon: KeyIcon,
    },
  ];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Dashboard",
          path: `${role}`,
          icon: DashboardIcon,
        },
        {
          title: "Manage Pets",
          path: `${role}/manage-pets`,
          icon: PetsIcon,
        },
        {
          title: "Manage Users",
          path: `${role}/manage-user`,
          icon: PeopleAltIcon,
        }
      );
      break;

    case USER_ROLE.USER:
      roleMenus.push({
        title: "Dashboard",
        path: `${role}`,
        icon: DashboardIcon,
      });
      break;
    default:
      break;
  }

  return [...roleMenus, ...defaultMenus];
};