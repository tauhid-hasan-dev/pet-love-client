"use client";

import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import assets from "@/assets";

const HeroSection = () => {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: isMobileOrTablet ? "column-reverse" : "row",
        alignItems: "center",
        justifyContent: "space-between",
        textAlign: isMobileOrTablet ? "center" : "left",
        gap: 5,
      }}
    >
      <Box sx={{ flex: 1, mb: isMobileOrTablet ? 2 : 0 }}>
        <Typography
          variant={isMobileOrTablet ? "h4" : "h3"}
          component="h3"
          fontWeight={600}
        >
          Find your best friend
        </Typography>

        <Typography
          variant={isMobileOrTablet ? "h3" : "h2"}
          component="h1"
          fontWeight={600}
          color="primary.main"
        >
          Adopt and Care
        </Typography>
        <Typography sx={{ my: 4 }}>
          Could you give a pet a forever home? Browse our pooches looking for a
          new start.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: isMobileOrTablet ? "center" : "flex-start",
          }}
        >
          <Button href="/about-us" variant="outlined">
            Learn More
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          p: 1,
          flex: 1,
          display: "flex",
          justifyContent: isMobileOrTablet ? "center" : "right",
        }}
      >
        <Box>
          <Image
            src={assets.images.cat}
            width={isMobileOrTablet ? 300 : 450}
            height={isMobileOrTablet ? 267 : 400}
            alt="cat"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default HeroSection;
