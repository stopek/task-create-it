import HomeContainer from "containers/HomeContainer";
import MovieContainer from "containers/MovieContainer";
import MoviesContainer from "containers/MoviesContainer";
import SearchContainer from "containers/SearchContainer";

import { paths } from "./paths";
import { TRouteItem } from "./types";

export const routes: TRouteItem[] = [
  { path: paths.HOMEPAGE, element: <HomeContainer /> },
  { path: paths.MOVIES, element: <MoviesContainer /> },
  { path: paths.MOVIE, element: <MovieContainer /> },
  { path: paths.SEARCH, element: <SearchContainer /> }
];