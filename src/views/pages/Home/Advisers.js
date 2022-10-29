import React, { useContext } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { CgPlayButtonO } from "react-icons/cg";
import SettingsContext from "src/context/SettingsContext";

const useStyles = makeStyles((theme) => ({
  Tokenmain: {
    padding: "20px 0px 10px",
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px 30px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0px 30px",
    },
    "& h1": {
      textAlign: "center",
      lineHeight: "66px",
      marginBottom: "30px",
    },
  },
}));
const AdvisersCard = [
  {
    img1: "images/metafic.png",
    img2: "images/metaficwhite.png",
  },
  {
    img1: "images/meta.png",
    img2: "images/metawhite.png",
  },
];

function Advisers() {
  const classes = useStyles();
  const themesetting = useContext(SettingsContext);

  return (
    <Box className={classes.Tokenmain}>
      <Container>
        <Box>
          <Typography variant="h1" color="primary">
            Advisers
          </Typography>
        </Box>
        <Container maxWidth="md">
          <Grid container spacing={0}>
            {AdvisersCard.map((data, i) => {
              return (
                <Grid item lg={6} md={6} sm={12} xs={12}>
                  <Box>
                    <img
                      src={
                        themesetting?.settings?.theme === "DARK"
                          ? data.img1
                          : data.img2
                      }
                      alt=""
                      width="100%"
                    />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}

export default Advisers;
