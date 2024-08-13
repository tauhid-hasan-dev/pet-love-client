import {
  Box,
  Grid,
  Typography,
  Button,
  Container,
  Link as MuiLink,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#6B088D", // Primary background color
        color: "#FFFFFF", // Text color
        py: 6,
        mt: 4,
      }}
    >
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={1.7}>
            <Typography variant="h6" gutterBottom>
              RESOURCES
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                FAQs
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Mobile App Download
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Partnerships
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                News Center
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Put Petfinder On Your Site
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                For Developers
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Contact Us
              </MuiLink>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={3.0}>
            <Typography variant="h6" gutterBottom>
              ADOPT OR GET INVOLVED
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                All Adopt or Get Involved
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Adopting Pets
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Animal Shelters & Rescues
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Other Types of Pets
              </MuiLink>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={2.5}>
            <Typography variant="h6" gutterBottom>
              ABOUT DOGS & PUPPIES
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                All About Dogs & Puppies
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Dog Adoption
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Dog Breeds
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Feeding Your Dog
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Dog Behavior
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Dog Health & Wellness
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Dog Training
              </MuiLink>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={2.5}>
            <Typography variant="h6" gutterBottom>
              ABOUT CATS & KITTENS
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                All About Cats & Kittens
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Cat Adoption
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Cat Breeds
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Feeding Your Cat
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Cat Behavior
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Cat Health & Wellness
              </MuiLink>
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <MuiLink
                href="#"
                color="inherit"
                underline="hover"
                sx={{
                  textDecoration: "none",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Cat Training
              </MuiLink>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={2}>
            <Box
              sx={{
                backgroundColor: "#7A08B4",
                padding: 2,
                borderRadius: 2,
                textAlign: "center",
              }}
            >
              <Typography variant="body1" sx={{ color: "#ffffff" }}>
                To get the latest on pet adoption and pet care, sign up for the
                Petfinder newsletter.
              </Typography>
              <Button
                variant="contained"
                color="secondary"
                sx={{ mt: 2, borderRadius: 4 }}
              >
                SIGN UP
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Typography variant="body2">
            <MuiLink
              href="#"
              color="inherit"
              underline="hover"
              sx={{
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
                mx: 0.5,
              }}
            >
              Shelter & Rescue Registration
            </MuiLink>
            {" | "}
            <MuiLink
              href="#"
              color="inherit"
              underline="hover"
              sx={{
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
                mx: 0.5,
              }}
            >
              Sitemap
            </MuiLink>
            {" | "}
            <MuiLink
              href="#"
              color="inherit"
              underline="hover"
              sx={{
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
                mx: 0.5,
              }}
            >
              Terms of Service
            </MuiLink>
            {" | "}
            <MuiLink
              href="#"
              color="inherit"
              underline="hover"
              sx={{
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
                mx: 0.5,
              }}
            >
              Notice at Collection
            </MuiLink>
            {" | "}
            <MuiLink
              href="#"
              color="inherit"
              underline="hover"
              sx={{
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
                mx: 0.5,
              }}
            >
              Privacy Policy (updated)
            </MuiLink>
            {" | "}
            <MuiLink
              href="#"
              color="inherit"
              underline="hover"
              sx={{
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
                mx: 0.5,
              }}
            >
              Do Not Sell Or Share My Personal Information
            </MuiLink>
            {" | "}
            <MuiLink
              href="#"
              color="inherit"
              underline="hover"
              sx={{
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
                mx: 0.5,
              }}
            >
              Accessibility
            </MuiLink>
            {" | "}
            <MuiLink
              href="#"
              color="inherit"
              underline="hover"
              sx={{
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
                mx: 0.5,
              }}
            >
              Cookie Policy
            </MuiLink>
            {" | "}
            <MuiLink
              href="#"
              color="inherit"
              underline="hover"
              sx={{
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
                mx: 0.5,
              }}
            >
              Your Privacy Choices
            </MuiLink>
          </Typography>
        </Box>
      </Container>

      <Box
        sx={{
          backgroundColor: "#400552", // Darker background color for the footer bottom section
          py: 3,
          mt: 4,
          textAlign: "center",
        }}
      >
        <Container>
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="body2">
              ©2024 petlove.com All trademarks are owned by Tauhid hasan or used
              with permission.
            </Typography>
            <Box>
              <IconButton href="#" sx={{ color: "#FFFFFF", mx: 1 }}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: "#FFFFFF", mx: 1 }}>
                <TwitterIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: "#FFFFFF", mx: 1 }}>
                <InstagramIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: "#FFFFFF", mx: 1 }}>
                <YouTubeIcon />
              </IconButton>
              <IconButton href="#" sx={{ color: "#FFFFFF", mx: 1 }}>
                <PinterestIcon />
              </IconButton>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
