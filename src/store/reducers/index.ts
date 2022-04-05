import { combineReducers } from "redux";

import appleSlice from "./apple";
import searchSlice from "./search";

export default combineReducers({
  apple: appleSlice,
  search: searchSlice,
});
