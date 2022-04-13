import { RootState } from "../index";
import { TMoviesIds } from "../reducers/favourite";

export const getFavourites = (state: RootState): TMoviesIds => state.favourite.movies;