import { RouteProps } from "react-router-dom";

import { paths } from "./paths";

type RoutePathsType = { path: paths | paths[] };
export type TRouteItem = RouteProps & RoutePathsType;