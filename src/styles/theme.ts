import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";

import { primaryFont, secondaryFont } from "./configs";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: green[700],
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
  components: {
    MuiGrid: {
      defaultProps: {
        padding: 0,
      },
    },
  },
});

export default theme;