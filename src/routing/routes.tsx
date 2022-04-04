import HomeContainer from "containers/HomeContainer";

import { paths } from "./paths";
import { TRouteItem } from "./types";

export const routes: TRouteItem[] = [
  { path: paths.HOMEPAGE, element: <HomeContainer /> },
];