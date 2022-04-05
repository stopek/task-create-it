import { RootState } from "../index";

export const getTopMovies = (state: RootState) => state.apple.top_movies;
export const getApiStatus = (state: RootState) => state.apple.state;