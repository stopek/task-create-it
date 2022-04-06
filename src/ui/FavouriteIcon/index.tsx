import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { useAppDispatch, useAppSelector } from "hooks/redux";
import { MouseEvent } from "react";
import { addToFavourite, removeFromFavourite } from "store/reducers/favourite";
import { getTopMovies } from "store/selectors/apple";
import { getFavourites } from "store/selectors/favourite";
import { IMovie } from "types/apple";

interface IFavouriteIcon {
  id: string;
}

const existsInFavourites = (movies: IMovie[], id: string) => !!movies.find(movie => movie.id.attributes["im:id"] === id);

const createMoviesFromIds = (movies: IMovie[], ids: string[]): IMovie[] => {
  const response: IMovie[] = [];

  ids.forEach(id => {
    const found = movies.find(movie => movie.id.attributes["im:id"] === id);
    if (found) {
      response.push(found);
    }
  });

  return response;
}

const FavouriteIcon = ({ id }: IFavouriteIcon) => {
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
    >
      <FavoriteIcon color={exists ? "error" : "primary"} fontSize="large" />
    </IconButton>
  );
};

export default FavouriteIcon;