import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import ExploreCards from "src/component/ExploreCards";

import { useHistory } from "react-router-dom";
import Popover from "src/component/Popover";

const TeamMap = [
  {
    image: "images/explore.png",
    text1: "Percel",
    text2: "298.000",
  },
  {
    image: "images/explore.png",
    text1: "Ovlivion",
    text2: "298.0002",
  },
  {
    image: "images/explore.png",
    text1: "Percel",
    text2: "298.000",
  },
  {
    image: "images/explore.png",
    text1: "Ovlivion",
    text2: "298.000",
  },
  {
    image: "images/explore.png",
    text1: "Percel",
    text2: "298.000",
  },
  {
    image: "images/explore.png",
    text1: "Percel",
    text2: "298.000",
  },
  {
    image: "images/explore.png",
    text1: "Ovlivion",
    text2: "298.000",
  },
  {
    image: "images/explore.png",
    text1: "Ovlivion",
    text2: "298.000",
  },
];

const useStyles = makeStyles((theme) => ({
  bannerbox: {
    padding: "20px",
    marginTop: "50px",
    "& h2": {
      fontWeight: "600",
    },
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
  top: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
function Index() {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  return (
    <Box className={classes.bannerbox}>
      <Box
        style={{ cursor: "pointer" }}
        onClick={() => history.push("/plot-details")}
      >
        <Grid container spacing={2}>
          <Grid item lg={12}>
            <Paper elevation={1}>
              <Popover type="this is tetsing" />

            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box className={classes.bannerbox}>
        <Box className={classes.top}>
          <Box mb={2} pl={1}>
            <Typography variant="h2" color="primary">
              Plot Explore
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" color="primary">
              See All
            </Typography>
          </Box>
        </Box>

        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Box>
            <Grid container spacing={2}>
              {TeamMap.map((data, i) => {
                return (
                  <Grid item lg={3} md={4} sm={6} xs={12}>
                    <ExploreCards data={data} index={i} />
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
}

export default Index;
