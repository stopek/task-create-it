import { combineReducers } from "redux";

import appleSlice from "./apple";
import favouriteSlice from "./favourite";
import searchSlice from "./search";

export default combineReducers({
  apple: appleSlice,
  search: searchSlice,
  favourite: favouriteSlice,
});
