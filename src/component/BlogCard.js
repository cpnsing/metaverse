import React, { useContext } from "react";
import {
  Box,
  Typography,
  Dialog,
  Divider,
  Container,
  Grid,
  TextField,
  FormControl,
  InputBase,
  withStyles,
  Button,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Link as RouterLink } from "react-router-dom";

import { BsArrowRightShort } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import SettingsContext from "src/context/SettingsContext";
const useStyles = makeStyles((theme) => ({
  bannerbox: {
    "& .imagebox": {
      maxWidth: "283px",
      borderRadius: "20px",
      boxShadow: "0px 0px 14px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
      boxSizing: "border-box",
      marginTop: "80px",
      position: "relative",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        maxWidth: "90%",
        margin: "0 auto",
      },
      "@media(max-width:600px)": {
        width: "100%",
        maxWidth: "100%",
      },
      "& img": {
        width: "100%",
      },
    },
    "& h5": {
      marginBottom: "8px !important",
      fontWeight: "400",
    },
    "& h6": {
      color: theme.palette.text.dull,
      fontWeight: "400",
      fontSize: "14px",
    },
    "& p": {
      color: theme.palette.text.dull,
      fontWeight: "300",
    },
    "& button": {
      color: "#0076FF",
    },
    "& .subtextbox": {
      padding: "15px",
      background: theme.palette.background.blogbg,
      //   border: "1.5px solid rgba(255, 255, 255, 0.25)",
      boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.25)",
    },
    "& .subtextbox1": {
      padding: "15px",
      background: theme.palette.background.blogbg,
      border: "1.5px solid rgba(0, 0, 0, 0.1)",
      boxShadow: "0px 7px 12px rgba(0, 0, 0, 0.15)",
      backdropFilter: "blur(31.3725px)",
    },
  },
}));

function BlogCard(props) {
  const classes = useStyles();
  const themesetting = useContext(SettingsContext);

  const { data } = props;
  return (
    <>
      <Box className={`${classes.bannerbox} wow slideInRight`}>
        <Box className="imagebox">
          <img src={data.img1} alt="" width="100%" />
          <Box
            className={
              themesetting?.settings?.theme === "DARK"
                ? "subtextbox"
                : "subtextbox1"
            }
          >
            <Typography variant="h5" color="secondary">
              {data.text1}
            </Typography>
            <Typography variant="body2">{data.text2}</Typography>
            <Box
              mt={2}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Button
                variant="text"
                color="primary"
                endIcon={<BsArrowRightShort />}
              >
                Learn more
              </Button>
              <Typography variant="h6">4 Mins Read</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default BlogCard;
