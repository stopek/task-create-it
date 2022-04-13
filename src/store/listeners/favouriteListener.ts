import FavouritesManager from "classes/FavouritesManager";

import store from "../index";
import { TMoviesIds } from "../reducers/favourite";
import { getFavourites } from "../selectors/favourite";

let currentData: TMoviesIds;
const favouriteListener = () => {
  const previousData: TMoviesIds = currentData;

  currentData = getFavourites(store.getState());

  if (previousData !== currentData) {
    FavouritesManager.save(currentData);
  }
};

export default favouriteListener;