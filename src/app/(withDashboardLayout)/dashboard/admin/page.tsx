import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PetsIcon from "@mui/icons-material/Pets";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const AdminDashboard = () => {
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
                Total Users
              </Typography>
              <Typography
                sx={{ fontSize: 36, color: "#6504B5", fontWeight: "bold" }}
                color="text.secondary"
                gutterBottom
              >
                14
              </Typography>
            </Box>
            <PeopleOutlineIcon
              sx={{ fontSize: 45, color: "#F1EAFF" }}
            ></PeopleOutlineIcon>
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
                Total Pets
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

export default AdminDashboard;
