import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import {Typography,Box} from "@material-ui/core";

import AddIcon from "@material-ui/icons/Add";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Accordion = withStyles((theme) => ({
  root: {
    marginBottom: "18px",
    background: theme.palette.background.faqbg,
    boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)",
    borderRadius: "8px",
    "&:not(:last-child)": {
      border: "1px solid #6D6D6D",
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.12)",
    },

    "&:before": {
      display: "none",
    },
    "&$expanded": {
      background: theme.palette.background.faqbg,
      border: "1px solid rgba(255, 255, 255, 0.25)",
      boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.25)",
      borderRadius: "8px",
      "&:last-child": {
        marginBottom: "18px",
      },
    },
  },
  expanded: {},
}))(MuiAccordion);

const AccordionSummary = withStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "36px",
    color: "#fff",
    padding: "0 20px",
    minHeight: 54,

    "&$expanded": {
      minHeight: 54,
      borderBottom: "0",
      color: "#fff",
      padding: "0 20px",
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
    "& h6": {
      fontWeight: "500",
      fontSize: "16px",
    },
  },
  expanded: {},
}))(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: "23px",
    color: theme.palette.text.dull,
    fontSize: "16px",
    fontWeight: "300",
    background: theme.palette.background.accDetail,
    borderRadius: "8px",
  },
}))(MuiAccordionDetails);
export default function FaqData({ data, index, type }) {
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div>
      <Accordion
        square
        defaultExpanded={index === 0 ? false : false}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant="h6" color="secondary">
            {data.head}
          </Typography>
        </AccordionSummary>
        <Box style={{ padding: "10px" }}>
          <AccordionDetails>
            <Typography style={{ fontSize: "16px", fontWeight: "300" }}>
              {data.summary}
            </Typography>
          </AccordionDetails>
        </Box>
      </Accordion>
    </div>
  );
}
