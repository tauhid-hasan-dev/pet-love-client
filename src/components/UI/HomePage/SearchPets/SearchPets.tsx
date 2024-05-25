import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";

const SearchPets = async () => {
  const res = await fetch(
    "https://pet-adoption-plaform-a8.vercel.app/api/pets"
  );
  const { data: pets } = await res.json();
  console.log(pets);
  return (
    <Box
      sx={{
        my: 10,
        /* py: 30, */
        /*  backgroundColor: "rgba(20, 20, 20, 0.1)",
        clipPath: "polygon(0 0, 100% 25%, 100% 100%, 0 75%)", */
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" component="h1" fontWeight={700}>
          Search your new best friend
        </Typography>
        {/* <Typography component="p" fontSize={18} fontWeight={400} sx={{ mt: 2 }}>
          Access to expert physicians and surgeons, advanced technologies
        </Typography>
        <Typography component="p" fontSize={18} fontWeight={400}>
          and top-quality surgery facilities right here.
        </Typography> */}
      </Box>

      <Container sx={{ margin: "30px auto" }}>
        <Grid container spacing={2}>
          {pets?.map((pet: any) => (
            <Grid item key={pet.id} md={4}>
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
                    src={pet?.photos[0]}
                    alt="doctor"
                    width={500}
                    height={100}
                  />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {pet.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {pet.type}, {pet.designation}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    <LocationOnIcon /> {pet.location}
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    justifyContent: "space-between",
                    px: 2,
                    paddingBottom: "20px",
                  }}
                >
                  {/* <Button>Book Now</Button> */}
                  <Button variant="outlined" fullWidth>
                    View Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Button
            variant="outlined"
            sx={{
              marginTop: "20px",
            }}
            component={Link}
            href="/doctors"
          >
            View ALL
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SearchPets;
