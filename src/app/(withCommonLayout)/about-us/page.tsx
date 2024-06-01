import React from "react";
import { Container, Typography, Box, Avatar, Grid, Paper } from "@mui/material";

const teamMembers = [
  { name: "John Doe", role: "CEO", imageUrl: "/john.jpg" },
  { name: "Jane Smith", role: "CTO", imageUrl: "/jane.jpg" },
  { name: "Alice Johnson", role: "COO", imageUrl: "/alice.jpg" },
];

const About = () => {
  return (
    <Container>
      <Paper elevation={3} sx={{ padding: "24px", marginTop: "24px" }}>
        <Box my={4} textAlign="center">
          <Typography variant="h1" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to our company. We are dedicated to delivering the best
            service possible. Our team consists of experienced professionals who
            are passionate about what they do.
          </Typography>
        </Box>
        <Box textAlign="center" my={4}>
          <Typography variant="h2" gutterBottom>
            Our Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {teamMembers.map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Avatar
                    src={member.imageUrl}
                    alt={member.name}
                    sx={{ width: 120, height: 120, mb: 2, boxShadow: 3 }}
                  />
                  <Typography variant="h3">{member.name}</Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {member.role}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;
