import HomeContainer from "containers/HomeContainer";
import MoviesContainer from "containers/MoviesContainer";

import { paths } from "./paths";
import { TRouteItem } from "./types";

export const routes: TRouteItem[] = [
  { path: paths.HOMEPAGE, element: <HomeContainer /> },
  { path: paths.MOVIES, element: <MoviesContainer /> },
];