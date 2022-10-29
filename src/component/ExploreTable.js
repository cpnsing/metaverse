import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  IconButton,
  Typography,
  makeStyles,
  withStyles,
  TextField,
  Select,
  ThemeProvider,
  OutlinedInput,
  FormControl,
  InputAdornment,
  TableHead,
  TableRow,
  Table,
  TableBody,
  TableCell,
  Button,
  Avatar,
  Tooltip,
} from "@material-ui/core";
// import { theme } from "src/theme/Theme";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import Pagination from "@material-ui/lab/Pagination";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { useHistory } from "react-router-dom";

const options = ["VIEW"];
const options1 = ["EDIT"];
const options2 = ["DELETE"];

const StyledTableCell = withStyles((theme) => ({
  body: {
    fontSize: 14,
    fontFamily: "arial",
    // padding: "6px 16px !important",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    marginTop: "3px",
    height: "30px",
    color: "#B1B1B1 !important",
    background:
      " linear-gradient(90deg, rgba(81, 40, 135, 0.7) 0%, rgba(81, 40, 135, 0.2) 100%)",
    borderRadius: "6px",
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  mainContentBox: {
    // background: "rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    "& .textField": {
      width: "100%",
    },
    "& .btn": {
      background: "rgba(255, 255, 255, 0.1)",
      textAlign: "center",
      padding: "6px",
      borderRadius: "8px",
      height: "36px",
      minWidth: "30px",
      cursor: "pointer",
      "& p": {
        color: "#fff",
        opacity: "0.5",
        fontSize: "9px",
        lineHeight: "0px",
      },
    },
  },
  paper: {
    border: "none",

    overflowX: "auto",
    overflowY: "hidden",
    overflow: "scroll",
  },
  table: {
    minWidth: 950,
    background: "transparent",
    "& .tableHeadRow": {
      background:
        " linear-gradient(260.62deg, #7C162E -41.31%, #9C162E 107.21%)",
      borderRadius: "6px",
    },
  },
  iconhover: {
    color: "#000",
  },
  hoverSection: {
    marginTop: "5px !important",
    "& .hoverColor": {
      color: "#B1B1B1 !important",
    },
    "&:hover": {
      background:
        " linear-gradient(90deg, rgba(81, 40, 135, 0.7) 0%, rgba(81, 40, 135, 0.2) 100%) !important",
    },
  },
  filterIcons: {
    color: "#fff",
  },
  filterBtn: {
    background: "#422966",
    borderRadius: "8px",
  },
  first: {
    borderRadius: "4px 0px 0px 4px",
  },
  last: {
    borderRadius: "0px 4px 4px 0px",
  },
}));

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #cd7192",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    color: theme.palette.common.white,
    "&:focus": {
      color: theme.palette.common.white,
      backgroundColor: "#c285c9",
    },
    "&:hover": {
      backgroundColor: "#c285c9",
    },
  },
}))(MenuItem);

function ExploreTable() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();
  const [recentCol, setRecentCol] = React.useState(null);
  const [selectRankingDays, setSelectRankingDays] = useState();
  const [dataToPost, setDataToPost] = useState([]);
  console.log("dataToPost---", dataToPost);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const exploreList = [
    {
      id: "",
    },
    {
      id: "",
    },
    {
      id: "",
    },
    {
      id: "",
    },
  ];

  return (
    <Box className={classes.root}>
      <Box className={classes.paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow className="tableHeadRow">
              <StyledTableCell align="left" className={classes.first}>
                SR NO.
              </StyledTableCell>
              <StyledTableCell align="left">TITTLE</StyledTableCell>
              <StyledTableCell align="left">DESCRIPTION</StyledTableCell>
              <StyledTableCell align="left">THUMBNAIL</StyledTableCell>
              <StyledTableCell align="left">DATE</StyledTableCell>
              <StyledTableCell align="left">BY EDITOR</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exploreList.map((row, index) => (
              <StyledTableRow className={classes.hoverSection}>
                <StyledTableCell align="left" className="hoverColor">
                  <span> {index + 1}</span>
                </StyledTableCell>
                <StyledTableCell align="left" className="hoverColor">
                  <Box display="flex">
                    <span>MainTittle</span>
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="left" className="hoverColor">
                  <span> lorems main sub File head blue ... </span>
                </StyledTableCell>

                <StyledTableCell align="left" className="hoverColor">
                  <Avatar variant="rounded"></Avatar>
                </StyledTableCell>
                <StyledTableCell align="left" className="hoverColor">
                  <span>22/9/2022</span>
                </StyledTableCell>
                <StyledTableCell align="left" className="hoverColor">
                  RohitKumar
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}

export default ExploreTable;
