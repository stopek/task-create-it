import { Typography } from "@mui/material";

import MoviesListSimple from "components/MoviesListSimple";

import Error from "ui/Error";

import MovieOverlay from "overlays/MovieOverlay";

import { getTopMovies } from "store/selectors/apple";
import { getFavourites } from "store/selectors/favourite";

import { useAppSelector } from "hooks/redux";
import { createMoviesFromIds } from "utils/movies";

const FavouritesContainer = () => {
  const movies = useAppSelector(getTopMovies);
  const ids = useAppSelector(getFavourites);

  const favouritesMovies = createMoviesFromIds(movies, ids);

  return (
    <MovieOverlay>
      {!ids.length && (
        <Error
          description="Add some movie to your favourites list"
          message="PurPur likes you but you don't like our movies?"
          withoutReload
        />
      )}

      {ids.length && (
        <>
          <Typography variant="h5" component="h1" mb={2} mt={1}>
            Your favourites movies
          </Typography>
          <MoviesListSimple movies={favouritesMovies} />
        </>
      )}
    </MovieOverlay>
  );
};

export default FavouritesContainer;