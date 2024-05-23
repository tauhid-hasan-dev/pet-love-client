import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedIcon from "@/assets/landing_page/linkedin.png";
import assets from "@/assets";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container color="#fff">
        <Stack direction="row" gap={4} justifyContent="center">
          <Typography color="#fff">info@petlove.com</Typography>
          <Typography color="#fff">(0202) 456 0982</Typography>
          <Typography color="#fff">Istanbul, Turkey</Typography>
        </Stack>
        <Stack direction="row" gap={2} justifyContent="center" py={3}>
          <Image src={facebookIcon} width={30} height={30} alt="facebook" />
          <Image src={instagramIcon} width={30} height={30} alt="instagram" />
          <Image src={twitterIcon} width={30} height={30} alt="twitter" />
          <Image src={linkedIcon} width={30} height={30} alt="linkedin" />
        </Stack>
        <Box
          sx={{
            border: "1px dashed lightgray",
          }}
        ></Box>
        <Stack
          direction="row"
          gap={2}
          justifyContent="space-between"
          alignItems="center"
          py={3}
        >
          <Typography component="p" color="white">
            &copy;2024 PET LOVE. All Rights Reserved.
          </Typography>
          <Link href="/" passHref>
            <Stack direction="row" gap={1} alignItems="center">
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
          </Link>
          <Typography component="p" color="white">
            Privacy Policy! Terms & Conditions
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
