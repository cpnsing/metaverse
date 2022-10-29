import React, { useState } from "react";
import {
  Box,
  makeStyles,
  Grid,
  Container,
  Typography,
  Button,
  Link,
  Divider,
  IconButton,
  TextField,
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
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    padding: "160px 0px 100px",
    [theme.breakpoints.down("sm")]: {
      padding: "120px 0px 60px",
    },
    "& label": {
      color: theme.palette.text.cotext,
      fontFamily: "'Roboto', sans-serif",
      fontSize: "16px",
      fontWeight: "300",
    },
  },

  TabBox: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: "30px",
    "& .buttonBox": {
      "& a": {
        width: "100%",
        cursor: "pointer",
        fontWeight: "400",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
        fontFamily: "'Roboto', sans-serif",
        color: theme.palette.text.subtext,
        paddingTop: "16px",
        margin: "0px 70px 0px 0px",
        paddingBottom: "16px",
        [theme.breakpoints.down("xs")]: {
          fontSize: "12px",
          margin: "0px",
        },

        "&:hover": {
          textDecoration: "none",
          color: "#9C162E",
        },
        "&.active": {
          color: theme.palette.text.cotext,
          paddingTop: "16px",
          paddingBottom: "16px",
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
    "& h2": {
      color: theme.palette.text.cotext,
    },
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
      position: "relative",
      overflow: "hidden",
      padding: "15px",
    },
    "& .allcontent1": {
      background: theme.palette.background.profilebg,
      border: "1.02273px solid #FFFFFF",
      boxShadow: "0px 4px 20px rgba(20, 16, 27, 0.2)",
      backdropFilter: "blur(100px)",
      borderRadius: "10.2273px",
      position: "relative",
      overflow: "hidden",
      padding: "15px",
    },
    "& .boxImage": {
      position: "relative",
      display: "inline-block",
      width: "208px",
    },
    "& .detailbox": {
      border: "1.02273px solid rgba(81, 51, 101, 0.25)",
      backdropFilter: "blur(100px)",
      borderRadius: "10.2273px",
      padding: "20px 10px",
      marginTop: "60px",
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
  headingtext: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    paddingBottom: "35px",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
    "& h1": {
      fontSize: "70px",
      fontWeight: "600",
      color: theme.palette.primary.main,
      marginBottom: "16px",
      [theme.breakpoints.down("md")]: {
        fontSize: "50px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "30px",
      },
    },
    "& .rightbox": {
      display: "flex",
      justifyContent: "space-between",
      [theme.breakpoints.down("sm")]: {
        display: "block",
      },
      "& button": {
        margin: "0px 10px",
        fontSize: "20px",
        [theme.breakpoints.down("sm")]: {
          margin: "0px  0px 10px",
        },
      },
    },
    // "& .buttonoutlined": {
    //   color: "#fff",
    // },
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
  textfieldbox: {
    border: "none",
    color: "#fff",
    background: "none !important",
    marginBottom: "20px",
    "& input": {
      marginTop: "8px",
      //   borderBottom: "2px solid #585858",
      background: "none !important",
      marginBottom: "4px",
    },
    "& .MuiOutlinedInput-inputMultiline": {
      background: "none",
    },
    "& .MuiOutlinedInput-input": {
      borderRadius: "0px",
    },
  },
  profilebox: {
    width: "100%",
    maxWidth: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      maxWidth: "100%",
    },
  },
  rightdetailbox: {
    "& h2": {
      color: theme.palette.text.cotext,
      marginBottom: "16px",
    },
  },
  fieldmargin: {
    marginTop: "51px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
    },
  },
}));

function UploadProfile(props) {
  const classes = useStyles();
  const [tabview, setTabView] = useState("MyNft");
  const themeSeeting = useContext(SettingsContext);
  return (
    <Box className={classes.root}>
      <Box
        className={
          themeSeeting?.settings?.theme === "DARK"
            ? "uploadmainbox"
            : "uploadmainbox1"
        }
      >
        <div className="shade1"></div>
        <div className="shade2"></div>
        <div className="shade3"></div>
        <Box className={classes.mainbox}>
          <Container>
            <Box className={classes.headingtext}>
              <Typography variant="h1">Edit Profile</Typography>
              <Box className="rightbox">
                <Button variant="contained" fullWidth color="primary">
                  Save
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  fullWidth
                  className="buttonoutlined"
                >
                  Cancel
                </Button>
              </Box>
            </Box>
            <Grid container spacing={3}>
              <Grid item lg={3} sm={6} md={3} xs={12}>
                <Box mb={3}>
                  <Typography variant="h2">Profile</Typography>
                </Box>
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
                          <BiMap
                            style={{ fontSize: "14px", color: "#9C162E" }}
                          />
                        </IconButton>
                        <Typography variant="body2">
                          New York, United States
                        </Typography>
                      </Box>
                      <Box className={classes.buttonedit}>
                        <Button variant="contained" fullWidth>
                          Upload New Avatar
                        </Button>
                      </Box>
                      <Button variant="outlined" color="primary" fullWidth>
                        Delete
                      </Button>
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
                <Box className={classes.rightdetailbox}>
                  <Box mb={3}>
                    <Typography variant="h2">Basic Info</Typography>
                  </Box>
                  <Grid container spacing={2}>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <label>FIRST NAME</label>
                      <Box>
                        <TextField
                          id="standard-basic"
                          placeholder="Enter your first name"
                          name="firstName"
                          fullWidth
                          className={classes.textfieldbox}
                        />
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <label>LAST NAME</label>
                      <Box>
                        <TextField
                          id="standard-basic"
                          placeholder="Enter your last name"
                          name="firstName"
                          fullWidth
                          className={classes.textfieldbox}
                        />
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <label>Address</label>
                      <Box>
                        <TextField
                          id="standard-basic"
                          placeholder="Enter your address"
                          name="firstName"
                          fullWidth
                          className={classes.textfieldbox}
                        />
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <label>PHONE</label>
                      <Box className={classes.profilebox}>
                        <TextField
                          id="standard-basic"
                          placeholder="Enter your contact details"
                          name="firstName"
                          fullWidth
                          className={classes.textfieldbox}
                        />
                      </Box>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <label>Email</label>
                      <Box>
                        <TextField
                          id="standard-basic"
                          placeholder="Enter your email..."
                          name="firstName"
                          fullWidth
                          className={classes.textfieldbox}
                        />
                      </Box>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <Typography variant="h2">Biography</Typography>
                      <Box>
                        <TextField
                          placeholder="Enter your message"
                          type="text"
                          size="small"
                          variant="outlined"
                          rows={5}
                          multiline
                          fullWidth
                          className={classes.textfieldbox}
                        />
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Typography variant="h2">External Links</Typography>
                      <label>FACEBOOK URL :</label>
                      <Box>
                        <TextField
                          id="standard-basic"
                          placeholder="Paste your link here..."
                          name="firstName"
                          fullWidth
                          className={classes.textfieldbox}
                        />
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Box className={classes.fieldmargin}>
                        <label>TWITTER URL :</label>
                        <Box>
                          <TextField
                            id="standard-basic"
                            placeholder="Enter your email here..."
                            name="firstName"
                            fullWidth
                            className={classes.textfieldbox}
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <label>INSTAGRAM URL :</label>
                      <Box>
                        <TextField
                          id="standard-basic"
                          placeholder="Paste your link here..."
                          name="firstName"
                          fullWidth
                          className={classes.textfieldbox}
                        />
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <label>LINKEDIN URL :</label>
                      <Box>
                        <TextField
                          id="standard-basic"
                          placeholder="Paste yourt link here..."
                          name="firstName"
                          fullWidth
                          className={classes.textfieldbox}
                        />
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Typography variant="h2">External Links</Typography>
                      <label>FACEBOOK URL :</label>
                      <Box>
                        <TextField
                          id="standard-basic"
                          placeholder="Paste your link here..."
                          name="firstName"
                          fullWidth
                          className={classes.textfieldbox}
                        />
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <Box className={classes.fieldmargin}>
                        <label>TWITTER URL :</label>
                        <Box>
                          <TextField
                            id="standard-basic"
                            placeholder="Enter your email here..."
                            name="firstName"
                            fullWidth
                            className={classes.textfieldbox}
                          />
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <label>INSTAGRAM URL :</label>
                      <Box>
                        <TextField
                          id="standard-basic"
                          placeholder="Paste your link here..."
                          name="firstName"
                          fullWidth
                          className={classes.textfieldbox}
                        />
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <label>LINKEDIN URL :</label>
                      <Box>
                        <TextField
                          id="standard-basic"
                          placeholder="Paste yourt link here..."
                          name="firstName"
                          fullWidth
                          className={classes.textfieldbox}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export default UploadProfile;
