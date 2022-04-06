import MovieOverlay from "overlays/MovieOverlay";

import MoviesListSimple from "components/MoviesListSimple";

import { getTopMovies } from "store/selectors/apple";
import { getFavourites } from "store/selectors/favourite";
import NotFound from "ui/NotFound";

import { useAppSelector } from "hooks/redux";
import { createMoviesFromIds } from "utils/movies";

const FavouritesContainer = () => {
  const movies = useAppSelector(getTopMovies);
  const ids = useAppSelector(getFavourites);

  const favouritesMovies = createMoviesFromIds(movies, ids);

  return (
    <MovieOverlay>
      {!ids.length && (
        <NotFound withoutBackButton />
      )}

      <MoviesListSimple movies={favouritesMovies} />
    </MovieOverlay>
  );
};

export default FavouritesContainer;