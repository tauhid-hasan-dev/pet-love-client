import React from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import { Home, Pets, QuestionAnswer } from "@mui/icons-material";

const AdoptionSection = () => {
  return (
    <Box sx={{ backgroundColor: "#f9f6ff", padding: "4rem 0" }}>
      <Container sx={{ textAlign: "center", padding: "0 2rem" }}>
        {" "}
        {/* Added padding */}
        <Typography variant="h4" gutterBottom sx={{ marginBottom: "3rem" }}>
          PLANNING TO ADOPT A PET?
        </Typography>
        <Container>
          <Grid container spacing={10} justifyContent="space-between">
            <Grid item xs={12} sm={4} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Home sx={{ fontSize: 60, color: "#6a1b9a" }} />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ marginBottom: "1rem" }}
                >
                  CHECKLIST FOR NEW ADOPTERS
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  align="center"
                  sx={{ marginBottom: "2rem" }}
                >
                  Make the adoption transition as smooth as possible.
                </Typography>
                <Button
                  variant="outlined"
                  sx={{ borderColor: "#6a1b9a", color: "#6a1b9a" }}
                >
                  LEARN MORE
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Pets sx={{ fontSize: 60, color: "#6a1b9a" }} />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ marginBottom: "1rem" }}
                >
                  HOW OLD IS A DOG IN HUMAN YEARS?
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  align="center"
                  sx={{ marginBottom: "2rem" }}
                >
                  Learn to translate dog years to human years just for fun, and
                  vice versa.
                </Typography>
                <Button
                  variant="outlined"
                  sx={{ borderColor: "#6a1b9a", color: "#6a1b9a" }}
                >
                  LEARN MORE
                </Button>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <QuestionAnswer sx={{ fontSize: 60, color: "#6a1b9a" }} />
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ marginBottom: "1rem" }}
                >
                  PET ADOPTION FAQs
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  align="center"
                  sx={{ marginBottom: "2rem" }}
                >
                  Get answers to all the questions you haven’t thought of for
                  your adoption.
                </Typography>
                <Button
                  variant="outlined"
                  sx={{ borderColor: "#6a1b9a", color: "#6a1b9a" }}
                >
                  LEARN MORE
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
};

export default AdoptionSection;
