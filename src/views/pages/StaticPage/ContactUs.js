import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  TextField,
  IconButton,
  Link,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { RiHeadphoneFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { Link as RouterLink } from "react-router-dom";
import SettingsContext from "src/context/SettingsContext";
import { useContext } from "react";
const useStyles = makeStyles((theme) => ({
  contactbox: {
    padding: "0px 0px 100px",
    position: "relative",
    zIndex: 1,
    "& .contactbackground": {
      backgroundImage: "url(images/contactbg.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100%",
      overflow: "hidden",
      position: "relative",
      padding: "260px 0px 590px",
      [theme.breakpoints.down("sm")]: {
        padding: "200px 0px 414px",
      },
    },
    "& .contactbackground1": {
      backgroundImage: "url(images/letstalk.png)",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      width: "100%",
      overflow: "hidden",
      position: "relative",
      padding: "260px 0px 590px",
      [theme.breakpoints.down("sm")]: {
        padding: "200px 0px 414px",
      },
    },
    "& .textbox": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "-516px",
      zIndex: "1",
      position: "absolute",
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        marginTop: "-394px",
      },
    },
    "& h1": {
      fontSize: "70px",
      fontWeight: "700",
      color: theme.palette.primary.main,
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
      },
    },
  },

  rightdetailbox: {
    background: theme.palette.background.contactbg,
    backdropFilter: "blur(25px)",
    padding: "50px",
    [theme.breakpoints.down("sm")]: {
      padding: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
    "& h2": {
      color: theme.palette.text.cotext,
      marginBottom: "50px",
      fontSize: "50px",
      fontWeight: "600",
    },
    "& label": {
      color: theme.palette.text.cotext,
      fontFamily: "'Roboto', sans-serif",
      fontSize: "16px",
      fontWeight: "300",
    },
    "& .textfieldbox": {
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
    },
    "& .supportdetails": {
      padding: "40px",
      [theme.breakpoints.down("md")]: {
        padding: "10px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "0px 0px 30px",
      },
      "& h4": {
        fontSize: "20px",
        color: theme.palette.text.cotext,
      },
      "& p": {
        color: theme.palette.text.cotext,
        fontWeight: "300",
      },
      "& h6": {
        color: theme.palette.text.subtext,
        fontWeight: "300",
        fontSize: "14px",
      },
    },
    "& .supportleft": {
      position: "relative",
      "&::after": {
        top: "0%",
        right: "0%",
        left: "64%",
        width: "37px",
        height: "134px",
        content: "''",
        position: "absolute",
        borderRight: "1.5px solid rgba(255, 255, 255, 0.25)",
        [theme.breakpoints.down("sm")]: {
          height: "0px",
        },
      },
    },
    "& .textcontrol": {
      width: "100%",
      textAlign: "center",
      maxWidth: "155px",
      marginBottom: "3px",
      "& span": {
        fontSize: "40px",
        color: theme.palette.text.icontext,
      },
    },
    "& .checkboxfield": {
      "& span": {
        fontSize: "16px",
        fontWeight: "300",
        color: theme.palette.text.cotext,
      },
      "& a": {
        marginLeft: "4px !important",
        color: theme.palette.text.cotext,
        cursor: "pointer",
        fontWeight: "400",
        fontSize: "16px",
      },
    },
  },
  // topmargin: {
  //   marginTop: "30px",
  // },
}));
function ContactUs() {
  const classes = useStyles();
  const [agree, setAgree] = useState(true);
  const themeSeeting = useContext(SettingsContext);
  return (
    <Box className={classes.contactbox}>
      <Box
        className={
          themeSeeting?.settings?.theme === "DARK" ? "mainbox" : "mainbox1"
        }
      >
        <div className="shade1"></div>
        <div className="shade2"></div>
        <div className="contactshadow3"></div>
        <Box
          className={
            themeSeeting?.settings?.theme === "DARK"
              ? "contactbackground"
              : "contactbackground1"
          }
        ></Box>
        <Box className="textbox">
          <Typography variant="h1">Contact Us</Typography>
        </Box>
        <Container>
          <Box className={classes.topmargin}>
            <Grid container alignItems="center">
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div
                  className={
                    themeSeeting?.settings?.theme === "DARK"
                      ? "contactimgshadow"
                      : "contactimgshadow1"
                  }
                ></div>
                <img src="images/contactimg.png" alt="" width="100%" />
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <div
                  className={
                    themeSeeting?.settings?.theme === "DARK"
                      ? "contactrightshadow"
                      : "contactrightshadow1"
                  }
                ></div>
                <Box className={classes.rightdetailbox}>
                  <Box className="supportdetails">
                    <Grid container spacing={2}>
                      <Grid item lg={6} md={6} sm={6} xs={12}>
                        <Box className="supportleft">
                          <Box className="textcontrol">
                            <IconButton>
                              <RiHeadphoneFill />
                            </IconButton>
                            <Typography variant="h4">Phone</Typography>
                          </Box>
                          <Box display="flex" alignItems="center">
                            <Typography variant="body2">Phone</Typography>
                            <Typography variant="h6">
                              &nbsp;&nbsp;+87 563 245 521
                            </Typography>
                          </Box>
                          <Box display="flex" alignItems="center">
                            <Typography variant="body2">Phone</Typography>
                            <Typography variant="h6">
                              &nbsp;&nbsp;+87 563 245 521
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item lg={6} md={6} sm={6} xs={12}>
                        <Box className="supportright">
                          <Box className="textcontrol">
                            <IconButton>
                              <MdEmail />
                            </IconButton>
                            <Typography variant="h4">Email</Typography>
                          </Box>
                          <Box display="flex" alignItems="center">
                            <Typography variant="h6">
                              Support@mobiloitte.com
                            </Typography>
                          </Box>
                          <Box display="flex" alignItems="center">
                            <Typography variant="h6">
                              Support@mobiloitte.com
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box mb={3}>
                    <Typography variant="h2">Connect With Us</Typography>
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
                          className="textfieldbox"
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
                          className="textfieldbox"
                        />
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <label>EMAIL</label>
                      <Box>
                        <TextField
                          id="standard-basic"
                          placeholder="Enter your email Id"
                          name="firstName"
                          fullWidth
                          className="textfieldbox"
                        />
                      </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                      <label>PHONE</label>
                      <Box>
                        <TextField
                          id="standard-basic"
                          placeholder="Enter your contact details"
                          name="firstName"
                          fullWidth
                          className="textfieldbox"
                        />
                      </Box>
                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                      <label>MESSAGE</label>
                      <Box>
                        <TextField
                          id="standard-basic"
                          placeholder="Enter your message..."
                          name="firstName"
                          fullWidth
                          className="textfieldbox"
                        />
                      </Box>
                    </Grid>
                    <Box className="checkboxfield">
                      <Typography variant="body2">
                        <Checkbox
                          color="green"
                          type="checkbox"
                          id="acceptTerms"
                          inputProps={{
                            "aria-label": "secondary checkbox",
                          }}
                          checked={agree}
                          onChange={(e) => setAgree(e.target.checked)}
                          style={{ color: "#7F43CE" }}
                        />
                        <span>Opt in for marketing communication</span>
                        &nbsp;
                        <Link
                          component={RouterLink}
                          to="/terms-condition"
                          target="_blank"
                        >
                          Privacy Statement
                        </Link>
                      </Typography>
                    </Box>
                  </Grid>
                  <Box mt={6}>
                    <Button variant="contained" color="primary">
                      Let’s Talk
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default ContactUs;
