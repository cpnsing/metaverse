import React, { useContext } from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  List,
  ListItem,
  makeStyles,
  Button,
  Divider,
  TextField,
  IconButton,
  Link,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Link as RouterLink } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";
import SettingsContext from "src/context/SettingsContext";
import { GrFacebookOption } from "react-icons/gr";
import { RiInstagramLine } from "react-icons/ri";
const useStyles = makeStyles((theme) => ({
  baseSection: {
    display: "flex",
    justifyContent: "space-between",
    "& p": {
      color: theme.palette.text.textfooter,
      fontSize: "16px",
      fontWeight: "300",
    },
    "& a": {
      textDecoration: "none",
    },
    "@media(max-width:565px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
  privacy: {
    display: "flex",
    "@media(max-width:565px)": {
      marginTop: "1.5rem",
    },
  },
  icon: {
    margin: "0px 4px",
    color: theme.palette.primary.main,
    cursor: "pointer",
    width: "14px",
  },

  listitem: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#B7B7B7",
    cursor: "pointer",
    background: "none",
    paddingLeft: "0px !important",
    paddingRight: "0px !important",
    "@media(max-width:599px)": {
      fontSize: "14px",
    },
  },

  subpart: {
    background: theme.palette.background.footerbg,
    backdroFilter: "blur(20px)",
    position: "relative",
    zIndex: 1,
    padding: "60px 0px 40px",
    overflow: "hidden",

    "& h6": {
      fontSize: "16px",
      color: theme.palette.text.dull,
      fontWeight: "300 !important",
      lineHeight: "21px",
      width: "100%",
      maxWidth: "238px",
      marginBottom: "12px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
        width: "100%",
        maxWidth: "100%",
        marginBottom: "10px",
      },
    },
    "@media(max-width:599px)": {
      padding: "20px 10px 24px 10px",
    },
    "& h2": {
      fontSize: "35px",
      fontWeight: "500",
      lineHeight: "46px",
      marginBottom: "20px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "26px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "18px",
        marginBottom: "0px",
      },
    },
  },

  listbox: {
    background: "none",
    border: "none",
    margin: "0px",
    "& a": {
      color: theme.palette.text.dull,
      display: "block",
      fontSize: "16px",
      fontWeight: "300",
      paddingTop: "4px",
      fontFamily: "'Roboto', sans-serif",
    },
  },
  contactbox: {
    display: "flex",
    alignItems: "center",
    marginBottom: "-10px",
    marginLeft: "-10px",
    marginTop: "4px",
    "& a": {
      color: theme.palette.text.dull,
      fontSize: "14px",
      fontWeight: "300",
      textDecoration: "none",
    },
    "& svg": {
      color: "#3F3E41",
      fontSize: "18px",
    },
  },
  leftbox: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: "100px",
    "& .dot": {
      height: "24px",
      width: "24px",
      borderRadius: "50%",
      backgroundColor: "rgba(81, 40, 135, 0.25)",
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "16px",
    },
  },
  buttonbox: {
    marginTop: "10px",
    "& button": {
      background:
        "linear-gradient(260.62deg, #7C162E -41.31%, #9C162E 107.21%)",
      boxShadow: " 0px 0px 4px rgba(116, 22, 46, 0.4)",
      borderRadius: "6px",
      fontSize: "16px",
      fontWeight: "300",
      color: "#fff",
    },
  },
}));

export default function Liquidity() {
  const classes = useStyles();
  const themeSeeting = useContext(SettingsContext);
  return (
    <>
      <Box className={classes.subpart}>
        <Box
          className={
            themeSeeting?.settings?.theme === "DARK" ? "footer" : "footer1"
          }
        >
          <div className="shade1"></div>
          <div className="shade2"></div>
          <Container>
            <Box>
              <Grid container style={{ color: "white" }}>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                  <Box>
                    {themeSeeting?.settings?.theme === "DARK" ? (
                      <img
                        src="/images/logo.png"
                        alt=""
                        width="100%"
                        style={{ maxWidth: "192px", margin: "0 auto" }}
                      />
                    ) : (
                      <>
                        <img
                          src="/images/blacklogo.png"
                          alt=""
                          width="100%"
                          style={{ maxWidth: "192px", margin: "0 auto" }}
                        />
                      </>
                    )}
                  </Box>{" "}
                  <Box mt={1} mb={1}>
                    <Typography variant="h6">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      galley of type and scrambled it to make a type specimen
                      book.
                    </Typography>{" "}
                  </Box>
                  <Box className={classes.leftbox}>
                    <Link target="_blank" href="https://telegram.org/">
                      <Box className="dot">
                        <GrFacebookOption className={classes.icon} />
                      </Box>{" "}
                    </Link>
                    <Link target="_blank" href="https://twitter.com/">
                      <Box className="dot">
                        <TwitterIcon className={classes.icon} />
                      </Box>
                    </Link>
                    <Link target="_blank" href="https://www.facebook.com/">
                      <Box className="dot">
                        <RiInstagramLine className={classes.icon} />
                      </Box>
                    </Link>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={8} lg={8}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3} lg={3}>
                      <Typography variant="h4" color="primary"

>Quick links</Typography>
                      <List className={classes.listbox}>
                        <RouterLink
                          className="hovertext"
                          to="/about-us"
                          style={{ textDecoration: "none" }}
                        >
                          <ListItem>About Us</ListItem>
                        </RouterLink>
                        <RouterLink
                          className="hovertext"
                          // to="/terms"
                          style={{ textDecoration: "none" }}
                        >
                          <ListItem>Tokenomics</ListItem>
                        </RouterLink>
                        <RouterLink
                          className="hovertext"
                          // to="/privacy-policy"
                          style={{ textDecoration: "none" }}
                        >
                          <ListItem>Token Distribution</ListItem>
                        </RouterLink>
                        <RouterLink
                          className="hovertext"
                          // to="/privacy-policy"
                          style={{ textDecoration: "none" }}
                        >
                          <ListItem>Blog</ListItem>
                        </RouterLink>
                        <RouterLink
                          className="hovertext"
                          to="/contact-us"
                          style={{ textDecoration: "none" }}
                        >
                          <ListItem>Contact Us</ListItem>
                        </RouterLink>
                      </List>{" "}
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                      <Typography variant="h4">Contact Us</Typography>
                      <Box className={classes.contactbox}>
                        <IconButton>
                          <AiOutlineMail />
                        </IconButton>
                        <Link>
                          <a href="mailto:support@hexa.com">
                            support@Hexaverse.com
                          </a>
                        </Link>
                      </Box>
                      <Box className={classes.contactbox}>
                        <IconButton>
                          <AiOutlineMail />
                        </IconButton>
                        <Link>
                          <a href="mailto:info@hexa.com">
                            support@Hexaverse.com
                          </a>
                        </Link>
                      </Box>
                      <Box className={classes.contactbox}>
                        <IconButton>
                          <AiOutlineMail />
                        </IconButton>
                        <Link>
                          <a href="mailto:support@hexa.com">
                            support@Hexaverse.com
                          </a>
                        </Link>
                      </Box>
                      <Box className={classes.contactbox}>
                        <IconButton>
                          <AiOutlineMail />
                        </IconButton>
                        <Link>
                          <a href="mailto:info@hexa.com">
                            support@Hexaverse.com
                          </a>
                        </Link>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={5} lg={5}>
                      <Typography variant="h2" color="primary">
                        Subscribe for our newsletter.
                      </Typography>
                      <TextField
                        placeholder="Enter your email address.."
                        variant="outlined"
                        fullWidth
                      />
                      <Box className={classes.buttonbox}>
                        <Button variant="contained" fullWidth>
                          Join now
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Container>
          <Box pt={5} pb={4}>
            <Divider />
          </Box>
          <Container>
            <Box className={classes.baseSection}>
              <Typography variant="body1">
                © 2022 All Rights Reserved
              </Typography>
              <Box className={classes.privacy}>
                <RouterLink to="/privacy-policy">
                  <Typography variant="body1">Privacy Policy |</Typography>
                </RouterLink>
                &nbsp;
                <RouterLink to="/term">
                  <Typography variant="body1">
                    Terms and Conditions |
                  </Typography>
                </RouterLink>
                &nbsp;
                <RouterLink to="/contact-us">
                  <Typography variant="body1">Token Disclaimer</Typography>
                </RouterLink>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>
    </>
  );
}
