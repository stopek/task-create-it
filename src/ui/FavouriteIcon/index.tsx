import { MouseEvent } from "react";

import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { IconButtonProps } from "@mui/material/IconButton/IconButton";

import { addToFavourite, removeFromFavourite } from "store/reducers/favourite";
import { getTopMovies } from "store/selectors/apple";
import { getFavourites } from "store/selectors/favourite";

import { useAppDispatch, useAppSelector } from "hooks/redux";
import { createMoviesFromIds, existsInFavourites } from "utils/movies";

interface IFavouriteIcon extends IconButtonProps {
  id: string;
}

const FavouriteIcon = ({ id, ...rest }: IFavouriteIcon) => {
  const dispatch = useAppDispatch();

  const ids = useAppSelector(getFavourites);
  const movies = useAppSelector(getTopMovies);

  const exists = existsInFavourites(createMoviesFromIds(movies, ids), id);

  const handleLikeClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();

    if (!exists) {
      dispatch<any>(addToFavourite([id]));
      return;
    }

    dispatch<any>(removeFromFavourite(id));
  };

  return (
    <IconButton
      size="large"
      aria-label="search"
      color="inherit"
      onClick={handleLikeClick}
      {...rest}
    >
      <FavoriteIcon color={exists ? "primary" : "action"} fontSize="medium" />
    </IconButton>
  );
};

export default FavouriteIcon;