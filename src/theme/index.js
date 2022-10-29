import _ from "lodash";
import { colors, createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import typography from "./typography";
import { softShadows, strongShadows } from "./shadows";

const baseOptions = {
  typography,
  overrides: {

    MuiTimelineConnector: {
      root: {
        width: "2px",
        flexGrow: "1",
        backgroundColor: "#bdbdbd",
        height: "65px",
        zIndex: "1",
      },
    },
    MuiTimeline: {
      root: {
        padding: "0px 0px",
      },
    },
    MuiFormLabel: {
      root: { color: "#222" },
      colorSecondary: {
        "&.Mui-focused": {
          color: "#222",
        },
      },
    },

    MuiButton: {
      contained: {
        background: "linear-gradient(260.62deg, #7C162E -41.31%, #9C162E 107.21%)",
        borderRadius: "50px",

      },
      containedPrimary: {
        color: "#fff",
      },
      containedSizeSmall: {
        fontSize: "11px",
      },
    },

    MuiBackdrop: {
      root: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
    },

    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: "0",
      },
    },


  },
};

const themesOptions = [
  {
    name: "LIGHT",
    overrides: {
      MuiFilledInput: {
        root: { backgroundColor: " #f8f7f7", color: "#000" },
      },
      MuiOutlinedInput: {
        input: {
          borderRadius: "10px",
          padding: "13.5px 12px",
          "&:-webkit-autofill": {
            "-webkit-background-clip": "text !important",
            // transitionDelay: "9999s",
            "caret-color": "transparent",
            "-webkit-box-shadow": "0 0 0 100px transparent inset",
            "-webkit-text-fill-color": "#000",
          },
          "&:-internal-autofill-selected": {
            color: "#fff",
          },
        },
      },
      MuiPaper: {
        elevation1: {
          padding: "10px",
          background: "#FFFFFF",
          border: "1.5px solid #FFFFFF",
          boxShadow: "0px 4px 20px rgba(20, 16, 27, 0.2)",
          borderRadius: "10.0968px",
        },
        elevation3: {
          background: "#fff",
          borderRadius: "8px",
          border: "1.5px solid rgba(0, 0, 0, 0.1)",
          boxShadow: "0px 7px 12px rgba(0, 0, 0, 0.15)",
        },
      },
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
    },
    palette: {
      type: "light",
      action: {
        active: colors.blueGrey[600],
      },
      background: {
        default: "#fff",
        blogbg: "rgba(247, 247, 247, 0.5)",
        faqbg: "rgba(247, 247, 247, 0.5)",
        accDetail: "rgba(0, 0, 0, 0.04)",
        listDot: "#7F43CE",
      },
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "rgba(0, 0, 0, 0.6)",
      },
      text: {
        primary: "#000",
        dull: "rgba(0, 0, 0, 0.6)",
        graypink: "#7F43CE",
      },
      economy: {
        bgeconomy: "rgba(247, 247, 247, 0.5)",
        bordereconomy: "1.5px solid rgba(0, 0, 0, 0.1)",
        boxShadoweconmy: "0px 7px 12px rgba(0, 0, 0, 0.15)",
        filtereconomy: "blur(31.3725px)",
      },
    },
    shadows: softShadows,
  },
  {
    name: "DARK",
    overrides: {
      MuiOutlinedInput: {
        input: {
          borderRadius: "10px",
          padding: "13.5px 12px",
          "&:-webkit-autofill": {
            "-webkit-background-clip": "text !important",
            // transitionDelay: "9999s",
            "caret-color": "transparent",
            "-webkit-box-shadow": "0 0 0 100px transparent inset",
            "-webkit-text-fill-color": "#fff",
          },
          "&:-internal-autofill-selected": {
            color: "#fff",
          },
        },
      },
      MuiPaper: {
        elevation1: {
          padding: "10px",
          background: "rgba(0, 0, 0, 0.1)",
          border: "1.5px solid #171515",
          boxShadow: "0px 4.03873px 20.1936px #14101B",
          borderRadius: "10.0968px",
        },
        elevation3: {
          background:
            "linear-gradient(90deg, rgba(81, 40, 135, 0.7) 0%, rgba(81, 40, 135, 0.2) 100%);",
          borderRadius: "8px",
          border: "none",
          boxShadow: "none",
        },
      },
    },
    typography: {
      fontFamily: "'Roboto', sans-serif",
    },
    palette: {
      type: "dark",

      background: {
        default: "#000",
        blogbg: "rgba(66, 66, 66, 0.2)",
        faqbg: "rgba(66, 66, 66, 0.2)",
        accDetail: "rgba(66, 66, 66, 0.2)",
        listDot: "rgba(217, 217, 217, 0.87)",
      },
      primary: {
        main: "#fff",
      },
      secondary: {
        main: "rgba(255, 255, 255, 0.87)",
      },

      white: {
        main: "#000",
        dullWhite: "#383636",
      },
      text: {
        primary: "#fff",
        dull: "rgba(255, 255, 255, 0.6)",
        graypink: "rgba(255, 255, 255, 0.6)",
      },
      economy: {
        bgeconomy: "rgba(56, 3, 39, 0.1)",
        bordereconomy: "1px solid #A92A48",
        boxShadoweconmy:
          "inset -10px -10px 12px rgba(169, 42, 72, 0.2), inset 10px 10px 12px rgba(156, 22, 46, 0.25)",
        filtereconomy: "blur(5px)",
      },
    },
    shadows: strongShadows,
  },
];

export const createTheme = (config = {}) => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme);

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createMuiTheme(
    _.merge({}, baseOptions, themeOptions, { direction: config.direction })
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
