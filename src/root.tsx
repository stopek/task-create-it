import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "store";

import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";

import "store/listeners";

import Router from "routing/components/Router";
import { routes } from "routing/routes";
import theme from "styles/theme";

const Root = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Router routes={routes} />
        </ThemeProvider>
      </StyledEngineProvider>
    </PersistGate>
  </Provider>
);

export default Root;