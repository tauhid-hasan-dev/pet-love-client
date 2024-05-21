"use client";

import { getUserInfo } from "@/services/auth.services";
import { Box, Container, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
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
          <Box component="span" color="primary.main">
            PET LOVE
          </Box>
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
