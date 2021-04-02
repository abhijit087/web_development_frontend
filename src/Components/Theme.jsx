import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core/styles";

const arcBlue = "rgb(97,67,133)";
const arcOrange = "#FC7307";
const arcGrey = "#868686";

export default createMuiTheme({
  palette: {
    common: {
      Blue: `${arcBlue}`,
      Orange: `${arcOrange}`,
    },
    primary: {
      main: `${arcBlue}`,
    },
    secondary: {
      main: `${arcOrange}`,
    },
  },
  typography: {
    tab: {
      fontWeight: 700,
      fontSize: "1rem",
      minWidth: 15,
      lineHeight: 1.5,
    },
    h2: {
      fontWeight: 700,
      fontSize: "3.5rem",
      color: `${arcBlue}`,
    },
    h4: {
      color: `${arcBlue}`,
      fontSize: "1.75rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: `${arcGrey}`,
    },
    estimate: {
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
  },
  button: {
    estimate: {
      textTransform: "none",
      fontWeight: "400",
      borderRadius: "50px",
      marginLeft: "50px",
      marginRight: "25px",
      color: "inherit",
    },
  },
});
