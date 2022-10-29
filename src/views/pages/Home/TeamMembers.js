import React from "react";
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
import { useContext } from "react";
const useStyles = makeStyles((theme) => ({
  Tokenmain: {
    padding: "60px 0px 100px",
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    "@media(max-width:991px)": {
      padding: "160px 0px 80px",
    },
    "& .expertteam": {
      "& h4": {
        color: theme.palette.text.graypink,
        textAlign: "center",
        marginBottom: "10px",
      },
    },
    "& h1": {
      textAlign: "center",
      lineHeight: "66px",
      marginBottom: "60px",
      [theme.breakpoints.down("sm")]: {
        marginBottom: "20px",
      },
    },
    "& .subbox": {
      textAlign: "center",
      background: "rgba(36, 36, 36, 0.4)",
      border: "0.5px solid rgb(88 83 83 / 25%)",
      backdropFilter: "blur(10px)",
      borderRadius: "10px",
      padding: "15px 10px 20px",
    },
    "& .subbox1": {
      textAlign: "center",
      background: "rgba(247, 247, 247, 0.5)",
      border: "1.5px solid rgba(0, 0, 0, 0.1)",
      boxShadow: "0px 7px 12px rgba(0, 0, 0, 0.15)",
      backdropFilter: "blur(31.3725px)",
      borderRadius: "10px",
      padding: "15px 10px 20px",
    },
    "& .textboxes": {
      padding: "0px 10px 10px",
    },
    "& h5": {
      fontWeight: "300",
      marginTop: "15px",
    },
  },
}));
const memberCard = [
  {
    img1: "images/team1.png",
    text1: "John Doe",
    text2: "CEO",
  },
  {
    img1: "images/team2.png",
    text1: "John Doe",
    text2: "CEO",
  },
  {
    img1: "images/team3.png",
    text1: "John Doe",
    text2: "CEO",
  },
  {
    img1: "images/team4.png",
    text1: "John Doe",
    text2: "CEO",
  },
];

function TokenMembers() {
  const classes = useStyles();
  const themesetting = useContext(SettingsContext);
  return (
    <Box className={classes.Tokenmain}>
      <div
        className={
          themesetting?.settings?.theme === "DARK"
            ? "teamleftbox"
            : "teamleftbox1"
        }
      ></div>
      <div
        className={
          themesetting?.settings?.theme === "DARK"
            ? "teamrightbox"
            : "teamrightbox1"
        }
      ></div>
      <Container>
        <Box className="expertteam">
          <Typography variant="h4">OUR EXPERTS</Typography>
          <Typography variant="h1" color="primary">
            Team Members
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={0}>
            {memberCard.map((data, i) => {
              return (
                <Grid item lg={3} md={3} sm={12} xs={12}>
                  <Box>
                    <img src={data.img1} alt="" width="100%" />
                  </Box>
                  <Box className="textboxes">
                    <Box
                      className={
                        themesetting?.settings?.theme === "DARK"
                          ? "subbox"
                          : "subbox1"
                      }
                    >
                      <Typography variant="h3" color="secondary">
                        {data.text1}
                      </Typography>
                      <Typography variant="h5" color="secondary">
                        {data.text2}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default TokenMembers;
