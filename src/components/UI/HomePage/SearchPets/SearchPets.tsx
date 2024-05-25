import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Link from "next/link";

const filters = [
  { label: "Size", options: ["Small", "Medium", "Large"] },
  { label: "Gender", options: ["Male", "Female"] },
  { label: "Health Status", options: ["Option 1", "Option 2", "Option 3"] },
];

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
          Find your new best friend
        </Typography>
      </Box>

      <Container>
        <Grid container spacing={2} alignItems="center" py={3}>
          <Grid item xs={12} sm={6} md={4} lg={6}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search"
              fullWidth
            />
          </Grid>
          {filters.map((filter, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
              <TextField
                size="small"
                select
                label={filter.label}
                variant="outlined"
                fullWidth
              >
                {filter.options.map((option, idx) => (
                  <MenuItem key={idx} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          ))}
        </Grid>
      </Container>

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
                  <Link href={`/pet/${pet.id}`}>
                    <Button variant="outlined" fullWidth>
                      View Details
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SearchPets;
