import React from "react";
import { Box, Stack, styled, Typography, Avatar } from "@mui/material";

const Banner = styled(Box)({
  width: "100%",
  height: "160px",
  backgroundImage: 'url("https://i.ibb.co/g4Z3kNX/background.jpg")', // Using your provided image URL
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "8px",
});

const ProfileCard = styled(Box)(({ theme }) => ({
  background: "linear-gradient(to right, #f4f7fe, #f4f7fe, #e0eafc)",
  borderRadius: theme.spacing(1),
  width: "90%",
  padding: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "-50px",
  marginLeft: "37px",
  // Moves the card upwards, overlapping the banner
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
}));

const StyledInformationBox = styled(Box)(({ theme }) => ({
  background: "#f4f7fe",
  borderRadius: theme.spacing(1),
  width: "100%",
  padding: "8px 16px",
  "& p": {
    fontWeight: 600,
  },
}));

const ColorBox = styled(Box)({
  width: "24px",
  height: "24px",
  borderRadius: "4px",
});

const ProfileInformation = ({ data }: any) => {
  return (
    <Box p={2}>
      <Banner />

      <ProfileCard>
        <Box display="flex" alignItems="center">
          <Box>
            <Typography variant="h6" fontWeight="bold">
              {data?.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {data?.role} | {data?.email}
            </Typography>
          </Box>
        </Box>
        <Stack direction="row" spacing={1}>
          <ColorBox sx={{ backgroundColor: "#3b5998" }} />
          <ColorBox sx={{ backgroundColor: "#00aced" }} />
          <ColorBox sx={{ backgroundColor: "#333333" }} />
        </Stack>
      </ProfileCard>

      {/* Personal Information Section */}
      <Typography variant="h5" color="primary.main" mb={2} mt={4}>
        About me
      </Typography>

      <StyledInformationBox>
        <Typography
          color="secondary"
          variant="body2"
          sx={{ fontWeight: "normal", lineHeight: 1.5 }}
        >
          Hi, I am a Full Stack Developer currently employed at Altor
          Danışmanlık Tic. Ltd. Şti. in Istanbul, Turkey, actively contributing
          to the development lifecycle of web and mobile applications.
          Proficient in utilizing technologies such as Javascript, TypeScript,
          Node.js, C# (.NET Core) for backend development. On the web frontend,
          I specialize in working with ReactJs, NextJs, Tailwind CSS, Bootstrap,
          Ant Design, Material UI, HTML5, and CSS3 and Dart, Flutter for mobile
          frontend development.
        </Typography>
      </StyledInformationBox>
    </Box>
  );
};

export default ProfileInformation;
