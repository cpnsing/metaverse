import React, { useState, useContext } from "react";
import { Box, Typography, makeStyles, Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { RiGamepadLine } from "react-icons/ri";
import { HiOutlineShoppingBag } from "react-icons/ri";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import SettingsContext from "src/context/SettingsContext";

const useStyles = makeStyles((theme) => ({
  mainBox: {
    // background: "url(/images/wheel.png)",
    // backgroundRepeat: "no-repeat",
    // backgroundSize: "cover",
    // backgroundPosition: "1px -64px",
    zIndex: "1",
    padding: "20px 0px 200px",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overFlow: "hidden",
    "& h4": {
      color: theme.palette.text.graypink,
      textAlign: "center",
      marginBottom: "10px",
    },
    "& h1": {
      textAlign: "center",
      lineHeight: "66px",
      marginBottom: "240px",
      "@media(max-width:991px)": {
        marginBottom: "296px",
      },
    },
    "& h6": {
      fontSize: "14px",
      fontWeight: "500",
    },
    "& p": {
      fontSize: "12px",
      fontWeight: "300",
      color: theme.palette.text.dull,
    },
    "& h2": {
      fontSize: "22px",
      fontWeight: "500",
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
      },
    },
    "& h5": {
      fontSize: "16px",
      fontWeight: "300",
      color: theme.palette.text.dull,
    },
  },
  rightline1: {
    position: "absolute",
    top: "30px",
    right: "33%",
    zIndex: "-1",
    "@media(max-width:559px)": {
      right: "26%",
    },
    "@media(max-width:375px)": {
      right: "15%",
    },
  },
  rightline2: {
    position: "absolute",
    top: "30px",
    right: "33%",
    zIndex: "-1",
    "@media(max-width:559px)": {
      right: "26%",
    },
    "@media(max-width:375px)": {
      right: "15%",
    },
  },
  leftline1: {
    position: "absolute",
    top: "15px",
    left: "40%",
    zIndex: "-1",
    "@media(max-width:559px)": {
      left: "36%",
    },
    "@media(max-width:375px)": {
      left: "28%",
    },
  },
  leftline2: {
    position: "absolute",
    top: "45px",
    left: "25%",
    zIndex: "-1",
    "@media(max-width:559px)": {
      left: "11%",
    },
    "@media(max-width:375px)": {
      left: "4%",
    },
  },
  leftline3: {
    position: "absolute",
    top: "20px",
    left: "40%",
    zIndex: "-1",
    "@media(max-width:559px)": {
      left: "35%",
    },
    "@media(max-width:375px)": {
      left: "29%",
    },
  },
}));

const CompanyRoadmap = () => {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = useState("holderToken01");
  const themeSeeting = useContext(SettingsContext);

  return (
    <Box className={classes.mainBox}>
      <Container>
        <div
          className={
            themeSeeting?.settings?.theme === "DARK"
              ? "roadmapcenter"
              : "roadmapcenter1"
          }
        ></div>
        <Box>
          <Typography variant="h4">WAY AHEAD</Typography>
          <Typography variant="h1" color="primary">
            Company Roadmap
          </Typography>
        </Box>
        <Box className="main-navigation">
          <Box className="bgImagecir">
            {themeSeeting?.settings?.theme === "DARK" ? (
              <img
                src="images/bglight1.png"
                alt=""
                width="100%"
                className="bgcircular bgx1"
              />
            ) : (
              <>
                <img
                  src="images/bgdark1.png"
                  alt=""
                  width="100%"
                  className="bgcircular bgx1"
                />
              </>
            )}
          </Box>
          <Box className="bgImagecir">
            {themeSeeting?.settings?.theme === "DARK" ? (
              <img
                src="images/bglight2.png"
                alt=""
                width="100%"
                className="bgcircular bgx2"
              />
            ) : (
              <>
                <img
                  src="images/bgdark2.png"
                  alt=""
                  width="100%"
                  className="bgcircular bgx2"
                />
              </>
            )}
          </Box>
          <Box className="bgImagecir">
            {themeSeeting?.settings?.theme === "DARK" ? (
              <img
                src="images/bglight3.png"
                alt=""
                width="100%"
                className="bgcircular bgx1"
              />
            ) : (
              <>
                <img
                  src="images/bgdark3.png"
                  alt=""
                  width="100%"
                  className="bgcircular bgx1"
                />
              </>
            )}
          </Box>
          {/* <Box className="bgImagecir">
            <img
              src="images/banner/bgCircular5.png"
              className="bgcircular "
              alt=" "
              width="100%"
              style={{ borderRadius: "100%" }}
            />
          </Box> */}
          <Box className="bgImagecir">
            {themeSeeting?.settings?.theme === "DARK" ? (
              <img
                src="images/bgdarkcenter.png"
                alt=""
                width="100%"
                className="bgcircular"
                style={{ zIndex: "-1", position: "relative" }}
              />
            ) : (
              <>
                <img
                  src="images/bgwhitecenter.png"
                  alt=""
                  width="100%"
                  className="bgcircular"
                  style={{ zIndex: "-1", position: "relative" }}
                />
              </>
            )}
          </Box>
          <Box className="bgImagecir">
            <Timeline align="alternate" className="bgcircular">
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent></TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <img
                    src="images/banner/roadmapicon03.png"
                    className={classes.img}
                    alt=""
                  />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <img
                    src="images/banner/ConnectorImage01.png"
                    alt=""
                    className={classes.leftline1}
                  />
                  <Box className="timelineItems">
                    <Typography variant="h6" color="secondary">
                      Holer Token
                    </Typography>
                    <Typography variant="body2">
                      Product Demo and Private Sale.
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <img src="images/banner/roadmapicon02.png" alt="" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <img
                    src="images/banner/ConnectorImage02.png"
                    alt=""
                    className={classes.rightline1}
                  />
                  <Box className="timelineItems1">
                    <Typography variant="h6" color="secondary">
                      Holer Token
                    </Typography>
                    <Typography variant="body2">
                      Product Demo and Private Sale.
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <img src="images/banner/roadmapicon01.png" alt="" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <img
                    src="images/banner/ConnectorImage03.png"
                    alt=""
                    className={classes.leftline2}
                  />
                  <Box className="timelineItems2">
                    <Typography variant="h2" color="secondary">
                      Holer Token
                    </Typography>
                    <Typography variant="h5">
                      Product Demo and Private.
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <img src="images/banner/roadmapicon02.png" alt="" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <img
                    src="images/banner/ConnectorImage04.png"
                    alt=""
                    className={classes.rightline2}
                  />
                  <Box className="timelineItems3">
                    <Typography variant="h6" color="secondary">
                      Holer Token
                    </Typography>
                    <Typography variant="body2">
                      Product Demo and Private Sale.
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <img src="images/banner/roadmapicon03.png" alt="" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <img
                    src="images/banner/ConnectorImage05.png"
                    alt=""
                    className={classes.leftline3}
                  />
                  <Box className="timelineItems4">
                    <Typography variant="h6" color="secondary">
                      Holer Token
                    </Typography>
                    <Typography variant="body2">
                      Product Demo and Private Sale.
                    </Typography>
                  </Box>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CompanyRoadmap;
