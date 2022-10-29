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
const useStyles = makeStyles((theme) => ({
  Tokenmain: {
    padding: "20px 0px 80px",
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px 80px",
    },
    "& h3": {
      fontWeight: "500",
      marginBottom: "15px",
      textAlign: "center",
      marginTop: "24px",
    },
    "& h6": {
      color: theme.palette.text.dull,
      textAlign: "center",
      width: "100%",
      maxWidth: "320px",
      margin: "0 auto",
      paddingBottom: "30px",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        maxWidth: "100%",
      },
    },
    "& img": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    "& p": {
      color: theme.palette.text.dull,
      textAlign: "center",
      width: "100%",
      maxWidth: "338px",
      fontSize: "16px",
      margin: "0 auto",
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        maxWidth: "100%",
      },
    },
    "& .borderbox": {
      position: "relative",
      "&::after": {
        width: "100%",
        right: "0px",
        top: "50px",
        content: "''",
        position: "absolute",
        border: theme.palette.text.dashedborder,
        [theme.breakpoints.down("sm")]: {
          border: "none",
        },
      },
    },
  },
}));
function Token() {
  const classes = useStyles();
  return (
    <Box className={classes.Tokenmain}>
      <Box className="borderbox">
        <Container>
          <Grid container>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box>
                <img
                  src="images/edv.png"
                  alt=""
                  width="100%"
                  style={{
                    width: "100%",
                    maxWidth: "114px",
                    margin: "0 auto",
                    position: "relative",
                    zIndex: "1",
                  }}
                />
                <Typography variant="h3" color="secondary">
                  EDVERSE TOKEN
                </Typography>
                <Typography variant="h6">
                  The Edverse token that will be traded between various
                  stakeholders
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box>
                <img
                  src="images/polygon.png"
                  alt=""
                  width="100%"
                  style={{
                    width: "100%",
                    maxWidth: "114px",
                    margin: "0 auto",
                    position: "relative",
                    zIndex: "1",
                  }}
                />
                <Typography variant="h3" color="secondary">
                  POLYGON
                </Typography>
                <Typography variant="h6">
                  Edverse will be built on a safe, secure, fast and a carbon
                  negative blockchain
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <Box>
                <img
                  src="images/nft.png"
                  alt=""
                  width="100%"
                  style={{
                    width: "100%",
                    maxWidth: "114px",
                    margin: "0 auto",
                    position: "relative",
                    zIndex: "1",
                  }}
                />
                <Typography variant="h3" color="secondary">
                  NFTs
                </Typography>
                <Typography variant="body1">
                  NFTs or Ed-NFTs will be the keydrivers amongst stakeholders
                  and the overall community
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Token;
