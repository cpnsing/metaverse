import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@material-ui/core";
import { Height } from "@material-ui/icons";
import React, { useState } from "react";
import { GiCancel } from "react-icons/gi";

import { BsFillEyeFill } from "react-icons/bs";
import { MdMyLocation } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { AiOutlineArrowUp } from "react-icons/ai";
import ExploreTable from "./ExploreTable";
import CheckoutModal from "./CheckoutModal";
import ShareSocialMedia from "src/component/ShareSocialMedia";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainSection: {
    paddingTop: "130px",
    height: "100%",
    paddingBottom: "20px",
    "& h3": {
      maxWidth: "350px",
      fontWeight: "700",
      lineHeight: "40px",
    },
    "& h5": {
      lineHeight: "40px",
    },
  },
  imgSection: {
    maxHeight: "420px",
    paddingBottom: "30px",

    "& img": {
      objectFit: "cover",
      borderRadius: "10px",
      maxHeight: "420px",
    },
  },
  plotDetails: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "& h5": {
      lineHeight: "40px",
    },
  },
  priceSection: {
    padding: "20px 24px",
    border: "1px solid #242129",
    borderRadius: "10px",
    background: "rgba(56, 3, 39, 0.1)",
    border: "1px solid #A92A48",
    boxShadow:
      "inset -10px -10px 12px rgba(169, 42, 72, 0.2), inset 10px 10px 12px rgba(156, 22, 46, 0.25)",
    backdropFilter: "blur(5px)",
  },

  stock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  plotDetails1: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: "15px",
    "& h5": {
      lineHeight: "40px",
    },
  },
  plotDetails2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",

    "& h5": {
      lineHeight: "40px",
    },
  },
}));

export default function PlotDeatils() {
  const classes = useStyles();
  const history = useHistory();
  const [checkout, setCheckout] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <Box className={classes.mainSection}>
      <Container>
        <Grid container spacing={3}>
          <Grid item lg={4}>
            <Box className={classes.imgSection}>
              <img src="images/explore.png" width="100%" />
            </Box>
          </Grid>
          <Grid item lg={8}>
            <Box className={classes.plotDetails}>
              <Box>
                <Typography variant="h5" color="primary">
                  <BsFillEyeFill />
                  &nbsp; 512 views
                </Typography>
              </Box>
              <Box display="flex">
                <MdMyLocation style={{ fontSize: "20px", marginTop: "5px" }} />
                &nbsp; &nbsp;
                <FaShareAlt
                  onClick={() => setOpen(true)}
                  style={{
                    fontSize: "20px",
                    marginTop: "5px",
                    cursor: "pointer",
                  }}
                />
                &nbsp;&nbsp;
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  onClick={() => history.push("/profile")}
                >
                  Back to user profile
                </Button>
              </Box>
            </Box>
            <Box mt={2}>
              <Typography variant="h3" color="primary">
                PERCEL SUPERMARKET, NEW DELHI
              </Typography>
            </Box>

            <Grid container spacing={2}>
              <Grid item lg={3}>
                <Box>
                  {" "}
                  <Typography variant="h5" color="primary">
                    Current Owner :
                  </Typography>
                  <Typography variant="h5" color="primary">
                    Purchased For :
                  </Typography>
                  <Typography variant="h5" color="primary">
                    Price per tile :
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={2}>
                <Box>
                  <Typography variant="h5" color="primary">
                    Next
                  </Typography>
                  <Typography variant="h5" color="primary">
                    $21.28
                  </Typography>
                  <Typography variant="h5" color="primary">
                    $0.35
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={6}>
                <Box>
                  <Typography variant="h5" color="primary">
                    <ImLocation2 /> &nbsp; Sector 35, Greater Noida pin code
                    201301
                  </Typography>
                  <Typography variant="body2" color="primary">
                    121.4545052831.17825989
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Box mt={2}>
              <Paper elevation={1} className={classes.priceSection}>
                <Grid container spacing={2}>
                  <Grid item lg={4}>
                    <Box>
                      {" "}
                      <Typography variant="h5" color="primary">
                        Current market value
                      </Typography>
                      <Typography variant="h5" color="primary">
                        Original new land value
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={2}>
                    <Box>
                      <Typography variant="h5" color="primary">
                        $194.68
                      </Typography>
                      <Typography variant="h5" color="primary">
                        $0.1
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={6}>
                    <Box>
                      <Typography
                        variant="h5"
                        color="primary"
                        style={{ color: "#35E319" }}
                      >
                        <AiOutlineArrowUp style={{ color: "#35E319" }} /> &nbsp;
                        3.144
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
              <Box mt={3}>
                <Grid container spacing={2}>
                  <Grid item lg={3}>
                    <Box>
                      {" "}
                      <Typography variant="h5" color="primary">
                        CURRENT PRICE
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={2}>
                    <Box>
                      <Typography variant="h5" color="primary">
                        <img src="/images/fav.png" alt="" width="15px" />
                        &nbsp; 194.68
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={6}>
                    <Box>
                      <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        fullWidth
                        onClick={() => setCheckout(true)}
                      >
                        Buy Now
                      </Button>
                    </Box>

                    <Dialog
                      open={open}
                      onClose={() => setOpen(false)}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                      maxWidth="xs"
                      fullWidth
                    >
                      <DialogActions>
                        <IconButton
                          onClick={() => setOpen(false)}
                          className={classes.customizedButton}
                        >
                          <GiCancel />
                        </IconButton>
                      </DialogActions>
                      <DialogContent>
                        <Box
                          className={classes.sharemodal}
                          mb={2}
                          align="center"
                          mt={3}
                        >
                          <ShareSocialMedia url={window.location} />
                        </Box>
                      </DialogContent>
                    </Dialog>

                    {checkout && (
                      <CheckoutModal
                        open={checkout}
                        setOpen={(data) => setCheckout(data)}
                      />
                    )}
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box mt={6}>
          <Paper>
            <ExploreTable />
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}
