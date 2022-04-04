import { Provider } from "react-redux";
import store from "store";

import Router from "./routing/router";
import { routes } from "./routing/routes";

const Root = () => (
  <Provider store={store}>
    <Router routes={routes} />
  </Provider>
);

export default Root;