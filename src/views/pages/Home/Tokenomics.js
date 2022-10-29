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
  Tokenomicshead: {
    padding: "20px 0px 10px",
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px 80px",
    },
    "& h4": {
      color: theme.palette.text.graypink,
      textAlign: "center",
      marginBottom: "10px",
    },
    "& h1": {
      textAlign: "center",
      lineHeight: "66px",
    },
    "& .educatorbox": {
      marginTop: "30px",
      "& h2": {
        margin: "80px 0px 80px",
        textAlign: "right",
        fontSize: "23px",
        [theme.breakpoints.down("sm")]: {
          textAlign: "center",
          margin: "40px 0px 40px",
        },
        "& span": {
          color: "#9354E7",
        },
      },
      "& h6": {
        color: theme.palette.text.dull,
        lineHeight: "21px",
        marginTop: "12px",
        textAlign: "right",
        [theme.breakpoints.down("sm")]: {
          textAlign: "center",
        },
      },
      "& h3": {
        textAlign: "right",
        [theme.breakpoints.down("sm")]: {
          textAlign: "center",
        },
        "& span": {
          color: "#9354E7",
        },
      },
    },
    "& .educatorbox1": {
      marginTop: "30px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "0px",
      },
      "& h2": {
        margin: "80px 0px 80px",
        textAlign: "left",
        fontSize: "23px",
        [theme.breakpoints.down("sm")]: {
          textAlign: "center",
          margin: "40px 0px 40px",
        },
        "& span": {
          color: "#9354E7",
        },
      },
      "& h6": {
        color: theme.palette.text.dull,
        lineHeight: "21px",
        marginTop: "12px",
        textAlign: "left",
        [theme.breakpoints.down("sm")]: {
          textAlign: "center",
        },
      },
      "& h3": {
        textAlign: "left",
        [theme.breakpoints.down("sm")]: {
          textAlign: "center",
        },
        "& span": {
          color: "#9354E7",
        },
      },
    },
    "& img": {
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        maxWidth: "80%",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  },
}));
function Tokenomics() {
  const classes = useStyles();
  const themeSeeting = useContext(SettingsContext);

  return (
    <Box className={classes.Tokenomicshead}>
      <div
        className={
          themeSeeting?.settings?.theme === "DARK"
            ? "tokennomicsbox"
            : "tokennomicsbox1"
        }
      ></div>
      <div
        className={
          themeSeeting?.settings?.theme === "DARK"
            ? "tokenrightbox"
            : "tokenrightbox1"
        }
      ></div>
      <Container>
        <Box>
          <Typography variant="h4">TRADE FLOW</Typography>
          <Typography variant="h1" color="primary">
            TOKENOMICS
          </Typography>
        </Box>
        <Grid container spacing={1} alignItems="center">
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Box className="educatorbox">
              <Typography variant="h3" color="secondary">
                Educator | <span>Buy & Rent</span>
              </Typography>
              <Typography variant="h6">
                Customised NFTs | Assessment Modules | Learning Journerys |
                Practice Modules
              </Typography>
              <Typography variant="h2" color="secondary">
                Build to Earn | <span>Elevate to Earn</span>
              </Typography>
              <Typography variant="h3" color="secondary">
                Creator | <span>Buy & Rent</span>
              </Typography>
              <Typography variant="h6">
                Ed-NFTs | On-demand Journeys | Mini Games | Become a certified
                creator
              </Typography>
            </Box>
          </Grid>
          <Grid item lg={6} md={6} sm={12} xs={12}>
            <div
              className={
                themeSeeting?.settings?.theme === "DARK"
                  ? "tokenlogo"
                  : "tokenlogo1"
              }
            ></div>
            <Box>
              {themeSeeting?.settings?.theme === "DARK" ? (
                <img src="images/gp.png" alt="" width="100%" />
              ) : (
                <>
                  <img
                    src="images/H.png"
                    alt=""
                    width="100%"
                    style={{
                      width: "100%",
                      maxWidth: "90%",
                      margin: "0 auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingTop: "40px",
                      paddingBottom: "40px",
                    }}
                  />
                </>
              )}
            </Box>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <Box className="educatorbox1">
              <Typography variant="h3" color="secondary">
                Learner | <span>Buy & Rent</span>
              </Typography>
              <Typography variant="h6">
                NFTs | Notes | Learning Journeys | Admission in Institutions
              </Typography>
              <Typography variant="h2" color="secondary">
                Learn to Earn | <span>Wear to Earn</span>
              </Typography>
              <Typography variant="h3" color="secondary">
                Promoter | <span>Buy & Rent</span>
              </Typography>
              <Typography variant="h6">
                Academic Institutions | Supportive Institutions | Co-learning
                Spaces | Digital Advertisements
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Tokenomics;
