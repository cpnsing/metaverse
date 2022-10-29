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
import SettingsContext from "src/context/SettingsContext";
import { BsFillPlayFill } from "react-icons/bs";
const useStyles = makeStyles((theme) => ({
  bannerbox: {
    padding: "180px 0px 100px",
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      padding: "132px 0px 80px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "132px 0px 70px",
    },
    "& .bannerhead": {
      textAlign: "center",
      "& h1": {
        fontSize: "70px",
        fontWeight: "600",
        lineHeight: "93.58px",
        width: "100%",
        maxWidth: "788px",
        margin: "0 auto",
        [theme.breakpoints.down("md")]: {
          fontSize: "50px",
          lineHeight: "53px",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "40px",
          lineHeight: "53px",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "30px",
          lineHeight: "40px",
        },
      },
      "& h3": {
        lineHeight: "33px",
        color: theme.palette.text.dull,
        [theme.breakpoints.down("sm")]: {
          fontSize: "18px",
          lineHeight: "26px",
        },
      },
      "& p": {
        fontSize: "16px",
        fontWeight: "300",
      },
    },
    "& .flexbox": {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      maxWidth: "310px",
      margin: "0 auto",
      paddingTop: "44px",
      "& svg": {
        color: theme.palette.text.iconcolor,
      },
      [theme.breakpoints.down("xs")]: {
        display: "block",
        paddingTop: "30px",
      },
    },
    "& .iconbutton": {
      background: "transparent",
      border: theme.palette.text.bordericons,
      borderRadius: "100%",
      transform: "rotate(115deg)",
      margin: "0px 10px",
    },
    "& .response": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      [theme.breakpoints.down("xs")]: {
        paddingTop: "16px",
      },
    },
  },
}));
function Banner() {
  const classes = useStyles();
  const themeSeeting = useContext(SettingsContext);

  return (
    <Box
      className={
        themeSeeting?.settings?.theme === "DARK" ? "mainbox" : "mainbox1"
      }
    >
      <Box className={classes.bannerbox}>
        <div className="shade1"></div>
        <div className="shade2"></div>
        <div className="shade3"></div>
        <Box>
          {themeSeeting?.settings?.theme === "DARK" ? (
            <img src="images/education.png" alt="" width="100%" />
          ) : (
            <>
              <img src="images/whitebanner.png" alt="" width="100%" />
            </>
          )}
        </Box>
        <Container>
          <Box className="bannerhead">
            <Box style={{ marginTop: "-48px" }}>
              <Typography variant="h1" color="primary">
                Decentralising and Democratising Education
              </Typography>
            </Box>
            <Box mt={2}>
              <Typography variant="h3">
                The Most Interactive, Immersive And Insightful Education
                Metaverse, EVER!
              </Typography>
            </Box>
            <Box className="flexbox">
              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Follow Us
                </Button>
              </Box>
              <Box className="response">
                <IconButton className="iconbutton">
                  <BsFillPlayFill />
                </IconButton>
                <Typography variant="body2" color="secondary">
                  Play video
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Banner;
