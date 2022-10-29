import React, { useRef } from "react";
import {
  Box,
  Typography,
  Container,
  FormControl,
  Dialog,
  MenuItem,
  NativeSelect,
  Grid,
  withStyles,
  InputBase,
  Button,
  TextField,
  IconButton,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Nftmarkettable from "./Nftmarkettable";
import ActivityOwner from "./ActivityOwner";
import { MdReport } from "react-icons/md";
import { RiShieldCheckFill } from "react-icons/ri";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Listing from "./Listing";
import Popover from "@material-ui/core/Popover";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import Offers from "./Offers";
import PriceChart from "./PriceChart";
import BackTopbar from "src/component/BackTopbar";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import Scroll from "react-scroll";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const ScrollLink = Scroll.Link;

const useStyles = makeStyles((theme) => ({
  bannerbox: {
    paddingTop: "100px",
    paddingBottom: "50px",

    "& h2": {
      fontSize: "40px",
      fontWeight: "400",

      color: "#fff",
    },
    "& p": {
      fontSize: "16px",
      fontWeight: "400",
      color: "#fff",
      maxWidth: "611px",
      lineHeight: "25px",
      width: "100%",
    },
    "& h6": {
      fontSize: "14px",
      fontWeight: "300",

      color: "#d4d4d4",
      marginBottom: "10px",
    },
    "& h5": {
      fontSize: "18px",
      fontWeight: "400",

      color: "#fff",
      marginBottom: "10px",
    },
    "& h1": {
      fontSize: "22px",
      fontWeight: "400",
      letterSpacing: "1.74px",
      color: "#fff",
    },
  },
  subtext: {
    marginTop: "10px",
  },
  dividebox: {
    borderBottom: "1px solid #413C3C",
    width: "100%",
    maxWidth: "694px",
    marginTop: "20px",
  },
  pricebox: {
    background: "rgba(23, 12, 65, 0.4)",
    border: "1px solid #332262",
    boxSizing: "border-box",
    padding: "25px 25px 42px 25px",
    marginTop: "16px",
    borderRadius: "4px",
    "& h6": {
      fontSize: "22px",
      fontWeight: "700",

      color: "#fff",
      marginTop: "6px",
    },
    "& h5": {
      fontSize: "16px",
      fontWeight: "400",
      marginTop: "6px",
      color: "#d4d4d4",
    },
  },
  shop: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    fontSize: "16px !important",
    fontWeight: "600",
    borderRadius: "5px",
    color: "#fff",
    "& svg": {
      color: "#fff",
    },
  },
  addressbox: {
    background: "rgba(23, 12, 65, 0.4)",
    border: "1px solid #332262",
    boxSizing: "border-box",
    padding: "25px 17px 38px 25px",
    marginTop: "30px",
    borderRadius: "4px",
    "& .heading": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },

    "& h6": {
      fontSize: "16px",
      fontWeight: "400",
      color: "#fff",
      marginBottom: "20px",
    },
    "& h5": {
      fontSize: "15px",
      fontWeight: "400",
      color: "#d4d4d4",
      marginBottom: "20px",
    },
  },

  textnext: {
    "& h6": {
      fontSize: "18px",
      fontWeight: "400",
      color: "#d4d4d4",
      "& span": {
        color: "#fff",
        fontSize: "19px",
        fontWeight: "500",
      },
    },
  },
  detailprofile: {
    "& .detailimg": {
      "& img": {
        width: "100%",
      },
    },
  },
  detailbox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& button": {
      fontSize: "16px !important",
      fontWeight: "600 !important",
      borderRadius: "5px !important",
      color: "#fff",
    },
  },
  deigo: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "5px",
    "& h3": {
      fontSize: "22px",
      fontWeight: "400 !important",
      lineHeight: "27px",
    },
    "@media(max-width:354px)": {
      display: "block",
    },
  },
  url: {
    "& h6": {
      textDecoration: "underline",
      color: "#fff",
      fontSize: "16px",
      fontWeight: "700",
      lineHeight: "19px",
      marginTop: "5px",
      fontFamily: "'Inter', sans-serif",
    },
  },
  qty: {
    borderTop: "1px solid #585858",
    borderBottom: "1px solid #585858",
  },

  btn: {
    fontSize: "18px !important",
    fontWeight: "500",
    color: "#fff",
    height: "50px",
  },
  pricemodal: {
    "& h6": {
      fontSize: "16px",
      fontWeight: "400",
      color: "#fff",
    },
  },
  text: {
    color: "#fff",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  detailbutton: {
    fontSize: "16px !important",
    fontWeight: "600 !important",
    borderRadius: "5px !important",
    color: "#fff",
  },
  textfieldbox: {
    "& input": {
      padding: "0px",
      paddingBottom: "19px",
      marginTop: "19px",
      marginLeft: "13px",
    },
  },
  formbox: {
    // border: "1px solid #fff",
    "& select": {
      background: "#32236D",
      // border: "1px solid #FFFFFF",
    },
  },
  margin: {
    background: "#272727",
    border: "1px solid #fff",
    "& select": {
      background: "#170C41",
      border: "1px solid #FFFFFF",
    },
  },
  quantityfield: {
    "& input": {
      padding: "0px",
      paddingBottom: "13px",
      marginTop: "11px",
      marginLeft: "5px",
    },
  },
  popbox: {
    padding: theme.spacing(2),
    backgroundColor: "#6612d6",
  },
  omni: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& h6": {
      lineHeight: "19px",
    },
    "& svg": {
      color: "#fff",
    },
  },
  total: {
    display: "flex",
    justifyContent: "space-between",
    "& h6": {
      lineHeight: "19px",
    },
    "& h4": {
      fontWeight: "700",
      fontSize: "22px",
      lineHeight: "27px",
    },
  },
}));
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

function Banner(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [age, setAge] = React.useState("");
  const [search, setsearch] = React.useState("");
  const [toDate, setToDate] = React.useState();
  const [selectedDate, setSelectedDate] = React.useState();
  const handleClose = () => {
    setAnchorEl(null);
  };
  const hancleClear = () => {
    setSelectedDate();
    setsearch("");
    setToDate();
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const [open5, setOpen5] = React.useState(false);
  const handleClickOpen5 = () => {
    setOpen5(true);
  };
  const handleClose5 = () => {
    setOpen5(false);
  };

  const refs = {
    home: useRef(null),
    about: useRef(null),
    features: useRef(null),
    faq: useRef(null),
    roadmap: useRef(null),
    contact: useRef(null),
  };

  const onButtonClick = (abc) => {
    // console.log(abc);
    // const data = refs[abc].current;
    // console.log(data);
    window.scrollTo({
      top: refs[abc].current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box className={classes.bannerbox}>
      <BackTopbar />
      <Container>
        <Box>
          <Grid container spacing={7}>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Box className={classes.detailprofile}>
                <figure className="detailimg">
                  <img src="images/nftimg.png" alt="" width="100%" />
                </figure>
              </Box>
              <Box className={classes.addressbox}>
                <Box className="heading">
                  <Typography variant="h6">Contact Address </Typography>
                  <Typography variant="h5">0x3edf...45aa</Typography>
                </Box>
                <Box className="heading">
                  <Typography variant="h6"> Total Issued Token</Typography>
                  <Typography variant="h5">10,000</Typography>
                </Box>
                <Box className="heading">
                  <Typography variant="h6">Token ID </Typography>
                  <Typography variant="h5">887</Typography>
                </Box>
                <Box className="heading">
                  <Typography variant="h6">Token Standard</Typography>
                  <Typography variant="h6">ERC - 1155</Typography>
                </Box>
                <Box className="heading">
                  <Typography variant="h6">Blockchain</Typography>
                  <Typography variant="h6">Ethereum</Typography>
                </Box>
                <Box className={classes.detailbox}>
                  <Box width="100%" maxWidth="50%">
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      component={Link}
                      to="/horse-profile"
                      className={classes.detailbutton}
                    >
                      Details
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={7} md={7} sm={12} xs={12}>
              <Box mt={6} display="flex" alignItems="center">
                <RouterLink to="/horse-profile">
                  <Typography variant="h2">Rapid Stone</Typography>&nbsp; &nbsp;
                </RouterLink>
                <Box display="flex" className={classes.textnext} pt={1}>
                  <Box>
                    <RiShieldCheckFill
                      style={{ fontSize: "30px", color: "#fff" }}
                    />
                    &nbsp; &nbsp;
                  </Box>
                  <Typography variant="h6">
                    {" "}
                    Created by&nbsp;<span>OmniHorse</span>
                  </Typography>
                  &nbsp;&nbsp;
                </Box>
              </Box>
              <Box className={classes.subtext}>
                <Typography variant="body2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type an.
                </Typography>
              </Box>
              <Box mt={4}>
                <Grid container spacing={4}>
                  <Grid item lg={3} md={3} sm={3} xs={6}>
                    <Box>
                      <Typography variant="h5">Age</Typography>
                      <Typography variant="h6">2yr</Typography>
                      <Typography variant="h5">Gender type</Typography>
                      <Typography variant="h6">Filly</Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={3} md={3} sm={3} xs={6}>
                    <Box>
                      <Typography variant="h5">Breed</Typography>
                      <Typography variant="h6">Thorughbred</Typography>
                      <Typography variant="h5">Breed</Typography>
                      <Typography variant="h6">Thorughbred</Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={3} md={3} sm={3} xs={6}>
                    <Box>
                      <Typography variant="h5">Gender</Typography>
                      <Typography variant="h6">Female</Typography>
                      <Typography variant="h5">Gender</Typography>
                      <Typography variant="h6">Female</Typography>
                    </Box>
                  </Grid>
                  <Grid item lg={3} md={3} sm={3} xs={6}>
                    <Box>
                      <Typography variant="h5">Colour</Typography>
                      <Typography variant="h6">Bay</Typography>
                      <Typography variant="h5">Colour</Typography>
                      <Typography variant="h6">Bay</Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Box>
                  <Divider className={classes.dividebox} />
                </Box>
              </Box>
              <Box className={classes.pricebox}>
                <Box mb={3}>
                  <Typography variant="h1">Current price</Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  width="100%"
                  maxWidth="250px"
                >
                  <Box>
                    <img src="images/wineth.png" alt="" width="100%" />
                  </Box>
                  <Typography variant="h6">12.0353</Typography>
                  <Typography variant="h5">($576,626.76)</Typography>
                </Box>
                <Box mt={3}>
                  <Grid container>
                    <Grid item lg={8} md={12} sm={12} xs={12}>
                      <Grid container spacing={3}>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                          <Button
                            onClick={handleClickOpen5}
                            variant="contained"
                            color="primary"
                            size="large"
                            fullWidth
                            className={classes.shop}
                          >
                            <ShoppingCartIcon />
                            Buy now
                          </Button>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12}>
                          <Box>
                            <Button
                              onClick={handleClickOpen1}
                              variant="outlined"
                              color="primary"
                              fullWidth
                              className={classes.shop}
                            >
                              <LocalOfferIcon />
                              Make offers
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Banner;
