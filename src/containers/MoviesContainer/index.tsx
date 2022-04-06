import { Box } from "@mui/material";
import { useAppSelector } from "hooks/redux";
import MovieOverlay from "overlays/MovieOverlay";
import { getTopMovies } from "store/selectors/apple";
import { getSearchParams } from "store/selectors/search";
import { filteredMovies } from "utils/movies";

import AdvancedSearch from "components/AdvancedSearch";
import MoviesListSimple from "components/MoviesListSimple";

import NotFound from "ui/NotFound";

const MoviesContainer = () => {
  const fields = useAppSelector(getSearchParams);
  const movies = useAppSelector(getTopMovies);
  const filtered = filteredMovies(movies, fields);

  return (
    <MovieOverlay>
      <Box pb={4}>
        <AdvancedSearch movies={movies} />
      </Box>

      {!filtered.length && (
        <NotFound withoutBackButton />
      )}

      <MoviesListSimple movies={filtered} />
    </MovieOverlay>
  );
};

export default MoviesContainer;