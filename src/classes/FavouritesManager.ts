import Cookies from "js-cookie";

import { TMoviesIds } from "store/reducers/favourite";

class FavouritesManager {
  private static cookieName = "favourites-list";
  private static separatorChar = ",";

  static checkList = (favouritesList: TMoviesIds) => favouritesList.filter(item => !!item);

  static save = (favouritesList: TMoviesIds) => {
    Cookies.set(this.cookieName, this.checkList(favouritesList).join(this.separatorChar));
  };

  static load = () => {
    const current = Cookies.get(this.cookieName);
    if (typeof current === "string") {
      return this.checkList(current.split(this.separatorChar));
    }

    return [];
  };
}

export default FavouritesManager;
