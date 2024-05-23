"use client";

import assets from "@/assets";
import { getUserInfo } from "@/services/auth.services";
import { Box, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const userInfo = getUserInfo();

  const AuthButton = dynamic(
    () => import("@/components/UI/AuthButton/AuthButton"),
    { ssr: false }
  );
  return (
    <Container>
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
              <Image src={assets.svgs.logo} width={40} height={40} alt="logo" />
            </Box>
            <Box component="span" color="primary.main">
              Love
            </Box>
          </Stack>
        </Typography>

        <Stack direction="row" justifyContent="space-between" gap={4}>
          <Typography component={Link} href="/">
            Home
          </Typography>
          <Typography component={Link} href="/about-us">
            About Us
          </Typography>
          {userInfo?.id && (
            <Typography component={Link} href="/profile">
              Profile
            </Typography>
          )}
        </Stack>

        <AuthButton />
      </Stack>
    </Container>
  );
};

export default Navbar;
