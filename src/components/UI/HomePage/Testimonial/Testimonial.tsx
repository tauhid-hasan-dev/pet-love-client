import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Typography, Avatar } from "@mui/material";

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  testimonial: string;
}

const testimonials: TestimonialProps[] = [
  {
    name: "John Doe",
    role: "Adopted a Golden Retriever",
    image: "https://i.ibb.co/5kDqTK4/person6.jpg",
    testimonial:
      "Adopting from this platform was a heartwarming experience. Now we have a new furry family member who brings us so much joy.",
  },
  {
    name: "Jane Smith",
    role: "Adopted a Siamese Cat",
    image: "https://i.ibb.co/5MzQd0n/person1.jpg",
    testimonial:
      "I was amazed by how well the platform connected us with the perfect pet. The support team was fantastic, guiding us every step of the way.",
  },
  {
    name: "Michael Johnson",
    role: "Adopted a Labrador",
    image: "https://i.ibb.co/R44SN1c/person5.jpg",
    testimonial:
      "This platform made the adoption process stress-free. We found our best friend here, and the love and care shown by the team were outstanding.",
  },
];

const Testimonial: React.FC<TestimonialProps> = ({
  name,
  role,
  image,
  testimonial,
}) => (
  <Box
    textAlign="center"
    p={4}
    bgcolor="grey.200"
    color="grey.200"
    borderRadius={2}
    sx={{ backgroundColor: "#f8f5ff" }}
  >
    <Avatar
      src={image}
      alt={`${name}'s photo`}
      sx={{ width: 96, height: 96, margin: "0 auto 32px auto" }}
    />
    <Typography variant="body1" mb={2} color="grey.800">
      {testimonial}
    </Typography>
    <Typography variant="h6" color="grey.900">
      {name}
    </Typography>
    <Typography variant="body2" color="grey.900">
      {role}
    </Typography>
  </Box>
);

const TestimonialPage: React.FC = () => {
  return (
    <Box
      py={10}
      bgcolor="grey.100"
      color="grey.900"
      sx={{ backgroundColor: "#ffffff" }}
    >
      <Container maxWidth="lg">
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={8}>
          What Other Adopters Say
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Testimonial {...testimonial} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestimonialPage;
