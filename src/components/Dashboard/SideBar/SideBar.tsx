import {
  Box,
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import assets from "@/assets";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";

const SideBar = () => {
  const drawer = (
    <div>
      <Divider />
      <List>
        {drawerItems("admin" as UserRole).map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

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

      {drawer}
    </Box>
  );
};

export default SideBar;
