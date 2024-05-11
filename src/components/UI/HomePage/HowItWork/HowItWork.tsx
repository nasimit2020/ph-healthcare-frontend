import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import Image from "next/image";
import HowItWorkImg from "@/assets/how-it-works-img.png";
import assets from "@/assets";

const HowItWork = () => {
  return (
    <Container sx={{ marginY: "100px" }}>
      <Box>
        <Box sx={{ width: "550px" }}>
          <Typography
            color="primary"
            variant="h6"
            component="h1"
            fontWeight={700}
          >
            How It Work
          </Typography>
          <Typography variant="h4" component="h1" fontWeight={700}>
            4 Easy Steps to get Your Solution
          </Typography>
          <Typography component="p" fontWeight={300}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repudiandae sint beatae, perspiciatis quod corrupti maxime sunt
            iusto eos cumque ratione
          </Typography>
        </Box>
      </Box>

      <Box display="flex" mt={5}>
        <Box width="50%">
          <Image src={HowItWorkImg} alt="how it work image" />
        </Box>

        <Box width="50%">
          <Box display="flex" gap={2} mb={5}>
            <Card>
              <CardActionArea>
                <Box padding={2}>
                  <Image src={assets.svgs.dna} alt="card icon" />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <Box padding={2}>
                  <Image src={assets.svgs.dna} alt="card icon" />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Box display="flex" gap={2} mb={5}>
            <Card>
              <CardActionArea>
                <Box padding={2}>
                  <Image src={assets.svgs.dna} alt="card icon" />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card>
              <CardActionArea>
                <Box padding={2}>
                  <Image src={assets.svgs.dna} alt="card icon" />
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        sx={{
          backgroundColor: "blueviolet",
        }}
        padding={5}
        borderRadius={1}
        color="#fff"
      >
        <Box>
          <Typography variant="h4">180+</Typography>
          <Typography variant="h6">Expert Doctor</Typography>
        </Box>
        <Box>
          <Typography variant="h4">26+</Typography>
          <Typography variant="h6">Expert Services</Typography>
        </Box>
        <Box>
          <Typography variant="h4">10K+</Typography>
          <Typography variant="h6">Happy Patients</Typography>
        </Box>
        <Box>
          <Typography variant="h4">150+</Typography>
          <Typography variant="h6">Best Award Winner</Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default HowItWork;
