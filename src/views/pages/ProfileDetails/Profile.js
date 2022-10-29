import React, { useState } from "react";
import {
  Box,
  makeStyles,
  Grid,
  Container,
  Typography,
  Button,
  Divider,
  IconButton,
} from "@material-ui/core";
import { RiShieldCheckFill } from "react-icons/ri";
import ListIcon from "@material-ui/icons/List";
import Page from "src/component/Page";
import { FiCopy } from "react-icons/fi";
import CopyToClipboard from "react-copy-to-clipboard";
import EditIcon from "@material-ui/icons/Edit";
import { BiMap } from "react-icons/bi";
import { MdModeEdit } from "react-icons/md";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { ImShare2 } from "react-icons/im";
import MyNft from "./MyNft";
import Created from "./Created";
import Collected from "./Collected";
import Onsale from "./OnSale";
import Onwned from "./Onwned";
import Likes from "./Likes";
import Activity from "./Activity";
import SettingsContext from "src/context/SettingsContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    padding: "74px 0px 100px",
    "@media(max-width:1223px)": {
      padding: "61px 0px 100px",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "54px 0px 100px",
    },
    "& .postImg": {
      height: "363px",
      overflow: "hidden",
      position: "relative",
      background: "rgba(0,0,0,0.7)",
      backgroundSize: "100% !important",
      backgroundRepeat: "no-repeat !important",
      backgroundPosition: "center !important",
      margin: "0",
      "@media(max-width:767px)": {
        height: "150px",
      },
      "& img": {
        top: "50%",
        left: "50%",
        width: "auto",
        height: "auto",
        position: "absolute",
        minWidth: "100%",
        transform: "translate(-50%, -50%)",
        minHeight: "100%",
      },
    },
  },

  TabBox: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: "30px",
    "& .buttonBox": {
      "& button": {
        width: "100%",
        cursor: "pointer",
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
        fontFamily: "'Roboto', sans-serif",
        color: theme.palette.text.subtext,
        paddingTop: "10px",
        paddingBottom: "10px",
        margin: "0px 70px 0px 0px",
        textDecoration: "none",
        maxWidth: "117px",
        [theme.breakpoints.down("sm")]: {
          margin: "0px 55px 0px 0px",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "16px",
          margin: "0px",
          maxWidth: "100%",
          width: "100%",
        },

        "&:hover": {
          textDecoration: "none",
          color: "#9C162E",
        },
        "&.active": {
          color: "#fff",
          paddingTop: "10px",
          paddingBottom: "10px",
          fontSize: "20px",
          backgroundColor: "#9C162E",
          borderRadius: "50px",
          fontWeight: "300",
        },
      },
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },

  mainbox: {
    // paddingTop: "86px",
    // paddingBottom: "60px",
    "& .subboxes": {
      "& h4": {
        fontSize: "21px",
        fontWeight: "400",
        marginTop: "15px",
        color: theme.palette.primary.main,
      },
      "& p": {
        fontSize: "12px",
        fontWeight: "300",
        color: theme.palette.text.subtext,
      },
      "& h2": {
        color: theme.palette.text.cotext,
        fontSize: "16px",
        fontWeight: "400",
        marginTop: "16px",
      },
      "& h5": {
        color: theme.palette.text.subtext,
        fontSize: "16px",
        fontWeight: "300",
        marginTop: "6px",
      },
    },
    "& .allcontent": {
      background: theme.palette.background.profilebg,
      border: "1.02273px solid #281D42",
      boxShadow: "0px 4.09091px 20.4545px #14101B",
      backdropFilter: "blur(100px)",
      borderRadius: "10.2273px",
      marginTop: "-120px",
      position: "relative",
      overflow: "hidden",
      padding: "15px",
      "@media(max-width:767px)": {
        marginTop: "-60px",
      },
    },
    "& .allcontent1": {
      background: theme.palette.background.profilebg,
      border: "1.02273px solid #FFFFFF",
      boxShadow: "0px 4px 20px rgba(20, 16, 27, 0.2)",
      backdropFilter: "blur(100px)",
      borderRadius: "10.2273px",
      marginTop: "-120px",
      position: "relative",
      overflow: "hidden",
      padding: "15px",
      "@media(max-width:767px)": {
        marginTop: "-60px",
      },
    },
    "& .boxImage": {
      position: "relative",
      display: "inline-block",
      width: "208px",
      marginTop: "14px",
    },
    "& .detailbox": {
      border: "1.02273px solid rgba(81, 51, 101, 0.25)",
      backdropFilter: "blur(100px)",
      borderRadius: "10.2273px",
      padding: "20px 10px",
      marginTop: "60px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "30px",
      },
      "& h6": {
        color: theme.palette.text.subtext,
      },
      "& h3": {
        color: theme.palette.text.cotext,
        fontSize: "16px",
        fontWeight: "400",
      },
    },
    "& .iconboxes": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "30px",
      marginBottom: "40px",
      "& svg": {
        color: theme.palette.text.textfooter,
        "&:hover": {
          color: "#9C162E",
        },
      },
    },
  },
  buttonedit: {
    marginTop: "20px",
    marginBottom: "16px",
    "& button": {
      background:
        "linear-gradient(260.62deg, #7C162E -41.31%, #9C162E 107.21%)",
      boxShadow: " 0px 0px 4px rgba(116, 22, 46, 0.4)",
      borderRadius: "32px",
      fontSize: "16px",
      fontWeight: "300",
      color: "#fff",
    },
  },
}));

function Profile(props) {
  const classes = useStyles();
  const [tabview, setTabView] = useState("MyNft");
  const themeSeeting = useContext(SettingsContext);
  return (
    <Box className={classes.root}>
      <Box className="ProileImg">
        <figure className="postImg">
          <img src="images/coverprofile.png" alt="Horse Profile Images" />
        </figure>
      </Box>
      <Box className={classes.mainbox}>
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={3} sm={6} md={3} xs={12}>
              <Box className="subboxes">
                <Box
                  className={
                    themeSeeting?.settings?.theme === "DARK"
                      ? "allcontent"
                      : "allcontent1"
                  }
                >
                  <Box textAlign="center">
                    <Box className="boxImage">
                      <img src="images/profilepic.png" />
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography variant="h4">Allen Jolly</Typography>
                    </Box>
                    <Box
                      mt={1}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <IconButton style={{ padding: "10px 5px" }}>
                        <BiMap style={{ fontSize: "14px", color: "#9C162E" }} />
                      </IconButton>
                      <Typography variant="body2">
                        New York, United States
                      </Typography>
                    </Box>
                    <Box className={classes.buttonedit}>
                      <Box
                        component={Link}
                        to="/upload-profile"
                        style={{ textDecoration: "none" }}
                      >
                        <Button variant="contained" fullWidth>
                          <MdModeEdit />
                          &nbsp; Edit Your Profile
                        </Button>
                      </Box>
                    </Box>
                    {/* <Button
                      variant="outlined"
                      color="primary"
                      fullWidth
                      to="/upload-profile"
                      component={Link}
                    >
                      Setting
                    </Button> */}
                  </Box>
                  {/* <Box className="detailbox">
                    <Box display="flex" justifyContent="space-between" mb={1}>
                      <Typography variant="h6">Project Views</Typography>
                      <Typography variant="h3">214</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" mb={1}>
                      <Typography variant="h6">Appreciations</Typography>
                      <Typography variant="h3">54</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" mb={1}>
                      <Typography variant="h6">Followers</Typography>
                      <Typography variant="h3">231</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between" mb={1}>
                      <Typography variant="h6">Followings</Typography>
                      <Typography variant="h3">789</Typography>
                    </Box>
                  </Box> */}
                  <Box mt={1}>
                    <Typography variant="h2">Bio :</Typography>
                    <Typography variant="h5">
                      In publishing and graphic design, Lorem ipsum is a
                      placeholder text commonly used to demonstrate the visual
                      form of a document or a typeface without relying on
                      meaningful content..
                    </Typography>
                  </Box>
                  <Box className="iconboxes">
                    <IconButton>
                      <GrInstagram />
                    </IconButton>
                    <IconButton>
                      <FaTwitter />
                    </IconButton>
                    <IconButton>
                      <FaFacebookF />
                    </IconButton>
                    <IconButton>
                      <ImShare2 />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={9} sm={6} md={9} xs={12}>
              <Box
                className={
                  themeSeeting?.settings?.theme === "DARK"
                    ? "profileshade"
                    : "profileshade1"
                }
              >
                <div className="profileshadow"></div>

                <Box className={classes.TabBox}>
                  <Box className="buttonBox">
                    <Button
                      className={tabview === "MyNft" ? "active" : " "}
                      onClick={() => setTabView("MyNft")}
                    >
                      All
                    </Button>
                  </Box>
                  {/* <Box className="buttonBox">
                    <Button
                      className={tabview === "Created" ? "active" : " "}
                      onClick={() => setTabView("Created")}
                    >
                      Created
                    </Button>
                  </Box> */}
                  <Box className="buttonBox">
                    <Button
                      className={tabview === "Collected" ? "active" : " "}
                      onClick={() => setTabView("Collected")}
                    >
                      Collected
                    </Button>
                  </Box>
                  <Box className="buttonBox">
                    <Button
                      className={tabview === "Onsale" ? "active" : " "}
                      onClick={() => setTabView("Onsale")}
                    >
                      On sale
                    </Button>
                  </Box>
                  <Box className="buttonBox">
                    <Button
                      className={tabview === "Onwned" ? "active" : " "}
                      onClick={() => setTabView("Onwned")}
                    >
                      Onwned
                    </Button>
                  </Box>
                  <Box className="buttonBox">
                    <Button
                      className={tabview === "plot" ? "active" : " "}
                      onClick={() => setTabView("plot")}
                    >
                      Plot
                    </Button>
                  </Box>
                  {/* <Box className="buttonBox">
                    <Link
                      className={tabview === "Likes" ? "active" : " "}
                      onClick={() => setTabView("Likes")}
                    >
                      Likes
                    </Link>
                  </Box>
                  <Box className="buttonBox">
                    <Link
                      className={tabview === "Activity" ? "active" : " "}
                      onClick={() => setTabView("Activity")}
                    >
                      Activity
                    </Link>
                  </Box> */}
                </Box>
                <Box mt={4}>
                  {tabview === "MyNft" ? <MyNft /> : ""}
                  {tabview === "Created" ? <Created /> : ""}
                  {tabview === "Collected" ? <Collected /> : ""}
                  {tabview === "Onsale" ? <Onsale /> : ""}
                  {tabview === "Onwned" ? <Onwned /> : ""}
                  {tabview === "Likes" ? <Likes /> : ""}
                  {tabview === "Activity" ? <Activity /> : ""}
                  {tabview === "plot" ? <MyNft /> : ""}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Profile;
