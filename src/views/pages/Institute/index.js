import {
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Height } from "@material-ui/icons";
import ExploreCards from "src/component/ExploreCards";
import React, { useState } from "react";
const useStyles = makeStyles((theme) => ({
  mainSection: {
    paddingTop: "130px",
    height: "100%",
    paddingBottom: "20px",
  },
  imgSection: {
    maxHeight: "420px",
    paddingBottom: "20px",

    "& img": {
      objectFit: "cover",
      borderRadius: "10px",
      maxHeight: "420px",
    },
  },
  plotDetails: {
    display: "flex",
    alignItems: "center",
  },
  priceSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 0px",
    border: "1px solid #242129",
    borderRadius: "10px",
    background: "url(images/land_plot.webp)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
const TeamMap = [
  {
    image: "images/explore.png",
    text1: "Percel",
    text2: "298.000",
  },
  {
    image: "images/explore.png",
    text1: "Ovlivion",
    text2: "298.0002",
  },
  {
    image: "images/explore.png",
    text1: "Percel",
    text2: "298.000",
  },
  {
    image: "images/explore.png",
    text1: "Ovlivion",
    text2: "298.000",
  },
  {
    image: "images/explore.png",
    text1: "Percel",
    text2: "298.000",
  },
  {
    image: "images/explore.png",
    text1: "Percel",
    text2: "298.000",
  },
  {
    image: "images/explore.png",
    text1: "Ovlivion",
    text2: "298.000",
  },
  {
    image: "images/explore.png",
    text1: "Ovlivion",
    text2: "298.000",
  },
];

export default function Institute({ open, setOpen }) {
  const classes = useStyles();
  const [number, setNumber] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <Box className={classes.mainSection}>
      <Container>
        <Grid container spacing={2}>
          {TeamMap &&
            TeamMap.map((data, i) => {
              return (
                <Grid item lg={4} md={4} sm={6} xs={12}>
                  <ExploreCards data={data} index={i} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </Box>
  );
}
