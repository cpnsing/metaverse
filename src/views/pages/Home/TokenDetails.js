import React, { useContext } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  makeStyles,
  IconButton,Paper
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { CgPlayButtonO } from "react-icons/cg";
import Chart from "react-apexcharts";
import SettingsContext from "src/context/SettingsContext";

const useStyles = makeStyles((theme) => ({
  Tokenomicsbox: {
    padding: "20px 0px 100px",
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px 80px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "20px 0px 80px",
    },

    "& h1": {
      textAlign: "center",
      lineHeight: "66px",
      marginBottom: "80px",
      color: theme.palette.primary.main,
      [theme.breakpoints.down("sm")]: {
        marginBottom: "40px",
      },
    },

    "& .boxcontrol": {
      transform: "translateX(50px)",
      [theme.breakpoints.down("sm")]: {
        transform: "translateX(0px)",
      },
    },
    "& .boxcontrol1": {
      transform: "translateX(-50px)",
      [theme.breakpoints.down("sm")]: {
        transform: "translateX(0px)",
      },
    },
    "& .tokendetails": {
      "& h4": {
        textAlign: "center",
        color: theme.palette.text.graypink,
        marginBottom: "10px",
      },
    },
  },
  topBox: {
    margin: "24px 0",
    padding: "24px 10px",
    "& .flexbox": {
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      "& h4": {
        marginRight: "10px",
      },
    },
  },
}));
function TokenDetails() {
  const classes = useStyles();
  const themeSeeting = useContext(SettingsContext);

  const options = {
    colors: ["#F15644", "#1549FF", "#D4AA1A", "#B01A09", "#30C42E"],
    chart: {
      height: "100%",
      width: "100%",
      type: "line",
      id: "basic-bar",
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },

      toolbar: {
        show: false,
      },
      labels: {
        color: "#fff",
        fontSize: "15px !important",
      },
    },
    legend: {
      position: "bottom",
    },
  };
  const series = [
    parseFloat(15.86 ? 15.86 : 0),
    parseFloat(9 ? 9 : 0),
    parseFloat(20 ? 20 : 0),
    parseFloat(5.14 ? 5.14 : 0),
    parseFloat(50 ? 50 : 0),
  ];
  return (
    <Box className={classes.Tokenomicsbox}>
      <Box className="numberall">
        <Container>
          <Box className="tokendetails">
            <Typography variant="h4">TOKEN DETAILS</Typography>
            <Typography variant="h1">Edverse Tokenomics</Typography>
          </Box>
          <Grid container spacing={1}>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Paper elevation={3} className={`${classes.topBox} boxcontrol`}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h6" color="secondary">
                    Ecosystem Pool
                  </Typography>
                  <Box className="flexbox">
                    <Typography variant="h4" color="primary">
                      24.0%
                    </Typography>
                    <Box className="number1"></Box>
                  </Box>
                </Box>
              </Paper>
              <Paper elevation={3} className={`${classes.topBox} `}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6" color="secondary">
                    Ecosystem Pool
                  </Typography>
                  <Box className="flexbox">
                    <Typography variant="h4" color="primary">
                      24.0%
                    </Typography>
                    <Box className="number1"></Box>
                  </Box>
                </Box>
              </Paper>
              <Paper elevation={3} className={`${classes.topBox} `}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6" color="primary">
                    Ecosystem Pool
                  </Typography>
                  <Box className="flexbox">
                    <Typography variant="h4" color="primary">
                      24.0%
                    </Typography>
                    <Box className="number1"></Box>
                  </Box>
                </Box>
              </Paper>
              <Paper elevation={3} className={`${classes.topBox} boxcontrol`}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6" color="primary">
                    Ecosystem Pool
                  </Typography>
                  <Box className="flexbox">
                    <Typography variant="h4" color="primary">
                      24.0%
                    </Typography>
                    <Box className="number1"></Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Box>
                <Chart options={options} series={series} type="donut" />
              </Box>
            </Grid>
            <Grid item lg={3} md={3} sm={12} xs={12}>
              <Paper elevation={3} className={`${classes.topBox} boxcontrol1`}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6" color="primary">
                    Ecosystem Pool
                  </Typography>
                  <Box className="flexbox">
                    <Typography variant="h4" color="primary">
                      24.0%
                    </Typography>
                    <Box className="number1"></Box>
                  </Box>
                </Box>
              </Paper>
              <Paper elevation={3} className={classes.topBox}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6" color="primary">
                    Ecosystem Pool
                  </Typography>
                  <Box className="flexbox">
                    <Typography variant="h4" color="primary">
                      24.0%
                    </Typography>
                    <Box className="number1"></Box>
                  </Box>
                </Box>
              </Paper>
              <Paper elevation={3} className={classes.topBox}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6" color="primary">
                    Ecosystem Pool
                  </Typography>
                  <Box className="flexbox">
                    <Typography variant="h4" color="primary">
                      24.0%
                    </Typography>
                    <Box className="number1"></Box>
                  </Box>
                </Box>
              </Paper>
              <Paper elevation={3} className={`${classes.topBox} boxcontrol1`}>
                <Box display="flex" justifyContent="space-between">
                  <Typography variant="h6" color="primary">
                    Ecosystem Pool
                  </Typography>
                  <Box className="flexbox">
                    <Typography variant="h4" color="primary">
                      24.0%
                    </Typography>
                    <Box className="number1"></Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default TokenDetails;
