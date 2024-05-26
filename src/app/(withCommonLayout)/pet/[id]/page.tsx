"use client";

import { useGetPetQuery } from "@/redux/api/petApi";
import { Box, Card, Container, Grid } from "@mui/material";
import Image from "next/image"; // Import the Image component from next/image
import React from "react";

type TParams = {
  params: {
    id: string;
  };
};

const PetDetails = ({ params }: TParams) => {
  const petId = params?.id;
  console.log(petId);

  const { data, isLoading } = useGetPetQuery(petId);
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container sx={{ margin: "30px auto" }}>
      <Grid container spacing={2}>
        <Grid item md={8}>
          <Grid container spacing={2}>
            {data.photos?.map((pet: any, index: number) => (
              <Grid item key={index} xs={12} md={4}>
                <Card>
                  <Box
                    sx={{
                      width: "100%",
                      height: 300,
                      "& img": {
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        objectFit: "cover",
                      },
                    }}
                  >
                    <Image
                      src={pet}
                      alt={`pet-${index}`}
                      width={500}
                      height={300}
                    />
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item md={4}>
          <Card>
            <Box
              sx={{
                width: "100%",
                height: 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <h1>This is a card</h1>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PetDetails;
