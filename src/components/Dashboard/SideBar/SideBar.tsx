import { Box, Divider, Link, List, Stack, Typography } from "@mui/material";
import Image from "next/image";

import assets from "@/assets";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SidebarItem from "./SideBarItem";
import { getUserInfo } from "@/services/auth.services";

const SideBar = () => {
  const { role } = getUserInfo();

  return (
    <Box>
      <Stack
        sx={{
          py: 2,
        }}
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={1}
        component={Link}
        href="/"
      >
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: "pointer",
          }}
          fontWeight={600}
          fontSize={30}
        >
          Pet
        </Typography>
        <Image src={assets.svgs.logo} width={40} height={40} alt="logo" />
        <Typography
          variant="h6"
          component="h1"
          sx={{
            cursor: "pointer",
          }}
          fontWeight={600}
          fontSize={30}
        >
          Love
        </Typography>
      </Stack>

      <List>
        {drawerItems(role as UserRole).map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
