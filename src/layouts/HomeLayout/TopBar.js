import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Grid,
  MenuItem,
  Box,
  Container,
  Menu,
  Grow,
  Paper,
  Popper,
  MenuList,
  Typography,


  withStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Logo from "./../../component/Logo";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import SettingsContext from "src/context/SettingsContext";
import { BiSun, BiMoon } from "react-icons/bi";
import Scroll from "react-scroll";
import ConnectWallet from "src/component/ConnectWallet";
import MuiDialogContent from "@material-ui/core/DialogTitle";
import MuiDialog from "@material-ui/core/Dialog";

const ScrollLink = Scroll.Link;

const headersData = [
  {
    label: "About us",
    href: "/",
  },
  {
    label: "Tokenomics",
    href: "/",
  },
  {
    label: "Token Distribution",
    href: "/",
  },
  {
    label: "Road Map",
    href: "/",
  },
  {
    label: "Team",
    href: "/",
  },
  {
    label: "Profile",
    href: "/profile",
  },
];

const useStyles = makeStyles((theme) => ({
  menuButton: {
    fontSize: "15px",
    lineHeight: "24px",
    fontWeight: "400",
    borderRadius: 0,
    minWidth: "auto",
    color: "#FFFFFF",
    height: "31px",
    padding: "0px 10px",
    letterSpacing: "1px",
    marginLeft: "10px",
    "@media (max-width: 900px)": {
      fontStyle: "normal",
      letterSpacing: "-0.6px",
      lineHeight: "24px",
      color: "#FFF",
      padding: "15px !important",
      height: "51px",
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
    // "&:active": {
    //   color: "#1ed760",
    // },
    // "&:hover": {
    //   color: "#9C162E",
    // },
  },
  menuButton1: {
    width: "100%",
  },
  toolbar: {
    display: "flex",
    padding: "6px 0",
    justifyContent: "space-between",
    height: "100%",
    "@media (max-width: 900px)": {
      paddingLeft: "75px",
      paddingRight: "20px",
      height: "100%",
    },
  },
  maindrawer: {
    height: "100%",
    background: "#0c0731",
    width: "260px",
  },
  logoDrawer: {
    paddingLeft: "10px",
    width: "140px",
    marginBottom: "30px",
  },
  drawerContainer: {
    padding: "20px 0px ",
    height: "100%",
    background: "#000",
    width: "260px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  drawericon: {
    color: "#000",
    position: "absolute",
    top: "0px",
    right: "-10px",
    fontSize: "25px",
  },
  logoImg: {
    width: "75px",
    // height: '44.5px',
    margin: " 14px 15px 11px 0px",
    objectFit: "contain",
    "@media (max-width: 500px)": {
      margin: " 11px 1px 3px 0px",
      width: "52px",
    },
  },
  menuMobile: {
    fontSize: "16px",
    fontWeight: "400",
    fontStyle: "normal",
    letterSpacing: "-0.6px",
    lineHeight: "1.75",
    color: "#fff",
    borderBottom: "1px solid #3e3e3e",
    padding: "16px",
    "@media (max-width: 500px)": {
      padding: "7px 0",
      width: "100%",
    },
  },
  paper1: {
    background: "black",
    color: "white",
  },
  containerHeight: {
    height: "100%",
  },
  appmain: {
    backgroundColor: theme.palette.background.default,
    //     border: "none",
  },
  bright: {
    width: "75px",
    height: "35px",
    margin: "0px 10px",
    background: "rgba(250, 252, 255, 0.2)",
    borderRadius: "50px",
    backdropFilter: "blur(15px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    "& svg": {
      width: "16px",
    },
  },
  mainHeader: {
    justifyContent: "space-between",
    padding: "0px",
  },
  search: {
    height: "31px",
    position: "relative",
    color: "#ABABAB",
    borderRadius: "100px",
    backgroundColor: "#E6E6E6",
    border: "1px solid #fff",
    "&:hover": {
      backgroundColor: "#ececec",
      border: "1px solid #300760",
    },
    marginLeft: 20,
    width: "140px",
    maxWidth: "257px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "180px",
    },
  },
  searchIcon: {
    fontSize: "16px",
    padding: theme.spacing(0, 2),
    color: "#000000",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    fontSize: "16px",
  },
  wallet: {
    fontSize: "14px",
    fontWeight: "400",
    fontStyle: "normal",
    lineHeight: "21px",
    color: "#fff",
    margin: "0px 14px",
    padding: "0 42px",
    background: "linear-gradient(260.62deg, #7C162E -41.31%, #9C162E 107.21%)",
    borderRadius: "50px",
    height: "48px",
    // "&:hover": {
    //   // background: "#fff",
    //   color: "#000",
    // },
    "@media (max-width: 900px)": {
      marginLeft: "12px",
      marginTop: "12px",
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    fontSize: "13px",
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100px",
    [theme.breakpoints.up("sm")]: {
      width: "100%",
      "&:focus": {
        width: "100%",
      },
    },
  },
  submenu: {
    borderTop: "3px solid #300760",
    top: "25px !important",
  },
  contentTitle: {
    "& .MuiPaper": {
      root: {
        background: "rgba(0, 0, 0, 0.3) !important",
        backdropFilter: "blur(125px) !important",
        borderRadius: "50px !important"

      }
    },
    "& .MuiDialogTitle": {
      root: {
        padding: "0px 15px 0px 0px !important",

      },
    },
  },
}));

const DialogContent = withStyles((theme) => ({

  root: {


  }

}))(MuiDialogContent);
const Dialog = withStyles((theme) => ({
  paperWidthSm: {
    position: "relative !important",
    borderRadius: "21px !important",
    background: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(125px) !important",

    // "&::before": {
    //   position: "absolute !important",
    //   content: "' '",
    //   background: "rgba(169, 42, 72, 0.5)",
    //   filter: "blur(60px)",
    //   transform: "rotate(-21.64deg)",
    //   width: "443px",
    //   height: "206px",

    //   top: "-0.14px",

    // },

    // "&:after": {
    //   content: "' '",
    //   position: "absolute",
    //   background: "#6734AA",
    //   backgroundBlendMode: "lighten",
    //   opacity: 0.5,
    //   width: "443px",
    //   height: "206px",
    //   right: 0,
    //   bottom: 0

    // },



  },




}))(MuiDialog);





export default function Header() {
  const classes = useStyles();
  const location = useLocation();

  const handlescroll = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 1570, behavior: "smooth" });
    } else {
      history.push("/");
    }
  };
  const handlescroll2 = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 2670, behavior: "smooth" });
    } else {
      history.push("/");
    }
  };
  const handlescroll3 = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 3500, behavior: "smooth" });
    } else {
      history.push("/");
    }
  };
  const handlescroll4 = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 4500, behavior: "smooth" });
    } else {
      history.push("/");
    }
  };
  const handlescroll5 = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 5150, behavior: "smooth" });
    } else {
      history.push("/");
    }
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose1 = () => {
    setAnchorEl(null);
  };
  const {
    menuMobile,
    menuButton,
    menuButton1,
    toolbar,
    drawerContainer,
    drawericon,
    logoDrawer,
    containerHeight,
    appmain,
    bright,
    mainHeader,
    wallet,
    submenu,
    contentTitle,
  } = useStyles();
  const history = useHistory();
  console.log(history.location);

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1224
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const [open1, setOpen1] = useState({ community: false, user: false });
  const anchorRef = { community: useRef(null), user: useRef(null) };
  const [updateMinSatkeOpen, setUpdateMinSatkeOpen] = useState(false);
  // const handleToggle = (name) => {
  //   setOpen1({ ...open1, [name]: !open1[name] });
  // };
  const themeSeeting = useContext(SettingsContext);
  const changeTheme = (type) => {
    themeSeeting.saveSettings({
      theme: type,
    });
  };

  const handleClose2 = (event, name) => {
    if (
      anchorRef[name].current &&
      anchorRef[name].current.contains(event.target)
    ) {
      return;
    }

    setOpen1({ ...open1, [name]: false });
  };

  function handleListKeyDown(event, name) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen1({ ...open1, [name]: false });
    }
  }

  // return focus to the button when we transitioned from !open -> open
  // const prevOpen = React.useRef(open1);
  // React.useEffect(() => {
  //   if (prevOpen.current === true && open1 === false) {
  //     anchorRef.current.focus();
  //   }

  //   prevOpen.current = open1;
  // }, [open1]);

  const displayDesktop = () => {
    return (
      <Container maxWidth="lg" className="p-0">
        <Toolbar className={toolbar}>
          {femmecubatorLogo}
          <Grid
            container
            item
            direction="row"
            justify="flex-end"
            alignItems="center"
            style={{ paddingLeft: "0px" }}
          >
            <nav>
              {/* <input type="checkbox" id="check" /> */}

              <ul className="navigation">
                {/* <ScrollLink
                  onClick={() => history.push("/")}
                  className="hovertext"
                  smooth={true}
                  duration={500}
                  to="home"
                  style={{ cursor: "pointer" }}
                >
                  <Typography
                    variant="h6"
                    paragraph
                    className={`${classes.typosec} hovertext`}
                  >
                    About us
                  </Typography>
                </ScrollLink> */}
                {/* <li>
                  {" "}
                  <MenuItem className={menuButton} onClick={handlescroll}>
                    About us
                  </MenuItem>
                </li> */}
                <li>
                  {" "}
                  <MenuItem className={menuButton} onClick={handlescroll}>
                    Tokenomics
                  </MenuItem>
                </li>

                <li>
                  {" "}
                  <MenuItem className={menuButton} onClick={handlescroll2}>
                    Token Distribution
                  </MenuItem>
                </li>
                <li>
                  {" "}
                  <MenuItem className={menuButton} onClick={handlescroll3}>
                    Road Map
                  </MenuItem>
                </li>

                <li>
                  {" "}
                  <MenuItem className={menuButton} onClick={handlescroll4}>
                    Team
                  </MenuItem>
                </li>
                <li>
                  {" "}
                  <MenuItem className={menuButton} onClick={handlescroll5}>
                    Advisors
                  </MenuItem>
                </li>
                <li>
                  {" "}
                  <MenuItem
                    className={menuButton}
                    onClick={() => history.push("/profile")}
                  >
                    Profile
                  </MenuItem>
                </li>
                <li>
                  {" "}
                  <MenuItem
                    className={menuButton}
                    onClick={() => history.push("/plot")}
                  >
                    Plot
                  </MenuItem>
                </li>
              </ul>
            </nav>
            <Button
              className={wallet}
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={() => setUpdateMinSatkeOpen(true)}
            >
              Connect
            </Button>
            <Box className={bright}>
              <IconButton
                style={{ padding: "6px 9px" }}
                onClick={() => {
                  changeTheme("LIGHT");
                }}
              >
                <BiSun />
              </IconButton>
              <IconButton
                style={{ padding: "6px 9px" }}
                onClick={() => {
                  changeTheme("DARK");
                }}
              >
                <BiMoon />
              </IconButton>
            </Box>
            <Popper
              open={open1.community}
              anchorEl={anchorRef.community.current}
              role={undefined}
              transition
              disablePortal
              className={submenu}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener
                      onClickAway={(e) => handleClose2(e, "community")}
                    >
                      <MenuList
                        autoFocusItem={open1}
                        id="menu-list-grow"
                        onKeyDown={(e) => handleListKeyDown(e, "community")}
                      >
                        <MenuItem component={Link} to="/fungy-token">
                          Fungy Token
                        </MenuItem>
                        <MenuItem component={Link} to="/faq">
                          Discussion
                        </MenuItem>
                        <MenuItem>Voting</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Grid>
          {updateMinSatkeOpen && (
            <Dialog
              open={updateMinSatkeOpen}
              onClose={() => {
                setUpdateMinSatkeOpen(false);
              }}
              maxWidth="sm"
              className={contentTitle}
            >
              <DialogContent>
                <ConnectWallet
                  onClose={() => {
                    setUpdateMinSatkeOpen(false);
                  }}
                />
              </DialogContent>
            </Dialog>
          )}
        </Toolbar>
      </Container>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={mainHeader}>
        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            <img className={logoDrawer} src="images/footerlogo.png" alt="" />
            {getDrawerChoices()}
            <Box
              // display="flex"
              // justifyContent="center"
              // alignItems="center"
              width="100%"
            >
              <Button
                className={wallet}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={() => setUpdateMinSatkeOpen(true)}
              >
                Connect
              </Button>
            </Box>
          </div>
        </Drawer>
        <Grid container>
          <Grid item xs={6} sm={8} md={10}>
            {" "}
            <div>{femmecubatorLogo}</div>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "10px",
              }}
            >
              <Box className={bright}>
                <IconButton
                  style={{ padding: "6px 9px" }}
                  onClick={() => {
                    changeTheme("LIGHT");
                  }}
                >
                  <BiSun />
                </IconButton>
                <IconButton
                  style={{ padding: "6px 9px" }}
                  onClick={() => {
                    changeTheme("DARK");
                  }}
                >
                  <BiMoon />
                </IconButton>
              </Box>
              <IconButton
                className={drawericon}
                {...{
                  edge: "start",
                  color: "inherit",
                  "aria-label": "menu",
                  "aria-haspopup": "true",
                  onClick: handleDrawerOpen,
                }}
              >
                <MenuIcon
                  width="60px"
                  height="60px"
                  style={{ color: "#7C162E", fontSize: "30px" }}
                />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        {updateMinSatkeOpen && (
          <Dialog
            open={updateMinSatkeOpen}
            onClose={() => {
              setUpdateMinSatkeOpen(false);
            }}
            maxWidth="sm"
            className={contentTitle}
          >
            <DialogContent>
              <ConnectWallet
                onClose={() => {
                  setUpdateMinSatkeOpen(false);
                }}
              />
            </DialogContent>
          </Dialog>
        )}
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return (
      <>
        <nav>
          <input type="checkbox" id="check" />
          <label clasnames="logo" style={{ margin: "0px 18px" }}>
            <Logo />
          </label>
          <ul className="navigation">
            {/* <ScrollLink
              onClick={() => history.push("/")}
              className="hovertext"
              smooth={true}
              duration={500}
              to="about"
              style={{ cursor: "pointer" }}
            >
              <Typography
                variant="h6"
                paragraph
                className={`${classes.typosec} hovertext`}
              >
                About us
              </Typography>
            </ScrollLink> */}
            <ScrollLink
              onClick={() => history.push("/")}
              className="hovertext"
              smooth={true}
              duration={500}
              to="tokenomics"
              style={{ cursor: "pointer" }}
            >
              <Typography
                variant="h6"
                paragraph
                className={`${classes.typosec} hovertext`}
              >
                Tokenomics
              </Typography>
            </ScrollLink>
            <ScrollLink
              onClick={() => history.push("/")}
              className="hovertext"
              smooth={true}
              duration={500}
              to="tokendetails"
              style={{ cursor: "pointer" }}
            >
              <Typography
                variant="h6"
                paragraph
                className={`${classes.typosec} hovertext`}
              >
                Token Distribution
              </Typography>
            </ScrollLink>
            <ScrollLink
              onClick={() => history.push("/")}
              className="hovertext"
              smooth={true}
              duration={500}
              to="roadmap"
              style={{ cursor: "pointer" }}
            >
              <Typography
                variant="h6"
                paragraph
                className={`${classes.typosec} hovertext`}
              >
                Road Map
              </Typography>
            </ScrollLink>
            <ScrollLink
              onClick={() => history.push("/")}
              className="hovertext"
              smooth={true}
              duration={500}
              to="team"
              style={{ cursor: "pointer" }}
            >
              <Typography
                variant="h6"
                paragraph
                className={`${classes.typosec} hovertext`}
              >
                Team
              </Typography>
            </ScrollLink>
            <ScrollLink
              onClick={() => history.push("/")}
              className="hovertext"
              smooth={true}
              duration={500}
              to="advisors"
              style={{ cursor: "pointer" }}
            >
              <Typography
                variant="h6"
                paragraph
                className={`${classes.typosec} hovertext`}
              >
                Advisors
              </Typography>
            </ScrollLink>
            <ScrollLink
              onClick={() => history.push("/profile")}
              className="hovertext"
              smooth={true}
              duration={500}
              to="advisors"
              style={{ cursor: "pointer" }}
            >
              <Typography
                variant="h6"
                paragraph
                className={`${classes.typosec} hovertext`}
              >
                Profile
              </Typography>
            </ScrollLink>
            <ScrollLink
              onClick={() => history.push("/plot")}
              className="hovertext"
              smooth={true}
              duration={500}
              to="advisors"
              style={{ cursor: "pointer" }}
            >
              <Typography
                variant="h6"
                paragraph
                className={`${classes.typosec} hovertext`}
              >
                Plot
              </Typography>
            </ScrollLink>
          </ul>
        </nav>
      </>
    );
  };
  const femmecubatorLogo = (
    <Box>
      <Link to="/">
        <Logo className="logoImg" />
      </Link>
    </Box>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <>
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              component: Link,
              className: menuButton,
            }}
          >
            {label}
          </Button>
        </>
      );
    });
  };

  return (
    <>
      <AppBar
        position={history.location.pathname !== "/" ? "relative" : "absolute"}
        elevation={0}
        className={appmain}
        style={{ position: "fixed", backdropFilter: "blur(100px)" }}
      >
        <Box
          maxWidth={history.location.pathname !== "/" ? "lg" : "fixed"}
          className={containerHeight}
        >
          {mobileView ? displayMobile() : displayDesktop()}
        </Box>
      </AppBar>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose1}
      >
        <MenuItem>
          <Link to="/profile">My Profile</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/user">My Nft</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/resell-nft">Resell Nft</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/create-nft">Create NFT</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/notification">Notification</Link>
        </MenuItem>
        <MenuItem>
          <Link to="/search">Search</Link>
        </MenuItem>
      </Menu>
    </>
  );
}
