import React, { useContext } from "react";
import {
  Box,
  Typography,
  Container,
  makeStyles,
  ListItem,
  List,
} from "@material-ui/core";
import SettingsContext from "src/context/SettingsContext";
const useStyles = makeStyles((theme) => ({
  Tokenmain: {
    padding: "20px 0px 100px",
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px 80px",
    },

    "& h1": {
      textAlign: "center",
      lineHeight: "66px",
      marginBottom: "50px",
    },
    "& .textbox": {
      "& h5": {
        color: theme.palette.text.dull,
        marginBottom: "10px",
        fontWeight: "300",
      },
      "& h2": {
        fontWeight: "500",
        marginBottom: "16px",
        marginTop: "30px",
        [theme.breakpoints.down("xs")]: {
          fontSize: "22px",
        },
      },
      "& h6": {
        fontWeight: "400",
        fontSize: "18px",
        marginTop: "25px",
        marginBottom: "20px",
      },
    },
    "& .notesbox": {
      "& h5": {
        color: theme.palette.text.dull,
        fontWeight: "300",
      },
    },
  },
  circularSed01: {
    right: "0px",
    bottom: "10%",
    zIndex: "1",
    position: "absolute",
  },
  circularSed02: {
    left: "0px",
    bottom: "4%",
    zIndex: "1",
    position: "absolute",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  textboxs: {
    position: "relative",
    zIndex: "1",
    "& li": {
      position: "relative",
      fontSize: "18px",
      color: theme.palette.text.dull,
      fontWeight: "300",
      fontFamily: "Roboto, sans-serif",
      "&::after": {
        content: "''",
        position: "absolute",
        height: "6px",
        width: "6px",
        backgroundColor: theme.palette.background.listDot,
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
}));

function EducationMeta() {
  const classes = useStyles();
  const themeSeeting = useContext(SettingsContext);

  return (
    <Box className={classes.Tokenmain}>
      <img
        src="images/CircularSed01.png"
        alt="Circular Sed"
        className={classes.circularSed01}
      />
      <img
        src="images/CircularSed02.png"
        alt="Circular Sed"
        className={classes.circularSed02}
      />
      <div
        className={
          themeSeeting?.settings?.theme === "DARK"
            ? "metaleftshadow"
            : "metaleftshadow1"
        }
      ></div>
      <div
        className={
          themeSeeting?.settings?.theme === "DARK"
            ? "metarightshadow"
            : "metarightshadow1"
        }
      ></div>
      <Container>
        <Box>
          <Typography variant="h1" color="primary">
            What is Education Metaverse?
          </Typography>
        </Box>
        <Container>
          <Box className="textbox">
            <Typography variant="h5">
              Metaverse is an avant-garde phenomenon. It is easy to consider it
              a fad with all the frenzy. However, this technological boom is
              showing great promise when it comes to a wide variety of cohorts
              including, but not limited to Education. Education metaverses are
              sculpting a consequence-free, immersive reality to level up the
              way students learn.
            </Typography>
            <Typography variant="h5">
              Now that the possibility for benefits is established, let us look
              at what it actually entails. To answer this, let us ask ourselves
              a question.
            </Typography>
            <Typography variant="h2" color="secondary">
              Why are kids glued to games?
            </Typography>
            <Typography variant="h5">
              Because in games, they are asked to solve a problem only after
              they bump into it. The problem is not there just for the sake of
              it, it is provided within a context. Contexts boost motivation.
              And self- motivation is the key to limitless learning.
            </Typography>
            <Typography variant="h6" color="secondary">
              This is exactly what metaverse schools will be capable of. For
              students, metaverse in education is decorated with:
            </Typography>
          </Box>
          <Container>
            <Box mb={4}>
              <Box className={classes.textboxs}>
                <List>
                  <ListItem>
                    A consequence-free reality where students can experience the
                    academics while being encouraged to make mistakes and learn
                    from them.
                  </ListItem>
                </List>
              </Box>
              <Box className={classes.textboxs}>
                <List>
                  <ListItem>
                    Bridging the gap between academics and applications through
                    to-scale, exact replicas of social situations and contexts
                    where the student can apply the garnered knowledge.
                  </ListItem>
                </List>
              </Box>
              <Box className={classes.textboxs}>
                <List>
                  <ListItem>
                    Transcending geographic barriers and traditional
                    limitations. With a metaverse-enabled education approach,
                    students from any part of the world can attend the school of
                    their choice without the hassle of expensive travel
                  </ListItem>
                </List>
              </Box>
              <Box className={classes.textboxs}>
                <List>
                  <ListItem>
                    Now, students are not the only beneficiaries here. Schools
                    can enhance their provisions too.
                  </ListItem>
                </List>
              </Box>
              <Box className={classes.textboxs}>
                <List>
                  <ListItem>
                    Better safety through by sculpting the apt environments.
                  </ListItem>
                </List>
              </Box>
              <Box className={classes.textboxs}>
                <List>
                  <ListItem>
                    Cost-cutting especially when it comes to periodically
                    updated infrastructure.
                  </ListItem>
                </List>
              </Box>
              <Box className={classes.textboxs}>
                <List>
                  <ListItem>
                    Ability to personalize education for each student by
                    modifying their virtual environments.
                  </ListItem>
                </List>
              </Box>
              <Box className={classes.textboxs}>
                <List>
                  <ListItem>
                    Ability to personalize education for each student by
                    modifying their virtual environments.
                  </ListItem>
                </List>
              </Box>
              <Box className="notesbox">
                <Typography variant="h5">
                  Metaverse schools are not a thing of the future anymore. It is
                  here. It is working. And it is showing all the signs of
                  sustaining well into the future.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Container>
      </Container>
    </Box>
  );
}

export default EducationMeta;
