import React from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import MarketplaceCard from "src/component/MarketplaceCard";

const TeamMap = [
  {
    image: "images/card1.png",
    text1: "Ovlivion",
    text2: "10/04/2022",
    text3: "Holographic Hands",
  },
  {
    image: "images/card2.png",
    text1: "Ovlivion",
    text2: "10/04/2022",
    text3: "Holographic Hands",
  },
  {
    image: "images/card3.png",
    text1: "Ovlivion",
    text2: "10/04/2022",
    text3: "Holographic Hands",
  },
  {
    image: "images/card1.png",
    text1: "Ovlivion",
    text2: "10/04/2022",
    text3: "Holographic Hands",
  },
  {
    image: "images/card4.png",
    text1: "Ovlivion",
    text2: "10/04/2022",
    text3: "Holographic Hands",
  },
  {
    image: "images/card1.png",
    text1: "Ovlivion",
    text2: "10/04/2022",
    text3: "Holographic Hands",
  },
];

const useStyles = makeStyles((theme) => ({
  bannerbox: {},
}));
function Onwned() {
  const classes = useStyles();
  return (
    <Box className={classes.bannerbox}>
      <Grid item lg={12} md={12} sm={12} xs={12}>
        <Box>
          <Grid container spacing={2}>
            {TeamMap.map((data, i) => {
              return (
                <Grid item lg={4} md={4} sm={12} xs={12}>
                  <MarketplaceCard data={data} index={i} />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Grid>
    </Box>
  );
}

export default Onwned;
