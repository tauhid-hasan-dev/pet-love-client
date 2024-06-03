import { Card, CardContent, Stack, Typography } from "@mui/material";

const DashboardHomePage = () => {
  return (
    <Stack>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default DashboardHomePage;
