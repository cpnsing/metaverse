import React from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  Link,
  makeStyles,
} from "@material-ui/core";
import FaqData from "src/views/pages/Home/FaqData";
import FaqDataRight from "src/views/pages/Home/FaqDataRight"
import SettingsContext from "src/context/SettingsContext";
import { useContext } from "react";
const FaqDataList1 = [
  {
    head: "What is education metaverse?",
    summary:
      "Education metaverses are knowledge ecosystems made specifically for immersive and interactive experiences that promotes collaboration, communication, and content mastery in a safe environment.",
  },
  {
    head: "What is education metaverse?",
    summary:
      "Education metaverses are knowledge ecosystems made specifically for immersive and interactive experiences that promotes collaboration, communication, and content mastery in a safe environment.",
  },
  {
    head: "What is education metaverse?",
    summary:
      "Education metaverses are knowledge ecosystems made specifically for immersive and interactive experiences that promotes collaboration, communication, and content mastery in a safe environment.",
  },
  {
    head: "What is education metaverse?",
    summary:
      "Education metaverses are knowledge ecosystems made specifically for immersive and interactive experiences that promotes collaboration, communication, and content mastery in a safe environment.",
  },
];
const FaqDataList2 = [
  {
    head: "What is education metaverse?",
    summary:
      "Education metaverses are knowledge ecosystems made specifically for immersive and interactive experiences that promotes collaboration, communication, and content mastery in a safe environment.",
  },
  {
    head: "What is education metaverse?",
    summary:
      "Education metaverses are knowledge ecosystems made specifically for immersive and interactive experiences that promotes collaboration, communication, and content mastery in a safe environment.",
  },
  {
    head: "What is education metaverse?",
    summary:
      "Education metaverses are knowledge ecosystems made specifically for immersive and interactive experiences that promotes collaboration, communication, and content mastery in a safe environment.",
  },
  {
    head: "What is education metaverse?",
    summary:
      "Education metaverses are knowledge ecosystems made specifically for immersive and interactive experiences that promotes collaboration, communication, and content mastery in a safe environment.",
  },
  {
    head: "What is education metaverse?",
    summary:
      "Education metaverses are knowledge ecosystems made specifically for immersive and interactive experiences that promotes collaboration, communication, and content mastery in a safe environment.",
  },
  {
    head: "What is education metaverse?",
    summary:
      "Education metaverses are knowledge ecosystems made specifically for immersive and interactive experiences that promotes collaboration, communication, and content mastery in a safe environment.",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "20px 0px 80px",
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    "& h1": {
      textAlign: "center",
      lineHeight: "66px",
      marginBottom: "60px",
      color: theme.palette.primary.main,
    },
    "& h6": {
      // color: "#4AE69C",
      "&:hover": {
        // color: "#FF632C",
      },
    },
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const themeSeeting = useContext(SettingsContext);
  return (
    <div className={classes.root}>
      <div
        className={
          themeSeeting?.settings?.theme === "DARK"
            ? "faqboxshadowleft"
            : "faqboxshadowleft1"
        }
      ></div>
      <div
        className={
          themeSeeting?.settings?.theme === "DARK"
            ? "faqboxshadowright"
            : "faqboxshadowright1"
        }
      ></div>
      {/* featured */}
      <Container>
        <Box>
          <Typography variant="h1">Faqs</Typography>
        </Box>
        <Box mt={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Grid container spacing={2}>
                <Box>
                  {FaqDataList1.map((data, i) => {
                    return (
                      // <Grid item xs={12} sm={12} md={12} key={i}>
                      <FaqData data={data} index={i} />
                      // </Grid>
                    );
                  })}
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6}>
              <Grid container spacing={2}>
                <Box>
                  {FaqDataList2.map((data, i) => {
                    return (
                      // <Grid item xs={12} sm={12} md={12} key={i}>
                      <FaqDataRight data={data} index={i} />
                      // </Grid>
                    );
                  })}
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
