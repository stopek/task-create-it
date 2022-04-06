import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IFavouriteState {
  movies: string[];
}

const initialState: IFavouriteState = {
  movies: [],
};

const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addToFavourite: (state, action: PayloadAction<IFavouriteState["movies"]>) => {
      state.movies = [...state.movies, ...action.payload];
    },
    removeFromFavourite: (state, action: PayloadAction<string>) => {
      const newMovies = state.movies.filter(movieId => movieId !== action.payload);
      state.movies = [...newMovies];
    },
  },
});

export const { addToFavourite, removeFromFavourite } = favouriteSlice.actions;

export {
  favouriteSlice,
};

export default favouriteSlice.reducer;
