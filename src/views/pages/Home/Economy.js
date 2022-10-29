import React, { useContext } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  makeStyles,
} from "@material-ui/core";
import SettingsContext from "src/context/SettingsContext";
const useStyles = makeStyles((theme) => ({
  economyhead: {
    padding: "60px 0px 100px",
    [theme.breakpoints.down("sm")]: {
      padding: "60px 0px 80px",
    },
    "& h1": {
      textAlign: "center",
      marginBottom: "65px",
      lineHeight: "66px",
      [theme.breakpoints.down("sm")]: {
        marginBottom: "40px",
      },
    },
    "& h6": {
      lineHeight: "21.39px",
      paddingTop: "10px",
      fontWeight: "300",
      color: theme.palette.text.dull,
    },
    "& .educatorbox": {
      background: theme.palette.economy.bgeconomy,
      border: theme.palette.economy.bordereconomy,
      boxShadow: theme.palette.economy.boxShadoweconmy,
      backdropFilter: theme.palette.economy.filtereconomy,
      borderRadius: "20px",
      padding: "35px",
    },
    "& .boxright": {
      background: theme.palette.economy.bgeconomy,
      border: theme.palette.economy.bordereconomy,
      boxShadow: theme.palette.economy.boxShadoweconmy,
      backdropFilter: theme.palette.economy.filtereconomy,
      borderRadius: "20px",
      padding: "2px 35px 35px 35px",
    },
  },
}));
function Economy() {
  const classes = useStyles();
  const themesetting = useContext(SettingsContext);
  return (
    <Box className={classes.economyhead}>
      <Container>
        <Box>
          <Typography variant="h1" color="primary">
            Key Stakeholders In The Edverse Knowledge Economy
          </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Box className="educatorbox">
              <Grid container alignItems="center">
                <Grid item lg={8} md={8} sm={8} xs={12}>
                  <Box className="educatorshadow">
                    <div
                      className={
                        themesetting?.settings?.theme === "DARK"
                          ? "shadoweco"
                          : "shadoweco1"
                      }
                    ></div>
                    <Box>
                      <img
                        src="images/educator.png"
                        alt=""
                        width="100%"
                        style={{ width: "100%", maxWidth: "181px" }}
                      />
                    </Box>
                    <Box mt={1} mb={1}>
                      <Typography variant="h2" color="secondary">
                        Educator
                      </Typography>
                      <Typography variant="h6">
                        Use the largest Ed NFTs library, launch courses & apply
                        for teaching positions
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                  <Box>
                    {themesetting?.settings?.theme === "DARK" ? (
                      <img
                        src="images/arrow.png"
                        alt=""
                        width="100%"
                        style={{
                          opacity: "0.8",
                          width: "100%",
                          maxWidth: "205px",
                        }}
                      />
                    ) : (
                      <>
                        <img
                          src="images/arrowwhite.png"
                          alt=""
                          width="100%"
                          style={{
                            opacity: "0.8",
                            width: "100%",
                            maxWidth: "205px",
                          }}
                        />
                      </>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Box className="boxright">
              <Grid container>
                <Grid item lg={8} md={8} sm={12} xs={12}>
                  <Box className="Learnerbox">
                    <div
                      className={
                        themesetting?.settings?.theme === "DARK"
                          ? "shadowlearn"
                          : "shadowlearn1"
                      }
                    ></div>
                    <Box>
                      <img
                        src="images/learn.png"
                        alt=""
                        width="100%"
                        style={{ width: "100%", maxWidth: "246px" }}
                      />
                    </Box>
                    <Box mt={1} mb={1}>
                      <Typography variant="h2">Learner</Typography>
                      <Typography variant="h6" color="secondary">
                        Learn to earn whatever you desire and from whoever you
                        aspire!
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item lg={5} md={5} sm={12} xs={12}>
            <Box className="boxright">
              <Grid container>
                <Grid item lg={9} md={9} sm={12} xs={12}>
                  <Box className="Creatorbox">
                    <div
                      className={
                        themesetting?.settings?.theme === "DARK"
                          ? "shadowlearn"
                          : "shadowlearn1"
                      }
                    ></div>
                    <Box>
                      <img
                        src="images/creator.png"
                        alt=""
                        width="100%"
                        style={{ width: "100%", maxWidth: "169px" }}
                      />
                    </Box>
                    <Box mt={1} mb={1}>
                      <Typography variant="h2">Creator</Typography>
                      <Typography variant="h6" color="secondary">
                        Create Ed NFTs that can be owned, rented and sold by
                        educators and learners alike.
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item lg={7} md={7} sm={12} xs={12}>
            <Box className="educatorbox">
              <Grid container alignItems="center">
                <Grid item lg={8} md={8} sm={8} xs={12}>
                  <Box className="promoterbox">
                    <div
                      className={
                        themesetting?.settings?.theme === "DARK"
                          ? "shadoweco"
                          : "shadoweco1"
                      }
                    ></div>
                    <Box>
                      <img
                        src="images/promotor.png"
                        alt=""
                        width="100%"
                        style={{ width: "100%", maxWidth: "155px" }}
                      />
                    </Box>
                    <Box mt={1} mb={1}>
                      <Typography variant="h2">Promoter</Typography>
                      <Typography variant="h6" color="secondary">
                        Build, Own, Sell and Rent Institutions of Excellence and
                        Virtual Learning Spaces
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={4} md={4} sm={4} xs={12}>
                  <Box>
                    {themesetting?.settings?.theme === "DARK" ? (
                      <img
                        src="images/arrow.png"
                        alt=""
                        width="100%"
                        style={{
                          opacity: "0.8",
                          width: "100%",
                          maxWidth: "205px",
                        }}
                      />
                    ) : (
                      <>
                        <img
                          src="images/arrowwhite.png"
                          alt=""
                          width="100%"
                          style={{
                            opacity: "0.8",
                            width: "100%",
                            maxWidth: "205px",
                          }}
                        />
                      </>
                    )}
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Economy;
