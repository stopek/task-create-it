import { createTheme } from "@mui/material";
import { deepPurple } from "@mui/material/colors";

import { primaryFont, secondaryFont } from "./configs";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0c0c0c",
    },
    primary: {
      main: deepPurple[500],
    },
    text: {
      primary: "#e7e7e7",
    },
  },
  typography: {
    fontFamily: primaryFont,
    h1: {
      fontFamily: secondaryFont,
      lineHeight: 1,
      margin: "0px",
      fontSize: "5rem",
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.3rem",
    },
  },
});

export default theme;