import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/system/Container";
import ImageCollage from "../components/ImageCollage";
import SimpleAccordion from "../components/Accordian";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BasicModal from "../components/Modal";

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
    <Box>
      <Typography variant="h6" component="h4" marginTop={3}>
        About this ticket
      </Typography>
      <Typography variant="paragraph" component="p" marginTop={3}>
        Las Vegas, often known simply as Vegas, is the 25th-most populous city
        in the United States, the most populous city in the state of Nevada, and
        the county seat of Clark County. The city anchors the Las Vegas Valley
        metropolitan area and is the largest city within the greater Mojave
        Desert.
      </Typography>
    </Box>
    <Box marginBottom={10}>
      <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
        F.A.Q.
      </Typography>
      <SimpleAccordion />
    </Box>
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation>
        <BasicModal />
      </BottomNavigation>
    </Paper>
  </Container>
);

export default Tour;
