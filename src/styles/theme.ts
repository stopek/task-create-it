import { createTheme } from "@mui/material";
import { green, grey } from "@mui/material/colors";

import { primaryFont, secondaryFont } from "./configs";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: green[700],
    },
    secondary: {
      main: grey[600],
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
    subtitle2: {
      fontSize: "1rem",
      lineHeight: 2,
    },
  },
  components: {
    MuiGrid: {
      defaultProps: {
        padding: 0,
      },
    },
  },
});

export default theme;