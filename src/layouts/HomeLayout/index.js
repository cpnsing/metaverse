import React from "react";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import TopBar from "./TopBar";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    // backgroundColor:
    //   "linear-gradient(210.28deg, rgba(87, 46, 141, 0.09) 16.72%, rgba(81, 40, 135, 0.24) 74.08%, rgba(81, 40, 135, 0.12) 92.8%)",
    position: "relative",
    "&::before": {
      content: "' '",
      width: "100%",
      height: "100%",
      position: "fixed",
      top: "0",
      left: "0",
      backgroundColor: theme.palette.background.allbackground,
      // backgroundColor:
      //   "linear-gradient(210.28deg, rgba(87, 46, 141, 0.09) 16.72%, rgba(81, 40, 135, 0.24) 74.08%, rgba(81, 40, 135, 0.12) 92.8%)",
      zIndex: "1",
    },
  },
  MainLayout: {
    minHeight: "calc(100vh - 415px)",
    position: "relative",
    overflow: "hidden",
    zIndex: "1",
  },

}));

const MainLayout = ({ children }) => {
  const classes = useStyles();
  const history = useHistory();
  console.log(history.location);
  return (
    <div className={classes.root}>
      <TopBar />
      <div
        style={
          history.location.pathname !== "/"
            ? { display: "block" }
            : { display: "none" }
        }
      ></div>
      <div className={classes.MainLayout}>{children}</div>

      <Footer />
    </div>
  );
};

export default MainLayout;
