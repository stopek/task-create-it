import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import servicesApple from "services/apple";

import { IMovie } from "types/apple";

import { ILoadingState } from "./types";
import { handleRejectValues, setStateMatchers } from "./utils";

interface ITopMoviesState extends ILoadingState {
  top_movies: IMovie[];
}

const topMovies = handleRejectValues("apple/top_movies", servicesApple.getTopMovies);

const initialState: ITopMoviesState = {
  top_movies: [],

  state: {
    loading: true,
    error: false,
    crash: false,
  },
};

const appleSlice = createSlice({
  name: "apple",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(topMovies.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
        state.top_movies = action.payload;
      });

    setStateMatchers(builder);
  },
});

export {
  topMovies,
  appleSlice,
};

export default appleSlice.reducer;
