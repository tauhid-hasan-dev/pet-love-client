"use client";

import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PetsIcon from "@mui/icons-material/Pets";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useGetAllUserQuery } from "@/redux/api/userApi";
import { useGetAllAdoptionRequestsQuery } from "@/redux/api/adoptionRequestApi";
import { useGetAllPetsQuery } from "@/redux/api/petApi";
import { PieChart } from "@mui/x-charts/PieChart";
import { BarChart } from "@mui/x-charts/BarChart";

const AdminDashboard = () => {
  const { data: allUsers } = useGetAllUserQuery({});
  const { data } = useGetAllPetsQuery({});
  const { data: requests } = useGetAllAdoptionRequestsQuery({});

  // Sample data for the BarChart representing pet sales by type each month
  const dataset = [
    { month: "Jan", rabbits: 12, cats: 18, dogs: 25 },
    { month: "Feb", rabbits: 15, cats: 20, dogs: 22 },
    { month: "Mar", rabbits: 10, cats: 25, dogs: 30 },
    { month: "Apr", rabbits: 18, cats: 22, dogs: 28 },
    { month: "May", rabbits: 16, cats: 24, dogs: 32 },
    { month: "Jun", rabbits: 20, cats: 20, dogs: 35 },
    { month: "Jul", rabbits: 18, cats: 28, dogs: 30 },
    { month: "Aug", rabbits: 22, cats: 26, dogs: 33 },
    { month: "Sep", rabbits: 25, cats: 30, dogs: 29 },
    { month: "Oct", rabbits: 20, cats: 28, dogs: 35 },
    { month: "Nov", rabbits: 18, cats: 26, dogs: 32 },
    { month: "Dec", rabbits: 23, cats: 29, dogs: 34 },
  ];

  const valueFormatter = (value: any) => `${value} units`;

  const chartSetting = {
    width: 750,
    height: 300,
  };

  return (
    <Stack direction="column" spacing={4}>
      {/* Cards for showing summary statistics */}
      <Stack direction="row" spacing={4}>
        {/* Total Users */}
        <Card sx={{ minWidth: 330, p: 2, borderRadius: 4 }}>
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
                  {allUsers?.length}
                </Typography>
              </Box>
              <PeopleOutlineIcon
                sx={{ fontSize: 45, color: "#F1EAFF" }}
              ></PeopleOutlineIcon>
            </Stack>
          </CardContent>
        </Card>
        {/* Total Pets */}
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
                  {data?.pets?.length}
                </Typography>
              </Box>
              <PetsIcon sx={{ fontSize: 45, color: "#F1EAFF" }}></PetsIcon>
            </Stack>
          </CardContent>
        </Card>
        {/* Total Adoption Requests */}
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
                  {requests?.length}
                </Typography>
              </Box>
              <MailOutlineIcon
                sx={{ fontSize: 45, color: "#F1EAFF" }}
              ></MailOutlineIcon>
            </Stack>
          </CardContent>
        </Card>
        {/* Total Requests Accepted */}
        <Card sx={{ minWidth: 400, p: 2, borderRadius: 4 }}>
          <CardContent>
            <Stack direction="row" justifyContent="space-between">
              <Box>
                <Typography
                  sx={{ fontSize: 17 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Total Requests Accepted
                </Typography>
                <Typography
                  sx={{ fontSize: 36, color: "#6504B5", fontWeight: "bold" }}
                  color="text.secondary"
                  gutterBottom
                >
                  12
                </Typography>
              </Box>
              <MailOutlineIcon
                sx={{ fontSize: 45, color: "#F1EAFF" }}
              ></MailOutlineIcon>
            </Stack>
          </CardContent>
        </Card>
      </Stack>

      {/* Charts Section */}
      <Stack direction="row" spacing={4}>
        {/* Pie Chart (for demonstration) */}
        <Card sx={{ p: 2, borderRadius: 4 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 20, color: "#6504B5", fontWeight: "bold", pb: 3 }}
              gutterBottom
            >
              Adoption Chart By Pet Type
            </Typography>
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "Rabbit" },
                    { id: 1, value: 15, label: "Cat" },
                    { id: 2, value: 20, label: "Dog" },
                  ],
                },
              ]}
              width={750}
              height={300}
            />
          </CardContent>
        </Card>
        {/* Bar Chart for Pet Sales by Month */}
        <Card sx={{ p: 2, borderRadius: 4 }}>
          <CardContent>
            <Typography
              sx={{ fontSize: 20, color: "#6504B5", fontWeight: "bold", pb: 3 }}
              gutterBottom
            >
              Pet Adoptions by Type (Monthly)
            </Typography>
            <BarChart
              dataset={dataset}
              xAxis={[{ scaleType: "band", dataKey: "month" }]}
              series={[
                { dataKey: "rabbits", label: "Rabbits", valueFormatter },
                { dataKey: "cats", label: "Cats", valueFormatter },
                { dataKey: "dogs", label: "Dogs", valueFormatter },
              ]}
              {...chartSetting}
            />
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};

export default AdminDashboard;
