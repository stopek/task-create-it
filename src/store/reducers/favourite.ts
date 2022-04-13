import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import FavouritesManager from "classes/FavouritesManager";

export type TMoviesIds = IFavouriteState["movies"];

export interface IFavouriteState {
  movies: string[];
}

const initialState: IFavouriteState = {
  movies: FavouritesManager.load(),
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFavourite: (state, action: PayloadAction<IFavouriteState["movies"]>) => {
      state.movies = [...state.movies, ...action.payload];
    },
    removeFromFavourite: (state, action: PayloadAction<string>) => {
      state.movies = [...state.movies].filter(movieId => movieId !== action.payload);
    },
  },
});

export const { addToFavourite, removeFromFavourite } = favouriteSlice.actions;

export {
  favouriteSlice,
};

export default favouriteSlice.reducer;
