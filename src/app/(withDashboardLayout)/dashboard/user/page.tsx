import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const UserDashboard = () => {
  return (
    <Stack direction="row" spacing={4}>
      <Card sx={{ minWidth: 400, p: 2, borderRadius: 4 }}>
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <Box>
              <Typography
                sx={{ fontSize: 17 }}
                color="text.secondary"
                gutterBottom
              >
                Total Adopted Pets
              </Typography>
              <Typography
                sx={{ fontSize: 36, color: "#6504B5", fontWeight: "bold" }}
                color="text.secondary"
                gutterBottom
              >
                14
              </Typography>
            </Box>
            <PetsIcon sx={{ fontSize: 45, color: "#F1EAFF" }}></PetsIcon>
          </Stack>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 400, p: 2, borderRadius: 4 }}>
        <CardContent>
          <Stack direction="row" justifyContent="space-between">
            <Box>
              <Typography
                sx={{ fontSize: 17 }}
                color="text.secondary"
                gutterBottom
              >
                Total Adoption Requests
              </Typography>
              <Typography
                sx={{ fontSize: 36, color: "#6504B5", fontWeight: "bold" }}
                color="text.secondary"
                gutterBottom
              >
                14
              </Typography>
            </Box>
            <MailOutlineIcon
              sx={{ fontSize: 45, color: "#F1EAFF" }}
            ></MailOutlineIcon>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default UserDashboard;
