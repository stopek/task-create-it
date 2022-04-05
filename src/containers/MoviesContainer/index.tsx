import { useAppSelector } from "hooks/redux";
import MovieOverlay from "overlays/MovieOverlay";
import { getTopMovies } from "store/selectors/apple";
import { getSearchParams } from "store/selectors/search";
import { filteredMovies } from "utils/movies";

import MoviesListSimple from "components/MoviesListSimple";

import NotFound from "ui/NotFound";

const MoviesContainer = () => {
  const fields = useAppSelector(getSearchParams);
  const movies = useAppSelector(getTopMovies);
  const filtered = filteredMovies(movies, fields);

  return (
    <MovieOverlay>
      {!filtered.length && (
        <NotFound withoutBackButton />
      )}

      <MoviesListSimple movies={filtered} />
    </MovieOverlay>
  );
};

export default MoviesContainer;