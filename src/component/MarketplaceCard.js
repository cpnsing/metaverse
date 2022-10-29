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
      fontWeight: "300",
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
  institutebtn: {
    position: "absolute",
    bottom: "10px",
  },

  downbox: {
    marginTop: "16px",
    "& button": {
      marginTop: "15px",
    },
  },
}));
function Banner(props) {
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
            if (data?.type === "plot") {
              history.push("/plot-details");
            } else {
              history.push("/profile");
            }
          }}
        ></Box>
        {data?.type === "plot" && (
          <Box className={classes.institutebtn}>
            <Button
              onClick={() => {
                if (data.type === "plot") {
                  history.push("/institute-details");
                }
              }}
              variant="contained"
              color="primary"
              size="small"
            >
              Setup Insitiute
            </Button>
          </Box>
        )}
      </Box>

      <Box>
        <Box className={classes.downbox}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5">{data.text1}</Typography>

            <Typography variant="body1" color="secondary">
              {data.text2}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" color="secondary">
              {data.text3}
            </Typography>
          </Box>
          {data?.type === "plot" && (
            <Button variant="contained" color="primary" fullWidth>
              BUY
            </Button>
          )}
        </Box>
      </Box>
    </Paper>
  );
}

export default Banner;
