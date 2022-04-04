import { Provider } from "react-redux";
import store from "store";

import Router from "./routing/router";

const Root = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default Root;