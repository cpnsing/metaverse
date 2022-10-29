import React from "react";
import { Box, Typography, Container } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import BlogCard from "src/component/BlogCard";

const useStyles = makeStyles((theme) => ({
  headbox: {
    padding: "0px 0px 100px",
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px 80px",
    },
  },
}));

function Roadmap() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg">
        <Box className={classes.headbox}></Box>
      </Container>
    </>
  );
}

export default Roadmap;
