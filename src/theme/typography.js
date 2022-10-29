import shadows from "@material-ui/core/styles/shadows";

export default {
  h1: {
    fontSize: 50,
    fontWeight: 500,
    "@media(max-width:959px)": {
      fontSize: "40px ",
      lineHeight: "51px !important",
    },
    "@media(max-width:599px)": {
      fontSize: "30px",
      lineHeight: "41px !important",
    },
  },
  h2: {
    fontWeight: 400,
    fontSize: 35,
    "@media(max-width:1024px)": {
      fontSize: "27px !important",
    },
    "@media(max-width:767px)": {
      fontSize: "23px !important",
    },
  },
  h3: {
    fontSize: 29,
    fontWeight: 400,
    "@media(max-width:605px)": {
      fontSize: "23px",
    },
  },
  h4: {
    fontSize: 22,
    fontWeight: 400,
    "@media(max-width:605px)": {
      fontSize: "18px",
    },
  },
  h5: {
    fontSize: 18,
    fontWeight: 400,
    "@media(max-width:605px)": {
      fontSize: "15px",
    },
  },
  h6: {
    fontSize: 16,
    fontWeight: "300",
    lineHeight: "23px",
    "@media(max-width:605px)": {
      fontSize: "14px",
    },
  },

  body1: {
    fontSize: "12px",
    fontWeight: "300",
    lineHeight: "23px",
    "@media(max-width:605px)": {
      fontSize: "10px !important",
      lineHeight: "15px",
    },
  },
  body2: {
    fontSize: "14px",
    lineHeight: "23px",
    fontWeight: "300",
    "@media(max-width:605px)": {
      fontSize: "12px !important",
      lineHeight: "18px !important",
    },
  },

  overline: {
    fontWeight: 500,
  },
  button: {
    textTransform: "capitalize",
    borderRadius: 27,
    fontFamily: "'Montserrat', sans-serif",
  },
};
