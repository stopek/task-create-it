import { Box } from "@mui/system";

import AdvancedSearch from "components/AdvancedSearch";
import MoviesListSimple from "components/MoviesListSimple";

import Error from "ui/Error";

import MovieOverlay from "overlays/MovieOverlay";

import { getTopMovies } from "store/selectors/apple";
import { getSearchParams } from "store/selectors/search";

import { useAppSelector } from "hooks/redux";
import { filteredMovies } from "utils/movies";

const MoviesContainer = () => {
  const fields = useAppSelector(getSearchParams);
  const movies = useAppSelector(getTopMovies);

  const filtered = filteredMovies(movies, fields);

  return (
    <MovieOverlay>
      <Box pb={4} component="div">
        <AdvancedSearch movies={movies} />
      </Box>

      {!filtered.length && (
        <Error
          message="PurPur cannot find any matching movie"
          description="Please be less precise"
          withoutReload
        />
      )}

      <MoviesListSimple movies={filtered} />
    </MovieOverlay>
  );
};

export default MoviesContainer;