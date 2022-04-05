import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import InstagramIcon from '@mui/icons-material/Instagram';
import MovieFilterRoundedIcon from "@mui/icons-material/MovieFilterRounded";

import { IShareItem } from "ui/Share";

import { paths } from "./paths";
import { IMenuItem } from "./types";

const menuItems: IMenuItem[] = [
  {
    icon: <HomeRoundedIcon />,
    path: paths.HOMEPAGE,
    title: "Home",
    noHome: true,
  },
  {
    icon: <MovieFilterRoundedIcon />,
    path: paths.MOVIES,
    title: "Movies",
  },
];

const shareItems: IShareItem[] = [
  {
    icon: <InstagramIcon />,
    url: "https://www.instagram.com/purpur.thecat"
  }
]

export {
  menuItems,
  shareItems,
};