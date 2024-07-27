"use client";

import assets from "@/assets";
import { getUserInfo } from "@/services/auth.services";
import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

interface UserInfo {
  id: string;
  name: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

const Navbar = () => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:600px)");
  console.log(userInfo);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const info = await getUserInfo();
      setUserInfo(info);
    };
    fetchUserInfo();
  }, []);

  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={handleDrawerToggle}
      onKeyDown={handleDrawerToggle}
    >
      <List>
        <ListItem button component={Link} href="/">
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button component={Link} href="/about-us">
          <ListItemText primary="About Us" />
        </ListItem>
        {userInfo && (
          <ListItem button component={Link} href="/dashboard/profile">
            <ListItemText primary="Profile" />
          </ListItem>
        )}
        {userInfo && (
          <ListItem
            button
            component={Link}
            href={`/dashboard/${userInfo.role}`}
          >
            <ListItemText primary="Dashboard" />
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ borderBottom: "1px solid lightgray", width: "100%" }}>
      <Container sx={{ width: "100%" }}>
        <Stack
          py={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h4" component={Link} href="/" fontWeight={600}>
            <Stack direction="row" gap={1}>
              <Box component="span" color="primary.main">
                Pet
              </Box>
              <Box>
                <Image
                  src={assets.svgs.logo}
                  width={40}
                  height={40}
                  alt="logo"
                />
              </Box>
              <Box component="span" color="primary.main">
                Love
              </Box>
            </Stack>
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={handleDrawerToggle}
              >
                {drawerContent}
              </Drawer>
            </>
          ) : (
            <Stack direction="row" justifyContent="space-between" gap={4}>
              <Typography
                sx={{
                  "&:hover": {
                    color: "#6504B5",
                  },
                }}
                component={Link}
                href="/"
              >
                Home
              </Typography>
              <Typography
                sx={{
                  "&:hover": {
                    color: "#6504B5",
                  },
                }}
                component={Link}
                href="/about-us"
              >
                About Us
              </Typography>
              {userInfo && (
                <Typography
                  sx={{
                    "&:hover": {
                      color: "#6504B5",
                    },
                  }}
                  component={Link}
                  href="/dashboard/profile"
                >
                  Profile
                </Typography>
              )}
              {userInfo && (
                <Link href={`/dashboard/${userInfo.role}`} passHref>
                  <Typography
                    sx={{
                      "&:hover": {
                        color: "#6504B5",
                      },
                    }}
                    component="a"
                  >
                    Dashboard
                  </Typography>
                </Link>
              )}
            </Stack>
          )}

          <AuthButton />
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
