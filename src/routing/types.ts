import { ReactElement } from "react";
import { RouteProps } from "react-router-dom";

import { SvgIconTypeMap } from "@mui/material/SvgIcon/SvgIcon";

import { paths } from "./paths";

type TRoutePathsType = { path: paths | paths[] };
export type TRouteItem = RouteProps & TRoutePathsType;

export interface IMenuItem {
  path: paths;
  title: string;
  icon: ReactElement<SvgIconTypeMap, any>;
  noHome?: boolean;
}