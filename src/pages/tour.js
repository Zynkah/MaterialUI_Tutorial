import { Typography, Box } from "@mui/material";
import Container from "@mui/system/Container";
import ImageCollage from "../components/ImageCollage";

const Tour = () => (
  <Container sx={{ width: 900 }}>
    <Typography variant="h3" component="h1" marginTop={3}>
      Explore the World in Las Vegas
    </Typography>
    <Box marginTop={3} sx={{ display: "flex" }}>
      <img
        src="https://th.bing.com/th/id/R.42e937018e8938128df3bc6e3d215130?rik=6DhKIcuxvN2NxQ&pid=ImgRaw&r=0"
        alt=""
        height={325}
      />
      <ImageCollage />
    </Box>
  </Container>
);

export default Tour;
