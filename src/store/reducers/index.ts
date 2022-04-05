import { combineReducers } from "redux";

import appleSlice from "./apple";

export default combineReducers({
  apple: appleSlice,
});
