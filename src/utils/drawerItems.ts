import { DrawerItem, UserRole } from "@/types";

import DashboardIcon from "@mui/icons-material/Dashboard";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import TryIcon from "@mui/icons-material/Try";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";

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
          title: "pets",
          path: `${role}/pets`,
          icon: TryIcon,
        },
        {
          title: "users",
          path: `${role}/users`,
          icon: MedicalInformationIcon,
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
