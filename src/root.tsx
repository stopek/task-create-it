import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider } from "react-redux";
import Router from "routing/router";
import { routes } from "routing/routes";
import store from "store";
import theme from "styles/theme";

const Root = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Router routes={routes} />
    </ThemeProvider>
  </Provider>
);

export default Root;