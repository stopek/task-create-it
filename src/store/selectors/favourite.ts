import { RootState } from "../index";

export const getFavourites = (state: RootState) => state.favourite.movies;