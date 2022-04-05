import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { handleRejectValues } from "routing/utils";
import servicesApple from "services/api/apple";
import { IMovie } from "types/apple";

interface ITopMoviesState {
  top_movies: IMovie[];
}

export const topMovies = handleRejectValues("apple/top_movies", servicesApple.getTopMovies);

const initialState: ITopMoviesState = {
  top_movies: [],
};

export const appleSlice = createSlice({
  name: "apple",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(topMovies.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
        state.top_movies = action.payload;
      });
  },
});

export default appleSlice.reducer;
