import React, { useContext } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  makeStyles,
  IconButton,
  ListItem,
  List,
} from "@material-ui/core";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { CgPlayButtonO } from "react-icons/cg";
import SettingsContext from "src/context/SettingsContext";
const useStyles = makeStyles((theme) => ({
  Tokenmain: {
    padding: "170px 0px 100px",
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    [theme.breakpoints.down("md")]: {
      padding: "120px 0px 70px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "90px 0px 40px",
    },
    "& h1": {
      lineHeight: "66px",
      marginBottom: "40px",
      fontSize: "70px",
      fontWeight: "600",
      color: theme.palette.primary.main,
      [theme.breakpoints.down("md")]: {
        fontSize: "50px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
        marginBottom: "16px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
      },
    },
    "& .textbox": {
      "& h5": {
        color: theme.palette.text.subtext,
        marginBottom: "20px",
        fontWeight: "300",
        fontSize: "16px",
      },
      "& h2": {
        fontWeight: "500",
        color: theme.palette.text.cotext,
        marginBottom: "16px",
        marginTop: "30px",
        [theme.breakpoints.down("sm")]: {
          fontSize: "22px",
        },
      },
      "& h6": {
        fontWeight: "400",
        color: theme.palette.text.cotext,
        marginTop: "20px",
        marginBottom: "20px",
      },
    },
    "& .notesbox": {
      "& h5": {
        color: theme.palette.text.subtext,
        fontWeight: "300",
      },
    },
  },
  textboxs: {
    position: "relative",
    zIndex: "1",
    "& li": {
      position: "relative",
      fontSize: "16px",
      color: theme.palette.text.subtext,
      fontWeight: "300",
      fontFamily: "Roboto, sans-serif",
      lineHeight: "21px",
      "&::after": {
        content: "''",
        position: "absolute",
        height: "6px",
        width: "6px",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "50%",
        left: "-16px",
        top: "14px",
      },
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      maxWidth: "100%",
    },
    "& .MuiList-padding": {
      paddingTop: "0px",
      paddingBottom: " 8px",
    },
  },
  textboxs1: {
    position: "relative",
    zIndex: "1",
    "& li": {
      position: "relative",
      fontSize: "16px",
      color: theme.palette.text.subtext,
      fontWeight: "300",
      fontFamily: "Roboto, sans-serif",
      marginBottom: "14px",
      lineHeight: "21px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      maxWidth: "100%",
    },
    "& .MuiList-padding": {
      paddingTop: "0px",
      paddingBottom: " 8px",
    },
    "& li::marker": {
      color: theme.palette.primary.main,
    },
  },
  contactaddress: {
    width: "100%",
    maxWidth: "226px",
  },
}));

function AboutUs() {
  const classes = useStyles();
  const themeSeeting = useContext(SettingsContext);

  return (
    <Box className={classes.Tokenmain}>
      <Box
        className={
          themeSeeting?.settings?.theme === "DARK" ? "static" : "static1"
        }
      >
        <div className="shade1"></div>
        <div className="shade2"></div>
        <div className="shade3"></div>
        <Container>
          <Box>
            <Typography variant="h1">About Hexaverse</Typography>
          </Box>
          <Box className="textbox">
            <Typography variant="h5">
              By accessing this website, you acknowledge that you have read,
              understand and accept the terms and conditions of use described
              below. If you do not understand or accept these terms and
              conditions of use which you are required to abide by, you should
              immediately exit this website.
            </Typography>
            <Typography variant="h5">
              EDVERSE (including its affiliates) (“Company”, “We” or “Us” and
              their connotations) operates a website (URL:
              https://www.EDVERSE.com or the POC applications / any kind of
              software builds) (together called as “Platform”) which is engaged
              in the service of online education through the means of a
              metaverse of various subjects to the audience.
            </Typography>
            <Typography variant="h5">
              These terms and conditions (“Terms”) describe the terms on which
              the Company grants end users access to the Platform (hereinafter
              referred to as “Services”) and shall be read with the privacy
              policy available on the website. Anyone below 18 years of age is
              assumed to be a child (“Child”) and requires parental consent to
              use the Platform. The parents of the Child or users above 18 years
              of age are hereinafter referred to as “you”, “your” or “yours”.
              The term “Users” for the purposes of these Terms shall be read as
              You and/or Child. Users also include all persons who access,
              browse, or sign up on the Platform for applying to teach on the
              Platform (“Applicant(s)”) and those selected to teach on the
              Platform (“Instructor(s)”).
            </Typography>
            <Typography variant="h2">What is Lorem Ipsum?</Typography>
            <Typography variant="h6">
              Everything on this website is copyrighted. All copyrights are
              owned by EDVERSE (EDVERSE) and/or its subsidiaries or a third
              party original creator (“Third Party”) of the material (“Third
              Party Materials”). You are free to view, copy and print the
              EDVERSE Material found on this website as long as:
            </Typography>
          </Box>
          <Container style={{ paddingLeft: "15px", paddingRight: "15px" }}>
            <Box mb={4}>
              <Box className={classes.textboxs}>
                <List>
                  <ListItem>
                    The EDVERSE Material is used by you for information purposes
                    only and not further distributed except in situations when
                    you intend to use the EDVERSE Materials for non- commercial
                    purposes only.
                  </ListItem>
                </List>
              </Box>
              <Box className={classes.textboxs}>
                <List>
                  <ListItem>
                    Unless otherwise authorized by EDVERSE or you have a license
                    or authorization directly granted by the Third Party, you
                    are not authorized to copy and/or print the Third Party
                    Materials that are copyrighted materials provided at this
                    website.
                  </ListItem>
                </List>
              </Box>
              <Box className={classes.textboxs}>
                <List>
                  <ListItem>
                    Business partners, customers, suppliers, associates of
                    EDVERSE and other Third Parties that, in cooperation with
                    EDVERSE, publish their own proprietary material on this
                    website retain full legal and copyright ownership of their
                    respective material.
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Container>
          <Box className="textbox">
            <Typography variant="h2">What is Lorem Ipsum?</Typography>
            <Typography variant="h6">
              You as a parent/guardian expressly acknowledge and undertake that:
            </Typography>
          </Box>
          <Box mb={4}>
            <Box className={classes.textboxs1}>
              <ol type="1" style={{ paddingLeft: "16px" }}>
                <li>
                  You are competent and have all the necessary legal rights to
                  enter into this agreement on behalf of your child.
                </li>
                <li>
                  You grant your consent to the Company for your child to attend
                  and participate in the classes, courses, tests, sessions
                  and/or any other program conducted and/or organized by the
                  Company on its Platform and in relation to the services
                  provided by the Company.
                </li>
                <li>
                  You undertake that the participation of the Child and all the
                  activities done by the Child will be under your direct and
                  constant supervision. You further accept full and complete
                  liability arising out of the child’s acts, whether direct or
                  indirect.
                </li>
                <li>
                  You are competent and have all the necessary legal rights to
                  enter into this agreement on behalf of your child.
                </li>
                <li>
                  You grant your consent to the Company for your child to attend
                  and participate in the classes, courses, tests, sessions
                  and/or any other program conducted and/or organized by the
                  Company on its Platform and in relation to the services
                  provided by the Company.
                </li>
              </ol>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default AboutUs;
