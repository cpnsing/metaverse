import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  InputBase,
  Button,
} from "@material-ui/core";
import Slider from "react-slick";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import BlogCard from "src/component/BlogCard";

const useStyles = makeStyles((theme) => ({
  headbox: {
    padding: "0px 0px 60px",
    position: "relative",
    zIndex: 1,
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      padding: "20px 0px 50px",
    },

    "& .blogbox": {
      marginTop: "158px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "10px",
      },
      "& h4": {
        color: theme.palette.text.dull,
        marginBottom: "10px",
      },
      "& h5": {
        color: theme.palette.text.dull,
        fontWeight: "300",
        marginTop: "12px",
        marginBottom: "20px",
        width: "100%",
        maxWidth: "427px",
        [theme.breakpoints.down("sm")]: {
          width: "100%",
          maxWidth: "100%",
        },
      },
      "& h1": {
        lineHeight: "66px",
        marginBottom: "15px",
        width: "100%",
        maxWidth: "458px",
        [theme.breakpoints.down("md")]: {
          width: "100%",
          maxWidth: "100%",
        },
      },
    },
    "& .textcontrol": {
      marginTop: "70px",
      marginBottom: "15px",
      [theme.breakpoints.down("sm")]: {
        marginTop: "30px",
      },
    },
  },
  textFild: {
    position: "relative",
    width: "100%",
    maxWidth: "390px",
    "& .MuiInputBase-root": {
      border: "0px solid transparent",
    },
    "& button": {
      position: "absolute",
      top: 0,
      right: 0,
      height: "100%",
      background:
        "linear-gradient(260.62deg, #7C162E -41.31%, #9C162E 107.21%)",
      boxShadow: "0px 0px 4px rgba(116, 22, 46, 0.4)",
      borderRadius: "6px",
      minWidth: "150px",
      fontSize: "16px",
      fontWeight: "300",
      color: "#fff",
      [theme.breakpoints.down("xs")]: {
        minWidth: "100px",
      },
    },
    iconhandle: {
      "& button": {
        "& a": {
          "& svg": {
            color: "#fff",
          },
        },
      },
    },
    "& .MuiInputBase-input": {
      padding: "13px 13px 13px",
      borderRadius: "8px",
      border: theme.palette.text.inputborder,
      background: theme.palette.background.blogbg,
      boxShadow: "0px 7px 12px rgba(0, 0, 0, 0.15)",
      backdropFilter: "blur(31.3725px)",
    },
  },
  inputfield: {
    "& .inputfield": {
      width: "100%",
      borderRadius: "10px",
      padding: "13px",
    },
    "& input": {
      color: "#fff !important",
      fontSize: "16px",
      fontWeight: "300",
    },
    "& .MuiInputBase-root": {
      background: "rgba(66, 66, 66, 0.2)",
    },
  },
}));

const blogCardData = [
  {
    img1: "/images/guide.png",
    text1:
      " Edverse Offers Impactful and Holistic Metaverse in Education Solutions.",
    text2:
      " The education sector has significantly changed between snails pace and horse galloping.",
  },
  {
    img1: "/images/guide.png",
    text1:
      " Edverse Offers Impactful and Holistic Metaverse in Education Solutions.",
    text2:
      " The education sector has significantly changed between snails pace and horse galloping.",
  },
  {
    img1: "/images/guide.png",
    text1:
      " Edverse Offers Impactful and Holistic Metaverse in Education Solutions.",
    text2:
      " The education sector has significantly changed between snails pace and horse galloping.",
  },
];
function OurBlogs() {
  const classes = useStyles();
  const settings = {
    dots: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    arrows: true,
    className: "recomended",
    autoplay: false,
    autoplaySpeed: 3000,
    // infinite: true,
    infinite: false,
    // prevArrow: <AiOutlineLeftSquare />,
    // nextArrow: <NavButton />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "20px",
          autoplay: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "20px",
          autoplay: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "20px",
          autoplay: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "20px",
          autoplay: false,
        },
      },

      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          centerPadding: "20px",
          autoplay: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <Container maxWidth="lg">
        <Box className={classes.headbox}>
          <Grid container spacing={2}>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Box className="blogbox">
                <Typography variant="h4">OUR BLOGS</Typography>
                <Typography variant="h1" color="primary">
                  The experts guide to Hexaverse
                </Typography>
                <Typography variant="h5">
                  The Promoters can build, rent, and sell learning spaces
                  education expanse of Edverse.
                </Typography>
              </Box>
              <Box className="blogborder"></Box>
              <Box className="textcontrol">
                <Typography variant="h6" color="primary">
                  Why are kids glued to games?
                </Typography>
              </Box>
              <Box className={classes.textFild}>
                <InputBase
                  className="inputfield"
                  id="outlined-basic"
                  fullWidth
                  variant="outlined"
                  placeholder="Enter your email address.."
                  name="email"
                  endAdornment={
                    <InputAdornment position="end">
                      <Button type="submit">Join now</Button>
                    </InputAdornment>
                  }
                />
              </Box>
            </Grid>
            <Grid item lg={7} md={7} sm={12} xs={12}>
              <Grid container spacing={2}>
                <Slider
                  {...settings}
                  style={{ width: "100%" }}
                  className="slickbottomslider"
                >
                  {blogCardData.map((data, i) => {
                    return (
                      <Grid item xs={12}>
                        <BlogCard data={data} index={i} />
                      </Grid>
                    );
                  })}
                </Slider>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default OurBlogs;
