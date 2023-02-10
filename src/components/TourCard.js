import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AccessTime } from "@mui/icons-material";

const TourCard = () => {
  return (
    <Grid item xs={3}>
      <Paper elevation={3}>
        <img
          class="img"
          src="https://th.bing.com/th/id/OIP.Tth3GWRfkrd1Ah3t7-wfwQHaE9?pid=ImgDet&rs=1"
          alt="niagra falls"
        />
        <Box paddingX={1}>
          <Typography variant="subtitle1" component="h2">
            Immerse into the Falls
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <AccessTime
              sx={{
                width: 12.5,
              }}
            />
            <Typography variant="body2" component="p" marginLeft={0.5}>
              <small>5 hours</small>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            
          </Box>
        </Box>
      </Paper>
    </Grid>
  );
};

export default TourCard;
