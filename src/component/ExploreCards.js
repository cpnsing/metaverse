import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Paper } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import SettingsContext from "src/context/SettingsContext";
import { useContext } from "react";
const useStyles = makeStyles((theme) => ({
  bannerbox: {
    "& h4": {
      fontSize: "20px",
      fontWeight: "400",
      color: theme.palette.text.cotext,
    },
    "& h6": {
      color: theme.palette.text.subtext,
    },
    "& p": {
      fontSize: "14px",
      fontWeight: "600",
      color: theme.palette.text.cardtext,
    },
  },
  mainimg: {
    position: "relative",
    overflow: "hidden",
  },

  mainimg1: {
    width: "100%",

    backgroundPosition: "center !important",
    backgroundSize: "cover !important",
    backgroundRepeat: " no-repeat !important",

    // borderRadius: "40px 40px 10px 10px",

    borderRadius: "10px",
  },

  downbox: {
    marginTop: "16px",
    "& button": {
      marginTop: "15px",
    },
    "& p": {
      fontSize: "14px",
      fontWeight: "600",
      color: theme.palette.text.cardtext,
    },
  },
}));
function Explore(props) {
  const classes = useStyles();
  const history = useHistory();
  const themeSeeting = useContext(SettingsContext);

  const { data, type, index } = props;
  const updateDimensions = () => {
    var offsetWidth = document.getElementById("imagecard" + index).offsetWidth;
    var newoofsetWidth = offsetWidth - 20;
    document.getElementById("imagecard" + index).style.height =
      newoofsetWidth + "px";
  };

  useEffect(() => {
    updateDimensions();
  }, [data, index]);
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Paper elevation={1}>
      <Box
        className={classes.mainimg}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          className={classes.mainimg1}
          id={`imagecard${index}`}
          style={{ background: "url(" + data.image + ")" }}
          onClick={() => {
            history.push("/plot-details");
          }}
        ></Box>
      </Box>

      <Box>
        <Box className={classes.downbox}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5">{data.text1}</Typography>

            <Typography variant="body1" color="primary">
              <img src="/images/fav.png" alt="" width="12px" />
              &nbsp; {data.text2}
            </Typography>
          </Box>

          <Button variant="contained" color="primary" size="large" fullWidth>
            Buy Now
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default Explore;
